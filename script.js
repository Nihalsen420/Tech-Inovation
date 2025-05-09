        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-menu a").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));

        const backToTopButton = document.querySelector(".back-to-top");

        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add("show");
            } else {
                backToTopButton.classList.remove("show");
            }
        });

        backToTopButton.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === "#") return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });

        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert("Form submission successful! (This is a demo)");
                form.reset();
            });
        });