// document.addEventListener('DOMContentLoaded', function () {
//     // Navigation functionality
//     const navLinks = document.querySelectorAll('.nav-menu a');
//     const sections = document.querySelectorAll('.section');

//     // Function to switch active section
//     function showSection(id) {
//         // Hide all sections
//         sections.forEach(section => {
//             section.classList.remove('active');
//         });

//         // Show the selected section
//         document.querySelector(id).classList.add('active');

//         // Update active nav link
//         navLinks.forEach(link => {
//             link.parentElement.classList.remove('active');
//             if (link.getAttribute('href') === id) {
//                 link.parentElement.classList.add('active');
//             }
//         });
//     }

//     // Add click event to nav links
//     navLinks.forEach(link => {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();
//             const sectionId = this.getAttribute('href');
//             showSection(sectionId);

//             // Scroll to top on mobile
//             if (window.innerWidth <= 768) {
//                 window.scrollTo({
//                     top: 0,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });

//     // Animate skill bars when in view
//     function animateSkillBars() {
//         const skillSection = document.getElementById('skills');
//         if (skillSection.classList.contains('active')) {
//             const skillLevels = document.querySelectorAll('.skill-level');
//             skillLevels.forEach(level => {
//                 level.style.width = '0%';
//                 setTimeout(() => {
//                     level.style.width = level.getAttribute('style').split(':')[1];
//                 }, 200);
//             });
//         }
//     }

//     // Run animations when switching to skills section
//     navLinks.forEach(link => {
//         if (link.getAttribute('href') === '#skills') {
//             link.addEventListener('click', animateSkillBars);
//         }
//     });

//     // Check if URL has a hash and navigate to that section
//     if (window.location.hash) {
//         const hash = window.location.hash;
//         showSection(hash);
//     }

//     // Add scroll reveal animation for elements
//     function revealOnScroll() {
//         const reveals = document.querySelectorAll('.timeline-item, .certification-item, .hobby-item, .activities-list li');

//         reveals.forEach(item => {
//             const itemTop = item.getBoundingClientRect().top;
//             const windowHeight = window.innerHeight;

//             if (itemTop < windowHeight - 100) {
//                 item.style.opacity = '1';
//                 item.style.transform = 'translateY(0)';
//                 item.classList.add('visible'); // Add this line
//             }
//         });
//     }

//     // Initialize elements for scroll reveal
//     const revealItems = document.querySelectorAll('.timeline-item, .certification-item, .hobby-item, .activities-list li');
//     revealItems.forEach(item => {
//         item.style.opacity = '0';
//         item.style.transform = 'translateY(20px)';
//         item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
//     });

//     // Add scroll event for animations
//     window.addEventListener('scroll', revealOnScroll);

//     // Initial call to reveal visible elements
//     setTimeout(revealOnScroll, 300);
// });



document.addEventListener('DOMContentLoaded', function () {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('.section');

    // Function to switch active section
    function showSection(id) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show the selected section
        document.querySelector(id).classList.add('active');

        // Update active nav link
        navLinks.forEach(link => {
            link.parentElement.classList.remove('active');
            if (link.getAttribute('href') === id) {
                link.parentElement.classList.add('active');
            }
        });

        // Check if the skills section is active and animate bars
        if (id === "#skills") {
            animateSkillBars();
        }
    }

    // Add click event to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href');
            showSection(sectionId);

            // Scroll to top on mobile
            if (window.innerWidth <= 768) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate skill bars when in view
    function animateSkillBars() {
        const skillLevels = document.querySelectorAll('.skill-level');
        skillLevels.forEach(level => {
            let originalWidth = level.getAttribute('style').match(/width:\s*(\d+%)/)[1]; // Extract width value
            level.style.width = '0%'; // Reset width
            setTimeout(() => {
                level.style.width = originalWidth; // Animate back to original width
            }, 200);
        });
    }

    // Check if URL has a hash and navigate to that section
    if (window.location.hash) {
        const hash = window.location.hash;
        showSection(hash);
    }

    // Add scroll reveal animation for elements
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.timeline-item, .certification-item, .hobby-item, .activities-list li');

        reveals.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemTop < windowHeight - 100) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.classList.add('visible');
            }
        });
    }

    // Initialize elements for scroll reveal
    const revealItems = document.querySelectorAll('.timeline-item, .certification-item, .hobby-item, .activities-list li');
    revealItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Add scroll event for animations
    window.addEventListener('scroll', revealOnScroll);

    // Initial call to reveal visible elements
    setTimeout(revealOnScroll, 300);
});
