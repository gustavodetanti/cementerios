
//esbuild --bundle src/main.js --outfile=js/main.bundle.js  --watch --minify

import {Comp} from "./components/Comp.js";
import {Send} from "./components/functions/Send";
import { VerticalTexts } from "./components/VerticalTexts.js";
import {addSvg,addSvgElement,setAttrs} from "./svg/Svg";
import {XF} from "./frasesCuerpo.js";

let AUTO=false;
let apdiv;
let xf;
window.addEventListener('DOMContentLoaded', (event) => {
    apdiv=document.getElementById('js-app');

    xf=XF();
    init();

});






 function init(){
     let sto;
let slides=[...document.querySelectorAll('.slider > div')];
let index=0;
let n=slides.length;

slides.map(s=>{

VerticalTexts(s,xf.frase(),xf.frase());

let sub=s.querySelector('.subslides');
if(sub)SectionSlider(sub);

})


let prevSection=document.getElementById('prevSection');
let nextSection=document.getElementById('nextSection');

prevSection.addEventListener('click',prev);
nextSection.addEventListener('click',next);


showActual();



function next(){
    index++;
    if(index>=n)index=0;
    showActual()
}
function prev(){
    index--;
    if(index<0)index=n-1;
    showActual()
}

function showActual(){
let adv=slides[index];
console.log(index);
slides.map((s,i)=>{
    if(i==index){s.classList.add('opened')}else{
        s.classList.remove('opened')
    }
});
if(AUTO){
clearTimeout(sto);
sto=setTimeout(()=>{

next();
},4000);
}
}


 }


function SectionSlider(div){
let slides=[...div.children];
console.log(slides.length,"sub slides")


}





 function svgInit(){
     let w=100,h=100;
    let svg=addSvg(apdiv,w,h,{style:'background:"#222222"'});
   }
