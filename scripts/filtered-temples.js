// Dynamically set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically set the last modified date
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Indianapolis Indiana",
        location: "Indianapolis, Indiana, United States",
        dedicated: "2015, August, 23",
        area: 34000,
        imageUrl:
        "https://churchofjesuschrist.org/imgs/fa48fbd0ab3c56637b99a176aaa99eadf83d209c/full/320%2C/0/default"
    },
    {
        templeName: "Sacramento California",
        location: "Sacramento, California, United States",
        dedicated: "2006, September, 3",
        area: 19500,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/f44fa0d21e44659d9a141e0dccb552a057cdae58/full/320%2C/0/default"
    },
    {
        templeName: "Rexburg Idaho",
        location: "Rexburg, Idaho, United States",
        dedicated: "2008, February, 10",
        area: 57504,
        imageUrl:
        "https://churchofjesuschrist.org/imgs/af036291e98a7caa26e051bd65e2a37176cbbf89/full/320%2C/0/default"
    }
];



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

function createAndAppendTemple(temple) {
    //temple div
    const templeDiv = document.createElement('div');
    templeDiv.className = "temple";

    //temple heading
    const heading = document.createElement('h2');
    heading.textContent = temple.templeName;

    //location div
    const div1 = document.createElement('div');
    div1.className = "temple-details";
    const pLabel1 = document.createElement('p');
    pLabel1.textContent = "Location:"
    pLabel1.className = "label";
    const pValue1 = document.createElement('p');
    pValue1.textContent = temple.location;
    div1.appendChild(pLabel1);
    div1.appendChild(pValue1);

    //dedicated div
    const div2 = document.createElement('div');
    div2.className = "temple-details";
    const pLabel2 = document.createElement('p');
    pLabel2.textContent = "Dedicated:";
    pLabel2.className = "label";
    const pValue2 = document.createElement('p');
    pValue2.textContent = temple.dedicated;
    div2.appendChild(pLabel2);
    div2.appendChild(pValue2);

    //size div
    const div3 = document.createElement('div');
    div3.className = "temple-details";
    const pLabel3 = document.createElement('p');
    pLabel3.textContent = "Size:";
    pLabel3.className = "label";
    const pValue3 = document.createElement('p');
    pValue3.textContent = `${temple.area} sq ft`;
    div3.appendChild(pLabel3);
    div3.appendChild(pValue3);

    //img
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    templeDiv.appendChild(heading);
    templeDiv.appendChild(div1);
    templeDiv.appendChild(div2);
    templeDiv.appendChild(div3);
    templeDiv.appendChild(img);

    document.querySelector('.temple-display').appendChild(templeDiv);
}

function displayTemples(displaySelection) {

    console.log(`displaying temples: ${displaySelection}`)

    document.querySelector('.temple-display').innerHTML = "";

    for (let i = 0; i < temples.length; i++) {
        switch (displaySelection) {
            case 'old':
                if (parseInt(temples[i].dedicated.substring(0, 4)) < 1900) {
                    createAndAppendTemple(temples[i]);
                }
                break;
            case 'new':
                if (parseInt(temples[i].dedicated.substring(0, 4)) > 2000) {
                    createAndAppendTemple(temples[i]);
                }
                break;
            case 'large':
                if (temples[i].area > 90000) {
                    createAndAppendTemple(temples[i]);
                }
                break;
            case 'small':
                if (temples[i].area < 10000) {
                    createAndAppendTemple(temples[i]);
                }
                break;
            default:
                createAndAppendTemple(temples[i]);
                break;
        }
    }
}

displayTemples("home");