//carousel script
var myCarousel = document.getElementById('slider')
myCarousel.addEventListener('slid.bs.carousel', function () {
    //var elem = document.getElementsByClassName("carousel-item active");
    //var a = elem[0].querySelector('.carousel-caption');
    //a.classList.add('animate__animated', 'animate__fadeInUp')

})

//service script animation
var service = document.getElementsByClassName('service');
var serviceItem = service[0].querySelectorAll('.item');
serviceItem.forEach(function (option) {
    option.classList.add('animate__animated');
    option.addEventListener('mouseover', function () {
        option.classList.add('animate__bounce');
        option.addEventListener('animationend', () => {
            option.classList.remove('animate__bounce');
        });

    });
});
//fancy box medic-office-gallery setting
Fancybox.bind("#office-gallery a", {
    groupAll: true, // Group all items
    on: {
        ready: (fancybox) => {
            console.log(`fancybox #${fancybox.id} is ready!`);
        }
    }

});
//fancy box staff-gallery setting
Fancybox.bind("#staff-gallery .item a", {
    groupAll: true, // Group all items
    on: {
        ready: (fancybox) => {
            console.log(`fancybox #${fancybox.id} is ready!`);
        }
    }

});

//fancy box staff-gallery setting
Fancybox.bind("#medic-map iframe", {
    groupAll: false, // Group all items
    on: {
        ready: (fancybox) => {
            console.log(`fancybox #${fancybox.id} is ready!`);
        }
    }

});
window.onscroll = function () { myFunction() };
var lastScroll = 0;
function myFunction() {
    var elem = document.getElementById("main-menu");
    var current = document.documentElement.scrollTop;
    if (current < 200) {
        elem.classList.remove("fixed-top");
    }
    else {
        elem.classList.add("fixed-top");
    }
}


AOS.init();
