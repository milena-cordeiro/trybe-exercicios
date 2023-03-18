import Swal from 'sweetalert2'

const img = document.querySelector('#heroImg')
const heroName = document.querySelector('heroName');
const tokenAccess = '6223268867733506'
const btn = document.querySelector('button');
let BASE_URL = `https://www.superheroapi.com/api/${tokenAccess}`;

btn.addEventListener('click', () => {
  const randomId = Math.round(Math.random() * 1000);
  const id = randomId;
  fetch(BASE_URL).then((res) => console.log(res))
});