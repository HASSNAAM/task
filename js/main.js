document.addEventListener('DOMContentLoaded', function() {
    const menuItems = {
        appetizers: [
            { name: 'Appetizer 1', description: 'Description of Appetizer 1', price: '$5.99' },
            { name: 'Appetizer 2', description: 'Description of Appetizer 2', price: '$6.99' },
        ],
        mainCourses: [
            { name: 'Main Course 1', description: 'Description of Main Course 1', price: '$10.99' },
            { name: 'Main Course 2', description: 'Description of Main Course 2', price: '$12.99' },
        ],
        desserts: [
            { name: 'Dessert 1', description: 'Description of Dessert 1', price: '$4.99' },
            { name: 'Dessert 2', description: 'Description of Dessert 2', price: '$6.99' },
        ],
        beverages: [
            { name: 'Beverage 1', description: 'Description of Beverage 1', price: '$2.99' },
            { name: 'Beverage 2', description: 'Description of Beverage 2', price: '$3.99' },
        ]
    };

    const menuContainer = document.getElementById('menu');

    function displayMenu(category) {
        menuContainer.innerHTML = '';
        const items = menuItems[category];
        if (items) {
            items.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.classList.add('menu-item');
                menuItem.innerHTML = `
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                    <p>${item.price}</p>
                `;
                menuContainer.appendChild(menuItem);
            });
        } else {
            console.error(`Category "${category}" does not exist.`);
        }
    }

    displayMenu('appetizers'); 

    const categoryLinks = document.querySelectorAll('.category');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            displayMenu(category); 
        });
    });
});
