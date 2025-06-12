document.addEventListener("DOMContentLoaded",function(){
    function getRandomColor(){
        var letters='0123456789ABCDEF';
        var color='#';
        for(i=0;i<6;i++){
            color+=letters[Math.floor(Math.random()*16)];
        }

        return color;
    }

    document.body.style.backgroundColor=getRandomColor();
});