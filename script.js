// Function to open the love letter modal with animations
function openLoveLetter() {
    const modal = document.getElementById("loveLetterModal");
    const modalContent = document.querySelector(".modal-content");
    const loveImage = document.querySelector(".love-image");
    
    // Display the modal
    modal.style.display = "block"; // Make modal visible

    // Check if the image animation has already been triggered
    if (!loveImage.classList.contains("unscrolled")) {
        // Remove the animation (in case it was triggered previously)
        loveImage.style.animation = 'none'; 
        loveImage.offsetHeight; // Trigger reflow to reset the animation
        loveImage.style.animation = 'unscroll 1.5s ease forwards'; // Apply the animation
        
        // Mark the image as already unscrolled
        loveImage.classList.add("unscrolled");
    }

    // Start animation for modal content (scale it to normal size)
    modalContent.style.opacity = 1;
    modalContent.style.transform = "scale(1)";
}

// Function to close the love letter modal with animations
function closeLoveLetter() {
    const modalContent = document.querySelector(".modal-content");
    
    // Start animation to close modal
    modalContent.style.opacity = 0;
    modalContent.style.transform = "scale(0.8)";
    
    // After the animation completes, hide the modal
    setTimeout(() => {
        document.getElementById("loveLetterModal").style.display = "none";
    }, 500); // Match animation duration
}

// Button hover and press animations
const loveButton = document.getElementById("loveButton");

// Hover animation: Scale up the button
loveButton.addEventListener("mouseenter", () => {
    loveButton.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    loveButton.style.transform = "scale(1.1)";
    loveButton.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
});

// Hover out animation: Reset the button size and shadow
loveButton.addEventListener("mouseleave", () => {
    loveButton.style.transform = "scale(1)";
    loveButton.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
});

// Click animation: Button press
