// Tabs code
function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  if(elmnt) elmnt.style.backgroundColor = color;
}

// Wait for the DOM to load before clicking the default tab
document.addEventListener("DOMContentLoaded", () => {
  const defaultBtn = document.getElementById("defaultOpen");
  if (defaultBtn) defaultBtn.click();
});



//Forum Code
function resetForum() {
  if (confirm("Are you sure you want to reset the forum? This will delete all topics and replies.")) {
    localStorage.removeItem("topics");
    topics = [];
    renderTopics();
  }
}



//Stess Game Code
function startBubbles() {
  const gameArea = document.getElementById("bubbleGame");
  if (!gameArea) return; 

  gameArea.innerHTML = ""; 

  for (let i = 0; i < 20; i++) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.left = Math.random() * 90 + "%";
    bubble.style.top = Math.random() * 80 + "%";


    bubble.addEventListener("mousedown", popBubble);
    bubble.addEventListener("click", popBubble);

    gameArea.appendChild(bubble);
  }
}
function popBubble(e) {
  const bubble = e.target;
  bubble.classList.add("popped");
  setTimeout(() => bubble.remove(), 200); 
}





