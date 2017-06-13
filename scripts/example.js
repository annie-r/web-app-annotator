/**
 * 
 */
var paper = Snap(800, 600);
var img = paper.image('images/skype1.png', 10, 10, 300, 300);
var	bigCircle = paper.circle(150, 150, 100);
img.click(function(evt) {
    this.minified = !this.minified;
    bigCircle.animate({
        r: !this.minified ? 100 : 10
    }, 1500);
});