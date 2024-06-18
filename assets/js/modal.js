// modal.js

function openModal(src, captionText) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("img01").src = src;
    document.getElementById("caption").innerHTML = captionText;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
