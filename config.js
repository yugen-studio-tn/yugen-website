// ============================================
// PORTFOLIO CONFIGURATION
// ============================================
// Edit this file to update your portfolio content
// No coding knowledge required - just change the text and paths!

const portfolioConfig = {
    // Site Information
    site: {
        title: "YUGEN - Creative Agency Portfolio",
        description: "Portfolio showcasing our work in Graphic Design, Motion Design, UX/UI, and 3D Design"
    },

    // Projects Data
    // To add a new project: copy a project object and modify the values
    projects: [
        {
            id: "yugen",
            title: "YUGEN",
            category: "GRAPHIC DESIGN",
            description: "Branding and visual identity project",
            videoPlaceholder: true, // Set to false when you add real video
            videoSrc: "assets/videos/yugen.mp4", // Replace with your video path
            posterImage: "assets/images/yugen-poster.jpg", // Thumbnail image
            detailPage: "projects/yugen.html",
            layout: "full-width" // Options: full-width, half-width, third-width
        },
        {
            id: "graphicdesign",
            title: "GRAPHICDESIGN",
            category: "GRAPHIC DESIGN",
            description: "Graphic design showcase",
            videoPlaceholder: true,
            videoSrc: "assets/videos/graphicdesign.mp4",
            posterImage: "assets/images/graphicdesign-poster.jpg",
            detailPage: "projects/graphicdesign.html",
            layout: "full-width"
        },
        {
            id: "aurora",
            title: "AURORA",
            category: "MOTION DESIGN",
            description: "Motion design and animation project",
            videoPlaceholder: true,
            videoSrc: "assets/videos/aurora.mp4",
            posterImage: "assets/images/aurora-poster.jpg",
            detailPage: "projects/aurora.html",
            layout: "full-width"
        },
        {
            id: "walk-the-line",
            title: "WALK THE LINE",
            category: "MOTION DESIGN",
            description: "Cinematic motion design piece",
            videoPlaceholder: true,
            videoSrc: "assets/videos/walk-the-line.mp4",
            posterImage: "assets/images/walk-the-line-poster.jpg",
            detailPage: "projects/walk-the-line.html",
            layout: "full-width"
        },
        {
            id: "ui-caffeine",
            title: "UI CAFFEINE",
            category: "UX/UI",
            description: "User interface design for coffee app",
            videoPlaceholder: true,
            videoSrc: "assets/videos/ui-caffeine.mp4",
            posterImage: "assets/images/ui-caffeine-poster.jpg",
            detailPage: "projects/ui-caffeine.html",
            layout: "half-width"
        },
        {
            id: "www-volorant",
            title: "WWW VOLORANT",
            category: "UX/UI",
            description: "Website design project",
            videoPlaceholder: true,
            videoSrc: "assets/videos/www-volorant.mp4",
            posterImage: "assets/images/www-volorant-poster.jpg",
            detailPage: "projects/www-volorant.html",
            layout: "half-width"
        },
        {
            id: "lastdrop",
            title: "LASTDROP",
            category: "3D DESIGN",
            description: "3D visualization and rendering",
            videoPlaceholder: true,
            videoSrc: "assets/videos/lastdrop.mp4",
            posterImage: "assets/images/lastdrop-poster.jpg",
            detailPage: "projects/lastdrop.html",
            layout: "half-width"
        },
        {
            id: "route-66",
            title: "ROUTE 66",
            category: "3D DESIGN",
            description: "3D environment design",
            videoPlaceholder: true,
            videoSrc: "assets/videos/route-66.mp4",
            posterImage: "assets/images/route-66-poster.jpg",
            detailPage: "projects/route-66.html",
            layout: "half-width"
        }
    ],

    // Contact Information
    contact: {
        heading: "GET IN TOUCH",
        email: "hello@yugen.agency",
        phone: "+1 234 567 8900",
        social: {
            instagram: "https://instagram.com/yugen",
            behance: "https://behance.net/yugen",
            linkedin: "https://linkedin.com/company/yugen"
        }
    }
};
