//////////////////////How_it_works //////////////////
document.getElementById('scroll-link').addEventListener('click', function(event) {
    event.preventDefault(); 

    const target = document.getElementById('How_it_works');
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    
        window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});

// ///////////////////////// fixed nav par////////////////////////////
document.addEventListener('scroll', function() {
    const banner = document.querySelector('.start_banner');
    const nav = document.getElementById('logo_nav_start');

    const bannerBottom = banner.getBoundingClientRect().bottom + window.scrollY;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition > bannerBottom) {
        nav.style.transform = 'translateY(0)'; // يظهر الشريط
    } else {
        nav.style.transform = 'translateY(-100%)'; // يخفي الشريط
    }
});

///////////////////// click button in mobile (@media) //////////////////////////////
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
    nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
});


