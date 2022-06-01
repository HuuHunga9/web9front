document.querySelector('p.header--menu').addEventListener('click', function() {
    document.querySelector('.header--bottom__khoi-navbar').classList.add('right-0');
    document.querySelector('.header--bottom__navbar').classList.add('display-block');
})

document.querySelector('.header--close').addEventListener('click', function() {
    document.querySelector('.header--bottom__khoi-navbar').classList.remove('right-0');
    document.querySelector('.header--bottom__navbar').classList.remove('display-block');
})
document.querySelector('.header--close-man523').addEventListener('click', function() {
    document.querySelector('.header--bottom__khoi-navbar').classList.remove('right-0');
    document.querySelector('.header--bottom__navbar').classList.remove('display-block');
})
document.querySelector('.header--bottom__khoi-navbar').addEventListener('click', function() {
    document.querySelector('.header--bottom__khoi-navbar').classList.remove('right-0');
    document.querySelector('.header--bottom__navbar').classList.remove('display-block');
})

document.querySelector('.header--bottom__navbar').addEventListener('click', function(e) {
    e.stopPropagation();
})
document.querySelector('i.fa-solid.fa-angle-down.dichvu').addEventListener('click', function() {
    document.querySelector('.header--bottom-khoi-subnav-mobile.dichVu').classList.toggle('display-block');
    document.querySelector('i.fa-solid.fa-angle-down.dichvu').classList.toggle('fa-angle-up');
})

document.querySelector('i.fa-solid.fa-angle-down.dichvu').addEventListener('click', function(e) {
    e.preventDefault();
})

document.querySelector('.banggia-icon').addEventListener('click', function() {
    document.querySelector('.banggia--subnav-mobile').classList.toggle('display-block');
    document.querySelector('.banggia-icon').classList.toggle('fa-angle-up');
})

document.querySelector('.banggia-icon').addEventListener('click', function(e) {
    e.preventDefault();
})

document.querySelector('.header--top-right--search').addEventListener('click', function() {
    document.querySelector('.modal--goidien-timkiem').classList.add('display-flex');
})

document.querySelector('.modal--goidien-timkiem').addEventListener('click', function() {
    document.querySelector('.modal--goidien-timkiem').classList.remove('display-flex');
})
document.querySelector('.modal--goidien-timkiem-icon').addEventListener('click', function() {
    document.querySelector('.modal--goidien-timkiem').classList.remove('display-flex');
})
document.querySelector('.modal--goidien__khoi').addEventListener('click', function(e) {
    e.stopPropagation();
})



document.querySelector('.btn-dky').addEventListener('click', function() {
    document.querySelector('.modal--goidien-datlich').classList.add('display-flex');
})
document.querySelector('.modal--goidien-datlich').addEventListener('click', function() {
    document.querySelector('.modal--goidien-datlich').classList.remove('display-flex');
})
document.querySelector('.modal--goidien-datlich-close ').addEventListener('click', function() {
    document.querySelector('.modal--goidien-datlich').classList.remove('display-flex');
})

document.querySelector('.datlich').addEventListener('click', function(e) {
    e.stopPropagation();
})

window.addEventListener('scroll', function() {
    var heightTop = document.querySelector('.header-top').offsetHeight;

    var x = pageYOffset;
    if (x > heightTop) {
        document.querySelector('.header-bottom').classList.add('position');
    } else {
        document.querySelector('.header-bottom').classList.remove('position');
    }
});