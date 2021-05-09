let menuItem = document.getElementById("menuItem")


menuItem.style.maxHeight= "0px";

function menuToggle(){
    if(menuItem.style.maxHeight == "0px"){
        menuItem.style.maxHeight = "200px"
    }else{
        menuItem.style.maxHeight = "0px"
    }
}


//JS FOR PRODUCT GALLERY

let productImg = document.getElementById("productImg") 
let smallImg = document.getElementsByClassName("small-img")


smallImg[0].onclick = function(){
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    productImg.src = smallImg[3].src;
}

/*-----------------js for toggle Form--------------*/

