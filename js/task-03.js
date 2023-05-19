const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listEl = document.querySelector(".gallery");


const makeItemEl = ({ url, alt }) => 
  `<li class="item">
    <img class="image" src="${url}" alt="${alt}" width = 300px height = auto;>
  </li>`;
const imageList = images.map((el) => makeItemEl(el));

listEl.insertAdjacentHTML("afterbegin", imageList.join(''));
console.log(imageList);
console.log(listEl);
listEl.style.display = "flex";
listEl.style.flexDirection = "column";
listEl.style.gap = "20px";
