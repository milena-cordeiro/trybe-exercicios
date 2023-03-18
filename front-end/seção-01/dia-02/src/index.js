import Swal from 'sweetalert2'
import './style.css';

const imgHero = document.querySelector('#heroImg')
const heroName = document.querySelector('.heroName');
const tokenAccess = '6223268867733506'
const btn = document.querySelector('button');
let BASE_URL = `https://www.superheroapi.com/api.php/${tokenAccess}`;

btn.addEventListener('click', () => {
  const randomId = Math.round(Math.random() * 1000);
  const id = randomId;
  fetch(`${BASE_URL}/${id}`).then((res) => res.json()).then((data) => {
    const { name , image } = data;
    imgHero.src = image.url;
    heroName.innerHTML = name;
  }).catch((e) => {
    Swal.fire({
      title: 'Hero not found',
      text: e.message,
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  })
});