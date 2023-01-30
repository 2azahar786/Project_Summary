


(function(){
let resultscreen = document.querySelector(".resultscreen");
let buttons = document.querySelectorAll(".btn");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");

buttons.forEach(function(button){
    button.addEventListener('click', function(event)
    {
        let value = event.target.dataset.num;
        resultscreen.value += value;
    })
});

equal.addEventListener('click', function(event){
    if (resultscreen.value ===""){
        resultscreen.value = "";
    }
    else{
        let answer = eval(resultscreen.value);
        resultscreen.value = answer;
    }
});

clear.addEventListener('click', function(event){
    resultscreen.value = "";
  });
})();
