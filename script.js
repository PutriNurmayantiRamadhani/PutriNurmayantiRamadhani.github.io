document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
    const navLinksLi = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    });

    navLinksLi.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("nav-active");
            burger.classList.remove("toggle");
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Animate skill bars on scroll
    const skillSection = document.getElementById("skills");
    const progressBars = document.querySelectorAll(".progress");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = "0%"; // Reset width to trigger animation
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
                observer.unobserve(skillSection);
            }
        });
    }, { threshold: 0.5 });

    if (skillSection) {
        observer.observe(skillSection);
    }
});

