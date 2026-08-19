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

                navbar.style.left = "50%";
                navbar.style.transform = "translateX(-50%)";

            } else {

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
    // HERO NAME HOVER
    // =========================

    const heroLetters =
        document.querySelectorAll(".hero-name span");

    heroLetters.forEach((letter, index) => {

        letter.addEventListener("mouseenter", () => {

            letter.classList.add("active");

            heroLetters.forEach((otherLetter, otherIndex) => {

                if (otherLetter === letter) return;

                const distance =
                    Math.abs(index - otherIndex);

                if (distance === 1) {
                    otherLetter.classList.add("near");
                }

                if (distance === 2) {
                    otherLetter.classList.add("far");
                }

            });

        });


        letter.addEventListener("mouseleave", () => {

            heroLetters.forEach(otherLetter => {

                otherLetter.classList.remove(
                    "active",
                    "near",
                    "far"
                );

            });

        });

    });


    // =========================
    // BINARY DATA BACKGROUND
    // =========================

    const binaryBackground =
        document.querySelector(".binary-background");


    if (binaryBackground) {

        const isMobile =
            window.innerWidth <= 768;

        const columnCount =
            isMobile ? 28 : 72;


        for (let i = 0; i < columnCount; i++) {

            const column =
                document.createElement("div");

            column.classList.add(
                "binary-column"
            );


            // =========================
            // POSITION
            // =========================

            const position =
                (i / columnCount) * 100 +
                (Math.random() * 1.5);

            column.style.left =
                `${position}%`;


            // =========================
            // SPEED
            // =========================

            const duration =
                18 +
                Math.random() * 22;

            const delay =
                -(Math.random() * duration);


            column.style.setProperty(
                "--binary-duration",
                `${duration}s`
            );

            column.style.setProperty(
                "--binary-delay",
                `${delay}s`
            );


            // =========================
            // RANDOM LENGTH
            // =========================

            const length =
                18 +
                Math.floor(
                    Math.random() * 55
                );


            // =========================
            // CREATE BITS
            // =========================

            for (let j = 0; j < length; j++) {

                const bit =
                    document.createElement("span");


                bit.textContent =
                    Math.random() > .5
                        ? "1"
                        : "0";


                bit.style.setProperty(
                    "--binary-opacity",
                    `${.25 + Math.random() * .75}`
                );


                column.appendChild(bit);

            }


            binaryBackground.appendChild(
                column
            );

        }

    }

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

            const isMobile =
                window.innerWidth <= 768;


            // =========================
            // MOBILE
            // =========================

            if (isMobile) {

                projectsSlider.scrollTo({
                    left: card.offsetLeft - 20,
                    behavior: "smooth"
                });

            }

            // =========================
            // DESKTOP
            // =========================

            else {

                updateProjectsSlider();

            }

        });

    });


    const dots =
        projectsIndicator.querySelectorAll(
            ".project-dot"
        );


    // =========================
    // DESKTOP SLIDER
    // =========================

    function updateProjectsSlider() {

        const isMobile =
            window.innerWidth <= 768;


        if (isMobile) {
            return;
        }


        const cardWidth =
            projectCards[0]
                .getBoundingClientRect()
                .width;

        const gap =
            parseFloat(
                getComputedStyle(
                    projectsTrack
                ).gap
            ) || 0;


        const move =
            currentProject *
            (cardWidth + gap);


        projectsTrack.style.transform =
            `translateX(-${move}px)`;


        updateDots();

    }


    // =========================
    // UPDATE DOTS
    // =========================

    function updateDots() {

        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentProject
            );

        });

    }


    // =========================
    // MOBILE SCROLL
    // =========================

    let scrollTimeout;


    projectsSlider.addEventListener(
        "scroll",
        () => {

            if (window.innerWidth > 768) {
                return;
            }


            clearTimeout(scrollTimeout);


            scrollTimeout =
                setTimeout(() => {

                    const scrollLeft =
                        projectsSlider.scrollLeft;

                    let closestIndex = 0;

                    let closestDistance =
                        Infinity;


                    projectCards.forEach(
                        (card, index) => {

                            const distance =
                                Math.abs(
                                    card.offsetLeft -
                                    20 -
                                    scrollLeft
                                );


                            if (
                                distance <
                                closestDistance
                            ) {

                                closestDistance =
                                    distance;

                                closestIndex =
                                    index;

                            }

                        }
                    );


                    currentProject =
                        closestIndex;

                    updateDots();

                }, 50);

        },
        { passive: true }
    );


    // =========================
    // RESIZE
    // =========================

    window.addEventListener(
        "resize",
        () => {

            if (window.innerWidth <= 768) {

                // Remove desktop transform
                projectsTrack.style.transform =
                    "none";

            } else {

                updateProjectsSlider();

            }

        }
    );


    // =========================
    // INITIAL
    // =========================

    if (window.innerWidth <= 768) {

        projectsTrack.style.transform =
            "none";

    } else {

        updateProjectsSlider();

    }

}

    // =========================
    // EDUCATION / CERTIFICATES SLIDERS
    // =========================

    function initEducationSlider(
        trackSelector,
        nextSelector,
        prevSelector,
        counterSelector,
        slideSelector
    ) {

        const track =
            document.querySelector(trackSelector);

        const next =
            document.querySelector(nextSelector);

        const prev =
            document.querySelector(prevSelector);

        const counter =
            document.querySelector(counterSelector);


        if (!track || !next || !prev) return;


        const slides =
            Array.from(
                track.querySelectorAll(slideSelector)
            );


        if (slides.length === 0) return;


        let current = 0;


        // =========================
        // UPDATE SLIDER
        // =========================

        function updateSlider() {

            track.style.transform =
                `translateX(-${current * 100}%)`;


            if (counter) {

                counter.textContent =
                    `${String(current + 1).padStart(2, "0")}`;

            }

        }


        // =========================
        // NEXT
        // =========================

        next.addEventListener("click", () => {

            current++;

            if (current >= slides.length) {
                current = 0;
            }

            updateSlider();

        });


        // =========================
        // PREVIOUS
        // =========================

        prev.addEventListener("click", () => {

            current--;

            if (current < 0) {
                current = slides.length - 1;
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

                    if (current >= slides.length) {
                        current = 0;
                    }

                } else {

                    current--;

                    if (current < 0) {
                        current = slides.length - 1;
                    }

                }

                updateSlider();

            },
            { passive: true }
        );


        // =========================
        // INITIAL
        // =========================

        updateSlider();

    }


    // =========================
    // CERTIFICATES SLIDER
    // =========================

    initEducationSlider(
        ".courses-track",
        ".courses-next",
        ".courses-prev",
        ".courses-counter",
        ".courses-slide"
    );


    // =========================
    // ACADEMIC EDUCATION SLIDER
    // =========================

    initEducationSlider(
        ".education-track",
        ".education-next",
        ".education-prev",
        ".education-counter",
        ".education-slide"
    );

});

