document.getElementById('aboutMe').addEventListener('mouseover', function() {
    changeBackground('Images/blur-close-up-controller-159393___serialized4.jpg');
});

document.getElementById('projects').addEventListener('mouseover', function() {
    changeBackground('Images/UM_Locandina.jpg');
});

document.getElementById('work').addEventListener('mouseover', function() {
    changeBackground('Images/MP_02.png');
});

document.getElementById('contacts').addEventListener('mouseover', function() {
    changeBackground('Images/blur-close-up-controller-159393___serialized4.jpg');
});

function changeBackground(imageUrl) {
    document.getElementById('mainContent').style.backgroundImage = 'url(' + imageUrl + ')';
    console.log('Image to change' + 'url(' + imageUrl + ')')
}