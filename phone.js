const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await res.json();
    // console.log(data);
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones)
}

const displayPhones = phones => {
    //step 1: get container div id 
    const phoneContainer = document.getElementById('phone-container');
    phones.forEach(phone => {
        console.log(phone);
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
    })
}

loadPhone()