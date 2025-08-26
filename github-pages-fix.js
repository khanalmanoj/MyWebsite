// GitHub Pages CSS Compatibility Fix
document.addEventListener('DOMContentLoaded', function() {
    console.log('GitHub Pages CSS Fix Running');
    
    // Check if we're on GitHub Pages
    const isGitHubPages = window.location.hostname.includes('github.io');
    console.log('Running on GitHub Pages:', isGitHubPages);
    
    // Apply GitHub Pages specific fixes
    if (isGitHubPages) {
        applyGitHubPagesFixStyles();
    }
    
    // Make sure skill grid is horizontal
    fixSkillsGrid();
    
    // Fix social icons
    fixSocialIcons();
});

function applyGitHubPagesFixStyles() {
    console.log('Applying GitHub Pages specific fixes');
    
    // Create a new style element
    const fixStyles = document.createElement('style');
    fixStyles.id = 'github-pages-fixes';
    
    // Add GitHub Pages specific styles
    fixStyles.textContent = `
        :root {
            --primary: #3b82f6 !important;
            --secondary: #4f46e5 !important;
            --text: #1f2937 !important;
            --background: #f3f4f6 !important;
            --card: #ffffff !important;
            --accent: #2563eb !important;
            --muted: #6b7280 !important;
        }
        
        body.dark-theme {
            --primary: #60a5fa !important;
            --secondary: #818cf8 !important;
            --text: #f9fafb !important;
            --background: #111827 !important;
            --card: #1f2937 !important;
            --accent: #60a5fa !important;
            --muted: #9ca3af !important;
            background-color: #111827 !important;
            color: #f9fafb !important;
        }
        
        .hero {
            background: linear-gradient(135deg, #3b82f6, #4f46e5) !important;
            color: white !important;
        }
    `;
    
    // Append to head
    document.head.appendChild(fixStyles);
}

function fixSkillsGrid() {
    console.log('Fixing skills grid layout');
    
    const skillsContainer = document.querySelector('.skills-container');
    if (skillsContainer) {
        // Force grid layout
        skillsContainer.style.display = 'grid';
        
        // Set explicit grid template columns based on viewport
        const setGridColumns = () => {
            const width = window.innerWidth;
            
            if (width > 992) {
                skillsContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
            } else if (width > 768) {
                skillsContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
            } else if (width > 480) {
                skillsContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
            } else {
                skillsContainer.style.gridTemplateColumns = '1fr';
            }
        };
        
        // Initial setup
        setGridColumns();
        
        // Update on resize
        window.addEventListener('resize', setGridColumns);
    }
}

function fixSocialIcons() {
    console.log('Fixing social icons');
    
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        // Ensure consistent sizing
        icon.style.width = '2.5rem';
        icon.style.height = '2.5rem';
        icon.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        
        // Make sure FontAwesome icons have consistent size
        const faIcon = icon.querySelector('.fab, .fas, .far, .fa');
        if (faIcon) {
            // Ensure fa-lg class is present
            if (!faIcon.classList.contains('fa-lg')) {
                // Remove any size classes first
                faIcon.classList.remove('fa-2x', 'fa-1x', 'fa-sm');
                faIcon.classList.add('fa-lg');
            }
        }
    });
    
    // Make sure the social bar is displayed correctly
    const socialBar = document.querySelector('.social-bar');
    if (socialBar) {
        socialBar.style.display = 'flex';
        socialBar.style.justifyContent = 'center';
        socialBar.style.gap = '1.5rem';
        socialBar.style.margin = '2rem 0';
    }
}
