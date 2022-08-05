import './assets/css/style.scss';
import items from 'data/items.json';

items.map((item:any) => console.log(item.a));
const url = document.URL;

const myDiv = document.getElementsByClassName('mydiv')[0];
console.log(myDiv.classList.contains('mydiv'));
console.log([...myDiv.children]);
console.log(url);

function fetchData(url:any) {
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

let data:any = await fetchData('https://jsonplaceholder.typicode.com/todos/');
console.log(data, 'data part');

data.map((item:any, i:number) => {
  if(i<10) {
    var mainBody = document.getElementsByTagName('main')[0];
    var myP = document.createElement('p');
    myP.innerText = item.title;
    mainBody.append(myP);
  }
});