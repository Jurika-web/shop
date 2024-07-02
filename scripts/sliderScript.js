import {bs1, bs2, bs3, bs4, bs5,sl1, sl2, sr1, sr2} from "../script.js"

export function sliderShop(){
    let img = ['url(./img/blog_108.jpg)', 'url(./img/вязание.jpg)', 'url(./img/плетение.jpg)', 'url(./img/paint_hero.jpg)', 'url(./img/вышивка.jpg)'];
let txt  = ['text1', 'text2', 'text3', 'text4', 'text5'];
let num = 0;

const aniSldrImg1 = [
  { height: '0%', width: '100%' },
  { height: '100%', width: '100%' },
];

const aniSldrTxt1 = [
  { top: '90%'},
  { top: '45%' },
];

const aniTiming = {
  duration: 1000,
  iterations: 1,
};

function slider1(num){
  sl2.style.display = 'none';
  sl1.style.display = 'block';
  sl1.style.backgroundImage = img[num];
  sl1.animate(aniSldrImg1, aniTiming);
  sr2.style.display = 'none';
  sr1.style.display = 'block';
  sr1.textContent = txt[num];
  sr1.style.top = '45%';
  sr1.style.height = '50%';
  sr1.animate(aniSldrTxt1, aniTiming);
}

function slider2(num){
  sl1.style.display = 'none';
  sl2.style.display = 'block';
  sl2.style.display = 'block';
  sl2.textContent = txt[num];
  sl2.style.top = '45%';
  sl2.style.height = '50%'
  sl2.animate(aniSldrTxt1, aniTiming);
  sr1.style.display = 'none';
  sr2.style.display = 'block';
  sr2.style.backgroundImage = img[num];
  sr2.animate(aniSldrImg1, aniTiming);
}

bs1.onclick = () =>{
  num = 0;
  slider1(num);
}

bs2.onclick = () =>{
  num = 1;
  slider2(num);
}

  bs3.onclick = () =>{
  num = 2;
  slider1(num);
}

bs4.onclick = () =>{
  num = 3;
  slider2(num)
}

bs5.onclick = () =>{
  num = 4;
  slider1(num);
}

let bs = [bs1, bs2, bs3, bs4, bs5];
const aniBtns = [
  { backgroundImage: 'url(./img/button_p.png)' },
  { backgroundImage: 'url(./img/button_a.png)' },
  { backgroundImage: 'url(./img/button_a.png)' },
  { backgroundImage: 'url(./img/button_a.png)' },
  { backgroundImage: 'url(./img/button_a.png)' },
];
const aniTimingBtn = {
  duration: 2000,
  iterations: 1,
};

function timer(){
  setTimeout(
    () => {
      bs1.animate(aniBtns, aniTimingBtn);
      num = 0;
      slider1(num);
    },
    2000
  );
  setTimeout(
    () => {
      bs2.animate(aniBtns, aniTimingBtn);
      num = 1;
      slider2(num);
    },
    2*2000
  );
  setTimeout(
    () => {
      bs3.animate(aniBtns, aniTimingBtn);
      num = 2;
      slider1(num);
    },
    4*2000
  );
  setTimeout(
    () => {
      bs4.animate(aniBtns, aniTimingBtn);
      num = 3;
      slider2(num);
    },
    6*2000
  );
  setTimeout(
    () => {
      bs5.animate(aniBtns, aniTimingBtn);
      num = 4;
      slider1(num);
    },
    8*2000
  );
  setTimeout(
    () => {
      timer();
    },
    9*2000
  );
}
timer()
}
