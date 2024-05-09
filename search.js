import * as db from './data.js';
function displaySearchResults(results) {
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = "";
    results.forEach(result => {
        const resultElement = document.createElement("div");
        resultElement.textContent = `${result.name}`;
        result.tags.forEach(tag => {
            const innerTag = document.createElement("div");
            innerTag.textContent += `${tag.name}`;
            resultElement.appendChild(innerTag);
        });
        resultsContainer.appendChild(resultElement);
    });
}

function performSearch() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const filteredData = db.PeopleList.filter(item => {
        const personName = item.name.toLowerCase();
        if(personName.includes(searchTerm.toLowerCase())){
            return true
        }
        for (const tag of item.tags){
            if (tag.type.toLowerCase().includes(searchTerm.toLowerCase()) || tag.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return true;
            }
        }
        return false
    });
    displaySearchResults(filteredData);
}

function displayDataDefault(data, divId){
    const resultsContainer = document.getElementById(divId);
    data.forEach(result => {
        const resultElement = document.createElement("div");
        resultElement.textContent = `${result.name}`;
        result.tags.forEach(tag => {
            const innerTag = document.createElement("div");
            innerTag.textContent += `${tag.name}`;
            resultElement.appendChild(innerTag);
        });
        resultsContainer.appendChild(resultElement);
    });
}

displayDataDefault(db.PeopleList, "search-results");
document.getElementById("search-button").addEventListener("click", performSearch);