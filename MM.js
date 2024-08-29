const options = ["Behemoth", "Ivan Nikolaevich Ponyrev", "Vassily Stepanovich Lastochkin", "Woland"]; 
const searchInput = document.getElementById("searchInput");
const searchDropdown = document.getElementById("searchDropdown");
const goButton = document.getElementById("goButton");
goButton.classList.add("disabled");
goButton.disabled = true;

searchInput.addEventListener("input", function() { 
    const inputValue = this.value.toLowerCase(); 
    const filteredOptions = options.filter(option => 
        option.toLowerCase().includes(inputValue)
    );
    renderDropdown(filteredOptions);
    if (inputValue == "") {
        goButton.disabled = true;
        goButton.classList.add("disabled");
    }
});

function renderDropdown(filteredOptions) {
    if (filteredOptions.length > 0) {
        searchDropdown.innerHTML = "";
        filteredOptions.forEach(option => {
            const optionElement = document.createElement("div");
            optionElement.classList.add("search-dropdown-item");
            optionElement.textContent = option;
            optionElement.addEventListener("click", function() {
                searchInput.value = option;
                searchDropdown.style.display = "none";
                goButton.disabled = false;
                goButton.classList.remove("disabled");
            });
            
            searchDropdown.appendChild(optionElement);
        });
        searchDropdown.style.display = "block";
    } else {
        searchDropdown.style.display = "none";
        goButton.disabled = true;
        goButton.classList.add("disabled");
    }}

goButton.addEventListener("click", function() {
    const searchTerm = searchInput.value;
    const profilePageURL = searchTerm + ".html";
    window.location.href = profilePageURL;
});

document.addEventListener("click", function(event) {
    if (!event.target.closest(".search-container")) {
        searchDropdown.style.display = "none";
    }
});

document.querySelectorAll('.comment-button').forEach(button => {
    button.addEventListener('click', function() {
        const parentClass = this.closest('.tweet-box') ? '.tweet-box' : '.profile-tweet-box';
        const commentsSection = this.closest(parentClass).querySelector('.comments-section');
        if (commentsSection.style.display === 'block') {
            commentsSection.style.display = 'none'; 
        } else {
            commentsSection.style.display = 'block';  
        }
    });
});
