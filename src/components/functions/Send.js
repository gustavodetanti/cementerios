

export function Send(url,fn,obj,com){

let formData = new FormData();


if(com && obj){
// se envia con dos paramentros $com=com y $data=obj 
    formData.append('com', com);
    formData.append('data', JSON.stringify(obj));


 
fetch(url,
    {
        body: formData,
        method: "post"
    }).then(data=>data.json()).then(json=>{

if(fn)fn(json);

    }).catch(err=>{
console.log(err);
if(fn)fn({"error":"error de datos leyendo "+url})
    });
} else 

if(obj){
// cada prop del obj como parametro POST separodo
for(var k in obj){
    formData.append(k, obj[k]);
 }
 fetch(url,
    {
        body: formData,
        method: "post"
    }).then(data=>data.json()).then(json=>{

if(fn)fn(json);

    }).catch(err=>{
console.log(err);
if(fn)fn({"error":"error de datos leyendo "+url})
    });



} else {
// no com ni obj, solo levanta data
fetch(url).then(data=>data.json()).then(json=>{
    if(fn)fn(json);
}).catch(err=>{
    console.log(err);
if(fn)fn({"error":"error de datos leyendo "+url})
})

}

}

