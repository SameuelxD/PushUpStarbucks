
function cambiarImagenPrincipal(img){
    document.getElementById('imagen_principal').src=img;
}

var productoUno=document.getElementById('producto_uno');
var productoDos=document.getElementById('producto_dos');
var productoTres=document.getElementById('producto_tres');
var startbucks=document.getElementById('starbucks');
var circulo=document.getElementById('circulo');
var imagenPrincipal=document.getElementById('img_principal'); 

productoUno.addEventListener('click',function(){
    startbucks.style.color="#017143";
    circulo.style.background="#017143";
})
productoDos.addEventListener('click',function(){
    startbucks.style.color="#eebbc6";
    circulo.style.background="#eebbc6";
})
productoTres.addEventListener('click',function(){
    startbucks.style.color="#d149aa";
    circulo.style.background="#d149aa";
})