
const searchInput = document.getElementById("search-kantin");
const kantinCards = document.querySelectorAll(".kantin-card");
const emptyMessage = document.getElementById("empty-message");

searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase().trim();
    let visibleCount = 0;

    kantinCards.forEach(function (card) {
        const name = card.dataset.name;

        if (name.includes(keyword)) {
            card.style.display = "flex";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    emptyMessage.style.display =
        visibleCount === 0 ? "block" : "none";
});
