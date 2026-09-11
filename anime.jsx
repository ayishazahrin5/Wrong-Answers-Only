```javascript
// ================================
// WRONG ANSWERS ONLY
// ================================

// For now we're only testing the intro
// and choice screen.
window.addEventListener("load", function () {
    document.getElementById("intro-title").classList.add("play-intro");

    setTimeout(function () {
        document.getElementById("choice-screen").scrollIntoView({ behavior: "smooth" });
    }, 3300);
});
// YOU PLAY
document.getElementById("you-play").addEventListener("click", function () {
    alert("YOU PLAY mode coming next 😈");
});

// ME PLAY
document.getElementById("me-play").addEventListener("click", function () {
    alert("ME PLAY mode coming next 😈");
});
```
