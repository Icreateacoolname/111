timeOut ();
var left = 0;
var timer;

function timeOut() {
    timer = setTimeout(function() {
        var str = document.getElementById('speakers__str');
        left -= 280;

        if (left < -1960) {
                left = 0;
        }

        str.style.left = left + 'px';
        timeOut ();

    }, 2500)
}

