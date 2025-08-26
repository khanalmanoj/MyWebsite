# Manoj Khanal's Portfolio Website

This is a personal portfolio website for Manoj Khanal, an Android Developer specializing in Flutter, Dart, and Java.

## GitHub Pages Compatibility

This website is designed to work with GitHub Pages deployment. Special attention has been given to ensure proper rendering on GitHub Pages hosting.

### Special Features

1. **CSS Compatibility Layer**: Custom scripts detect and fix CSS issues that may occur in GitHub Pages environment
2. **Feature Detection**: Detects browser support for modern CSS features and applies fallbacks when needed
3. **Responsive Layout**: Works on all device sizes with appropriate layout adjustments
4. **Font Awesome Icons**: Uses Font Awesome 6.4.0 for consistent icon rendering
5. **Dark/Light Theme Support**: Includes theme switching with persistent preferences

### Deployment Notes

When deploying to GitHub Pages, the following files are critical:

- `critical.css`: Contains essential styles that must load first
- `feature-detection.js`: Detects browser capabilities and applies fallbacks
- `github-pages-fix.js`: Specifically addresses GitHub Pages rendering issues
- `css-diagnostic.js`: Helps diagnose CSS loading issues

## Development Setup

To work on this website locally:

1. Clone the repository
2. Open the folder in a web server or using Live Server in VS Code
3. Make changes and test locally
4. Deploy to GitHub Pages using GitHub's workflow

## Structure

- `index.html`: Main structure and content
- `styles.css`: Main styles with CSS variables
- `critical.css`: Critical path styles for immediate rendering
- `animations.css`: Animation-specific styles
- `app.js`: Main application functionality
- `feature-detection.js`: Browser capability detection
- `github-pages-fix.js`: GitHub Pages compatibility fixes
- `css-diagnostic.js`: CSS loading diagnostics
- `form-validation.js`: Contact form validation

## Known Issues and Fixes

### Fixed Issues:
- Social icons not displaying properly: Fixed with both CSS and JavaScript solutions
- Skills grid not aligning horizontally: Fixed with explicit grid templates and fallbacks
- CSS variables not working in some browsers: Added direct color values as fallbacks
- Testimonials section removed as requested

## Contact

For any questions or feedback about this website, please contact Manoj Khanal at khanalmanoj26@gmail.com.
