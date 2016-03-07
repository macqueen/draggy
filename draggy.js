(function() {
    var BORDER_WIDTH = 5;

    var outer = document.getElementById('outer');
    var inner = document.getElementById('inner');

    var outerClientRect = outer.getBoundingClientRect();
    var maxLeft = outer.offsetWidth - inner.offsetWidth - BORDER_WIDTH * 2;
    var maxTop = outer.offsetHeight - inner.offsetHeight - BORDER_WIDTH * 2;

    var dragging = false;

    inner.onmousedown = function() {
        dragging = true;
    };

    document.onmousemove = function(ev) {
        if (!dragging) {
            return;
        }
        var top = ev.pageY - inner.offsetHeight / 2 - outerClientRect.top;
        var left = ev.pageX - inner.offsetWidth / 2 - outerClientRect.left;
        if (left < 0) {
            left = 0;
        } else if (left > maxLeft) {
            left = maxLeft;
        }
        if (top < 0) {
            top = 0;
        } else if (top > maxTop) {
            top = maxTop;
        }
        inner.style.top = top + 'px';
        inner.style.left = left + 'px';
        inner.style.position = 'absolute';
    };

    document.onmouseup = function() {
        dragging = false;
    };
})();
