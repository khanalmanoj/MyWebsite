// CSS diagnostic tool for GitHub Pages
document.addEventListener('DOMContentLoaded', function() {
    console.log('CSS Diagnostic Tool Running');
    
    // Check if CSS files are loaded
    const cssFiles = Array.from(document.styleSheets).map(sheet => sheet.href).filter(Boolean);
    console.log('Loaded CSS files:', cssFiles);
    
    // Test for CSS variables
    testCssVariables();
    
    // Check critical elements' styling
    checkElementStyling('.hero', 'Hero section');
    checkElementStyling('.skills-container', 'Skills container');
    checkElementStyling('.skill-card', 'Skill card');
    checkElementStyling('.social-icon', 'Social icon');
    
    // Apply fixes if necessary
    applyEmergencyFixes();
});

// Test if CSS variables are being applied
function testCssVariables() {
    const testElement = document.createElement('div');
    testElement.style.cssText = 'position: absolute; left: -9999px;';
    document.body.appendChild(testElement);
    
    const beforeStyles = getComputedStyle(testElement);
    console.log('Default element background:', beforeStyles.backgroundColor);
    
    testElement.className = 'var-test';
    const styleEl = document.createElement('style');
    styleEl.textContent = `
        .var-test {
            background-color: var(--primary-color, #ff0000);
            color: var(--text-color, #00ff00);
        }
    `;
    document.head.appendChild(styleEl);
    
    const afterStyles = getComputedStyle(testElement);
    console.log('With CSS variables applied:', {
        backgroundColor: afterStyles.backgroundColor,
        color: afterStyles.color
    });
    
    const variablesWorking = afterStyles.backgroundColor !== 'rgba(0, 0, 0, 0)' && 
                            afterStyles.backgroundColor !== 'transparent';
    
    console.log('CSS Variables working:', variablesWorking);
    
    // Clean up
    document.body.removeChild(testElement);
    document.head.removeChild(styleEl);
    
    return variablesWorking;
}

// Check if elements have proper styling
function checkElementStyling(selector, description) {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) {
        console.warn(`No ${description} elements found with selector: ${selector}`);
        return null;
    }
    
    const element = elements[0];
    const styles = getComputedStyle(element);
    
    console.log(`${description} styles:`, {
        backgroundColor: styles.backgroundColor,
        color: styles.color,
        display: styles.display,
        width: styles.width,
        height: styles.height
    });
    
    return styles;
}

// Apply emergency fixes for GitHub Pages
function applyEmergencyFixes() {
    // Create inline style element for immediate application
    const emergencyStyles = document.createElement('style');
    emergencyStyles.id = 'emergency-css-fixes';
    emergencyStyles.textContent = `
        /* Emergency fallbacks for GitHub Pages */
        .hero {
            background: linear-gradient(135deg, #3b82f6, #4f46e5) !important;
            color: white !important;
            padding: 5rem 0 !important;
        }
        
        .skills-container {
            display: grid !important;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)) !important;
            gap: 1.5rem !important;
            justify-content: center !important;
        }
        
        .skill-card {
            background-color: #ffffff !important;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
            border-radius: 8px !important;
            padding: 1.5rem !important;
            text-align: center !important;
        }
        
        .skill-icon {
            font-size: 2.5rem !important;
            color: #3b82f6 !important;
            margin-bottom: 1rem !important;
        }
        
        .social-icon {
            display: inline-flex !important;
            justify-content: center !important;
            align-items: center !important;
            width: 2.25rem !important;
            height: 2.25rem !important;
            background-color: rgba(255, 255, 255, 0.1) !important;
            border-radius: 50% !important;
            margin: 0 0.5rem !important;
            font-size: 1rem !important;
            color: #ffffff !important;
            transition: all 0.3s ease !important;
        }
        
        .social-icon:hover {
            background-color: rgba(255, 255, 255, 0.2) !important;
            color: #ffffff !important;
            transform: scale(1.2) !important;
        }
        
        .social-bar {
            display: flex !important;
            justify-content: center !important;
            gap: 1rem !important;
            margin: 1.5rem 0 !important;
        }
        
        /* Dark mode emergency styles */
        body.dark-theme {
            background-color: #121212 !important;
            color: #f8f9fa !important;
        }
        
        body.dark-theme .skill-card {
            background-color: #1f2937 !important;
            border-color: #374151 !important;
        }
        
        body.dark-theme .social-icon {
            background-color: #1f2937 !important;
            color: #60a5fa !important;
        }
        
        body.dark-theme .social-icon:hover {
            background-color: #60a5fa !important;
            color: #1f2937 !important;
        }
    `;
    
    // Log that we're applying emergency fixes
    console.log('Applying emergency CSS fixes for GitHub Pages compatibility');
    
    // Append to head to ensure it overrides other styles
    document.head.appendChild(emergencyStyles);
}
