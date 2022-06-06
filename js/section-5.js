const images = [
    'img/people1.png',
    'img/people2.png',
    'img/people3.png',
];

const Title = [
    'Title 1',
    'Title 2',
    'Title 3'
];

const Context = [
    'Hello, Here will be a text',
    'Hello, Here will be 2nd text',
    'Hello, Here will be 3rd text'
];


let imgIndex = 0;
const imgElement = document.getElementById('section-5-img');
const titleElement = document.getElementById('section-5-title');
const contextElement = document.getElementById('section-5-context');

const leftbtn = () => {
    imgIndex = imgIndex - 2;
    if (imgIndex < 0) {
        imgIndex = images.length - 1;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl);
    titleElement.innerText = Title[imgIndex];
    contextElement.innerText = Context[imgIndex];
};

setInterval(() => {
    // console.log(imgIndex);
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl);
    titleElement.innerText = Title[imgIndex];
    contextElement.innerText = Context[imgIndex];
    imgIndex = (imgIndex + 1) % images.length;

}, 1000);

