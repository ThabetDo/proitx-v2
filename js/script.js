/*Change NavBar Background*/
var nav = $('#navbar');
$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        nav.addClass('scrolled');
    } else {
        nav.removeClass('scrolled');
    }
});

/* Our Client Slider*/
$('#clients').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                autoplaySpeed: 3000
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                autoplaySpeed: 2000
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                autoplaySpeed: 1000,
            }
        }
    ]


});


/*Our portfolio*/
window.addEventListener('load', function () {

    // Get reference of gallery container
    var elementRef = document.getElementById('gallery');

    // Init gallery according to wanted format
    // var gallery = new NaturalGallery.Natural(elementRef); // or
    var gallery = new NaturalGallery.Masonry(elementRef); // or
    // var gallery = new NaturalGallery.Square(elementRef); // or
    // var gallery = new NaturalGallery.ResponsiveSquare(elementRef);

    // Convert your format into natural-gallery's format.
    var items = [
        {
            thumbnailSrc: 'img/clients/alsadi.png', // link to thumbnail image
            enlargedSrc: 'img/clients/alsadi.png', // link to enlarged image
            // enlargedWidth: number,
            // enlargedHeight: number,
            // title: string, // Title for the label or button
            // link: string, // Link, transforms label into button
            // linkTarget: string // _blank | _top | _self | _parent
            color: '#f00', // HEX color for background before image display
            // backgroundPosition: string // Any value compatible with css background-position. Default: center
            // backgroundSize: string // Any value compatible with css background-size. Default : cover
        },
        {
            thumbnailSrc: 'img/clients/alsadi.png', // link to thumbnail image
            enlargedSrc: 'img/clients/alsadi.png', // link to enlarged image
            color: '#f00', // HEX color for background before image display
        },
        {
            thumbnailSrc: 'img/clients/alsadi.png', // link to thumbnail image
            enlargedSrc: 'img/clients/alsadi.png', // link to enlarged image
            color: '#f00', // HEX color for background before image display
        },
        {
            thumbnailSrc: 'img/clients/alsadi.png', // link to thumbnail image
            enlargedSrc: 'img/clients/alsadi.png', // link to enlarged image
            color: '#f00', // HEX color for background before image display
        },
        {
            thumbnailSrc: 'img/clients/alsadi.png', // link to thumbnail image
            enlargedSrc: 'img/clients/alsadi.png', // link to enlarged image
            color: '#f00', // HEX color for background before image display
        },
        {
            thumbnailSrc: 'img/clients/alsadi.png', // link to thumbnail image
            enlargedSrc: 'img/clients/alsadi.png', // link to enlarged image
            color: '#f00', // HEX color for background before image display
        },
        {
            thumbnailSrc: 'img/clients/alsadi.png', // link to thumbnail image
            enlargedSrc: 'img/clients/alsadi.png', // link to enlarged image
            color: '#f00', // HEX color for background before image display
        }
    ];

    // Set the entire collection
    gallery.setItems(items);

    // Init the gallery
    gallery.init();
});
