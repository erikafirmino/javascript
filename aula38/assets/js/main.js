const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

//Estilos de Css computados no body
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody)

for(let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
   
}

//rgb(4, 191, 191)