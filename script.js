console.log('prova');

const app = new Vue({
    el: '#app',
    data: {
        sliderItems:[
            {
                title: 'Svezia',
                img: 'img/01.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'  
            },
            {
                title: 'Svizzera',
                img: 'img/02.jpg',
                text: 'Lorem ipsum'
            },
            {
                title: 'Gran Bretagna',
                img: 'img/03.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                title: 'Germania',
                img: 'img/04.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },
            {
                title: 'Paradise',
                img: 'img/05.jpg',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            }
        ],
        selected: 4,
    }
})

const img_full = document.querySelector('.img_full');
const img_small = document.querySelector('.img_small');

img_full.innerHTML = `img src="${sliderItems[selected].img}">`;

const scrollWrapper = [...document.getElementsByClassName('scrolling-image')];
scrollWrapper[selected].classList.add('active');

const description = document.querySelector('.description');

let imgTitle = sliderItems[selected].title;
let imgDescription = sliderItems[selected].text;

imgDescription.innerHTML =
    `
    <h2>${imgTitle}</h2> 
    <p>${imgDescription}</p>
    `;