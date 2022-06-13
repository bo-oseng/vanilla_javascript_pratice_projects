const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const APIURL = 'https://api.lyrics.ovh';

// Show song and artist in DOM
const showData = (data) => {
  //   let output = '';

  //   data.data.forEach((song) => {
  //     output += `
  //         <li>
  //           <span><strong>${song.artist.name}</strong> - ${song.title}</span>
  //           <button class="btn" data-artist='${song.title}'>Get Lyrics</button>
  //         </li>
  //         `;
  //   });

  //   result.innerHTML = `
  //   <ul class="songs">
  //     ${output}
  //   </ul>
  //   `;

  result.innerHTML = `
  <ul class="songs">
    ${data.data
      .map(
        (song) => `
    <li>
      <span><strong>${song.artist.name}</strong> - ${song.title}</span>
      <button class="btn" data-artist='${song.artist.name}' data-songtitle='${song.title}'>Get Lyrics</button>
    </li>
    `
      )
      .join('')}
  </ul>
  `;

  if (data.prev || data.next) {
    more.innerHTML = `
      ${
        data.prev
          ? `<button class="btn" onclick="getMoreSongs('${data.prev}')">Prev</button>`
          : ''
      }
      ${
        data.next
          ? `<button class="btn" onclick="getMoreSongs('${data.next}')">Next</button>`
          : ''
      }
      `;
  } else {
    more.innerHTML = '';
  }
};

// getMoreSongs
const getMoreSongs = async (url) => {
  // const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
  //  기존에 썼던 데모버전 proxy에서 내가 관리하는 프록시로 개선
  const res = await fetch(`https://bo-oseng-cors-proxy.herokuapp.com/${url}`);
  const data = await res.json();
  console.log(data)

  showData(data);
};

// Search by song or artist
const searchSongs = async (term) => {
  const res = await fetch(`${APIURL}/suggest/${term}`);
  const data = await res.json();
  showData(data);
};

// Event listenes
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value.trim();

  if (!searchTerm) {
    alert('Please type in a search term');
  } else {
    searchSongs(searchTerm);
  }
});

// Get lyrics for song {
const getLyrics = async (artist, songTitle) => {
  const res = await fetch(`${APIURL}/v1/${artist}/${songTitle}`);
  console.log(res)
  const data = await res.json();
  console.log(data)

  const lyrics = data?.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

  console.log(lyrics);
  result.innerHTML = `
  <h2>
    <strong>${artist}</strong> - ${songTitle}
  </h2>
  <span>${lyrics}</span>
  `;
};

// Get lyrics button click
result.addEventListener('click', (e) => {
  const clickedEl = e.target;

  if (clickedEl.tagName === 'BUTTON') {
    const artist = clickedEl.getAttribute('data-artist');
    const songTitle = clickedEl.getAttribute('data-songtitle');

    getLyrics(artist, songTitle);
  }
});
