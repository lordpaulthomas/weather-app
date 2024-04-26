// header.js

// Function to create and append the header to the DOM
export function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = `
        <div class="header-gradient"></div>
        <div class="header-content">
            <h1 class="header-text">Weather Dashboard</h1>
            <div class="add-city-container">
                <input type="text" id="city-input" placeholder="Enter city">
                <button id="add-city-button">Add City</button>
            </div>
        </div>
    `;
    return header;
}
