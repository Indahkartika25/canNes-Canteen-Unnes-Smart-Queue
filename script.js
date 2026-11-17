
document.addEventListener("DOMContentLoaded", function () {

    // ELEMENT
    const loginPage = document.getElementById("login-page");
    const signupPage = document.getElementById("signup-page");

    const goSignup = document.getElementById("go-signup");
    const backLogin = document.getElementById("back-login");

    const splash = document.getElementById("splash-screen");


    // SPLASH SCREEN
    window.addEventListener("load", function () {

        setTimeout(function () {
            splash.classList.add("hide");
        }, 2000);

    });


    // PINDAH KE SIGN UP
    goSignup.addEventListener("click", function (e) {

        e.preventDefault();

        loginPage.classList.add("hidden");
        signupPage.classList.remove("hidden");

    });


    // KEMBALI KE LOGIN
    backLogin.addEventListener("click", function (e) {

        e.preventDefault();

        signupPage.classList.add("hidden");
        loginPage.classList.remove("hidden");

    });


   
// LOGIN FORM
document.getElementById("login-form")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        if (username.trim() === "" || password.trim() === "") {
            alert("Username dan password harus diisi!");
            return;
        }

        // Masuk ke halaman Beranda
        window.location.href = "home.html";

    });



    // SIGN UP FORM
    document.getElementById("signup-form")
        .addEventListener("submit", function (e) {

            e.preventDefault();

            const password =
                document.getElementById("signup-password").value;

            const confirmPassword =
                document.getElementById("confirm-password").value;

            if (password !== confirmPassword) {

                alert("Password dan Confirm Password tidak sama!");
                return;

            }

            alert("Form Sign Up berhasil divalidasi!");

        });


    // FORGOT PASSWORD
    document.getElementById("forgot-link")
        .addEventListener("click", function (e) {

            e.preventDefault();

            alert("Fitur Forgot Password akan segera tersedia.");

        });

});
