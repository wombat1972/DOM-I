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
logo.setAttribute('src', siteContent["nav"]["img-src"]);



const headerNav = document.querySelectorAll("a");
let headerNav2 = Array.from(headerNav);

headerNav2.map((item,index) =>{
  item.textContent = Object.values(siteContent.nav)[index]
});

let navAdd = document.querySelector('nav');

let new1 = document.createElement('a');
new1.textContent = 'Me Too';
navAdd.appendChild(new1);

let newNavItem2 = document.createElement('a');
newNavItem2.textContent = 'Im New';
navAdd.prepend(newNavItem2);

const  headerNavigation = document.querySelectorAll("nav a");
headerNavigation.forEach((item) => {
   item.style.color = 'green'; 
});

let headImg = document.getElementById('cta-img');
headImg.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaHeader = document.querySelector('h1');
ctaHeader.innerHTML = siteContent['cta']['h1'].split(' ').join(`<br>`)

let ctaBtn = document.querySelector('button');
ctaBtn.innerHTML = siteContent['cta']['button'];

let ctaBtnT = document.querySelector('.cta-text')
ctaBtnT.style.letterSpacing = 0;

ctaBtn.addEventListener('mouseover', (event) => {
  ctaHeader.innerHTML = 'Lets Do This'
})


let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let mainH4 = document.querySelectorAll('.main-content .text-content h4');
mainH4[0].textContent = siteContent['main-content']['features-h4'];
mainH4[1].textContent = siteContent['main-content']['about-h4'];
mainH4[2].textContent = siteContent['main-content']['services-h4'];
mainH4[3].textContent = siteContent['main-content']['product-h4'];
mainH4[4].textContent = siteContent['main-content']['vision-h4'];

let mainParagraphs = document.querySelectorAll('.main-content .text-content p');
mainParagraphs[0].textContent = siteContent['main-content']['features-content'];
mainParagraphs[1].textContent = siteContent['main-content']['about-content'];
mainParagraphs[2].textContent = siteContent['main-content']['services-content'];
mainParagraphs[3].textContent = siteContent['main-content']['product-content'];
mainParagraphs[4].textContent = siteContent['main-content']['vision-content'];

let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4']

let contactP = document.querySelectorAll('.contact p');
contactP[0].innerHTML = siteContent['contact']['address'].split('Street ').join(`Street <br>`)
contactP[1].innerHTML = siteContent['contact']['phone']
contactP[2].innerHTML = siteContent['contact']['email']

let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright']