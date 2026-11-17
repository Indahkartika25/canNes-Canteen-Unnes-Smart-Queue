
// =================================
// CANNES HOME PAGE
// =================================


// SEARCH FAKULTAS

const searchInput = document.getElementById("faculty-search");
const facultyCards = document.querySelectorAll(".faculty-card");
const noFaculty = document.getElementById("no-faculty");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const keyword = this.value.toLowerCase().trim();
        let visibleCount = 0;

        facultyCards.forEach(function (card) {
            const facultyName = card.dataset.name.toLowerCase();

            if (facultyName.includes(keyword)) {
                card.style.display = "flex";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });

        if (noFaculty) {
            noFaculty.classList.toggle("hidden", visibleCount !== 0);
        }
    });
}


// KLIK KARTU FAKULTAS

facultyCards.forEach(function (card) {
    card.addEventListener("click", function () {
        const faculty = this.dataset.name;

        if (faculty.toLowerCase().includes("fmipa")) {
            window.location.href = "fmipa.html";
        } else {
            alert("Kamu memilih fakultas: " + faculty);
        }
    });
});


// =================================
// REKOMENDASI MENU - SLIDER
// =================================

const heroTrack = document.getElementById("hero-track");
const heroSlides = document.querySelectorAll(".hero-slide");
const indicators = document.querySelectorAll("#banner-indicators button");

if (heroTrack && heroSlides.length > 0) {

    // KLIK INDIKATOR

    indicators.forEach(function (button, index) {
        button.addEventListener("click", function () {
            heroTrack.scrollTo({
                left: index * heroTrack.clientWidth,
                behavior: "smooth"
            });
        });
    });


    // UPDATE INDIKATOR OTOMATIS

    heroTrack.addEventListener("scroll", function () {
        const index = Math.round(
            heroTrack.scrollLeft / heroTrack.clientWidth
        );

        indicators.forEach(function (button, i) {
            button.classList.toggle("active", i === index);
        });
    });


    // DRAG MENGGUNAKAN MOUSE

    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    heroTrack.addEventListener("pointerdown", function (e) {
        if (e.pointerType !== "mouse") return;

        isDragging = true;
        startX = e.clientX;
        scrollStart = heroTrack.scrollLeft;

        heroTrack.setPointerCapture(e.pointerId);
        heroTrack.style.cursor = "grabbing";
    });

    heroTrack.addEventListener("pointermove", function (e) {
        if (!isDragging) return;

        const distance = e.clientX - startX;
        heroTrack.scrollLeft = scrollStart - distance;
    });

    function stopDragging() {
        isDragging = false;
        heroTrack.style.cursor = "grab";
    }

    heroTrack.addEventListener("pointerup", stopDragging);
    heroTrack.addEventListener("pointercancel", stopDragging);
    heroTrack.addEventListener("lostpointercapture", stopDragging);

    // MENCEGAH FOTO TER-D RAG SEBAGAI FILE

    heroTrack.addEventListener("dragstart", function (e) {
        e.preventDefault();
    });
}
