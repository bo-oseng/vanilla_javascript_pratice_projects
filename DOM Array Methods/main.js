const main = document.getElementById('main');
const addUserBtn = document.getElementById('add_user');
const doubleBtn = document.getElementById('double');
const sortBtn = document.getElementById('sort');
const showMillionairesBtn = document.getElementById('show_millionaires');
const calculateWealthBtn = document.getElementById('calculate_wealth');

let userData = [];

// Fetch random user and add money
const getRandomUser = async () => {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  addData(newUser);
};

getRandomUser();
getRandomUser();
getRandomUser();

// Double eveveryones money
const doubleMoney = () => {
  console.log('1');
  userData = userData.map((user) => {
    return { ...user, money: user.money * 2 };
  });

  updateDOM();
};

//Show millionaires
const showMillionaires = () => {
  userData = userData.filter((user) => user.money >= 1000000);
  updateDOM();
};

// Sort by richest
const sortByRichest = () => {
  userData.sort((userA, userB) => userB.money - userA.money);

  updateDOM();
};

// Calculate Wealth
const calculateWealth = () => {
  const totalWealth = userData.reduce((acc, user) => (acc += user.money), 0);

  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    totalWealth
  )}</strong></h3>`;
  main.appendChild(wealthEl);
};

// Add new obj to data arr
const addData = (obj) => {
  userData.push(obj);
  updateDOM();
};

// Update DOM
const updateDOM = (providedData = userData) => {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach((item) => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong>${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
};

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
function formatMoney(number) {
  return '$ ' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//Event listners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
showMillionairesBtn.addEventListener('click', showMillionaires);
sortBtn.addEventListener('click', sortByRichest);
calculateWealthBtn.addEventListener('click', calculateWealth);
