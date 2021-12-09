var lazyloadImages;

if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy-bg");
    var imageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var image = entry.target;
                image.classList.remove("lazy-bg");
                imageObserver.unobserve(image);
            }
        });
    });

    lazyloadImages.forEach(function (image) {
        imageObserver.observe(image);
    });
} else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy-bg");

    function lazyload() {
        if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function () {
            var scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function (img) {
                if (img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy-bg');
                }
            });
            if (lazyloadImages.length == 0) {
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
}

window.addEventListener('DOMContentLoaded', function () {
    const lazy = new LazyLoad({
    })
})
