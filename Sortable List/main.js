const draggableList = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slime Helu',
  'Amanio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry page',
];

// Store listitems
const listItems = [];

let dragStartIndex;

// Drag functions
const dragStart = () => {
  console.log(this);
  dragStartIndex = +this.closest('li').getAttribute('data-index');
  console.log(dragStartIndex);
};
const dragOver = () => {};
const dragDrop = () => {};
const dragEnter = () => {
  this.classList.add('over');
};
const dragLeave = () => {
  this.classList.remove('over');
};

const addEventListeners = () => {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
};

// Insert list items into Dom
const createList = () => {
  [...richestPeople]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
        <span class='number'>${index + 1}</span>
        <div class='draggable' draggable='true'>
          <p class='person-name'>${person}</p>
          <i class='fas fa-grip-lines'></i>
        </div>
        `;

      listItems.push(listItem);

      draggableList.appendChild(listItem);
    });

  addEventListeners();
};

createList();
