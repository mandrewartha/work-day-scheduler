
//colors change based on time
var currentTime = moment().format("HH")
var currentHour = document.getElementById("first").value
console.log(currentTime)
console.log(currentHour)

timeArray = [9,10,11,12,13,14,15,16,17]

textAreaArray = [
    $("#input"),
    $("#secondinput"),
    $("#thirdinput"),
    $("#fourthinput"),
    $("#fifthinput"),
    $("#sixthinput"),
    $("#seventhinput"),
    $("#eighthinput"),
    $("#ninthinput"),
]

for (let i = 0; i < timeArray.length; i++) {
    if (currentTime < timeArray[i]) {
        textAreaArray[i].addClass("future");
    } else if (currentTime === timeArray[i]) {
        textAreaArray[i].addClass("present");
    } else if (currentTime > timeArray[i]) {
        textAreaArray[i].addClass("past")
    }
}



// function blockColor() {
//     if (currentHour == currentTime) {
//         $(".hour").addClass = "present";  
//     } else if (currentHour > currentTime) {
//         $(".hour").addClass = "future"
//     } else if (currentHour < currentTime) {
//         $(".hour").addClass = "past"
//     }
// }





//current date in jumbotron
var currentDay = moment().format("dddd, MMMM Do, YYYY  h:mm:ss");
$("#currentDay").text(currentDay);

//button click events and save to local storage
var firstBox = document.querySelector("#first-box");
var firstInput = document.querySelector("#firstinput");
var firstSave = localStorage.getItem("text")


btn1.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("text",firstinput.value);
})
firstInput.textContent = firstSave;
////
var secondBox = document.querySelector("#second-box");
var secondInput = document.querySelector("#secondinput");
var secondSave = localStorage.getItem("text2")

btn2.addEventListener("click", function(event) {
    localStorage.setItem("text2",secondinput.value)
})
secondInput.textContent = secondSave;
////
var thirdBox = document.querySelector("#third-box");
var thirdInput = document.querySelector("#thirdinput");
var thirdSave = localStorage.getItem("text3")

btn3.addEventListener("click", function(event) {
    localStorage.setItem("text3",thirdinput.value)
})
thirdInput.textContent = thirdSave;
////
var fourthBox = document.querySelector("#fourth-box");
var fourthInput = document.querySelector("#fourthinput");
var fourthSave = localStorage.getItem("text4")

btn4.addEventListener("click", function(event) {
    localStorage.setItem("text4",fourthinput.value)
})
fourthInput.textContent = fourthSave;
////
var fifthBox = document.querySelector("#fifth-box");
var fifthInput = document.querySelector("#fifthinput");
var fifthSave = localStorage.getItem("text5")

btn5.addEventListener("click", function(event) {
    localStorage.setItem("text5",fifthinput.value)
})
fifthInput.textContent = fifthSave;
/////
var sixthBox = document.querySelector("#sixth-box");
var sixthInput = document.querySelector("#sixthinput");
var sixthSave = localStorage.getItem("text6")

btn6.addEventListener("click", function(event) {
    localStorage.setItem("text6",sixthinput.value)
})
sixthInput.textContent = sixthSave;
//////
var seventhBox = document.querySelector("#seventh-box");
var seventhInput = document.querySelector("#seventhinput");
var seventhSave = localStorage.getItem("text7")

btn7.addEventListener("click", function(event) {
    localStorage.setItem("text7",seventhinput.value)
})
seventhInput.textContent = seventhSave;
//////
var eighthBox = document.querySelector("#eighth-box");
var eighthInput = document.querySelector("#eighthinput");
var eighthSave = localStorage.getItem("text8")

btn8.addEventListener("click", function(event) {
    localStorage.setItem("text8",eighthinput.value)
})
eighthInput.textContent = eighthSave;
////
var ninthBox = document.querySelector("#ninth-box");
var ninthInput = document.querySelector("#ninthinput");
var ninthSave = localStorage.getItem("text9")

btn9.addEventListener("click", function(event) {
    localStorage.setItem("text9",ninthinput.value)
})
ninthInput.textContent = ninthSave;


