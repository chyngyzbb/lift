let people = document.querySelector(".people");
let buttons = document.querySelectorAll(".buttons button");
let city=document.querySelectorAll('.city-one');
let buttonTaxi = document.querySelectorAll(".button-taxi button");
let taxiImg= document.querySelector('.taxi')
let taxiZv= document.querySelector('.taxi-zv')
let lift= document.querySelector('.lift')
let car= document.querySelector('.car')


let taxiLeft = '0px'
let taxiBott = '-110px'
let peopLeft = '0px'
let peopBott = '0px'
console.log(buttons);

car.addEventListener('click',()=>{
    if(taxiLeft !== peopLeft){
        taxiLeft=peopLeft
        taxiFunc()
    }else{
        peopBott='-110px'
        peopleBottomFunc()
    }
})


buttonTaxi.forEach((btnTaxi,idxTaxi)=>{
    btnTaxi.addEventListener('click',()=>{
        if(taxiLeft===peopLeft && peopBott===taxiBott){
            if(idxTaxi===0){
                taxiLeft='0px'
                peopLeft='0px'
                peopleLeftFunc()
                taxiFunc()
            }else if(idxTaxi===1){
                taxiLeft='270px'
                peopLeft='270px'
                peopleLeftFunc()
                taxiFunc()
            }else if(idxTaxi===2){
                taxiLeft='530px'
                peopLeft='530px'
                peopleLeftFunc()
                taxiFunc()
            }else if(idxTaxi===3){
                taxiLeft='790px'
                peopLeft='790px'
                peopleLeftFunc()
                taxiFunc()
            }else if(idxTaxi===4){
                taxiLeft='1060px'
                peopLeft='1060px'
                peopleLeftFunc()
                taxiFunc()
            }else if(idxTaxi===5){
                taxiLeft='1300px'
                peopLeft='1300px'
                peopleLeftFunc()
                taxiFunc()
            }
        }else{
            if(idxTaxi===0){
                taxiLeft='0px'
                taxiFunc()
            }else if(idxTaxi===1){
                taxiLeft='250px'
                taxiFunc()
            }else if(idxTaxi===2){
                taxiLeft='510px'
                taxiFunc()
            }else if(idxTaxi===3){
                taxiLeft='770px'
                taxiFunc()
            }else if(idxTaxi===4){
                taxiLeft='1040px'
                taxiFunc()
            }else if(idxTaxi===5){
                taxiLeft='1300px'
                taxiFunc()
            }
        }
    })
})

buttons.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    if (idx === 0) {
      peopBott = "10px";
      peopleBottomFunc()
      people.style.left = "240px";
    } else if (idx === 1) {
      peopBott = "70px";
      peopleBottomFunc()
    } else if (idx === 2) {
      peopBott = "130px";
      peopleBottomFunc()
    } else if (idx === 3) {
      peopBott = "190px";
      peopleBottomFunc()
    } else if (idx === 4) {
      peopBott = "240px";
      peopleBottomFunc()
    } else if (idx === 5) {
      peopBott = "300px";
      peopleBottomFunc()
    } else if (idx === 6) {
      peopBott = "360px";
      peopleBottomFunc()
    } else if (idx === 7) {
      peopBott = "410px";
      peopleBottomFunc()
    } else if (idx === 8) {
      peopBott = "470px";
      peopleBottomFunc()
    } else if (idx === 9) {
      peopBott = "530px";
      peopleBottomFunc()
    }
  });
});


function peopleBottomFunc(){
    lift.play()
    people.style.bottom=peopBott
}

function taxiFunc(){
    taxiZv.play()
    taxiImg.style.left=taxiLeft
}
function peopleLeftFunc(){
    people.style.left=peopLeft
}
