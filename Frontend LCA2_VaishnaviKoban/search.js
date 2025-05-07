document.addEventListener('DOMContentLoaded', function() {

    function highlightCategory(event) {
        const categories = document.querySelectorAll('.categories span');
        categories.forEach(cat => {
            cat.classList.remove('active'); 
        });
        event.target.classList.add('active'); 
    }


    const categoryItems = document.querySelectorAll('.categories span');
    categoryItems.forEach(item => {
        item.addEventListener('click', highlightCategory);
    });


    
    const editButton = document.querySelector('.recent-searches .add');
    editButton.addEventListener('click', function() {
        this.style.color = 'green'; 
    });


    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            alert('Search initiated!'); 
        }
    });


    const firstCategory = document.querySelector('.categories').firstElementChild;
    firstCategory.textContent = 'Hall'; 


    editButton.addEventListener('click', function() {

        const newRecentItem = document.createElement('div');
        newRecentItem.classList.add('recent-item');
        
        const newImage = document.createElement('img');
        newImage.src = 'black chair.jpg'; 
        newImage.alt = 'New Item';
        
        const newText = document.createElement('p');
        newText.textContent = 'New Item Description';
        
        newRecentItem.appendChild(newImage);
        newRecentItem.appendChild(newText);


        const recentItemsContainer = document.querySelector('.recent-items');
        recentItemsContainer.appendChild(newRecentItem); 
    });
});
