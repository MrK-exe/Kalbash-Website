document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const languageButton = document.querySelector('.language-toggle button');

    // Toggle navigation menu
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Function to toggle between languages
    function toggleLanguage() {
        var currentLang = document.documentElement.lang;
        var newLang = (currentLang === 'en') ? 'ar' : 'en'; // Toggle between 'en' and 'ar'
        
        // Set HTML lang attribute to toggle language
        document.documentElement.lang = newLang;
        
        // Update button text accordingly
        languageButton.textContent = (newLang === 'en') ? 'EN' : 'عربي';
        
        // Update text direction for Arabic
        document.body.dir = (newLang === 'ar') ? 'rtl' : 'ltr';
        
        // Close navigation menu on language toggle (if open)
        nav.classList.remove('active');
    }

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Get target section ID excluding '#'
            const targetSection = document.getElementById(targetId); // Find target section

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close navigation menu if open
                nav.classList.remove('active');
            }
        });
    });

    // Optional: Close navigation menu on outside click (e.g., clicking anywhere on the document)
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.nav-links') && !event.target.closest('.burger')) {
            nav.classList.remove('active');
        }
    });

    // Language toggle functionality
    languageButton.addEventListener('click', toggleLanguage);
});
