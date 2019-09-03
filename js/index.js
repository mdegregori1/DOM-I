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
// Remaining Images
let codeImage = document.getElementById("cta-img");
codeImage.setAttribute('src', siteContent["cta"]["img-src"])

let mainImage = document.getElementById("middle-img");
mainImage.setAttribute("src", siteContent["main-content"]["middle-img-src"])

// button

let mainButton = document.querySelector(".cta-text button");
mainButton.textContent = "Get Started";

// Main 'Dom' Text

const mainDom = document.querySelector('h1');
mainDom.textContent = "DOM Is Awesome";	    

//Navigation Bar 
const navBar = document.querySelectorAll('a');
for (let i = 0; i < navBar.length; i++) {
navBar[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}

// Main Text Headers
const mainHeaders = document.querySelectorAll(".main-content h4");
mainHeaders[0].textContent = siteContent["main-content"]["features-h4"]
mainHeaders[1].textContent = siteContent["main-content"]["about-h4"]
mainHeaders[2].textContent = siteContent["main-content"]["services-h4"]
mainHeaders[3].textContent = siteContent["main-content"]["product-h4"]
mainHeaders[4].textContent = siteContent["main-content"]["vision-h4"]

// Main Text Content 
const mainContent = document.querySelectorAll(".main-content p");
mainContent[0].textContent = siteContent["main-content"]["features-content"];
mainContent[1].textContent = siteContent["main-content"]["about-content"];
mainContent[2].textContent = siteContent["main-content"]["services-content"];
mainContent[3].textContent = siteContent["main-content"]["product-content"];
mainContent[4].textContent = siteContent["main-content"]["vision-content"];

// Bottom Contact Title 
const bottomContact = document.querySelector(".contact h4");
bottomContact.textContent = siteContent.contact["contact-h4"];

//Bottom Contact Text 
const bottomContactText = document.querySelectorAll(".contact p");
bottomContactText[0].textContent = siteContent['contact']['address'];
bottomContactText[1].textContent = siteContent['contact']['phone'];
bottomContactText[2].textContent = siteContent['contact']['email'];

// Footer 
const Footer = document.querySelector('footer p');
Footer.textContent = siteContent['footer']['copyright'];

