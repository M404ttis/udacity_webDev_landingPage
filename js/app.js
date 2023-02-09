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

const addNavEventListener = (navItem) => {
    navItem.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.querySelector(`[data-nav="${navItem.innerText}"]`);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
}


// Add class 'active-viewport' to section and nav when current section is near top of viewport 
function makeActive(){
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        // check if section is in viewport and 
        if (box.top <= 120 && box.bottom >= 121) {
            //apply active state on current section and corresponding Nav link
            section.classList.add('active-viewport');
            navBar.querySelector(`[id="nav_${section.id}"]`).classList.add('active-viewport');
        } else {
            //Remove active state from other section and corresponding Nav link
            section.classList.remove('active-viewport');
            navBar.querySelector(`[id="nav_${section.id}"]`).classList.remove('active-viewport');
        }
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build nav dynamically with regards to performance
const buildNavBar = () => {
    const navBarFragement = document.createDocumentFragment();

    for (const section of sections) {
        const navItem = document.createElement('li');
        // adds navID on basis of sectionID so we can query it later to add active class
        navItem.innerHTML = `<a class="menu__link" id="nav_${section.id}">${section.dataset.nav}</a>`;
        addNavEventListener(navItem);
        navBarFragement.appendChild(navItem);
    }
    navBar.appendChild(navBarFragement);
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMCOntentLoaded', buildNavBar());

// Set sections as active
document.addEventListener("scroll", function() { makeActive();});


