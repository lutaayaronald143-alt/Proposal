let noBtn = document.getElementById("noBtn"); 
let yesBtn = document.getElementById("yesBtn");
let emoji = document.getElementById("emoji");
let message = document.getElementById("message");
let container = document.getElementById("container");
let ribbon = document.createElement("div")


noBtn.addEventListener("mousemove", function() {
    let randomX = Math.random() * (500 - 80);
    let randomY = Math.random() * (300 - 40);

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px" 
    noBtn.style.top = randomY + "px" 
});

yesBtn.addEventListener("click", function(){
    emoji.textContent = "😍";
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
    message.textContent = "SHE SAID YES!!!!";
    container.style.display = "none";
    document.body.style.background = "lightpink";

    let ribbonsContainer = document.getElementById("ribbons");

    for (let i = 0; i < 20; i++) {
        let ribbon = document.createElement("div");
        ribbon.className = "ribbon";
        ribbon.style.left = Math.random() * 100 + "%";
        ribbon.style.backgroundColor = i % 2 === 0 ? "gold" : "deeppink";
        ribbon.style.animationDelay = Math.random() * 2 + "s";
        ribbonsContainer.appendChild(ribbon);
        }
    
})

