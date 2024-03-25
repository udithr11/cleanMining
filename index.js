function toggleDivs(id) {
    var clickedDiv = document.getElementById(id);
    var firstDiv = clickedDiv.querySelector('.first');
    var secondDiv = clickedDiv.querySelector('.second');

    // Toggle the display of the first and second divs
    if (firstDiv.style.display === 'none' || firstDiv.style.display === '') {
        firstDiv.style.display = 'flex';
        secondDiv.style.display = 'none';
    } else {
        firstDiv.style.display = 'none';
        secondDiv.style.display = 'flex';
    }
}


    window.addEventListener('load', function () {
        if (window.location.hash) {
            // Smooth scroll to the element if the hash is present
            document.querySelector(window.location.hash).scrollIntoView({ behavior: 'smooth' });
            
            // Remove the hash from the URL without causing the page to scroll
            history.replaceState(null, null, '#');
            window.scrollTo(0, 0);

        }
    });