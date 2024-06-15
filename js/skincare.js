function slider1(){
    const slideChanger = document.getElementById("slider");

    slideChanger.src = '../images/lipbam1.avif' ;
}
function slider2(){
    const slideChanger = document.getElementById("slider");

    slideChanger.src = '../images/lipbam2.avif' ;

}
function slider3(){
    const slideChanger = document.getElementById("slider");

    slideChanger.src = '../images/lipbam3.avif' ;
}
function slider4(){
    const slideChanger = document.getElementById("slider");

    slideChanger.src = '../images/lipbam4.avif' ;
}


function incre(){
    const quantityText = document.getElementById("quantity-text");
    const total = document.getElementById("total");
    const showquantity = document.getElementById("showqauntity")
    let quantity = parseInt(quantityText.innerText);
    if(quantity<10){
    quantityText.innerText = ++quantity;
    }
    else{
        alert('You cant order more than 10 items')
    }
    total.innerText =  `Total:${quantity*247}/-`;
    showqauntity.innerText = `${quantity} x 247`;
 }

 function decre(){
    const quantityText = document.getElementById("quantity-text");
    const total = document.getElementById("total");
    const showquantity = document.getElementById("showqauntity")
    let quantity = parseInt(quantityText.innerText);
    if(quantity>1){
    quantityText.innerText = --quantity;
    }
    else{
        alert('You cant order less than 1 items')
    }
    total.innerText =  `Total:${quantity*247}/-`;
    showqauntity.innerText = `${quantity} x 247`;
   
 }

// foundation  


function slider8(){
    const slideChanger = document.getElementById("slider1");

    slideChanger.src = '../images/serum1.avif' ;
}
function slider5(){
    const slideChanger = document.getElementById("slider1");

    slideChanger.src = '../images/serum2.avif' ;

}
function slider6(){
    const slideChanger = document.getElementById("slider1");

    slideChanger.src = '../images/serum3.avif' ;
}
function slider7(){
    const slideChanger = document.getElementById("slider1");

    slideChanger.src = '../images/serum4.avif' ;
}


function incre1(){
    const quantityText = document.getElementById("quantity-text1");
    const total = document.getElementById("total1");
    const showquantity = document.getElementById("showqauntity1")
    let quantity = parseInt(quantityText.innerText);
    if(quantity<10){
    quantityText.innerText = ++quantity;
    }
    else{
        alert('You cant order more than 10 items')
    }
    total1.innerText =  `Total:${quantity*765}/-`;
    showqauntity1.innerText = `${quantity} x 764`;
 }

 function decre1(){
    const quantityText = document.getElementById("quantity-text1");
    const total = document.getElementById("total1");
    const showquantity = document.getElementById("showqauntity1")
    let quantity = parseInt(quantityText.innerText);
    if(quantity>1){
    quantityText.innerText = --quantity;
    }
    else{
        alert('You cant order less than 1 items')
    }
    total1.innerText =  `Total:${quantity*764}/-`;
    showqauntity1.innerText = `${quantity} x 764`;
   
 }

// kajal


function slider9(){
    const slideChanger = document.getElementById("slider2");

    slideChanger.src = '../images/gel1.avif' ;
}
function slider10(){
    const slideChanger = document.getElementById("slider2");

    slideChanger.src = '../images/gel2.avif' ;

}
function slider11(){
    const slideChanger = document.getElementById("slider2");

    slideChanger.src = '../images/gel3.avif' ;
}
function slider12(){
    const slideChanger = document.getElementById("slider2");

    slideChanger.src = '../images/gel4.avif' ;
}


function incre2(){
    const quantityText = document.getElementById("quantity-text2");
    const total = document.getElementById("total2");
    const showquantity = document.getElementById("showqauntity2")
    let quantity = parseInt(quantityText.innerText);
    if(quantity<10){
    quantityText.innerText = ++quantity;
    }
    else{
        alert('You cant order more than 10 items')
    }
    total2.innerText =  `Total:${quantity*765}/-`;
    showqauntity2.innerText = `${quantity} x 764`;
 }

 function decre2(){
    const quantityText = document.getElementById("quantity-text2");
    const total = document.getElementById("total2");
    const showquantity = document.getElementById("showqauntity2")
    let quantity = parseInt(quantityText.innerText);
    if(quantity>1){
    quantityText.innerText = --quantity;
    }
    else{
        alert('You cant order less than 1 items')
    }
    total2.innerText =  `Total:${quantity*764}/-`;
    showqauntity2.innerText = `${quantity} x 764`;
   
 }

