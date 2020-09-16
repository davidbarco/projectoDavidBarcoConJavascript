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
           date: moment().format("MMMM Do YYYY"),
           content: "ted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
       },
       {
        title: "prueba de titulo 2",
        date: new Date(),
        content: "ted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
    },
    {
        title: "prueba de titulo 3",
        date: new Date(),
        content: "ted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
    },
    {
        title: "prueba de titulo 4",
        date: new Date(),
        content: "ted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
    },
    {
        title: "prueba de titulo 5",
        date: new Date(),
        content: "ted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
    },

    ];
    console.log(post)
    

});