// ============================================
// PORTFOLIO JAVASCRIPT
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Initialize all functions
    initProjects();
    initNavigation();
    initScrollEffects();
    initScrollReveal();

});

// ============================================
// LOAD PROJECTS FROM CONFIG
// ============================================
function initProjects() {
    const projectsGrid = document.getElementById('projectsGrid');

    if (!projectsGrid || !portfolioConfig) {
        console.error('Projects grid or config not found');
        return;
    }

    // Clear existing content
    projectsGrid.innerHTML = '';

    // Create project cards from config
    portfolioConfig.projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// ============================================
// CREATE PROJECT CARD
// ============================================
function createProjectCard(project) {
    // Create card container
    const card = document.createElement('div');
    card.className = `project-card ${project.layout}`;
    card.setAttribute('data-project-id', project.id);

    // Create video container
    const videoContainer = document.createElement('div');
    videoContainer.className = project.videoPlaceholder ? 'video-container placeholder' : 'video-container';

    // If not a placeholder, add actual video
    if (!project.videoPlaceholder && project.videoSrc) {
        const video = document.createElement('video');
        video.src = project.videoSrc;
        video.poster = project.posterImage;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        videoContainer.appendChild(video);
    }

    // Create overlay with project info
    const overlay = document.createElement('div');
    overlay.className = 'project-overlay';

    const projectInfo = document.createElement('div');
    projectInfo.className = 'project-info';

    const category = document.createElement('p');
    category.className = 'category-label';
    category.textContent = project.category;

    const title = document.createElement('h3');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    projectInfo.appendChild(category);
    projectInfo.appendChild(title);
    projectInfo.appendChild(description);
    overlay.appendChild(projectInfo);

    // Assemble card
    card.appendChild(videoContainer);
    card.appendChild(overlay);

    // Add click handler
    card.addEventListener('click', () => {
        handleProjectClick(project);
    });

    return card;
}

// ============================================
// HANDLE PROJECT CLICK
// ============================================
function handleProjectClick(project) {
    // Navigate to project detail page
    if (project.detailPage) {
        window.location.href = project.detailPage;
    } else {
        console.log('Project clicked:', project.title);
        // You can add a modal or other interaction here
    }
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initScrollEffects() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 100;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    };

    // Initial check
    revealOnScroll();

    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);
}

// ============================================
// VIDEO LAZY LOADING (Performance)
// ============================================
function initLazyVideos() {
    const videos = document.querySelectorAll('video[data-src]');

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                video.src = video.dataset.src;
                video.load();
                videoObserver.unobserve(video);
            }
        });
    });

    videos.forEach(video => videoObserver.observe(video));
}

// ============================================
// UTILITY: Update Contact Info
// ============================================
function updateContactInfo() {
    if (!portfolioConfig || !portfolioConfig.contact) return;

    const contact = portfolioConfig.contact;

    // Update email
    const emailLink = document.querySelector('a[href^="mailto:"]');
    if (emailLink && contact.email) {
        emailLink.href = `mailto:${contact.email}`;
        emailLink.textContent = contact.email;
    }

    // Update phone
    const phoneLink = document.querySelector('a[href^="tel:"]');
    if (phoneLink && contact.phone) {
        phoneLink.href = `tel:${contact.phone.replace(/\s/g, '')}`;
        phoneLink.textContent = contact.phone;
    }

    // Update social links
    if (contact.social) {
        const socialLinks = document.querySelectorAll('.social-links a');
        socialLinks.forEach(link => {
            const platform = link.textContent.toLowerCase();
            if (contact.social[platform]) {
                link.href = contact.social[platform];
            }
        });
    }
}

// Call update function
updateContactInfo();
