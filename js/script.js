
const navButtons = document.querySelectorAll('.nav-btn');

function handleClick(event) {
    const sectionId = event.currentTarget.getAttribute('data-section');
    const section = document.getElementById(sectionId);

    const offset = 120; // Adjust this value as needed
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: sectionPosition, behavior: 'smooth' });

    navButtons.forEach(button => {
        button.classList.remove('active');
    });

    event.currentTarget.classList.add('active');
}

navButtons.forEach(button => {
    button.addEventListener('click', handleClick);
});




