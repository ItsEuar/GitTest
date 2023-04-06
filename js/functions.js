const div1 = document.getElementById("div1");
const testFunction =()=>{
    const newP = document.createElement("p");
    newP.className = "p2"
    newP.innerHTML = "Test function is running!";
    div1.appendChild(newP);
}