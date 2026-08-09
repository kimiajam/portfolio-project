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
// =========================
// PROJECTS SLIDER
// =========================

const projectsSlider =
    document.querySelector(".projects-slider");

const projectsTrack =
    document.querySelector(".projects-track");

const projectCards =
    document.querySelectorAll(".project-card");

const projectsIndicator =
    document.querySelector(".projects-indicator");


if (
    projectsSlider &&
    projectsTrack &&
    projectCards.length &&
    projectsIndicator
) {

    let currentProject = 0;


    // =========================
    // CREATE INDICATORS
    // =========================

    projectCards.forEach((card, index) => {

        const dot =
            document.createElement("span");

        dot.classList.add("project-dot");

        if (index === 0) {
            dot.classList.add("active");
        }

        projectsIndicator.appendChild(dot);


        dot.addEventListener("click", () => {

            currentProject = index;

            updateProjectsSlider();

        });

    });


    const dots =
        projectsIndicator.querySelectorAll(
            ".project-dot"
        );


    // =========================
    // UPDATE SLIDER
    // =========================

    function updateProjectsSlider() {

        const cardWidth =
            projectCards[0].getBoundingClientRect().width;

        const gap =
            parseFloat(
                getComputedStyle(projectsTrack).gap
            ) || 0;


        const move =
            currentProject *
            (cardWidth + gap);


        projectsTrack.style.transform =
            `translateX(-${move}px)`;


        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentProject
            );

        });

    }


    // =========================
    // SWIPE
    // =========================

    let touchStartX = 0;


    projectsSlider.addEventListener(
        "touchstart",
        event => {

            touchStartX =
                event.touches[0].clientX;

        },
        { passive: true }
    );


    projectsSlider.addEventListener(
        "touchend",
        event => {

            const touchEndX =
                event.changedTouches[0].clientX;

            const difference =
                touchStartX - touchEndX;


            if (
                difference > 50 &&
                currentProject <
                projectCards.length - 1
            ) {

                currentProject++;

                updateProjectsSlider();

            }


            if (
                difference < -50 &&
                currentProject > 0
            ) {

                currentProject--;

                updateProjectsSlider();

            }

        },
        { passive: true }
    );


    // =========================
    // RESIZE
    // =========================

    window.addEventListener(
        "resize",
        updateProjectsSlider
    );


    updateProjectsSlider();

}
// =========================
// Education / Skills Sliders
// =========================

function initSlider(
    trackSelector,
    nextSelector,
    prevSelector,
    counterSelector
) {

    const track = document.querySelector(trackSelector);
    const next = document.querySelector(nextSelector);
    const prev = document.querySelector(prevSelector);
    const counter = document.querySelector(counterSelector);

    if (!track || !next || !prev) return;

    const items = Array.from(track.children);

    if (items.length === 0) return;

    // هر 3 کارت = یک اسلاید
    const groups = [];

    for (let i = 0; i < items.length; i += 3) {

        const group = document.createElement("div");

        group.className =
            trackSelector.includes("education")
                ? "education-slide"
                : "skills-slide";

        items.slice(i, i + 3).forEach(item => {
            group.appendChild(item);
        });

        groups.push(group);
    }

    track.innerHTML = "";

    groups.forEach(group => {
        track.appendChild(group);
    });

    let current = 0;


    function updateSlider() {

        track.style.transform =
            `translateX(-${current * 100}%)`;

        if (counter) {

            counter.textContent =
                `${String(current + 1).padStart(2, "0")}`;

        }
    }


    next.addEventListener("click", () => {

        current++;

        if (current >= groups.length) {
            current = 0;
        }

        updateSlider();

    });


    prev.addEventListener("click", () => {

        current--;

        if (current < 0) {
            current = groups.length - 1;
        }

        updateSlider();

    });


    // =========================
    // TOUCH SWIPE
    // =========================

    let startX = 0;

    track.addEventListener(
        "touchstart",
        event => {

            startX =
                event.touches[0].clientX;

        },
        { passive: true }
    );


    track.addEventListener(
        "touchend",
        event => {

            const endX =
                event.changedTouches[0].clientX;

            const distance =
                startX - endX;

            if (Math.abs(distance) < 50) {
                return;
            }


            if (distance > 0) {

                current++;

                if (current >= groups.length) {
                    current = 0;
                }

            } else {

                current--;

                if (current < 0) {
                    current = groups.length - 1;
                }

            }

            updateSlider();

        },
        { passive: true }
    );


    updateSlider();
}


initSlider(
    ".education-track",
    ".education-next",
    ".education-prev",
    ".education-counter"
);


initSlider(
    ".skills-track",
    ".skills-next",
    ".skills-prev",
    ".skills-counter"
);
});