const initToggleActiveListItem = (number) => {
    // Get the UL element by its ID
const ulElement = document.getElementById("myList");

// Loop through each LI element
for (let i = 0; i < ulElement.children.length; i++) {
  const liElement = ulElement.children[i];

  // Remove the 'active' class from all other LI elements
  liElement.classList.remove("active");
  
  // Add the 'active' class to the numbered element
  if (i === number) {
    liElement.classList.add("active");
  }
}
}

export default initToggleActiveListItem