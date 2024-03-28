
function toggleDivs_mobile(id) {
    var clickedDiv = document.getElementById(id);
    var mobile_image = clickedDiv.querySelector('.mobile_image');
    var mobile_text = clickedDiv.querySelector('.mobile_text');

    mobile_image.classList.toggle('flip');
    mobile_text.classList.toggle('flip');
}












function toggleDivs(id) {
    var clickedDiv = document.getElementById(id);
    var firstDiv = clickedDiv.querySelector('.first');
    var secondDiv = clickedDiv.querySelector('.second');

    if (firstDiv.style.display === 'none' || firstDiv.style.display === '') {
        firstDiv.style.display = 'flex';
        secondDiv.style.display = 'none';
    } else {
        firstDiv.style.display = 'none';
        secondDiv.style.display = 'flex';
    }
   

    

    // Toggle the class 'flip' for the clicked div's .second and .first divs
    // secondDiv.classList.toggle('flip_text');
    // firstDiv.classList.toggle('flip_image');
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