var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pig-latin.json"

function getTranslation(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error ocurred", error);
    alert("something is wrong!Try again later")
}

function clickHandler () {
    var inputText = txtInput.Value;

  fetch(getTranslation(inputText))
    .then(response => response.json())    
    .then( json => {
       var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
      })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)
