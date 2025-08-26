// Feature detection and polyfills
(function() {
    console.log('Running feature detection');
    
    // Check if CSS variables are supported
    const cssVarsSupported = window.CSS && window.CSS.supports && window.CSS.supports('--fake-var', 0);
    console.log('CSS Variables supported:', cssVarsSupported);
    
    // If CSS variables aren't supported, use fallbacks
    if (!cssVarsSupported) {
        console.log('Applying CSS variables fallbacks');
        document.documentElement.className += ' no-css-vars';
        
        // Create fallback styles
        const fallbackStyles = document.createElement('style');
        fallbackStyles.textContent = `
            /* Light theme fallbacks */
            body {
                background-color: #f3f4f6;
                color: #1f2937;
            }
            
            .hero {
                background: linear-gradient(135deg, #3b82f6, #4f46e5);
                color: white;
            }
            
            .skill-card {
                background-color: #ffffff;
            }
            
            .skill-icon {
                color: #3b82f6;
            }
            
            /* Dark theme fallbacks */
            body.dark-theme {
                background-color: #111827;
                color: #f9fafb;
            }
            
            body.dark-theme .skill-card {
                background-color: #1f2937;
            }
            
            body.dark-theme .skill-icon {
                color: #60a5fa;
            }
        `;
        
        document.head.appendChild(fallbackStyles);
    }
    
    // Check for CSS Grid support
    const gridSupported = window.CSS && window.CSS.supports && (
        window.CSS.supports('display', 'grid') || 
        window.CSS.supports('display', '-ms-grid')
    );
    console.log('CSS Grid supported:', gridSupported);
    
    // Apply fallback for grid if needed
    if (!gridSupported) {
        console.log('Applying CSS Grid fallbacks');
        document.documentElement.className += ' no-css-grid';
        
        // Apply flexbox fallback for skills container
        const fallbackGridStyles = document.createElement('style');
        fallbackGridStyles.textContent = `
            .skills-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }
            
            .skill-card {
                flex: 0 0 calc(25% - 2rem);
                margin: 1rem;
            }
            
            @media (max-width: 992px) {
                .skill-card {
                    flex: 0 0 calc(33.333% - 2rem);
                }
            }
            
            @media (max-width: 768px) {
                .skill-card {
                    flex: 0 0 calc(50% - 2rem);
                }
            }
            
            @media (max-width: 480px) {
                .skill-card {
                    flex: 0 0 calc(100% - 2rem);
                }
            }
        `;
        
        document.head.appendChild(fallbackGridStyles);
    }
})();
