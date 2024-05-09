import * as db from './data.js';
function displaySearchResults(results) {
    const resultsContainer = document.getElementById("search-results");
    // Clear previous search results
    resultsContainer.innerHTML = "";
    // Create and append HTML elements for each result
    results.forEach(result => {
        const resultElement = document.createElement("div");
        resultElement.textContent = `${result.name} (${result.tag})`;
        resultsContainer.appendChild(resultElement);
    });
}

function performSearch() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const filteredData = db.data.filter(item => {
        return item.name.toLowerCase().includes(searchTerm) || item.tag.toLowerCase().includes(searchTerm);
    });
    displaySearchResults(filteredData);
}

function displayDataDefault(data, divId){
    const divElement = document.getElementById(divId);
    const htmlContent = data.map(item => `<p>${item.name} - Tag: ${item.tag}</p>`).join('');
    divElement.innerHTML = htmlContent;
}

displayDataDefault(db.data, "search-results");
document.getElementById("search-button").addEventListener("click", performSearch);