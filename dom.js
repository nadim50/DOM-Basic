
const sections = document.querySelectorAll('section');

for (const section of sections) {
    section.style.fontSize = '15px';
    section.style.backgroundColor = 'lightgreen';
    section.style.color = 'red';
    section.style.border = 'solid tomato 5px';
    section.style.margin = '13px';
    section.style.borderRadius = '35px';
    section.style.padding = '5px';

}

const place = document.getElementById('places-container');
place.style.backgroundColor = 'navy';

const fruits = document.getElementById('fruit-container');
fruits.style.backgroundColor = 'brown';

