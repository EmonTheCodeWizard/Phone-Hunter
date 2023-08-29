const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    // console.log(data);
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones)
}

const displayPhones = phones => {
    //step 1: get container div id 
    const phoneContainer = document.getElementById('phone-container');
    // Clear Previous Data
    phoneContainer.textContent = '';

    // Display Show All Button if there are more than 12 phone

    const showAllContainer = document.getElementById('show-all-container')
    if (phones.length > 12) {
        showAllContainer.classList.remove('hidden')
    }
    else {
        showAllContainer.classList.add('hidden')
    }
    phones = phones.slice(0, 12);
    phones.forEach(phone => {
        // console.log(phone);
        // step 2 create a div
        const phoneCard = document.createElement('div');
        // step 3 set innerHtml
        phoneCard.classList = `card bg-gray-100 shadow-xl`;
        phoneCard.innerHTML = `
        <figure class="p-10">
            <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>${phone.slug}</p>
            <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        // step 4 appendChild div to a container
        phoneContainer.appendChild(phoneCard);
    });
    // Hide Loading Spinner:

    toggleLoadingSpinner(false);
}


// Handle Search Button

const handleSearch = () => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText);
}


const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden')
    }
    else {
        loadingSpinner.classList.add('hidden')
    }

}


// loadPhone()