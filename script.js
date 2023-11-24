// const submitButton = document.getElementsByClassName('.btn');
// const ratingCard = document.getElementById('rating-card');
// const ratingThankCard = document.getElementById('thank-you-card');
// const ratingGivenBy = document.getElementById('chip');
// const ratingSelectBtn = document.getElementsByClassName('.circle');

const ratingCard = document.querySelector(".rating-card");
const ratingThankCard = document.querySelector(".rating-thank-card");

const submitButton = document.querySelector(".btn");

const ratings = document.querySelectorAll(".circle_rating_btn")
const ratingPoint = document.getElementById("rate");


ratingThankCard.style.display = 'none';

function toggleCard(){
    if(ratingThankCard.style.display == 'none'){
        ratingCard.style.display = 'none';
        ratingThankCard.style.display = 'block';
    }
}

var rate = null;

ratings.forEach((rating)=>{
    rating.addEventListener("click", (e)=>{
        const active = document.querySelector(".checked");
        if(active){
            active.classList.remove("checked");
        }

        const card = e.target;
        card.classList.add("checked");
        rate = e.target.innerText;
    })
})


submitButton.addEventListener("click", () => {
 
    if(rate){
        ratingPoint.innerText = rate;
        toggleCard();
    }
  

});