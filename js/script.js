$(document).on('ready', function() {
    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});


// Сдвиг label
var inputStart = document.querySelectorAll('.auth .form_block .inputDefault'),
    labelFocus = document.querySelectorAll('.auth .form_block #labelFocus');

inputStart[0].onfocus = function() {
	labelFocus[0].classList = "labelFocus";
};
inputStart[0].onblur = function() {
    if (inputStart[0].value == "") {
        labelFocus[0].classList = "inputV";
    }
};
inputStart[1].onfocus = function() {
	labelFocus[1].classList = "labelFocus";
};
inputStart[1].onblur = function() {
    if (inputStart[0].value == "") {
        labelFocus[1].classList = "inputV";
    }
};

// Выключение overflow у body при открытом меню
var ovHidden = document.querySelector('.nav__trigger');

ovHidden.onclick = () => {
    if (ovHidden.className == 'nav__trigger is-active') {
        document.body.style.overflowY = 'hidden';
    }
    else {
        document.body.style.overflowY = 'scroll';
    }
};

// Светлая/темная тема
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Предварительный загрузчик
window.onload = function() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
    document.body.style.overflow = 'auto';
}

// Кнопка наверх
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        if ($('#upbutton').is(':hidden')) {
            $('#upbutton').css({
                opacity: 1
            }).fadeIn('slow');
        }
    } else {
        $('#upbutton').stop(true, false).fadeOut('fast');
    }
});
$('#upbutton').click(function() {
    $('html, body').stop().animate({
        scrollTop: 0
    }, 300);
});

// Прогресс
$(function() {
    $(window).on("scroll resize", function() {
        var o = $(window).scrollTop() / ($(document).height() - $(window).height());
        $(".progress-bar").css({
            "width": (100 * o | 0) + "%"
        });
        $('progress')[0].value = o;
    })
});

// Появление дополнительного контента из блока
var acc = document.getElementsByClassName("learn-more");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}