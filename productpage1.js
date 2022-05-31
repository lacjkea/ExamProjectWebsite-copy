//Related products swipper
const productContainers = [...document.querySelectorAll('.relatedWrapper')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
//Quantity selector and addint to cart

window.onload=function(){
    var minusBtn = document.getElementById("PPminus"),
        plusBtn = document.getElementById("PPplus"),
        numberPlace = document.getElementById("PPnumberPlace"),
        submitBtn = document.getElementById("PPadd"),
        number = 0, /// number value
        min = 0, /// min number
        max = 30; /// max number
        
    minusBtn.onclick = function(){
        if (number>min){
           number = number-1; /// Minus 1 of the number
           numberPlace.innerText = number ; /// Display the value in place of the number
           
        }
                
    }
    plusBtn.onclick = function(){
        if(number<max){
           number = number+1;
           numberPlace.innerText = number ; /// Display the value in place of the number
        }     
     
           
    }
    submitBtn.onclick = function(){
        alert("Successfully added " + number + " bottles to your cart");
    }
    
}