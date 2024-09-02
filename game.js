let form = document.querySelector("form");
let input = document.querySelector("input");
let h=document.querySelector("h1");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    gamelogic()
    input.value=""
})

let Num = 123
function gamelogic() {
    if (parseInt(input.value) === Num) {
        console.log("Matched");
        h.innerHTML="Num Matched Bruhhh !!"
        h.style.color="green"
        
        
    }
    else {
        console.log("Unmatched");
        h.innerHTML="Num Not Matched Bruhhh !!!!"
        h.style.color="red"

    }

}