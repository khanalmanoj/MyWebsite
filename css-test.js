// Script to verify CSS is loading correctly
document.addEventListener('DOMContentLoaded', function() {
    console.log('CSS Loading Test Script Running');
    
    // Test if CSS variables are working
    const body = document.body;
    const computedStyle = window.getComputedStyle(body);
    
    // Log CSS status
    console.log('Background color:', computedStyle.backgroundColor);
    
    // Check if any elements are missing styles
    checkElementStyles('.skill-card', 'skill cards');
    checkElementStyles('.social-link', 'social links');
    checkElementStyles('.skill-icon', 'skill icons');
    
    // Add a visual indicator if CSS is not loaded properly
    const hero = document.querySelector('.hero');
    if (hero) {
        const heroComputedStyle = window.getComputedStyle(hero);
        const heroBackground = heroComputedStyle.background;
        
        console.log('Hero background:', heroBackground);
        
        if (!heroBackground.includes('gradient') && !heroBackground.includes('#3b82f6')) {
            console.error('Hero gradient not applied correctly');
            applyEmergencyStyles();
        }
    }
});

// Check if elements have expected styles
function checkElementStyles(selector, description) {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) {
        console.error(`No ${description} found`);
        return;
    }
    
    console.log(`Found ${elements.length} ${description}`);
    
    const firstElement = elements[0];
    const computedStyle = window.getComputedStyle(firstElement);
    
    console.log(`${description} styles:`, {
        backgroundColor: computedStyle.backgroundColor,
        color: computedStyle.color,
        width: computedStyle.width,
        height: computedStyle.height
    });
}

// Apply emergency styles if CSS is not loading correctly
function applyEmergencyStyles() {
    console.log('Applying emergency styles');
    
    // Create emergency style element
    const emergencyStyles = document.createElement('style');
    emergencyStyles.textContent = `
        .hero {
            background: linear-gradient(135deg, #3b82f6, #4f46e5) !important;
        }
        
        .skill-card {
            background-color: #ffffff !important;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
            border: 1px solid rgba(0, 0, 0, 0.05) !important;
        }
        
        .skill-icon {
            color: #3b82f6 !important;
            font-size: 2.5rem !important;
        }
        
        .social-link {
            background-color: #ffffff !important;
            color: #3b82f6 !important;
            width: 4rem !important;
            height: 4rem !important;
        }
        
        .social-link:hover {
            background-color: #3b82f6 !important;
            color: #ffffff !important;
        }
        
        .social-icons {
            display: flex !important;
            justify-content: center !important;
            gap: 2rem !important;
        }
        
        body.dark-theme .skill-card {
            background-color: #1f2937 !important;
        }
        
        body.dark-theme .social-link {
            background-color: #1f2937 !important;
            color: #60a5fa !important;
        }
    `;
    
    document.head.appendChild(emergencyStyles);
}
