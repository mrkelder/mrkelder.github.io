var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
const audio = document.getElementById('audio');
const audio_2 = document.getElementById('audio_2');
const [body] = document.getElementsByTagName('body');
//  UWU
function makeThicc() {
  audio.play();
  body.style.backgroundImage = "url('./img/tom.gif')";
  en1.src = "img/e1.png";
  en2.src = "img/e2.png";
  bg.src = "img/bg2.png"
  pl.src = "img/p.png";
  style = "red";
  mode = true;
}
//  UWU
let mode = false;
let style = "#999";
let bg = new Image();
let pl = new Image();
let en1 = new Image();                      //присваивание переменным тип "фоточки" :З
let en2 = new Image();
//  UWU
bg.src = "img/bg.png";
pl.src = "img/pl.png";                      //открытие фоточек :З
en1.src = "img/en1.png";
en2.src = "img/en2.png";
//  UWU
var enemy1 = [];
enemy1[0] = {
  x: cvs.width,                      //создаем массивы для движения двух типов машинок :З
  y: 225
}
var enemy2 = [];                              //в массивах есть позиция х и у :З
enemy2[0] = {
  a: cvs.width - 900,
  b: 200
}
var yPos = 300;  //позиция человечка :З
var xPos = 400;                             //наборчик переменных :З
var m = 1;
var k, o, p = 2;
//  UWU
cvs.addEventListener("mousemove", move);
//  UWU
function move() {
  xPos = event.offsetX - 25;                //теперь мышь - наше управление :З
  yPos = event.offsetY - 50;
}
//  UWU
function draw() {                                        //одна большая функция, в которой происходят все действия для отрисовочки :З
  ctx.drawImage(bg, 0, 0);                            //отрисовочка фона :З
  //  UWU
  //  UWU
  //  UWU
  //  UWU
  //  UWU
  for (var i = 0; i < enemy1.length; i++) {
    ctx.drawImage(en1, enemy1[i].x, enemy1[i].y);        //массивчик 1 для движения и появления машинок :З
    //  UWU
    //  UWU
    //ускорения на 50 очках и на 100
    if (i > 13) { if (i > 28) { p = 5; } else { p = 4; } }                 //ускорение x4 и x5 (начальное x3)
    //  UWU
    //  UWU
    //  UWU
    for (k = 0; k < p; k++) {                              //движение машинок с права на лево :З
      enemy1[i].x = enemy1[i].x - 2;

      if (enemy1[i].x - 10 == 400) {
        enemy1.push({
          x: cvs.width,                          //появление новых машинок, когда предыдущая достигает указанной позиции :З
          y: Math.floor(Math.random() * 550)
        })
      }
    }
    //  UWU
    if ((xPos <= enemy1[i].x + 200)              //делает капут, когда машинка врезается в человечка :З
      && (xPos >= enemy1[i].x)
      && (yPos + 40 >= enemy1[i].y)
      && (yPos <= enemy1[i].y + 60)) {
      m = 0;                                //R.I.P человечек((((
    }
  }
  //  UWU
  //  UWU
  //  UWU
  for (var j = 0; j < enemy2.length; j++) {
    ctx.drawImage(en2, enemy2[j].a, enemy2[j].b);        //массивчик 2 для движения и появления машинок :З

    for (o = 0; o < p; o++) {                              //движение машинок с права на лево :З
      enemy2[j].a = enemy2[j].a + 2;

      if (enemy2[j].a - 10 == 400) {
        enemy2.push({
          a: cvs.width - 1000,                          //появление новых машинок, когда предыдущая достигает указанной позиции :З
          b: Math.floor(Math.random() * 550)
        })
      }
    }

    if ((xPos <= enemy2[j].a + 200)              //делает капут, когда машинка врезается в человечка :З
      && (xPos >= enemy2[j].a)
      && (yPos + 40 >= enemy2[j].b)
      && (yPos <= enemy2[j].b + 60)) {
      m = 0;                                //R.I.P человечек((((
    }
  }




  ctx.drawImage(pl, xPos, yPos);

  ctx.fillStyle = style;
  ctx.font = "24px Verdana";
  ctx.fillText("Score " + i, 10, cvs.height - 20);


  if (m == 1) { requestAnimationFrame(draw); } else {
    if (mode) {
      audio.pause();
      body.style.backgroundImage = "url('./img/bg3.gif')";
      body.style.backgroundRepeat = 'no-repeat';
      body.style.backgroundSize = '100vw 100vh';
      cvs.style.display = 'none';
      audio_2.play();
    }
    else {
      alert('А ты так и не попробовал эту привлекательную красСССную кнопочку(((((');
    }
  }
}

bg.onload = draw;