import { getElementSize } from "./getElementSize.js";




export function VerticalTexts(container,LEFT_TEXT,RIGHT_TEXT){
    let off=0;
let marg=24;
    let size=getElementSize(container.parentNode);

 console.log(off,marg,"margins");
let div=document.createElement('div');

let l_div=document.createElement('div');
let r_div=document.createElement('div');

let style=`opacity:0.99;pointer-events: none;position:absolute;top:${size.top}px;
left:${size.left-off}px;
height:${size.h}px;width:${size.w+(off*2)}px;background:none;`;

let b_style=`color:black;pointer-events: none;
position:absolute;top:${size.h/2}px;letter-spacing:2px;`;
let l_style=`${b_style}left:${marg}px;transform:rotateZ(-90deg);`;
let r_style=`${b_style}right:${marg}px;transform:rotateZ(90deg);`;
l_div.innerHTML=LEFT_TEXT;
r_div.innerHTML=RIGHT_TEXT;
l_div.style.cssText=l_style;
r_div.style.cssText=r_style;
div.style.cssText=style;

container.appendChild(div);
div.appendChild(l_div);
div.appendChild(r_div);

window.addEventListener('resize',align);
align();
function align(){
 
 size=getElementSize(container.parentNode);

 style=`opacity:0.8;pointer-events: none; 
 position:absolute;
 top:${size.top}px;
 left:${size.left-off}px;
 height:${size.h}px;
 width:${size.w+(off*2)}px;
 background:none;`;

b_style=`color:black;
pointer-events: none;
position:absolute;
top:${size.h/2}px;
letter-spacing:2px;
background:#00000033;
padding:12px 8px;
`;


 l_style=`${b_style}left:${marg}px;transform:rotateZ(-90deg);`;
 r_style=`${b_style}right:${marg}px;transform:rotateZ(90deg);`;
 
 l_div.style.cssText=l_style;
 r_div.style.cssText=r_style;
 div.style.cssText=style;

}

}
