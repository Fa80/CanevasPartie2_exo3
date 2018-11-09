//La tête
var t = document.getElementById("myCanvas");
var ttx = t.getContext("2d");
ttx.beginPath();
ttx.arc(185, 70, 40, 0, Math.PI * 2);
ttx.strokeStyle = "#976F0F";
ttx.stroke();
ttx.fillStyle = "#976F0F";
ttx.fill();
//Le corps
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.rect(150, 100, 70, 150);
ctx.strokeStyle = "#976F0F";
ctx.stroke();
ctx.fillStyle = "#976F0F";
ctx.fill();
//Les bras
var b = document.getElementById("myCanvas");
var btx = b.getContext("2d");
btx.beginPath();
btx.rect(80, 120, 220, 40);
btx.moveTo(80, 120);
btx.quadraticCurveTo(60,140,80,160);   //bras gauche
btx.moveTo(300, 120);
btx.quadraticCurveTo(320,140,300,160);  //bras droit
btx.strokeStyle = "#976F0F";
btx.stroke();
btx.fillStyle = "#976F0F";
btx.fill();
// Bouche
ctx.beginPath();
ctx.arc(185,80,20,0,Math.PI,false);
//ctx.arc(185,80,16,0,Math.PI,false);  // 2ème arc bouche
ctx.strokeStyle = "red";
ctx.stroke();
//oeil gauche
ctx.beginPath();
ctx.arc(170,60,8,0,Math.PI*2,false);
ctx.stroke();
ctx.fillStyle="#FFFFFF";
ctx.fill();
//oeil droit
ctx.beginPath();
ctx.arc(200,60,8,0,Math.PI*2,false);
ctx.strokeStyle = "#FFFFFF";
ctx.stroke();
ctx.fillStyle="#FFFFFF";
ctx.fill();
//Boutton1
ctx.beginPath();
ctx.arc(180,150,7,0,Math.PI*2,false);
ctx.strokeStyle = "#7A2976";
ctx.stroke();
ctx.fillStyle="#7A2976";
ctx.fill();
//Boutton2
ctx.beginPath();
ctx.arc(180,170,7,0,Math.PI*2,false);
ctx.strokeStyle = "#7A2976";
ctx.stroke();
ctx.fillStyle= "#7A2976";
ctx.fill();
//Pied gauche
var p = document.getElementById("myCanvas");
var ptx = p.getContext("2d");
ptx.beginPath();
ptx.rect(150, 240, 30, 70);
ptx.moveTo(150, 270);
ptx.strokeStyle = "#976F0F";
ptx.stroke();
ptx.fillStyle = "#976F0F";
ptx.fill();
//Pied droit
var p = document.getElementById("myCanvas");
var ptx = p.getContext("2d");
ptx.beginPath();
ptx.rect(190, 240, 30, 70);
ptx.strokeStyle = "#976F0F";
ptx.stroke();
ptx.fillStyle = "#976F0F";
ptx.fill();
