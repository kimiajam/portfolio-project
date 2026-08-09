document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // Scroll Reveal
    // =========================

    const sections = document.querySelectorAll(
        ".about, .projects, .skills, .contact"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });


    sections.forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });


    // =========================
    // Navbar
    // =========================

    const navbar = document.querySelector(".navbar");
    const logo = document.querySelector(".logo");
    const backHome = document.querySelector(".back-home");

    if (!navbar) return;


    function updateNavbar() {

        const isMobile = window.innerWidth <= 768;

        const scroll = Math.min(window.scrollY, 350);

        const progress = scroll / 350;


        // =========================
        // NAVBAR POSITION
        // =========================

        if (isMobile) {

            if (progress > 0.7) {

        // Navbar کوچک → وسط صفحه
            navbar.style.left = "50%";
            navbar.style.transform = "translateX(-50%)";

       } 
            else {

        // Navbar کامل → از سمت چپ با فاصله 12px
            navbar.style.left = "12px";
            navbar.style.transform = "none";

    }

} else {

    navbar.style.left = "50%";
    navbar.style.transform = "translateX(-50%)";

}

        // =========================
        // NAVBAR SIZE
        // =========================

        if (isMobile) {

            navbar.style.top =
                `${12 - (progress * 2)}px`;

            navbar.style.width =
                "calc(100vw - 24px)";

        } else {

            navbar.style.top =
                `${25 - (progress * 15)}px`;


            const startWidth =
                window.innerWidth * 0.95;

            const endWidth = 200;


            const width =
                startWidth -
                ((startWidth - endWidth) * progress);


            navbar.style.width =
                `${width}px`;

        }


        // =========================
        // BACKGROUND
        // =========================

        navbar.style.background =
            `rgba(
                13,
                17,
                23,
                ${0.45 + progress * 0.35}
            )`;


        // =========================
        // BLUR
        // =========================

        const blur =
            14 + (progress * 15);


        navbar.style.backdropFilter =
            `blur(${blur}px)`;

        navbar.style.webkitBackdropFilter =
            `blur(${blur}px)`;


        // =========================
        // SCROLLED STATE
        // =========================

        if (progress > 0.7) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }


        // =========================
        // LOGO
        // =========================

        if (logo) {

            if (progress > 0.7) {

                navbar.style.justifyContent =
                    "center";

                logo.style.opacity = "0";

                logo.style.width = "0";

            } else {

                navbar.style.justifyContent =
                    "space-between";

                logo.style.opacity = "1";

                logo.style.width = "auto";

            }

        }

    }


    // =========================
    // SCROLL
    // =========================

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );


    // =========================
    // RESIZE
    // =========================

    window.addEventListener(
        "resize",
        updateNavbar
    );


    // =========================
    // VIEW HOME
    // =========================

    if (backHome) {

        backHome.addEventListener("click", event => {

            event.preventDefault();

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    // =========================
    // INITIAL
    // =========================

    updateNavbar();

});