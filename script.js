const cardContainer=document.getElementById('card-container');
const prevEl=document.getElementById('prev');
const nextEl=document.getElementById('next');
const currentEl=document.getElementById('current');
const warningEl=document.getElementById('warning');
let cardsList=[];
let currentActivate=0;
function createCard(){
    const card =document.createElement('div');
    card.classList.add('card');
    card.innerHTML=`
        <div class="inner-card">
            <div>hola</div>
        </div>
    `;
    cardsList.push(card);
    cardContainer.appendChild(card)
    updateCurrentText();
}
function updateCurrentText(){
    currentEl.innerText=`
        ${currentActivate+1}/${cardsList.length}
    `;
}
updateCurrentText()
createCard()
warningEl.addEventListener('click',()=>{
    createCard();
})
prevEl.addEventListener('click',()=>{
    cardsList[currentActivate].className='card right';
    currentActivate--;
    if(currentActivate<0){
        currentActivate=0
    }
    cardsList[currentActivate].className='card active';
    updateCurrentText()
});
nextEl.addEventListener('click',()=>{
    cardsList[currentActivate].className='card left';
    currentActivate++;
    if(currentActivate>cardsList.length-1){
        currentActivate=cardsList.length-1;
    }
    cardsList[currentActivate].className='card active';
    updateCurrentText();
})