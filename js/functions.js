const div1 = document.getElementById("div1");
const btn = document.getElementById("btn");
const testFunction =()=>{
    const newP = document.createElement("p");
    newP.className = "p2"
    newP.innerHTML = "Test function is running!";
    div1.appendChild(newP);
    console.log("My name is Eduardo Cruz 😎");
    btn.disabled = true;
}