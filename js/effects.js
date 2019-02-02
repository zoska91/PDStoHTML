$(document).on('scroll', function () {

    const WindowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();



    // sekcja 1

    const $s1Title = $('.about h2');
    const s1TitleFromTop = $s1Title.offset().top;
    const s1TitleHeight = $s1Title.outerHeight();

    const $s1Txt = $('.about p');
    const s1TxtFromTop = $s1Txt.offset().top;
    const s1TxtHeight = $s1Txt.outerHeight();

    const $s1Icons = $('.icons');
    const s1IconsFromTop = $s1Icons.offset().top;
    const s1IconsHeight = $s1Icons.outerHeight();

    if (scrollValue > s1TitleFromTop - s1TitleHeight - WindowHeight * 0.5) {
        $s1Title.addClass('active')
    }

    if (scrollValue > s1TxtFromTop - s1TxtHeight - WindowHeight * 0.5) {
        $s1Txt.addClass('active')
    }

    if (scrollValue > s1IconsFromTop - s1IconsHeight - WindowHeight) {
        $s1Icons.addClass('active')
    }
    // ============================================
    // sekcja 2

    const $s2Title = $('.popular-destinations h2');
    const s2TitleFromTop = $s2Title.offset().top;
    const s2TitleHeight = $s2Title.outerHeight();

    const $s2Txt = $('.popular-destinations p');
    const s2TxtFromTop = $s2Txt.offset().top;
    const s2TxtHeight = $s2Txt.outerHeight();



    if (scrollValue > s2TitleFromTop - s2TitleHeight - WindowHeight * 0.5) {
        $s2Title.addClass('active')
    }

    if (scrollValue > s2TxtFromTop - s2TxtHeight - WindowHeight * 0.5) {
        $s2Txt.addClass('active')
    }



    $(function () {
        const places = [...document.querySelectorAll('.place')]

        $.each(places, function (index, place) {
            const s2PlaceFromTop = $(this).offset().top;
            const s2PlaceHeight = $(this).outerHeight();

            if (scrollValue > s2PlaceFromTop - s2PlaceHeight - WindowHeight * 0.5) {
                $(this).addClass('active')
            }

        })
    })

    // ========================================
    // sekcja 3


    const $s3Title = $('.customer-thoughts h2');
    const s3TitleFromTop = $s3Title.offset().top;
    const s3TitleHeight = $s3Title.outerHeight();

    const $s3Txt = $('.customer-thoughts p');
    const s3TxtFromTop = $s3Txt.offset().top;
    const s3TxtHeight = $s3Txt.outerHeight();



    if (scrollValue > s3TitleFromTop - s3TitleHeight - WindowHeight * 0.5) {
        $s3Title.addClass('active')
    }

    if (scrollValue > s3TxtFromTop - s3TxtHeight - WindowHeight * 0.5) {
        $s3Txt.addClass('active')
    }

    // sekcja 4

    const $s3Foto = $('.customer-thoughts .foto-2');
    const s3FotoFromTop = $s3Foto.offset().top;
    const s3FotoHeight = $s3Foto.outerHeight();



    if (scrollValue > s3FotoFromTop - s3FotoHeight - WindowHeight * 0.5) {
        $s3Foto.addClass('active')
    }




    if (scrollValue < 100) {
        const all = [...document.querySelectorAll('.active')];

        all.forEach(el => {
            el.classList.remove('active');
        });
    }

})