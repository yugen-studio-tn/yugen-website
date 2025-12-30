# Setup Media Folders and Placeholder Files
# This script creates the folder structure and copies the reference image to all locations

# Create main media folder
New-Item -ItemType Directory -Force -Path "assets\media"

# Create project folders
$projects = @(
    "cha9cha9ni",
    "aurage", 
    "once-upon",
    "walk-the-line",
    "hunt-in",
    "last-hunt",
    "ui-caffeine",
    "valorant-wiki"
)

foreach ($project in $projects) {
    New-Item -ItemType Directory -Force -Path "assets\media\$project"
}

# Reference image path
$referenceImage = "assets\aurage.homepage.preview.png"

# Copy reference image to all required locations with correct names

# Homepage previews (8 files)
Copy-Item $referenceImage "assets\media\cha9cha9ni\cha9cha9ni.homepage.preview.png"
Copy-Item $referenceImage "assets\media\aurage\aurage.homepage.preview.png"
Copy-Item $referenceImage "assets\media\once-upon\once-upon.homepage.preview.png"
Copy-Item $referenceImage "assets\media\walk-the-line\walk-the-line.homepage.preview.png"
Copy-Item $referenceImage "assets\media\hunt-in\hunt-in.homepage.preview.png"
Copy-Item $referenceImage "assets\media\last-hunt\last-hunt.homepage.preview.png"
Copy-Item $referenceImage "assets\media\ui-caffeine\ui-caffeine.homepage.preview.png"
Copy-Item $referenceImage "assets\media\valorant-wiki\valorant-wiki.homepage.preview.png"

# Subpage files
# CHA9CHA9NI (2 files)
Copy-Item $referenceImage "assets\media\cha9cha9ni\cha9cha9ni.subpage.1.png"
Copy-Item $referenceImage "assets\media\cha9cha9ni\cha9cha9ni.subpage.2.png"

# AURAGE (3 files)
Copy-Item $referenceImage "assets\media\aurage\aurage.subpage.1.png"
Copy-Item $referenceImage "assets\media\aurage\aurage.subpage.2.png"
Copy-Item $referenceImage "assets\media\aurage\aurage.subpage.3.png"

# ONCE UPON (1 file)
Copy-Item $referenceImage "assets\media\once-upon\once-upon.subpage.1.png"

# WALK THE LINE (1 file)
Copy-Item $referenceImage "assets\media\walk-the-line\walk-the-line.subpage.1.png"

# HUNT-IN (1 file)
Copy-Item $referenceImage "assets\media\hunt-in\hunt-in.subpage.1.png"

# LAST HUNT (1 file)
Copy-Item $referenceImage "assets\media\last-hunt\last-hunt.subpage.1.png"

# UI CAFFEINE (1 file)
Copy-Item $referenceImage "assets\media\ui-caffeine\ui-caffeine.subpage.1.png"

# VALORANT WIKI (1 file)
Copy-Item $referenceImage "assets\media\valorant-wiki\valorant-wiki.subpage.1.png"

Write-Host "✅ Folder structure created successfully!"
Write-Host "✅ All placeholder files copied with correct names!"
Write-Host ""
Write-Host "📁 Created folders in: assets\media\"
Write-Host "📸 Total files created: 19 placeholder images"
Write-Host ""
Write-Host "Next steps:"
Write-Host "1. Replace the placeholder .png files with your actual media"
Write-Host "2. Keep the same file names!"
Write-Host "3. Let me know when ready and I'll update all HTML files"
