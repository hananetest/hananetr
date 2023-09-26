document.addEventListener("DOMContentLoaded", function() {
    const specialsTile = document.getElementById("specialsTile");

    // Array of possible menu categories
    const categories = ["Lunch", "Dinner", "Sushi", /* Add more categories here */];

    // Function to redirect to a random category page
    function redirectToRandomCategory() {
        // Get a random index from the categories array
        const randomIndex = Math.floor(Math.random() * categories.length);

        // Get the random category
        const randomCategory = categories[randomIndex];

        // Redirect to the page for the random category
        window.location.href = `menu/${randomCategory}.html`;
    }

    // Add a click event listener to the "Specials" tile
    specialsTile.addEventListener("click", redirectToRandomCategory);
});
