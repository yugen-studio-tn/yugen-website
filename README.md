# 🎨 YUGEN Portfolio Website

Welcome to your portfolio website! This guide will help you edit and manage your site - **no coding experience needed**.

## 📁 Project Structure

```
portfolio/
├── index.html          # Main website page
├── styles.css          # All styling (colors, fonts, spacing)
├── script.js           # Website functionality
├── config.js           # ⭐ EDIT THIS to update content
├── assets/             # Your images and videos go here
│   ├── images/
│   └── videos/
└── projects/           # Individual project pages
```

## ✏️ How to Edit Your Portfolio

### 🎯 Updating Projects, Text, and Contact Info

**Open `config.js`** - this is where you'll make most changes!

#### Adding/Editing Projects:

```javascript
{
  id: "project-name",
  title: "PROJECT TITLE",
  category: "GRAPHIC DESIGN",  // or MOTION DESIGN, UX/UI, 3D DESIGN
  description: "Brief description of the project",
  videoPlaceholder: false,     // Change to false when you add video
  videoSrc: "assets/videos/your-video.mp4",
  posterImage: "assets/images/your-thumbnail.jpg",
  detailPage: "projects/project-name.html",
  layout: "full-width"         // or "half-width"
}
```

#### Changing Contact Information:

Find the `contact` section in `config.js`:

```javascript
contact: {
  heading: "GET IN TOUCH",
  email: "your@email.com",      // Change this
  phone: "+1 234 567 8900",     // Change this
  social: {
    instagram: "https://instagram.com/yourhandle",
    behance: "https://behance.net/yourprofile",
    linkedin: "https://linkedin.com/company/yourcompany"
  }
}
```

### 🎨 Changing Colors and Fonts

**Open `styles.css`** and look for the top section with `:root {`

```css
:root {
  --color-bg: #000000;           /* Background color */
  --color-text: #ffffff;         /* Text color */
  --color-accent: #00ff00;       /* Green video placeholder */
  --color-accent-pink: #ff006b;  /* Pink accent */
}
```

### 🎥 Adding Your Videos

1. **Save your video** in the `assets/videos/` folder
2. **Open `config.js`**
3. **Find your project** and update:
   ```javascript
   videoPlaceholder: false,  // Change from true to false
   videoSrc: "assets/videos/your-video-name.mp4",
   ```

**Recommended video format**: MP4 (H.264), under 50MB for web performance

### 🖼️ Adding Images

1. **Save images** in `assets/images/` folder
2. **Update the path** in `config.js`:
   ```javascript
   posterImage: "assets/images/your-image.jpg"
   ```

## 🚀 Viewing Your Website Locally

### Option 1: Simple Double-Click (Easiest)
Just double-click `index.html` - it will open in your browser!

### Option 2: Local Server (Recommended for videos)
1. Open Command Prompt or Terminal
2. Navigate to your project folder
3. Run: `npx serve .`
4. Open the URL shown (usually http://localhost:3000)

## 🌐 Publishing Your Website Online

### Option 1: Netlify (Easiest - Drag & Drop)

1. Go to https://www.netlify.com/
2. Sign up for free
3. Drag your entire project folder onto Netlify
4. Done! You'll get a live URL like `yoursite.netlify.app`
5. You can add a custom domain later

### Option 2: Vercel

1. Go to https://vercel.com/
2. Sign up with GitHub (free)
3. Import your project
4. Deploy! You'll get a URL like `yoursite.vercel.app`

### Option 3: GitHub Pages

1. Create a GitHub account
2. Create a new repository
3. Upload all your files
4. Enable GitHub Pages in Settings
5. Your site will be at `yourusername.github.io/repository-name`

## 📱 Responsive Design

Your website automatically adapts to:
- 📱 Mobile phones (375px and up)
- 📱 Tablets (768px and up)
- 💻 Laptops (1024px and up)
- 🖥️ Large screens (1440px and up)

## 🎬 Video Tips

- **Format**: Use MP4 (H.264 codec)
- **Size**: Keep under 50MB for fast loading
- **Dimensions**: 1920x1080 or 1280x720
- **Compression**: Use HandBrake or similar to compress videos

## 🆘 Need Help?

### Common Issues:

**Videos not playing?**
- Make sure the file path is correct
- Check the video format (MP4 works best)
- Use a local server instead of opening the file directly

**Changes not showing?**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache

**Layout looks broken on mobile?**
- Test using browser dev tools (F12 → Toggle device toolbar)

## 📝 Quick Checklist Before Publishing

- [ ] Replace all placeholder videos with your actual videos
- [ ] Update contact email and phone number
- [ ] Add your social media links
- [ ] Test on mobile, tablet, and desktop
- [ ] Check all project links work
- [ ] Optimize images and videos for web

## 🎨 Design Credits

Inspired by Fortiche Productions' website aesthetic - bold, cinematic, and modern.

---

**Made with ❤️ for designers who want beautiful portfolios without coding**
