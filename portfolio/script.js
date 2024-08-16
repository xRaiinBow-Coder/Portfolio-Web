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

