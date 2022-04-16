var btn = document.getElementById('btn');
var box = document.querySelector('.box');




btn.onclick = function () {
    box.innerText = 'Hello!'
    Object.assign(box.style, {
        backgroundColor : '#F55353',
    });
    Object.assign(btn.style, {
        backgroundColor : '#40DFEF',
        margin: '20px'
    });
}



