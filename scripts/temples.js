// Dynamically set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically set the last modified date
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;






function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('responsive');

    // make the page title "Temple Album" disapear when the hamburger menu is expanded and return when it is collapsed
    var pageTitle = document.querySelector('.page-name');
    pageTitle.style.display = pageTitle.style.display === 'none' ? 'inline' : 'none';
    

    // make the main content regognize the expanded menu and adjust accordingly
    var mainContent = document.getElementById('main-content');
    if (nav.classList.contains('responsive')) {
        mainContent.style.marginTop = nav.clientHeight + 'px'; // Adjust margin-top to the height of the expanded menu
    } else {
        mainContent.style.marginTop = '0'; // Reset margin-top when the menu is collapsed
    }

    // switches between hamburger icon and x icon
    if (nav.classList.contains('responsive')) {
        mainContent.style.marginTop = nav.clientHeight + 'px'; // Adjust margin-top to the height of the expanded menu
        document.getElementById('menuIcon').classList.remove('fa-bars'); // Remove hamburger icon class
        document.getElementById('menuIcon').classList.add('fa-times'); // Add close (X) icon class
    } else {
        mainContent.style.marginTop = '0'; // Reset margin-top when the menu is collapsed
        document.getElementById('menuIcon').classList.remove('fa-times'); // Remove close (X) icon class
        document.getElementById('menuIcon').classList.add('fa-bars'); // Add hamburger icon class
    }
}
