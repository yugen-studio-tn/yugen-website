// ============================================
// SPLASH SCREEN - Exactly 3 Seconds
// ============================================

(function () {
    'use strict';

    const splashScreen = document.getElementById('splash-screen');
    const body = document.body;

    if (!splashScreen) return;

    // Show for exactly 3 seconds
    setTimeout(function () {
        splashScreen.classList.add('hidden');
        body.classList.remove('loading');

        // Remove from DOM after fade completes
        setTimeout(function () {
            if (splashScreen.parentNode) {
                splashScreen.parentNode.removeChild(splashScreen);
            }
        }, 800);
    }, 3000);

})();
