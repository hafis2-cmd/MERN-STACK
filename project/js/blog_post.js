document.addEventListener("DOMContentLoaded", function(){
    var textOptions=[
       "Welcome to our Blog",
       "Discover amazing articles",
       "Dive into thought-provoking content",
       "Stay informed with our blog posts",
       "Journey through our diverse articles",
       "Enagage with compelling stories"
    ];

    var randomIndex=Math.floor(Math.random()*textOptions.length);

    var h1Element=document.getElementById('greetings');

    if(h1Element){
        h1Element.textContent=textOptions[randomIndex];
    }else{
        console.error("Error Occured");
    }
});