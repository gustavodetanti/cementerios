`

Svg.js
 
`

export function addSvg(parent, w,h,attrs) {



    let g = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    g.setAttribute("width", w||1000);
    g.setAttribute("height", h||600);
    g.setAttribute("viewBox", `0 0 ${w||1000} ${h||600}`);
  
    if (attrs) {

        for (let i in attrs) {

            g.setAttribute(i, attrs[i]);
        }

    }

    parent.appendChild(g);
    return g;



}

export function addSvgElement(parent, nodename, attrs) {

    let g = document.createElementNS("http://www.w3.org/2000/svg", nodename);
    if (attrs) {

        for (let i in attrs) {

            g.setAttribute(i, attrs[i]);
        }

    }

    parent.appendChild(g);
    return g;

}


export function setAttrs(el,attrs){
    for (let i in attrs) {

        el.setAttribute(i, attrs[i]);
    }


}
 