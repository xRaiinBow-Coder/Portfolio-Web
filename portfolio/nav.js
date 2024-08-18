window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    const sectionTwo = document.getElementById('two');
    const sectionOne = document.getElementById('one');
    
    const sectionTwoTop = sectionTwo.getBoundingClientRect().top;
    const sectionOneBottom = sectionOne.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;

    if (sectionOneBottom <= 0 && sectionTwoTop <= viewportHeight) {
        nav.style.display = 'block'; 
    } else {
        nav.style.display = 'none'; 
    }
});
