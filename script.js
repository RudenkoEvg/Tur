document.getElementById('burgerButton').addEventListener('click', function () {
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
        console.log('Меню відкрите');
    } else {
        console.log('Меню закрите');
    }
});
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

<!-- Slick Carousel JS -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>