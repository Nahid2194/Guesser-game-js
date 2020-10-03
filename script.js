var randomValue =Math.ceil(Math.random()*10);
console.log(randomValue);
let guessBtn = document.getElementById("guessBtn");
let total = 1;
let ifMatched = document.getElementById("ifMatched");


guessBtn.addEventListener("click",function(e){
    e.preventDefault()
    let guessValue = document.querySelector("input").value;
    if(total <= 3){
        if(randomValue == guessValue ){
            ifMatched.innerHTML = "got lucky! You have won.";
            alert("You Win");
            guessBtn.disabled = true;
            //console.log("Matched");
        }else if (total == 3) {
            ifMatched.innerHTML = ` Unlucky! You have Lost. result was ${randomValue}`;
            guessBtn.disabled = true;
        }else{
            if(randomValue > guessValue ){
                alert("Correct answer is greater!");
            }else{
                alert("Correct answer is smaller!");
            }
            ifMatched.innerHTML = `You have ${3-total} guess left! Hurry Up!!`
            total = total+1;
        }
    }
    document.querySelector("input").value = '';
   // console.log(guessValue);
    
})
