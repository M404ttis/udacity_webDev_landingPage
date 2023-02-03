/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const buildNavBar = () => {
    const navBarFragement = document.createDocumentFragment();

    for (const section of sections) {
        const navItem = document.createElement('li');
        navItem.innerHTML = `<a class="menu__link" href="#${section.id}">${section.dataset.nav}</a>`;
        navBarFragement.appendChild(navItem);
    }
    navBar.appendChild(navBarFragement);
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMCOntentLoaded', buildNavBar());

// Scroll to section on link click

// Set sections as active


