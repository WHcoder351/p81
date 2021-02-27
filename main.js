canvas = document.getElementById("Can-Can");
 ctx = canvas.getContext("2d");
color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 10;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", mouseDown);
function mouseDown(e){
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y =  e.clientY - canvas.offsetTop;
    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);  
}
canvas = document.getElementById("Can-Can");
 ctx = canvas.getContext("2d");
color = "yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 10;
ctx.arc(250, 245, 40 ,0 , 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", mouseDown);
function mouseDown(e){
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y =  e.clientY - canvas.offsetTop;
    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);  
}
canvas = document.getElementById("Can-Can");
 ctx = canvas.getContext("2d");
color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 10;
ctx.arc(295, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", mouseDown);
function mouseDown(e){
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y =  e.clientY - canvas.offsetTop;
    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);  
}
canvas = document.getElementById("Can-Can");
 ctx = canvas.getContext("2d");
color = "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 10;
ctx.arc(340, 245, 40 ,0 , 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", mouseDown);
function mouseDown(e){
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y =  e.clientY - canvas.offsetTop;
    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);  
}
canvas = document.getElementById("Can-Can");
 ctx = canvas.getContext("2d");
color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 10;
ctx.arc(390, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", mouseDown);
function mouseDown(e){
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y =  e.clientY - canvas.offsetTop;
    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);  
}
