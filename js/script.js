$(document).on('ready', function() {
    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});


// Сдвиг label
let inputStart = document.querySelectorAll('.auth .form_block .inputDefault');
let labelFocus = document.querySelectorAll('.auth .form_block #labelFocus');

inputStart[0].onfocus = function() {
	labelFocus[0].classList = "labelFocus";
}
inputStart[0].onblur = function() {
    if (inputStart[0].value == "") {
        labelFocus[0].classList = "inputV";
    }
}

inputStart[1].onfocus = function() {
	labelFocus[1].classList = "labelFocus";
}
inputStart[1].onblur = function() {
    if (inputStart[0].value == "") {
        labelFocus[1].classList = "inputV";
    }
}
