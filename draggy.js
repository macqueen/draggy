(function() {
    var BORDER_WIDTH = 5;

    var outer = document.getElementById('outer');
    var inner = document.getElementById('inner');
    var outerClientRect = outer.getBoundingClientRect();

    var getMaxLeft = function() {
        return outer.offsetWidth - inner.offsetWidth - BORDER_WIDTH * 2;
    };
    var getMaxTop = function() {
        return outer.offsetHeight - inner.offsetHeight - BORDER_WIDTH * 2;
    };
    var setStyle = function(el, top, left) {
        el.style.top = top + 'px';
        el.style.left = left + 'px';
    };

    var maxLeft = getMaxLeft();
    var maxTop = getMaxTop();
    window.onresize = function() {
        maxLeft = getMaxLeft();
        maxTop = getMaxTop();
        setStyle(inner, 0, 0);
    };

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
        setStyle(inner, top, left);
    };

    document.onmouseup = function() {
        dragging = false;
    };

})();
