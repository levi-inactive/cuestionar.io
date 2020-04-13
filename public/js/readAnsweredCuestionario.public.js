$(document).ready(() => {
    var carouselSlider = $('.carousel.carousel-slider')
    carouselSlider.carousel({
        fullWidth: true
    });

    var instance = M.Carousel.getInstance(carouselSlider);

    $('#prev-fill-btn').on('click', () => { showPrevFill(instance) });
    $('#next-fill-btn').on('click', () => { showNextFill(instance) });
});

function showPrevFill(instance) {
    console.log('Prev fill');
    instance.prev();
}

function showNextFill(instance) {
    console.log('Next fill');
    instance.next();
}
