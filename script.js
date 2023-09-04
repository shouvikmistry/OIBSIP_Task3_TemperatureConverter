var cel = document.getElementById("cel");
var far = document.getElementById("fer");

cel.addEventListener("input", function(){
    // console.log("cel changed");
    let c = this.value;
    let f = (c* 9/5) + 32;
    if(!Number.isInteger(f)){
        f = f.toFixed(4);
    }
    fer.value = f;
});

fer.addEventListener("input", function(){
    // console.log("fer changed");
    let f = this.value;
    let c = (f - 32)*5/9;
    if(!Number.isInteger(c)){
        c = c.toFixed(4);
    }
    cel.value = c;
});

// onclick=document.getElementById('reset').value = '';

var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function(){
    cel.value = "0";
    fer.value = "32";
});