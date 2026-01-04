const FORM_LINK_ENROLL = "https://forms.gle/YJ8qVd38geVxxx4B9";
const FORM_LINK_ASSESSMENT = "https://forms.gle/6ofptsGXPpsgm1z47";

document.querySelectorAll('.open-form-enroll').forEach(button => {
    button.addEventListener('click', () => {
        window.open(FORM_LINK_ENROLL, '_blank');
    });
});

document.querySelectorAll('.open-form-assessment').forEach(button => {
    button.addEventListener('click', () => {
        window.open(FORM_LINK_ASSESSMENT, '_blank');
    });
});
