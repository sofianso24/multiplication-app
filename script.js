num1 = Math.floor(Math.random()*10) 
num2 = Math.floor(Math.random()*10) 
result = num1 * num2

multPhrase = document.getElementById("multiplication-phrase")
score  = document.getElementById("score")
userResult = document.getElementById("result")
formEl = document.getElementById("form")

let userScore = JSON.parse(localStorage.getItem("score")) 
if(!userScore){
    userScore = 0
}

multPhrase.innerText = `what is the result of ${num1} multiple ${num2}`

score.innerText = `score : ${userScore}`


formEl.addEventListener("submit",()=>{
    const userAnswer =  JSON.parse(userResult.value) 
     if(userAnswer === result){
         userScore++
         console.log(userScore);
         updateScore
     } else{
        userScore--
        console.log(userScore);

        updateScore
     }
})

const updateScore = ()=>{
    localStorage.setItem("score", JSON.stringify(userScore))
}


