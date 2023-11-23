// navbar button up and down
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=() =>{
    menuIcon.classList.toggle('bxs-x-circle'); 
    navbar.classList.toggle('active'); 
};



let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=() =>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+']').classList.add('active');
            });
        };
    });

    // sticky navbar design moving to diffrent area
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    //removing nav icon when its clicked
    menuIcon.classList.remove('bxs-x-circle'); 
    navbar.classList.remove('active'); 


};

ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });
 ScrollReveal().reveal('.home-content,.heading,.about-content h2,.heading', { origin:'top' });
 ScrollReveal().reveal('.home-content h1,.about-img,.left', { origin:'left' });
 ScrollReveal().reveal('.home-content p,.about-content,.right', { origin:'right' });
 ScrollReveal().reveal('.home-img,.skills-container,.project-box,.contact form,.about-content', { origin:'bottom' });

//  typing automatuc
const typed=new Typed('.multiple-text',{
    strings:['Frontend Developer','Android Developer','Good Trainer'],
    typeSpeed:100 ,
    backSpeed:100,
    backDelay:1000,
    loop:true

});