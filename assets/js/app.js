// Select DOM elements
const dropdown = document.querySelector(".dropdown");
const select = dropdown.querySelector(".select");
const caret = dropdown.querySelector(".caret");
const menu = dropdown.querySelector(".menu");
const options = dropdown.querySelectorAll(".menu li");
const selected = dropdown.querySelector(".selected");

// Toggle dropdown menu on select box click
select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
});

// Handle option selection
options.forEach(option => {
    option.addEventListener("click", () => {
        // Update selected text
        selected.innerText = option.innerText;
        
        // Close dropdown
        select.classList.remove("select-clicked");
        caret.classList.remove("caret-rotate");
        menu.classList.remove("menu-open");
        
        // Update active option
        options.forEach(opt => opt.classList.remove("active"));
        option.classList.add("active");
    });
});


// Toggle dropdown menu on select box click
select.addEventListener("click", () => {
    select.classList.toggle("select-clicked1");
    caret.classList.toggle("caret-rotate1");
    menu.classList.toggle("menu-open1");
});

// Handle option selection
options.forEach(option => {
    option.addEventListener("click", () => {
        // Update selected text
        selected.innerText = option.innerText;
        
        // Close dropdown
        select.classList.remove("select-clicked1");
        caret.classList.remove("caret-rotate1");
        menu.classList.remove("menu-open1");
        
        // Update active option
        options.forEach(opt => opt.classList.remove("active"));
        option.classList.add("active");
    });
});






let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})



let darkmode1 = localStorage.getItem('darkmode')
const themeSwitch1 = document.getElementById('theme-switch-1')

const enableDarkmode1 = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode1 = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode1()

themeSwitch1.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode1() : disableDarkmode1()
})





// POPUP

    window.addEventListener("load", function(){
        this.setTimeout(
            function open(event){
                document.querySelector(".iklan-popup").style.display = "block";
            },
            1000
        )
    });

    document.querySelector("#close-btn-iklan").addEventListener("click", function(){
        document.querySelector(".iklan-popup").style.display = "none";
    });


let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu")
};