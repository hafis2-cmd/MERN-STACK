document.addEventListener("DOMContentLoaded",function(){
    var contactForm=document.getElementById("contactForm");
    contactForm.addEventListener("submit",function(event){
        if(!validateForm()){
            event.preventDefault();  //used to prevent form submission if validation failed
        }
    });

    function validateForm(){
    var name=document.getElementById("name").value;
    var mobile=document.getElementById("mobile").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;

    if(name.trim()==='' || mobile.trim()==='' || email.trim()==='' || message.trim()===''){
        alert("Please fill out all fields.");
        return false;
    }

    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;    //Regex means regular expression.
    console.log("Email entered:", email); 
    if(!emailRegex.test(email)){
        alert("Please enter a valid email id.");
        return false;
    }

    return true;  //form is valid.
}
});