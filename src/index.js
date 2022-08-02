import './assets/css/style.scss';
import items from 'data/items.json';

items.map((item) => console.log(item.a));
const url = document.URL;

const myDiv = document.getElementsByClassName('mydiv')[0];
console.log(myDiv.classList.contains('mydiv'));
console.log([...myDiv.children]);
console.log(url);

function fetchData(url) {
  return new Promise(function (resolve, reject) {
    try {
      (async function () {
        const abc = await fetch(url);
        resolve(abc.json());
      })();
    } catch (e) {
      reject(e);
    }
  });
}

console.log(await fetchData('https://jsonplaceholder.typicode.com/todos/'));

let data = await fetchData('https://jsonplaceholder.typicode.com/todos/');
console.log(data, 'data part');

data.map((item) => {
  var myP = document.createElement('p');
  myP.innerText = item.title;
  myDiv.append(myP);
});
