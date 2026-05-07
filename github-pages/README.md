# Personal Portfolio Website

A simple, responsive personal portfolio website that can be deployed to GitHub Pages with just a git commit and push.

## Features

- Professional CV section
- Blog with posts
- Calendar/scheduling
- About page
- Responsive design
- Ready for GitHub Pages deployment

## How to Deploy to GitHub Pages

1. **Create a new GitHub repository**:
   - Name it `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
   - Don't initialize with README, .gitignore, or license

2. **Set up your local repository**:
   ```bash
   cd /home/hyuns/Archive_hs/github-pages
   git init
   git add .
   git commit -m "Initial commit of personal portfolio"
   ```

3. **Connect to your GitHub repository**:
   ```bash
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/" (root) folder
   - Click "Save"

5. **Visit your site**:
   - Your site will be available at https://yourusername.github.io
   - It may take a few minutes to deploy

## Structure

```
.
├── index.html          # Main page
├── css/
│   └── style.css       # Stylesheet
├── js/
│   └── script.js       # JavaScript
└── README.md           # This file
```

## Customization

1. Edit `index.html` to add your personal information
2. Modify colors and styles in `css/style.css`
3. Update navigation links and section content as needed

## Browser Compatibility

Works in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

This is a personal portfolio template. Feel free to use and modify for your own needs.