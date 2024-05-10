var score1 = document.getElementById("score1")
var score2 = document.getElementById("score2")
var score3 = document.getElementById("score3")
var score4 = document.getElementById("score4")


var btn = document.getElementById("button")

btn.onclick = function(){
    averageval = (Number(score1.value) + Number(score2.value) + Number(score3.value) + Number(score4.value))/4
    var average = document.getElementById("childLabel2")
    average.innerText = averageval

}
