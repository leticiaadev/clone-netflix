$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    /*teste o true ou false para ver a setinha sumindo*/
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})