function change_style() {
    'use strict';
    var style = document.getElementById('style');
    if (style.className.match('default')) {
        style.className = 'blood';
    } else {
        style.className = 'default';
    }
}