let btn1 = document.getElementById("Button-1")
let btn2 = document.getElementById("Button-2")
let colorCodeBox = document.getElementById("Color-Code-Box")
let rgb1 = "#70C5A4";
let rgb2 = "#A9D037";

const buttonFunction = () =>{
    let hexCode ="0123456789abcdef";
    let colors = "#"
    for(let i=0; i<6; i++){
        colors = colors + hexCode[Math.floor(Math.random() * 16)];
    }
    return colors;
}

let buttonFunction1= () =>{
    rgb1 = buttonFunction();
    console.log(rgb1);
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1}, ${rgb2})`;
    colorCodeBox.innerHTML = `background-image: linear-gradient(to left,${rgb1}, ${rgb2});` 
    btn1.style.backgroundColor = rgb1;
    btn1.innerText = rgb1;
}

let buttonFunction2 = () =>{
    rgb2 = buttonFunction();
    console.log(rgb2);
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1}, ${rgb2})`;
    colorCodeBox.innerHTML = `background-image: linear-gradient(to left,${rgb1}, ${rgb2});` 
    btn2.style.backgroundColor = rgb2;
    btn2.innerText = rgb2;

}

btn1.addEventListener('click',buttonFunction1);
btn2.addEventListener('click',buttonFunction2);
colorCodeBox.addEventListener('click',() =>{
    navigator.clipboard.writeText(colorCodeBox.innerText)
})