$(document).ready(function () {
    

         

    //slider
    $(function(){
        $('.Galeria').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200,
          responsive: true,
          speed: 1000,
        });
      });


    //post
    
    const post= [
       {
           title: "prueba de titulo",
           date: ' publicado el dia ' +  moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
           content: "ted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
       },
       {
        title: "prueba de titulo 2",
        date: ' publicado el dia ' +  moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: "ted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
    },
    {
        title: "prueba de titulo 3",
        date: ' publicado el dia ' +  moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: "ted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
    },
    {
        title: "prueba de titulo 4",
        date: ' publicado el dia ' +  moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: "ted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
    },
    {
        title: "prueba de titulo 5",
        date: ' publicado el dia ' +  moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: "ted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
    },

    ];
    

    

     post.forEach((element, index)=>{
 
     let post= `
        <article class="post">
        <h2>${element.title}</h2>
        <span class="date">Fecha de publicacion</span>
        <p> ${element.content}</p>
        <a href="#" class="boton">Leer Más</a> 
        </article>

    `;
    //para añadir el post que me he creado arriba
    $("#posts").append(post);

    });



    //hacer el tema con local storage.

        //esto se carga al iniciar la pagina web
        var tema=$("#theme");
        var cargado=localStorage.getItem("color");
        //si no existe color guardado en el localstorage va a retornar null y lo validamos con un if
        if(cargado==null){
            cargado="css/green.css";
        }
    //cargamos el tema
        tema.attr("href",cargado);     
     
    //.... todo el codigo de javascript que ya tenemos
     
         $("#to-green").click(function(){
          //cargamos la ruta del css en una variable
          let green="css/green.css"; 
          tema.attr("href",green);
           // lo guardamos en el localStorage
          localStorage.setItem("color",green)
        });
     
        $("#to-red").click(function(){
          let red="css/red.css";
          tema.attr("href",red);
          localStorage.setItem("color", red);
        });
     
        $("#to-blue").click(function(){
            let blue="css/blue.css"
            tema.attr("href",blue);
            localStorage.setItem("color", blue);
        }); 
        
        $("#to-violet").click(function(){
            let violet= "css/style.css"
            tema.attr("href", violet );
            localStorage.setItem("color", violet);  
        });





    
        
    //otra forma de hacer el tema sin localstorage    

    /* //selector de temas.
    let theme= $("#theme"); 
    $("#to-green").click(function(){
       theme.attr("href", "css/green.css" )
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css" )
    });

     $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css" )
    });


     //color por defecto
     
     

     $("#to-violet").click(function(){
        theme.attr("href", "css/style.css")     
    });
 */
   
   /* scroll con el boton ir arriba */


   //se puede de esta forma: 


  /*  $(".subir").click(function(){
    $(this).scrollTop(0);
   }) */
     

   // o se puede de estar otra forma
  
   $(".subir").click(function(e){
       e.preventDefault();

       $("html, body").animate({
           scrollTop: 0
       }, 800);
       return false;
   })
 

   //login falso
    $("#login form").submit(function () { 
   var formularioName= $("#formName").val();
   localStorage.setItem("nombre", formularioName);   
   });

   var formularioName= localStorage.getItem("nombre");
   if(formularioName != null && formularioName != "undefined"){
       let nombre= $("#nombre");
       nombre.html("<strong> Bienvenido," + formularioName + "</strong>")
       nombre.append("<a href='#' id='logout'>Cerrar Sesión</a><br>")
       $("#login").hide();

       $("#logout").click(function(){
           localStorage.removeItem("nombre")
           //cuando cierre sesion quiero que me actualice pantalla
           location.reload();
       })
   }
   

   //acordeon

   if(window.location.href.indexOf("about")> -1){
       $("#acordeon").accordion();
      
   }


   //reloj

   if(window.location.href.indexOf("reloj")> -1){
    
    //con el set interval hago que se actualice cada segundo.
    setInterval(function(){
        const reloj= moment().format("hh:mm:ss");
        $("#reloj").html(reloj);
        //con este mil, le digo que actualice cada 100 milisegundos, es decir, cada segundo
    }, 1000);
   
}
    

//validacion formulario


if(window.location.href.indexOf("contacto")> -1){
  

  $.validate({
      lang: "es",
      //posicion del mensaje
      errorMessagePosition: "top",
      scrollTopOnError: true
  })

}



  

});