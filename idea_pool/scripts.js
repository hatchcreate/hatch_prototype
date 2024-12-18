// Function to filter ideas by category
function filterIdeas(category) {
    const allIdeas = document.querySelectorAll('.idea-card');
    allIdeas.forEach(idea => {
        if (idea.classList.contains(category)) {
            idea.style.display = 'block';
        } else {
            idea.style.display = 'none';
        }
    });
}

// Function to open the popup
function openPopup(imageSrc, designerName, designName) {
    const popupOverlay = document.getElementById('popup-overlay');
    const popupImage = document.getElementById('popup-image');
    const popupDesignerName = document.getElementById('popup-designer-name');
    const popupDesignName = document.getElementById('popup-design-name');

    popupImage.src = imageSrc;
    popupDesignerName.textContent = designerName;
    popupDesignName.textContent = designName;

    popupOverlay.style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    const popupOverlay = document.getElementById('popup-overlay');
    popupOverlay.style.display = 'none';
}
