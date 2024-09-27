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
    "h1": "DOM <br> Is <br> Awesome",
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
    "address" : "123 Way 456 Street <br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
// alt is already set
// logo.setAttribute('alt', "Great Idea! Company logo.");

// Setting Content for Header / Navigation Links Bar
let navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link, i) => {
  link.textContent = siteContent['nav'][`nav-item-${i + 1}`]
});

// Adding new Nav Links
const postNavLink = document.createElement('a');
// const oneText = document.createTextNode("DOM");
// postNavLink.appendChild(oneText);
postNavLink.appendChild(document.createTextNode("PostLink"));
document.querySelector('nav').appendChild(postNavLink);
// oneNavLink.createTextNode = "DOM";
// navLinks.appendChild(oneNavLink);
const preNavLink = document.createElement('a');
preNavLink.appendChild(document.createTextNode("PreLink"));
document.querySelector('nav').prepend(preNavLink);

const allNavLinks = document.querySelectorAll('nav a');

// Styling for Navigation Links
allNavLinks.forEach((link) => link.style.color = 'green');


//Setting Content for section cta
const ctaHeaderText = document.querySelector('h1');
ctaHeaderText.innerHTML = siteContent['cta']['h1'];

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent['cta']['img-src']);


// Setting Content for Main Section
// Setting Main Content Headers
const contentHeaders = document.querySelectorAll('h4');
contentHeaders[0].textContent = siteContent['main-content']['features-h4'];
contentHeaders[1].textContent = siteContent['main-content']['about-h4'];
contentHeaders[2].textContent = siteContent['main-content']['services-h4'];
contentHeaders[3].textContent = siteContent['main-content']['product-h4'];
contentHeaders[4].textContent = siteContent['main-content']['vision-h4'];
// ContentHeaders[5].textContent = siteContent['contact']['contact-h4'];

// Setting Main Content Paragraph
const contentP = document.querySelectorAll('p');
contentP[0].textContent = siteContent['main-content']['features-content'];
contentP[1].textContent = siteContent['main-content']['about-content'];
contentP[2].textContent = siteContent['main-content']['services-content'];
contentP[3].textContent = siteContent['main-content']['product-content'];
contentP[4].textContent = siteContent['main-content']['vision-content'];

// Updating Main Content middle img source
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
// alt for image is already set


// Setting Content for Contact Section
// Setting Contact Header
// const contactH = document.getElementsByClassName['contact h4'];
// contactH.textContent = siteContent['contact']['contact-h4'];
// contentHeaders selector on line 83
contentHeaders[5].textContent = siteContent['contact']['contact-h4'];

// Setting Contact Paragraph
// contentP selector on line 92
contentP[5].innerHTML = siteContent['contact']['address'];
contentP[6].textContent = siteContent['contact']['phone'];
contentP[7].textContent = siteContent['contact']['email'];


// Setting Content for Footer
// contentP selector on line 92
contentP[8].textContent = siteContent['footer']['copyright'];