//  neil polish

function slider13(){
    const slideChanger = document.getElementById("slider3");

    slideChanger.src = '../images/facewash1.avif' ;
}
function slider14(){
    const slideChanger = document.getElementById("slider3");

    slideChanger.src = '../images/facewash2.avif' ;

}
function slider15(){
    const slideChanger = document.getElementById("slider3");

    slideChanger.src = '../images/facewash3.avif' ;
}
function slider16(){
    const slideChanger = document.getElementById("slider3");

    slideChanger.src = '../images/facewash4.avif' ;
}


function incre3(){
    const quantityText = document.getElementById("quantity-text3");
    const total = document.getElementById("total3");
    const showquantity = document.getElementById("showqauntity3")
    let quantity = parseInt(quantityText.innerText);
    if(quantity<10){
    quantityText.innerText = ++quantity;
    }
    else{
        alert('You cant order more than 10 items')
    }
    total3.innerText =  `Total:${quantity*240}/-`;
    showqauntity3.innerText = `${quantity} x 240`;
 }

 function decre3(){
    const quantityText = document.getElementById("quantity-text3");
    const total = document.getElementById("total3");
    const showquantity = document.getElementById("showqauntity3")
    let quantity = parseInt(quantityText.innerText);
    if(quantity>1){
    quantityText.innerText = --quantity;
    }
    else{
        alert('You cant order less than 1 items')
    }
    total3.innerText =  `Total:${quantity*240}/-`;
    showqauntity3.innerText = `${quantity} x 240`;
   
 }


//  blush

function slider17(){
    const slideChanger = document.getElementById("slider4");

    slideChanger.src = '../images/cream.avif' ;
}
function slider18(){
    const slideChanger = document.getElementById("slider4");

    slideChanger.src = '../images/crem2.avif' ;

}
function slider19(){
    const slideChanger = document.getElementById("slider4");

    slideChanger.src = '../images/cream3.avif' ;
}
function slider20(){
    const slideChanger = document.getElementById("slider4");

    slideChanger.src = '../images/cream4.avif' ;
}


function incre4(){
    const quantityText = document.getElementById("quantity-text4");
    const total = document.getElementById("total4");
    const showquantity = document.getElementById("showqauntity4")
    let quantity = parseInt(quantityText.innerText);
    if(quantity<10){
    quantityText.innerText = ++quantity;
    }
    else{
        alert('You cant order more than 10 items')
    }
    total4.innerText =  `Total:${quantity*94}/-`;
    showqauntity4.innerText = `${quantity} x 94`;
 }

 function decre4(){
    const quantityText = document.getElementById("quantity-text4");
    const total = document.getElementById("total4");
    const showquantity = document.getElementById("showqauntity4")
    let quantity = parseInt(quantityText.innerText);
    if(quantity>1){
    quantityText.innerText = --quantity;
    }
    else{
        alert('You cant order less than 1 items')
    }
    total4.innerText =  `Total:${quantity*94}/-`;
    showqauntity4.innerText = `${quantity} x 94`;
   
 }

//  contour

function slider21(){
    const slideChanger = document.getElementById("slider5");

    slideChanger.src = '../images/gloss1.avif' ;
}
function slider22(){
    const slideChanger = document.getElementById("slider5");

    slideChanger.src = '../images/gloss2.avif' ;

}
function slider23(){
    const slideChanger = document.getElementById("slider5");

    slideChanger.src = '../images/gloss3.avif' ;
}
function slider24(){
    const slideChanger = document.getElementById("slider5");

    slideChanger.src = '../images/gloss4.avif' ;
}


function incre5(){
    const quantityText = document.getElementById("quantity-text5");
    const total = document.getElementById("total5");
    const showquantity = document.getElementById("showqauntity5")
    let quantity = parseInt(quantityText.innerText);
    if(quantity<10){
    quantityText.innerText = ++quantity;
    }
    else{
        alert('You cant order more than 10 items')
    }
    total5.innerText =  `Total:${quantity*1500}/-`;
    showqauntity5.innerText = `${quantity} x 1500`;
 }

 function decre5(){
    const quantityText = document.getElementById("quantity-text5");
    const total = document.getElementById("total5");
    const showquantity = document.getElementById("showqauntity5")
    let quantity = parseInt(quantityText.innerText);
    if(quantity>1){
    quantityText.innerText = --quantity;
    }
    else{
        alert('You cant order less than 1 items')
    }
    total5.innerText =  `Total:${quantity*1500}/-`;
    showqauntity5.innerText = `${quantity} x 1500`;
   
 }
