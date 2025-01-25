// dropdown_menu
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isopen = dropDownMenu.classList.contains('open')


    toggleBtnIcon.classList = isopen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}


// ScrollReveal

const scrollRevealOption = {

    distance: "60px", 
    origin: "bottom", 
    duration: 1000, 
};
//--Head   
ScrollReveal().reveal(".IMG .IMG_box ", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".head .text .text_box h2", {
    ...scrollRevealOption, 
    delay: 500, 
});
ScrollReveal().reveal(".head .text .text_box p ", {
    ...scrollRevealOption, 
    delay: 900, 
});
ScrollReveal().reveal(".head .icon i",{
    ...scrollRevealOption, 
    delay: 1300, 
});
// --About    
ScrollReveal().reveal(".about_me .about h1", {
    ...scrollRevealOption, 
    delay: 500, 
});
ScrollReveal().reveal(".about_me .about p", {
    ...scrollRevealOption, 
    delay: 900, 
});

// --skill_me
ScrollReveal().reveal(".skill_me .skill-bars h2", {
    ...scrollRevealOption, 
    delay: 500, 
});

// --Project
ScrollReveal().reveal(".card-list .card-item", {
    ...scrollRevealOption, 
    delay: 400, 
});


// --contact
ScrollReveal().reveal(".contact_box", {
    ...scrollRevealOption, 
    delay: 200, 
});
ScrollReveal().reveal(".contact_Us", {
    ...scrollRevealOption, 
    delay: 400, 
});
ScrollReveal().reveal(".contact_Us .contact", {
    ...scrollRevealOption, 
    delay: 800, 
});

