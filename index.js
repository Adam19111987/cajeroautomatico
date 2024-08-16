precio = 400000
nuevo_precio = Math.abs(precio)

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

cantidadSpan = document.querySelector('.cantidad');
incrementar = document.querySelector('.incrementar');
descremento = document.querySelector('.descremento');
total_pagar = document.querySelector('.valor-total');

incrementar.addEventListener('click', function(){
    cantidad = Number(cantidadSpan.innerHTML);
    nuevo_incremento = cantidad + 1;
    cantidadSpan.innerHTML = nuevo_incremento;

    valor = nuevo_precio * nuevo_incremento;
    total_pagar.innerHTML = valor;


})

descremento.addEventListener('click', function(){
 
    cantidad = Number(cantidadSpan.innerHTML);
    nuevo_descremento = cantidad - 1;
    if(nuevo_descremento >= 0)
    {cantidadSpan.innerHTML = nuevo_descremento;}
    else{}
    
    valor = nuevo_precio * nuevo_descremento;
    total_pagar.innerHTML = valor;


})