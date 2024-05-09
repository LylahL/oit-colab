import * as db from './data.js';


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

function displayTagsDefault(data, divId){
    const divElement = document.getElementById(divId);
    const htmlContent = data.map(item => `<p>${item.name}</p>`).join('');
    divElement.innerHTML = htmlContent;
}


const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const submit = document.getElementById("submitTag")

function populateTagTypes() {
        const tagTypeSelect = document.getElementById("tagType");
        const tagType = ['service', 'team', 'skill']
        tagType.forEach(type => {
          const option = document.createElement("option");
          option.text = type;
          option.value = type;
          tagTypeSelect.appendChild(option);
        });    
      }



function createNewTag() {
    // Display the modal when the button is clicked
    modal.style.display = "block";
  
    // Set event listener for the close button
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    // Set event listener for clicking outside of the modal
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
      // Call the function to populate dropdown options
    populateTagTypes();

    submit.onclick = function() {
        const tagTypeInput = document.getElementById("tagType");
        const tagNameInput = document.getElementById("tagName");
        var newTag;
        if (tagTypeInput == 'service'){
            newTag = new Tag(db.TagType.SERVICE, tagNameInput);
        }
        else if (tagTypeInput ==  'team'){
            newTag = new Tag(db.TagType.TEAM, tagNameInput);
        }
        else if (tagTypeInput == 'skill'){
            newTag = new Tag(db.TagType.SKILL, tagNameInput);
        }
        db.tagList.push(newTag);

        displayTagsDefault(db.tagList, "tag-list");
    }
  
  }
  


document.getElementById("addTag").addEventListener("click", createNewTag);
displayTagsDefault(db.tagList, "tag-list");
displayDataDefault(db.PeopleList, "people-list")