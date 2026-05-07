# Personal Portfolio Website

A simple, responsive personal portfolio website that can be run directly from a web server or local file system.

## Features

- Professional CV section
- Blog with posts
- Calendar/scheduling
- About page
- Responsive design
- Single HTML approach (no server required)

## How to Run

### Local Testing
1. Open `index.html` directly in your web browser
2. Or serve it using a simple HTTP server:
   ```bash
   # Using Python (if available)
   python -m http.server 8000
   
   # Using Node.js (if available)
   npx http-server
   
   # Using PHP (if available)
   php -S localhost:8000
   ```

### Hosting
Simply upload the entire directory to any web hosting service. The site is completely static and doesn't require any server-side processing.

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

1. Replace content in `index.html` with your information
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