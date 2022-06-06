const pop = document.getElementById('pop');
const banner = document.getElementById('banner');
const native = document.getElementById('native');
const skim = document.getElementById('skim');

const title = document.getElementById('section3-Title');
const content = document.getElementById('section3-Content');

const popTitle = 'POP-UNDER';
const popContent = 'This is one of the most popular ads. After users click, this ad opens landing page in behind. So, the user experience is not hampered much.'

const bannerTitle = 'BANNER AD';
const bannerContent = 'Choose between the available banner formats. Highly effective ad for visibility.';

const nativeTitle = 'NATIVE';
const nativeContent = 'Ad format with the image and the title, that perfectly fits into the content of the site. Native ads are placed in the most visible areas of the page and, thus, this format shows good results and the level of interaction.';

const skimTitle = 'SKIM';
const skimContent = 'SKIM" is a link that a publisher inserts on a specific site element, and after clicking on it, an advertisement appears to the user. SKIM gives 100% control of your sold traffic amount, higher CR to advertisers and CPM rates to publishers.';

const img = document.getElementById('section-4-img');


const reset = () => {
    pop.style.background = "gray";
    pop.style.color = 'black';
    banner.style.background = "gray";
    banner.style.color = 'black';
    native.style.background = "gray";
    native.style.color = 'black';
    skim.style.background = "gray";
    skim.style.color = 'black';
}

const popbtn = () => {
    reset()
    pop.style.background = "#FF6F00";
    pop.style.color = 'white';
    title.innerText = popTitle;
    content.innerText = bannerContent;
    img.src = "img/default-no-img.jpg";
}

const bannerbtn = () => {
    reset()
    banner.style.background = "#FF6F00";
    banner.style.color = 'white';
    title.innerText = bannerTitle;
    content.innerText = bannerContent;
    img.src = "img/no-default-thumbnail-1.png";
}

const nativebtn = () => {
    reset()
    native.style.background = "#FF6F00";
    native.style.color = 'white';
    title.innerText = nativeTitle;
    content.innerText = nativeContent;
    img.src = "img/default-image.png";
}


const skimbtn = () => {
    reset()
    skim.style.background = "#FF6F00";
    skim.style.color = 'white';
    title.innerText = skimTitle;
    content.innerText = skimContent;
    img.src = "img/images.png";
}


