// ==========================================
// TECHNOVA - TASK 2 JAVASCRIPT
// ==========================================


// ==========================================
// 1. MOBILE MENU
// ==========================================

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    if (navLinks) {
        navLinks.classList.toggle("show");
    }

}


// Close mobile menu when link is clicked

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const menu = document.getElementById("navLinks");

        if (menu) {
            menu.classList.remove("show");
        }

    });

});


// ==========================================
// 2. DARK / LIGHT MODE
// ==========================================

const themeButton =
    document.getElementById("themeToggle");

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (
            document.body.classList.contains("dark-mode")
        ) {

            localStorage.setItem("theme", "dark");

            themeButton.textContent = "☀️";

        } else {

            localStorage.setItem("theme", "light");

            themeButton.textContent = "🌙";

        }

    });

}


// Load saved theme

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

}


// ==========================================
// 3. BACK TO TOP
// ==========================================

const topButton =
    document.getElementById("backToTop");

if (topButton) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    });


    topButton.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ==========================================
// 4. SCROLL PROGRESS BAR
// ==========================================

window.addEventListener("scroll", function () {

    const progress =
        document.getElementById("scrollProgress");

    if (!progress) return;

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percentage =
        (scrollTop / documentHeight) * 100;

    progress.style.width =
        percentage + "%";

});


// ==========================================
// 5. CONTACT FORM VALIDATION
// ==========================================

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name");

            const email =
                document.getElementById("email");

            const message =
                document.getElementById("message");


            if (
                name.value.trim() === "" ||
                email.value.trim() === "" ||
                message.value.trim() === ""
            ) {

                alert(
                    "Please fill in all required fields."
                );

                return;

            }


            alert(
                "Thank you! Your message has been submitted successfully."
            );

            contactForm.reset();

        }
    );

}


// ==========================================
// 6. FAQ ACCORDION
// ==========================================

const accordionButtons =
    document.querySelectorAll(".accordion-button");

accordionButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const content =
            this.nextElementSibling;

        this.classList.toggle("active");

        if (content.style.maxHeight) {

            content.style.maxHeight = null;

        } else {

            content.style.maxHeight =
                content.scrollHeight + "px";

        }

    });

});


// ==========================================
// 7. TABS
// ==========================================

const tabButtons =
    document.querySelectorAll(".tab-button");

const tabContents =
    document.querySelectorAll(".tab-content");

tabButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        tabButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        tabContents.forEach(function (content) {

            content.classList.remove("active");

        });


        this.classList.add("active");

        const target =
            document.getElementById(
                this.dataset.tab
            );

        if (target) {

            target.classList.add("active");

        }

    });

});


// ==========================================
// 8. MODAL
// ==========================================

const modal =
    document.getElementById("projectModal");

const openModalButtons =
    document.querySelectorAll(".open-modal");

const closeModalButton =
    document.querySelector(".close-modal");

openModalButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        if (modal) {

            modal.classList.add("show");

        }

    });

});


if (closeModalButton) {

    closeModalButton.addEventListener(
        "click",
        function () {

            modal.classList.remove("show");

        }
    );

}


if (modal) {

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {

            modal.classList.remove("show");

        }

    });

}


// ==========================================
// 9. ANIMATED COUNTERS
// ==========================================

const counters =
    document.querySelectorAll(".counter");

const observer =
    new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (!entry.isIntersecting) return;

                const counter =
                    entry.target;

                const target =
                    Number(counter.dataset.target);

                let current = 0;

                const increment =
                    Math.ceil(target / 100);


                const updateCounter =
                    setInterval(function () {

                        current += increment;

                        if (current >= target) {

                            counter.textContent =
                                target;

                            clearInterval(
                                updateCounter
                            );

                        } else {

                            counter.textContent =
                                current;

                        }

                    }, 20);


                observer.unobserve(counter);

            });

        }
    );


counters.forEach(function (counter) {

    observer.observe(counter);

});


// ==========================================
// 10. TOOLTIP
// ==========================================

const tooltipElements =
    document.querySelectorAll("[data-tooltip]");

tooltipElements.forEach(function (element) {

    element.addEventListener("mouseenter", function () {

        const tooltip =
            document.createElement("span");

        tooltip.className =
            "tooltip-box";

        tooltip.textContent =
            this.dataset.tooltip;

        this.appendChild(tooltip);

    });


    element.addEventListener("mouseleave", function () {

        const tooltip =
            this.querySelector(".tooltip-box");

        if (tooltip) {

            tooltip.remove();

        }

    });

});
// ==========================================
// 11. IMAGE SLIDER
// ==========================================

let slideIndex = 1;

function showSlide(number) {

    const slides =
        document.querySelectorAll(".slide");

    const dots =
        document.querySelectorAll(".slider-dot");

    if (slides.length === 0) return;


    if (number > slides.length) {

        slideIndex = 1;

    }

    if (number < 1) {

        slideIndex = slides.length;

    }


    slides.forEach(function (slide) {

        slide.classList.remove("active-slide");

    });


    dots.forEach(function (dot) {

        dot.classList.remove("active-dot");

    });


    slides[slideIndex - 1]
        .classList.add("active-slide");

    dots[slideIndex - 1]
        .classList.add("active-dot");

}


function changeSlide(number) {

    slideIndex += number;

    showSlide(slideIndex);

}


function currentSlide(number) {

    slideIndex = number;

    showSlide(slideIndex);

}


// Automatic slider

setInterval(function () {

    const slides =
        document.querySelectorAll(".slide");

    if (slides.length > 0) {

        slideIndex++;

        showSlide(slideIndex);

    }

}, 5000);


// Start slider

showSlide(slideIndex);
// =========================
// DRAG & DROP
// =========================

const dragItems = document.querySelectorAll(".drag-item");
const dropZone = document.getElementById("dropZone");

dragItems.forEach(function(item) {

    item.addEventListener("dragstart", function(event) {

        event.dataTransfer.setData(
            "text/plain",
            this.dataset.tech
        );

        this.style.opacity = "0.5";

    });

    item.addEventListener("dragend", function() {

        this.style.opacity = "1";

    });

});


if (dropZone) {

    dropZone.addEventListener("dragover", function(event) {

        event.preventDefault();

        this.classList.add("drag-over");

    });


    dropZone.addEventListener("dragleave", function() {

        this.classList.remove("drag-over");

    });


    dropZone.addEventListener("drop", function(event) {

        event.preventDefault();

        const technology =
            event.dataTransfer.getData("text/plain");

        this.classList.remove("drag-over");

        this.querySelector("h3").textContent =
            technology + " Added Successfully!";

        this.querySelector("p").textContent =
            "You successfully dropped " +
            technology +
            " into the drop zone.";

    });

}