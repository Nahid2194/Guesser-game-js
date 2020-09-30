var randomValue =Math.ceil(Math.random()*10);
console.log(randomValue);
let guessBtn = document.getElementById("guessBtn");
let total = 1;
let ifMatched = document.getElementById("ifMatched");


guessBtn.addEventListener("click",function(e){
    e.preventDefault()
    let guessValue = document.querySelector("input").value;
    if(total < 3){
        if(randomValue == guessValue ){
            ifMatched.innerHTML = "got lucky! You have won.";
            //console.log("Matched");
        }
        else{
            ifMatched.innerHTML = `You have ${3-total} guess left! Hurry Up!!`
            total = total+1;
        }
    }else if (total == 3) {
        ifMatched.innerHTML = ` Unlucky! You have Lost. result was ${randomValue}`
        guessBtn.disabled = true;
    } 
    document.querySelector("input").value = '';
   // console.log(guessValue);
    
})
