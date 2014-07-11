/*
     Name: Eric Rogers
     Date: 07/09/2014
     Class & Section:  WIA-01
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
window.onload = function() {
    if (Modernizr.canvas) {
        var canvas1 = document.getElementById('canvas1');
        var ctx = canvas1.getContext("2d");

        ctx.fillStyle = "cyan";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;

        ctx.fillRect(0, 0, 50, 100);
        ctx.strokeRect(0, 0, 50, 100);



    /*******************************************
     PART 2

     Draw a circle starting at point (50 ,50)
     That has a radius of 20 px
     Set the color of the circle to a shade of red and set the alpha to .5
     Set the stroke color to black and use a radius of 30px for this circle.

     Reminder - set the style first then draw.
     Use the arc method
     ********************************************/


//Draw Circle here

            var canvas2 = document.getElementById('canvas2');
            var ctx2 = canvas2.getContext('2d');

            ctx2.fillStyle = 'rgba(200, 0, 0, 0.5)';
            ctx2.strokeStyle = "black";
            ctx2.lineWidth=3;

            ctx2.beginPath();
            ctx2.arc(50, 50, 20, 0, Math.PI * 2, false);

            ctx2.fill();
            ctx2.stroke();

    /*******************************************
     PART 3

     Practice using Path drawing.
     Create a 5-point star shaped pattern using the lineTo method.
     Begin this shape at (100, 100)

     Height and width and color are up to you.

     ********************************************/


//Draw Star here

        var canvas3 = document.getElementById('canvas3');
        var ctx3 = canvas3.getContext('2d');

        ctx3.strokeStyle='black';
        ctx3.fillStyle='yellow';
        ctx3.lineWidth=3;

        ctx3.beginPath();

        ctx3.moveTo(100, 100);
        ctx3.lineTo(120, 158);
        ctx3.lineTo(180, 158);
        ctx3.lineTo(133, 197);
        ctx3.lineTo(150, 254);
        ctx3.lineTo(100, 220);
        ctx3.lineTo(49, 254);
        ctx3.lineTo(66, 197);
        ctx3.lineTo(18, 158);
        ctx3.lineTo(78, 158);
        ctx3.closePath();

        ctx3.stroke();
        ctx3.fill();

    /*******************************************
     PART 4

     Practice drawing with Bezier curves.
     Try drawing the top to an umbrella.
     This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

     Position, height, width and color are your choice.
     Do not overlap any other object.

     ********************************************/

//Draw Umbrella top here

        var canvas4 = document.getElementById('canvas4');
        var ctx4 = canvas4.getContext('2d');

        ctx4.strokeStyle='gray';
        ctx4.fillStyle='cyan';
        ctx4.lineWidth=2;

        ctx4.beginPath();

        ctx4.moveTo(90, 200);
        ctx4.bezierCurveTo(115, 100, 275, 100, 300, 200);
        ctx4.bezierCurveTo(295, 190, 275, 190, 270, 200);
        ctx4.bezierCurveTo(265, 190, 245, 190, 240, 200);
        ctx4.bezierCurveTo(235, 190, 215, 190, 210, 200);
        ctx4.bezierCurveTo(205, 190, 185, 190, 180, 200);
        ctx4.bezierCurveTo(175, 190, 155, 190, 150, 200);
        ctx4.bezierCurveTo(145, 190, 125, 190, 120, 200);
        ctx4.bezierCurveTo(115, 190, 95, 190, 90, 200);
        ctx4.closePath();

        ctx4.stroke();
        ctx4.fill();

    /*******************************************
     PART 5

     Practice using text.
     Draw text into your canvas.  It can said whatever you would like in any color.

     ********************************************/

//Draw text here

        var canvas5 = document.getElementById('canvas5');
        var ctx5 = canvas5.getContext('2d');
        var text = "Here is some text!";

        ctx5.fillStyle='#999';
        ctx5.strokeStyle='black';
        ctx5.lineWidth=2;

        ctx5.font= '32pt serif';
        ctx5.fillText(text, 20, 100);
        ctx5.strokeText(text, 20, 100);



    /*******************************************
     PART 6

     Pixel manipulation.
     Draw the image logo.png into the canvas in the following 3 ways.
     1. The image exactly as it is.
     2. Shrink the image by 50%
     3. Slice a section of the logo out and draw that onto the canvas.

     Reminder to use the drawImage method for all 3 of the ways.

     ********************************************/

//Draw images here

        var canvas6 = document.getElementById('canvas6');
        var ctx6 = canvas6.getContext('2d');
        var srcImg = document.getElementById('logo');

        // 1.
        ctx6.drawImage(srcImg, 0, 0);
        // 2.
        ctx6.drawImage(srcImg, 0, 1000, srcImg.width/2, srcImg.height/2);
        // 3.
        ctx6.drawImage(srcImg, 2538, 170, 190, 194, 100, 1800, 200, 204);

    /*******************************************
     PART 7

     Putting it all together.

     Using a combination of all the methods.
     Create a complex scene.
     You must use at least 3 different methods.

     ********************************************/

// Draw scene here

        var canvas7 = document.getElementById('canvas7');
        var ctx7 = canvas7.getContext('2d');

        // background
        ctx7.fillStyle='#B9F9FA';
        ctx7.fillRect(0,0,400,400);

        // sun
        ctx7.fillStyle='yellow';
        ctx7.arc(50,50,25,0,Math.PI*2,false);
        ctx7.fill();

        // boat body
        ctx7.fillStyle='#FA8805';
        ctx7.beginPath();
        ctx7.moveTo(50,200);
        ctx7.bezierCurveTo(55,280,345,280,350,200);
        ctx7.fill();

        // boat opening
        ctx7.fillStyle='#000000';
        ctx7.beginPath();
        ctx7.moveTo(50,200);
        ctx7.bezierCurveTo(60,220,300,220,350,200);
        ctx7.bezierCurveTo(300,180,60,180,50,200);
        ctx7.closePath();
        ctx7.fill();

        // water

        var cx=20,x=40;
        ctx7.fillStyle='#056FFA';

        ctx7.beginPath();
        ctx7.moveTo(0,220);

        for(var i=0; i<=10; i++){
            ctx7.quadraticCurveTo(cx, 250, x, 220);
            cx+=40;
            x+=40;
        }
        ctx7.lineTo(400,400);
        ctx7.lineTo(0,400);
        ctx7.lineTo(0,220);
        ctx7.closePath();
        ctx7.fill();
        ctx7.stroke();

        // mast
        ctx7.fillStyle='brown';

        ctx7.fillRect(195,40,10,170);
        ctx7.fillRect(195,160,140,5);

        //sail
        ctx7.fillStyle='white';

        ctx7.beginPath();
        ctx7.moveTo(205,40);
        ctx7.lineTo(335,160);
        ctx7.lineTo(205,160);
        ctx7.closePath();
        ctx7.fill();

        // text
        ctx7.fillStyle='#0015FF';

        ctx7.font='16pt serif';
        ctx7.fillText('Minnow',220,150);

    } else {
        console.log('Your Browser does not support Canvas.');
    }
};