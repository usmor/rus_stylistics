const tagTemplate = document.querySelector('#tags_cloud-template').content;

function createTag(tagData) { 
  const tagItem = tagTemplate.querySelector('.tags_cloud__list-item').cloneNode(true); 
  const tagLink = tagItem.querySelector('.tags_cloud__list-item-link'); 

  tagLink.textContent = tagData.name;
  tagLink.href = tagData.link;

  return tagItem; 

} 

const tagsList = document.querySelector('.tags_cloud__list');
 
function renderCards(tagsCloud) { 
  tagsCloud.forEach(item => { 
    tagsList.append(createTag(item)); 
  }); 

} 

renderCards(tags); 