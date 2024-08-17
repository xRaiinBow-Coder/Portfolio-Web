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

document.addEventListener('DOMContentLoaded', function() {
    var element = document.querySelector('.down');
    element.classList.add('bounce');
})

document.addEventListener('DOMContentLoaded', () => {
    var element = document.getElementById('he');

    element.addEventListener('mouseover', () => {
        element.style.boxShadow = "";
        element.classList.add("rainbow")
    })

    element.addEventListener('mouseout', () => {
        element.classList.remove('rainbow');
        element.style.boxShadow = '0px 0px 0px 3px red';
    })

    
})

function createStar() {
    let size = Math.random() * 10 + 10;
    let duration = Math.random() * 7 + 2;
    var color = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

    let randomColor = color[Math.floor(Math.random() * color.length)];
    let Star = document.createElement('div');
    Star.className = 'Star'; 
    Star.style.width = size + 'px';
    Star.style.height = size + 'px';
    Star.style.left = Math.random() * window.innerWidth + 'px';
    Star.style.top = Math.random() * window.innerHeight + 'px';
    Star.style.backgroundColor = randomColor;

    Star.style.animation = duration + "s";
    document.body.appendChild(Star);

    setTimeout(() => {
        document.body.removeChild(Star);
    }, duration * 500);
}

function multiple(count) {
    for (let i = 0; i < count; i++) {
        createStar();
    }
}

multiple(100);
setInterval(() => multiple(10), 500);

