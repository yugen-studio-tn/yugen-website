# 🧊 How to Add Spline 3D Designs to Your Project

Spline is a great way to add interactive 3D elements to your site. Here is the step-by-step process.

## Step 1: Export from Spline
1.  Open your file in **Spline Design** tool.
2.  Click the **Export** button in the top toolbar.
3.  On the left, select **"Viewer"**.
4.  **Important:** Make sure "Background Color" is set to "Transparent" in the export settings if you want it to blend with your site.
5.  Click the **"Update"** or **"Export"** button to generate the latest version.
6.  Look for the **"Embed"** tab or section.
7.  Copy the **Embed Code**. It usually looks like this:
    ```html
    <script type="module" src="https://unpkg.com/@spline-tool/viewer@.../viewer.js"></script>
    <spline-viewer url="https://prod.spline.design/.../scene.splinecode"></spline-viewer>
    ```

## Step 2: Add to Your Website

### Option A: Replace the Hero Video (Homepage)
If you want the 3D scene to replace the main video at the top of your site:

1.  Open `index.html`.
2.  Find the `<!-- HERO SECTION -->` (approx line 40).
3.  Find the `div` with class `hero-media`.
4.  Replace the `<img>` or `<video>` tag inside it with your Spline code.

**Example Code Structure:**
```html
<section class="hero-section">
  <!-- ... other stuff ... -->
  <div class="hero-media">
    <!-- Paste Spline Code Here -->
    <script type="module" src="https://unpkg.com/@spline-tool/viewer@1.0.0/build/viewer.js"></script>
    <spline-viewer url="YOUR_SPLINE_URL_HERE"></spline-viewer>
  </div>
</section>
```

### Option B: Add to a Specific Section
You can paste that code anywhere in `index.html` or any project page where you want the 3D model to appear.

## Step 3: CSS Adjustments (Optional)
To make sure it fits perfectly, you might need to add this to your `styles.css`:

```css
spline-viewer {
  width: 100%;
  height: 100%;
  border: none;
}
```

---

**💡 Tip:** If you send me the **Spline URL** (e.g., `https://prod.spline.design/.../scene.splinecode`), I can do this for you correctly!
