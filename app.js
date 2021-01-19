var input=document.querySelector("#input-txt");
var btn=document.querySelector("#trans-btn")
var output=document.querySelector("#output-txt");
var url="https://api.funtranslations.com/translate/minion.json";
var text;
function translate(text){
    return url+"?"+"text="+text;
}
function takeinput(){
    text=input.value;
    console.log(text);
    fetch(translate(text))
    .then(response=>response.json())
    .then(json=>{
        var newtext=json.contents.translated;
        console.log(newtext);
        output.innerText=newtext;
    })
}
btn.addEventListener("click",takeinput);
