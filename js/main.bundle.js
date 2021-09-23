(() => {
  // src/components/getElementSize.js
  function getElementSize(ele) {
    const styles = window.getComputedStyle(ele);
    const height = ele.clientHeight - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom);
    const width = ele.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
    console.log({ w: width, h: height, top: ele.offsetTop, left: ele.offsetLeft });
    return { w: width, h: height, top: ele.offsetTop, left: ele.offsetLeft };
  }

  // src/components/VerticalTexts.js
  function VerticalTexts(container, LEFT_TEXT, RIGHT_TEXT) {
    let off = 0;
    let marg = 24;
    let size = getElementSize(container.parentNode);
    console.log(off, marg, "margins");
    let div = document.createElement("div");
    let l_div = document.createElement("div");
    let r_div = document.createElement("div");
    let style = `opacity:0.99;pointer-events: none;position:absolute;top:${size.top}px;
left:${size.left - off}px;
height:${size.h}px;width:${size.w + off * 2}px;background:none;`;
    let b_style = `color:black;pointer-events: none;
position:absolute;top:${size.h / 2}px;letter-spacing:2px;`;
    let l_style = `${b_style}left:${marg}px;transform:rotateZ(-90deg);`;
    let r_style = `${b_style}right:${marg}px;transform:rotateZ(90deg);`;
    l_div.innerHTML = LEFT_TEXT;
    r_div.innerHTML = RIGHT_TEXT;
    l_div.style.cssText = l_style;
    r_div.style.cssText = r_style;
    div.style.cssText = style;
    container.appendChild(div);
    div.appendChild(l_div);
    div.appendChild(r_div);
    window.addEventListener("resize", align);
    align();
    function align() {
      size = getElementSize(container.parentNode);
      style = `opacity:0.8;pointer-events: none; 
 position:absolute;
 top:${size.top}px;
 left:${size.left - off}px;
 height:${size.h}px;
 width:${size.w + off * 2}px;
 background:none;`;
      b_style = `color:black;
pointer-events: none;
position:absolute;
top:${size.h / 2}px;
letter-spacing:2px;
background:#00000033;
padding:12px 8px;
`;
      l_style = `${b_style}left:${marg}px;transform:rotateZ(-90deg);`;
      r_style = `${b_style}right:${marg}px;transform:rotateZ(90deg);`;
      l_div.style.cssText = l_style;
      r_div.style.cssText = r_style;
      div.style.cssText = style;
    }
  }

  // src/frasesCuerpo.js
  function rand(arr) {
    return arr[parseInt(Math.random() * arr.length)];
  }
  function XF() {
    var sums = [
      "muerto",
      "ata\xFAd",
      "foso",
      "cementerio",
      "tiempo",
      "suelo",
      "ritual",
      "pensamiento",
      "destino",
      "tiempo",
      "principio",
      "mundo"
    ];
    var sump = [
      "deudos",
      "rituales",
      "muertos",
      "cementerios",
      "finales",
      "mundos"
    ];
    var sufs = [
      "muerte",
      "vida",
      "eternidad",
      "morada"
    ];
    var sufp = [
      "urnas",
      "pesta\xF1as",
      "nalgas",
      "rodillas",
      "venas",
      "l\xE1grimas",
      "manos",
      "u\xF1as",
      "palabras",
      "piernas",
      "mitades",
      "partes",
      "miradas",
      "hojas",
      "ramas",
      "calles",
      "veredas",
      "esquinas",
      "vidrieras",
      "luces",
      "ventanas",
      "avenidas"
    ];
    var arms = [
      "el",
      "el",
      "el",
      "el",
      "el",
      "el",
      "el",
      "el",
      "mi",
      "tu",
      "este",
      "nuestro",
      "su"
    ];
    var arfs = [
      "la",
      "mi",
      "tu",
      "esta",
      "nuestra",
      "la",
      "la",
      "la",
      "la",
      "la",
      "la",
      "la",
      "su"
    ];
    var conj = [
      "de",
      "de",
      "en",
      "en",
      "en",
      "dentro de",
      "cerca de",
      "busca",
      "y",
      "encuentra",
      "y",
      "y",
      "come",
      "toma",
      "lastima",
      "acaricia",
      "sue\xF1a con",
      "golpea en",
      "busca",
      "pierde",
      "raspa",
      "se traga",
      "escupe",
      "abraza",
      "quema",
      "absorbe",
      "deshace",
      "pierde",
      "habla en",
      "se cae en",
      "surge de",
      "entiende",
      "comprende",
      "ve",
      "percibe",
      "huele",
      "siente"
    ];
    var armp = [
      "los",
      "los",
      "los",
      "los",
      "mis",
      "tus",
      "estos",
      "nuestros",
      "sus"
    ];
    var arfp = [
      "las",
      "mis",
      "tus",
      "estas",
      "nuestras",
      "las",
      "las",
      "las",
      "las",
      "las",
      "las",
      "sus"
    ];
    var co_p = [
      "de",
      "de",
      "en",
      "en",
      "en",
      "dentro de",
      "sobre",
      "cerca de",
      "buscan",
      "y",
      "encuentran",
      "y",
      "y",
      "comen",
      "toman",
      "lastiman",
      "acarician",
      "sue\xF1an con",
      "golpean en",
      "buscan",
      "pierden",
      "raspan",
      "se tragan",
      "escupen",
      "abrazan",
      "queman",
      "absorben",
      "deshacen",
      "pierden",
      "hablan en",
      "se caen en",
      "surgen de",
      "ven",
      "perciben",
      "huelen",
      "sienten"
    ];
    var TYPES = [];
    TYPES["sums"] = sums;
    TYPES["sump"] = sump;
    TYPES["sufs"] = sufs;
    TYPES["sufp"] = sufp;
    TYPES["arms"] = arms;
    TYPES["armp"] = armp;
    TYPES["arfs"] = arfs;
    TYPES["arfp"] = arfp;
    function fn(gn) {
      var fr = gn ? gn[2] : [];
      var gen = gn ? gn[0] : rand([true, false]);
      var num = gn ? gn[1] : rand([true, false]);
      getSujeto([gen, num, fr]);
      if (num)
        fr.push(rand(conj));
      else
        fr.push(rand(co_p));
      gen = rand([true, false]);
      num = rand([true, false]);
      getSujeto([gen, num, fr]);
      var frr = fr.join(" ");
      frr = frr.substring(0, 1).toUpperCase() + frr.substring(1) + ".";
      frr = frr.split(" de el ").join(" del ");
      frr = frr.split(" y i").join(" e i");
      frr = frr.split(" o o").join(" u o");
      return frr;
    }
    function getSujeto(gn) {
      var fr = gn ? gn[2] : [];
      var gen = gn ? gn[0] : rand([true, false]);
      var num = gn ? gn[1] : rand([true, false]);
      var xx;
      if (gen) {
        if (num) {
          fr.push(rand(arms));
          fr.push(rand(sums));
        } else {
          fr.push(rand(armp));
          fr.push(rand(sump));
        }
      } else {
        if (num) {
          fr.push(rand(arfs));
          fr.push(rand(sufs));
        } else {
          fr.push(rand(arfp));
          fr.push(rand(sufp));
        }
      }
      return fr.join(" ");
    }
    function getfrase() {
      var fr = [];
      var gen = parseInt(Math.random() * 2) == 0 ? true : false;
      var num = parseInt(Math.random() * 2) == 0 ? true : false;
      var xx;
      getSujeto([gen, num, fr]);
      if (num)
        fr.push(rand(conj));
      else
        fr.push(rand(co_p));
      gen = parseInt(Math.random() * 2) == 0 ? true : false;
      num = parseInt(Math.random() * 2) == 0 ? true : false;
      if (gen) {
        if (num) {
          fr.push(arms[parseInt(Math.random() * arms.length)]);
        } else {
          fr.push(armp[parseInt(Math.random() * armp.length)]);
        }
        if (num)
          fr.push(sums[parseInt(Math.random() * sums.length)]);
        else
          fr.push(sump[parseInt(Math.random() * sump.length)]);
      } else {
        if (num) {
          fr.push(arfs[parseInt(Math.random() * arfs.length)]);
          fr.push(sufs[parseInt(Math.random() * sufs.length)]);
        } else {
          fr.push(arfp[parseInt(Math.random() * arfp.length)]);
          fr.push(sufp[parseInt(Math.random() * sufp.length)]);
        }
      }
      if (parseInt(Math.random() * 5) == 0) {
        fr.push("de");
        gen = parseInt(Math.random() * 2) == 0 ? true : false;
        if (gen) {
          fr.push(arms[parseInt(Math.random() * arms.length)]);
          fr.push(sums[parseInt(Math.random() * sums.length)]);
        } else {
          fr.push(arfs[parseInt(Math.random() * arfs.length)]);
          fr.push(sufs[parseInt(Math.random() * sufs.length)]);
        }
      }
      var frr = fr.join(" ");
      frr = frr.substring(0, 1).toUpperCase() + frr.substring(1) + ".";
      frr = frr.split(" de el ").join(" del ");
      frr = frr.split(" y i").join(" e i");
      frr = frr.split(" o o").join(" u o");
      return frr;
    }
    ;
    return {
      frase: getfrase
    };
  }

  // src/main.js
  var AUTO = false;
  var apdiv;
  var xf;
  window.addEventListener("DOMContentLoaded", (event) => {
    apdiv = document.getElementById("js-app");
    xf = XF();
    init();
  });
  function init() {
    let sto;
    let slides = [...document.querySelectorAll(".slider > div")];
    let index = 0;
    let n = slides.length;
    slides.map((s) => {
      VerticalTexts(s, xf.frase(), xf.frase());
      let sub = s.querySelector(".subslides");
      if (sub)
        SectionSlider(sub);
    });
    let prevSection = document.getElementById("prevSection");
    let nextSection = document.getElementById("nextSection");
    prevSection.addEventListener("click", prev);
    nextSection.addEventListener("click", next);
    showActual();
    function next() {
      index++;
      if (index >= n)
        index = 0;
      showActual();
    }
    function prev() {
      index--;
      if (index < 0)
        index = n - 1;
      showActual();
    }
    function showActual() {
      let adv = slides[index];
      console.log(index);
      slides.map((s, i) => {
        if (i == index) {
          s.classList.add("opened");
        } else {
          s.classList.remove("opened");
        }
      });
      if (AUTO) {
        clearTimeout(sto);
        sto = setTimeout(() => {
          next();
        }, 4e3);
      }
    }
  }
  function SectionSlider(div) {
    let slides = [...div.children];
    console.log(slides.length, "sub slides");
  }
})();
