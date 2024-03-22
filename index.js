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