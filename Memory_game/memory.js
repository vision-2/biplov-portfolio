 let gameBoard = document.querySelector('.board');
let gameCharacters = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F'];
let button=document.getElementById("button")
let selectedValues=[]
let randomValues = gameCharacters.sort(() => Math.random() - 0.5);
let totalpair=selectedValues.length;

randomValues.forEach((item, index) => {
    let card = document.createElement('div');
    card.className = 'card';
    card.textContent = item;
    console.log(randomValues);
    gameBoard.append(card);
 
    card.addEventListener("click", flip);
});
function flip(){
    this.classList.toggle('flip');
    selectedValues.push(this);
    console.log(this);
    if(selectedValues.length==2){
        setTimeout(checkForMatch,500)
       
}
function checkForMatch(){
    if(selectedValues[0].textContent==selectedValues[1].textContent){
        selectedValues[0].removeEventListener("click",flip);
        selectedValues[1].removeEventListener("click",flip)
    }
    else{
        selectedValues[0].classList.remove('flip');
        selectedValues[1].classList.remove('flip');
    }
    selectedValues=[];
}
}
button.addEventListener('click',()=>{
    window.location.reload();
});