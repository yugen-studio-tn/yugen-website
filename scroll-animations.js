// Scroll-Triggered Animations using Intersection Observer
document.addEventListener('DOMContentLoaded', function () {

    // Elements to animate
    const animateElements = document.querySelectorAll(`
    .section-title,
    .project-title,
    .project-meta,
    .about-text,
    .project-description,
    .uxui-info
  `);

    // Add animation class to elements
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
    });

    // Intersection Observer options
    const observerOptions = {
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: '0px 0px -100px 0px' // Start animation slightly before element enters viewport
    };

    // Create observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add delay for stagger effect
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 100); // 100ms delay between each element

                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements
    animateElements.forEach(el => {
        observer.observe(el);
    });
});
