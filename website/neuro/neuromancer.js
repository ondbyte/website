/* var canvas = document.getElementById('canvas');

var width = window.innerWidth;
var height = window.innerHeight;
var oneWidth;
if(width>height){
    oneWidth = height;
} else {
    oneWidth = width;
}

canvas.width = width;
canvas.height = height;

var ctx = canvas.getContext('2d');

var img = new Image();
img.src = 'img.webp';
img.onload = function(){
    ctx.drawImage(img,0,0,img.width,img.height,0,0,oneWidth,oneWidth);
} */


var width = window.innerWidth;
var height = window.innerHeight;
var oneWidth;
if (width > height) {
    oneWidth = height;
} else {
    oneWidth = width;
}

var img = document.getElementById('circle');
var body = document.getElementById('body');
img.src = 'img.webp';

function isMobile() {
    var match = window.matchMedia || window.msMatchMedia;
    if (match) {
        var mq = match("(any-pointer:fine)");
        return !mq.matches;
    }
    return !false;
}

function twist(){
    anime({
        targets:img,
        width:0,             
        direction: 'alternate',  
        loop:2,
        duration:500,
        easing: 'easeInCubic',
        update: function(anim){            
            if(Math.round(anim.progress)==100){
                img.src = 'me.webp';
            }
        }
    });
}

function animeComplete(){
    img.onmousedown = twist;
}

function animate() {
    img.onmouseenter = null;
    img.onmousedown = null;
    var tx;var ty;
    if(width>height){
        tx = -width/4;
    } else {
        ty = -height/4;
    }
    anime({
        targets: img,
        width: oneWidth-oneWidth*.2,
        height: oneWidth-oneWidth*.2,
        translateX:tx,
        translateY:ty,
        borderRadius:'2%',
        delay: function (el, index) {
            return index * 80;
        },
        direction: 'normal',
        loop: 1,
        complete: animeComplete
    });
}

if (isMobile()) {
    img.onmousedown = animate;
} else {
    img.onmouseenter = animate;
}


