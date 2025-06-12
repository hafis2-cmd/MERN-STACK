document.addEventListener("DOMContentLoaded",function(){
    var visitCount=localStorage.getItem("aboutPageVisitCount") || 0;
    visitCount++;
    alert("VisitCount : "+visitCount+' times.');
    localStorage.setItem("aboutPageVisitCount",visitCount);
});