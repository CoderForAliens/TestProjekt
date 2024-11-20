// Array

let myArray = [];


// Functions

function addPurple(){
    let inputValue = document.getElementById("purpleText").value;
    if(inputValue == 0){
        alert("Bitte fülle in Text aus");
        return false;
        

    }
    myArray.push(inputValue);
    document.getElementById("postPurple").innerHTML = '';

    getLocal();
    loadFor();
}


// Local Storage 

function getLocal(){
    localStorage.setItem("key", JSON.stringify(myArray));
}

function setLocal(){
    let setLocal = localStorage.getItem("key");
    if(setLocal){
        myArray = JSON.parse(setLocal);
    }
}


// Load Content

function loadFor(){
    
    for(let i = 0; i < myArray.length; i++){
        document.getElementById("postPurple").innerHTML += `<li>${myArray[i]}</li>`;
    }
}

// Load all

function loadPage(){
    setLocal();
    loadFor();
}