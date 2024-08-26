document.addEventListener('DOMContentLoaded', () => {
    // Initialize Isotope for portfolio filtering
    let portfolioContainer = document.querySelector('.portfolio-container');
    let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    let portfolioFilters = document.querySelectorAll('#portfolio-filters li');

    portfolioFilters.forEach(filter => {
        filter.addEventListener('click', function(e) {
            e.preventDefault();
            portfolioFilters.forEach(el => el.classList.remove('filter-active'));
            this.classList.add('filter-active');

            portfolioIsotope.arrange({
                filter: this.getAttribute('data-filter')
            });
        });
    });

    // Initialize Swiper for testimonials slider
    new Swiper('.testimonials-slider', {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
});




// Back to Top Button
document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById("back-to-top");

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScrollToTop();
    });

    function smoothScrollToTop() {
        var position = document.documentElement.scrollTop || document.body.scrollTop;
        if (position > 0) {
            window.requestAnimationFrame(smoothScrollToTop);
            window.scrollTo(0, position - position / 8);
        }
    }
});