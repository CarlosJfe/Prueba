function toggleDetails(productId) {
    const details = document.getElementById(`details-${productId}`);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}






