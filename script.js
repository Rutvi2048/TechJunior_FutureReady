/**
 * TechJunior Academy - Interaction Logic
 */

// Configuration - Google Form Links
const CONFIG = {
    FORM_LINK_ENROLL: "https://forms.gle/YJ8qVd38geVxxx4B9",
    FORM_LINK_ASSESSMENT: "https://forms.gle/6ofptsGXPpsgm1z47"
};

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Handle Enrollment Buttons
    const enrollButtons = document.querySelectorAll('.open-form-enroll');
    enrollButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            window.open(CONFIG.FORM_LINK_ENROLL, '_blank');
        });
    });

    // Handle Assessment Buttons
    const assessmentButtons = document.querySelectorAll('.open-form-assessment');
    assessmentButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            window.open(CONFIG.FORM_LINK_ASSESSMENT, '_blank');
        });
    });

});
