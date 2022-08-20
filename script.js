const myInput = document.getElementById("header");

// myInput.addEventListener("click", function (e) {
//     console.log(e.target.innerText);
//     document.getElementById("header").innerText = e.target.innerText;
// });



var myAnchor = document.querySelector("#parent a");
console.log(myAnchor.innerHTML);


function textInput(arg) {
    document.getElementById("parent").style.display = "flex";
    document.getElementById("parent").style.alignItems = "center";
    // document.getElementById("parent").style.justifyContent = "space-evenly";
    arg.remove();
    var textBox = document.createElement("textarea");
    var subBtn = document.createElement("button");
    subBtn.id = "subby";
    subBtn.addEventListener("click", function(){
        subBtn.remove();
        textBox.replaceWith(myAnchor);
    })

    textBox.style.height = "100px"
    textBox.style.backgroundColor = "aqua";
    subBtn.style.height = "100px";
    // subBtn.style.marginLeft = "20px";
    subBtn.innerHTML="Click to submit";
    document.getElementById("parent").appendChild(textBox);
    document.getElementById("parent").appendChild(subBtn);
    textBox.addEventListener("input", function (e) {
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);

        document.querySelector("h1#name").innerText = e.target.value;


    })


}


var conReqNum = document.querySelectorAll(".circleLabel p");
console.log(conReqNum);
const reqButtons = document.querySelectorAll(".circles");
console.log(reqButtons);


for (var i=0; i<4; i++) {

    reqButtons[i].addEventListener("click", function(e) {
        e.target.parentElement.parentElement.remove();
        num1 = parseInt((conReqNum[0].innerText));
        console.log(num1 + 1);
        conReqNum[0].innerText = num1 - 1;
        if (e.target == reqButtons[0] || e.target == reqButtons[2]){
            num2 = parseInt(conReqNum[1].innerText);
            conReqNum[1].innerText = num2 + 1;
        }
        else if (e.target == reqButtons[1] || e.target == reqButtons[3]) {
            num2 = parseInt(conReqNum[1].innerText);
            conReqNum[1].innerText = (num2 - 1);
        }
    });


}

