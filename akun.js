
document.addEventListener("DOMContentLoaded", function() {

    // TOMBOL PENGATURAN
    document.getElementById("settings-button")
        .addEventListener("click", function() {

            alert("Halaman Pengaturan akan segera dibuat!");

        });


    // MENU AKUN
    const accountMenus = document.querySelectorAll(
        ".account-menu-item[data-menu]"
    );

    accountMenus.forEach(function(item) {

        item.addEventListener("click", function() {

            const menu = this.dataset.menu;

            alert("Kamu membuka: " + menu);

        });

    });


    // PESANAN SAYA
    document.getElementById("order-button")
        .addEventListener("click", function() {

            alert("Halaman Pesanan Saya akan segera dibuat!");

        });

});
