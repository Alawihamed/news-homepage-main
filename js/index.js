let toggle = document.querySelector('header nav .toggle-icon');
let mobileFull= document.querySelector('header .mobile-header-full');
let mobileNav= document.querySelector('header .mobile-header-full .nav');
let colseDrawer =document.querySelector('header .mobile-header-full .nav .close-icon');

toggle.addEventListener('click',function(){
    mobileFull.classList.add('show');
    mobileNav.classList.add('show');
});

colseDrawer.addEventListener('click',function(){
    mobileFull.classList.remove('show');
    mobileNav.classList.remove('show');
});