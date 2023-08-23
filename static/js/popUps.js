function showPopUp(state){

    // page not found 
    if(state == 0){
        var popUp = document.getElementById("popup-container");

        popUp.classList.add("active");
    }
    else{
        window.location="index.html"
    }

}


function closePopUp(){
    
    var popUp = document.getElementById("popup-container");

    popUp.classList.remove("active")

}