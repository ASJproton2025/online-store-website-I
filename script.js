//Function to toggle between light & dark theme
function changeTheme()
{
    //Get the current theme used in the website
    const currentTheme=document.documentElement.getAttribute("data-theme");

    //If current theme is dark, change it to light & vice-versa
    const newTheme=(currentTheme==="dark")? "light" : "dark";

    //Apply the new theme to the website
    document.documentElement.setAttribute("data-theme", newTheme);

    //Get references to theme toggle icon & cart icon
    const themeIcon=document.getElementById("theme-icon");
    const cartIcon=document.getElementById("cart-icon");

    //Checking the theme toggle icon & changing it and cart icon accordingly
    if(newTheme==="dark")
    {
        themeIcon.src="../assets/icons/dark-theme-icon.png";
        cartIcon.src="../assets/icons/dark-cart-icon.png";
    }
    else
    {
        themeIcon.src="../assets/icons/light-theme-icon.jpg";
        cartIcon.src="../assets/icons/light-cart-icon.png";
    }

    //Save user's theme preference in localStorage
    localStorage.setItem("theme", newTheme);
};

//Apply saved theme
function applySavedTheme()
{
    //Check if user has a saved theme preference in local storage
    const savedTheme=localStorage.getItem("theme");

    //If a saved theme exists, apply it to the document
    if(savedTheme)
    {
        document.documentElement.setAttribute("data-theme", savedTheme);

        //Set the correct icons based on the saved theme
        const themeIcon=document.getElementById("theme-icon");
        const cartIcon=document.getElementById("cart-icon");
        if(savedTheme==="dark")
        {
            themeIcon.src="../assets/icons/dark-theme-icon.png";
            cartIcon.src="../assets/icons/dark-cart-icon.png";
        }
        else
        {
            themeIcon.src="../assets/icons/light-theme-icon.png";
            cartIcon.src="../assets/icons/light-cart-icon.png";
        }
    }
    else
    {
        //If no saved theme, default to light theme
        document.documentElement.setAttribute("data-theme", "light");
    }
}

//Load header and footer dynamically
function loadHTML(file, elementId)
{
    fetch(file)
        .then(function(response)
        {
            return response.text();
        })
        .then(function(html)
        {
            console.log("Successfully loaded ${elementId} from ${file}");
            document.getElementById(elementId).innerHTML=html;
        })
        .catch(function(error)
        {
            console.error("Error loading HTML file:", error);
        });
}

document.addEventListener("DOMContentLoaded", function()
{
    //Apply saved theme on page load
    applySavedTheme();

    //Load header and footer dynamically
    loadHTML('../includes/header.html', 'header-placeholder');
    loadHTML('../includes/footer.html', 'footer-placeholder');
});