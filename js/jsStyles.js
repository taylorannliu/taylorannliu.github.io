
// i learned how to scroll smoothly here: https://stackoverflow.com/questions/17722497/scroll-smoothly-to-specific-element-on-page

function scrollToProjects(){
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToTop(){
    document.querySelector('#banner').scrollIntoView({
        behavior: 'smooth'
    });
}