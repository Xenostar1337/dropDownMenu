function dropDownMenu(menuArray, divID) {
    const menuContainer = document.getElementById(divID);
    const dropdownMenu = document.createElement('div');
    dropdownMenu.classList.add('dropdownMenu');
    dropdownMenu.style.display = "none";
    
    // Populate the menu items
    menuArray.forEach((menuItem, index) => {
        const menuItemElement = document.createElement('div');
        menuItemElement.textContent = menuItem;
        menuItemElement.classList.add('menuItem');
        menuItemElement.style.opacity = "0";
        
        // Add animation to menu items
        menuItemElement.style.animation = `cascadeAnimation 0.5s ease forwards ${index * 0.2}s`; 
        menuItemElement.addEventListener('animationend', () => {
            menuItemElement.classList.add('menuItemLoaded');
        });        
        dropdownMenu.appendChild(menuItemElement);
    });
    
    // Append the dropdown menu to the body (overlay)
    document.body.appendChild(dropdownMenu);
    
    // Toggle dropdown menu visibility on click
    menuContainer.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click event from propagating to document

        // Get the bounding rectangle of the menuContainer
        const rect = menuContainer.getBoundingClientRect();

        // Set the position of the dropdownMenu below the menuContainer
        dropdownMenu.style.top = `${rect.bottom}px`; // Set the top position
        dropdownMenu.style.left = `${rect.left}px`; // Set the left position

        // Show the dropdown menu
        dropdownMenu.style.display = "block"; 
    });
    // Close dropdown menu when mouse leaves menuContainer or dropdownMenu
    function closeDropdownMenu(event) {
        if (!dropdownMenu.contains(event.relatedTarget)) {
            dropdownMenu.style.display = "none";
        }
    }    
    menuContainer.addEventListener('mouseleave', closeDropdownMenu);
    dropdownMenu.addEventListener('mouseleave', closeDropdownMenu);
}

// Example usage
let menuItems = ['Item 1', 'Item 2', 'Item 3'];
dropDownMenu(menuItems, 'menu1');
menuItems = ['Item 4', 'Item 5', 'Item 6'];
dropDownMenu(menuItems, 'menu2');
menuItems = ['Item 7', 'Item 8', 'Item 9'];
dropDownMenu(menuItems, 'menu3');
