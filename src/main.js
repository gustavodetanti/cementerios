
//esbuild --bundle src/main.js --outfile=js/main.bundle.js  --watch --minify

import { addSvg, addSvgElement, setAttrs } from "./svg/Svg";
 import { SectionSlider } from "./components/SectionSlider";

let AUTO = false;
let apdiv;
let xf;
window.addEventListener('DOMContentLoaded', (event) => {
    apdiv = document.getElementById('js-app');
 
    init();

});






function init() {
    let sto;
    let slides = [...document.querySelectorAll('.slider > div')];
    let index = 0;
    let n = slides.length;

    slides.map(s => {
        let sub = s.querySelector('.subslides');
        if (sub) SectionSlider(sub, s);
    })


    let prevSection = document.getElementById('prevSection');
    let nextSection = document.getElementById('nextSection');

    prevSection.addEventListener('click', prev);
    nextSection.addEventListener('click', next);


    showActual();



    function next() {
        index++;
        if (index >= n) index = 0;
        showActual()
    }
    function prev() {
        index--;
        if (index < 0) index = n - 1;
        showActual()
    }

    function showActual() {

        slides.map((s, i) => {
            if (i == index) { s.classList.add('opened') } else {
                s.classList.remove('opened')
            }
        });
        if (AUTO) {
            clearTimeout(sto);
            sto = setTimeout(() => {

                next();
            }, 4000);
        }
    }


}


function svgInit() {
    let w = 100, h = 100;
    let svg = addSvg(apdiv, w, h, { style: 'background:"#222222"' });
}





(() => {


    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;

    const gestureZone = document.getElementById('gestureZone');

    gestureZone.addEventListener('touchstart', function (event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    gestureZone.addEventListener('touchend', function (event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGesture();
    }, false);

    function handleGesture() {

        if (Math.abs(touchendX - touchstartX) < 30) return;
        if (touchendX <= touchstartX) {
            console.log('Swiped left');
        }

        if (touchendX >= touchstartX) {
            console.log('Swiped right');
        }

        if (touchendY <= touchstartY) {
            console.log('Swiped up');
        }

        if (touchendY >= touchstartY) {
            console.log('Swiped down');
        }

        if (touchendY === touchstartY) {
            console.log('Tap');
        }
    }

})