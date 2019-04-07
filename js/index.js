const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelector('nav')
let navItems = nav.querySelectorAll('a')
for(var i = 0; i<navItems.length; i++){
      navItems[i].textContent = siteContent.nav[`nav-item-${[i+1]}`]
      navItems[i].style.color = 'green'; // make the links green
}

// adding anchor elements
let compNews = document.createElement('a')
compNews.textContent = 'Company News';
compNews.style.color = 'green';
nav.append(compNews);
 
let subscribe = document.createElement('a')
subscribe.textContent = 'Subscribe';
subscribe.style.color = 'green';
nav.prepend(subscribe)
// end adding anchor elements

document.querySelector('#cta-img').src = siteContent.cta["img-src"]

let cta = document.querySelector('.cta-text')
let ctaEle = cta.children; // children will give you a HTML COLLECTION
cta.firstElementChild.textContent = siteContent.cta.h1;  // you can set the h1 like this, but the bottom is easier and a little clearer
ctaEle[1].textContent = siteContent.cta.button;


let mc = document.querySelectorAll('.text-content')
let mcChildren1 = mc[0].children
mcChildren1[0].textContent = siteContent['main-content']['features-h4'];
mcChildren1[1].textContent = siteContent['main-content']['features-content'];

let mcChildren2 = mc[1].children;
mcChildren2[0].textContent = siteContent["main-content"]["about-h4"];
mcChildren2[1].textContent = siteContent["main-content"]["about-content"];

let middleImgBanner = document.querySelector('#middle-img');
middleImgBanner.src = siteContent["main-content"]["middle-img-src"];


let mcChildren3 = mc[2].children;
mcChildren3[0].textContent = siteContent["main-content"]["services-h4"];
mcChildren3[1].textContent = siteContent["main-content"]["services-content"];

mcChildren4 = mc[3].children;
mcChildren4[0].textContent = siteContent["main-content"]["product-h4"];
mcChildren4[1].textContent = siteContent["main-content"]["product-content"];

let mcChildren5 = mc[4].children;
mcChildren5[0].textContent = siteContent["main-content"]["vision-h4"];
mcChildren5[1].textContent = siteContent["main-content"]["vision-content"];

let contact = document.querySelector('.contact').children
let contactVal = Object.values(siteContent.contact)

for(let i=0; i<contact.length; i++){
    for(let j=0; j<contactVal.length; j++){
          contact[i].textContent = contactVal[i]
    }
}

const footer = document.querySelector('footer');
footer.textContent = siteContent.footer.copyright;


