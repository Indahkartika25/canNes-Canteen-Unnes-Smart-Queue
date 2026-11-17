
// ==============================
// SEARCH TENANT KANTIN
// ==============================

const searchInput = document.getElementById("search-kantin");

const tenantCards = document.querySelectorAll(".tenant-card");

const emptyMessage = document.getElementById("empty-message");


searchInput.addEventListener("input", function () {

    const keyword = this.value.toLowerCase().trim();

    let visibleCount = 0;

    tenantCards.forEach(function (card) {

        const tenantName = card.dataset.name.toLowerCase();

        if (tenantName.includes(keyword)) {

            card.style.display = "flex";
            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });

    emptyMessage.style.display =
        visibleCount === 0 ? "block" : "none";

});
