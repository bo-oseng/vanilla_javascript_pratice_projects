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
      <button class="btn" data-artist='${song.title}'>Get Lyrics</button>
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
  console.log(url);
  const res = await fetch('https://cors-anywhere.herokuapp.com/' + `${url}`);
  const data = await res.json();

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
