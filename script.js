const cardContainer=document.getElementById('card-container');
const prevEl=document.getElementById('prev');
const nextEl=document.getElementById('next');
function createCard(){
    const card =document.createElement('div');
    card.classList.add('card');
    cardContainer.innerHTML=`
        <div class="inner-card">
            <div>hola</div>
        </div>
    `;
}
document.addEventListener('click',()=>{
    createCard();
})
prevEl.addEventListener('click',()=>{
    
})