// =========================
// COMMENTS INFINITE LOOP
// =========================

const commentsTrack =
    document.querySelector(".comments-track");

if (commentsTrack) {

    const originalCards =
        Array.from(
            commentsTrack.children
        );

    if (originalCards.length > 0) {

        originalCards.forEach(card => {

            const clone =
                card.cloneNode(true);

            clone.setAttribute(
                "aria-hidden",
                "true"
            );

            commentsTrack.appendChild(
                clone
            );

        });

    }

}
// =========================================================
// PYTHON REPL CURSOR
// =========================================================

if (window.innerWidth > 768) {

    const pythonCursor =
        document.createElement("div");

    pythonCursor.className =
        "python-cursor";


    /* =========================
       CREATE >>>
    ========================= */

    for (let i = 0; i < 3; i++) {

        const symbol =
            document.createElement("span");

        symbol.textContent = ">";

        pythonCursor.appendChild(
            symbol
        );

    }


    document.body.appendChild(
        pythonCursor
    );


    /* =========================
       MOVE
    ========================= */

    document.addEventListener(
        "mousemove",
        event => {

            pythonCursor.style.left =
                `${event.clientX}px`;

            pythonCursor.style.top =
                `${event.clientY}px`;

            document.body.classList.add(
                "python-cursor-ready"
            );

        }
    );


    /* =========================
       HOVER
    ========================= */

    document.addEventListener(
        "mouseover",
        event => {

            if (
                event.target.closest(
                    "a, button"
                )
            ) {

                document.body.classList.add(
                    "python-cursor-hover"
                );

            }

        }
    );


    document.addEventListener(
        "mouseout",
        event => {

            if (
                event.target.closest(
                    "a, button"
                )
            ) {

                document.body.classList.remove(
                    "python-cursor-hover"
                );

            }

        }
    );

}