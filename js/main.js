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
   

     
 

});