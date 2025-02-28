function addingEventListener() {
    const button = document.getElementById("button");
    if (button) { 
        button.addEventListener("click", function() {
            alert("button clicked!");
        });
    } else {
        console.error("Element with ID 'button' not found!");
    }
}
