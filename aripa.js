// scripts.jss
// Function to display cars based on selected category
function showCategory(category) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const cars = {
        semua: [
            { name: 'CONVERSE', category: 'SNEAKERS', price: 'Rp. 1.500.000', img: 'img/converse1.jpg.jpg' },
            { name: 'NEW BALANCE', category: 'SNEAKERS', price: 'Rp. 2.200.000', img: 'img/new balance.webp' },
            { name: 'NIKE', category: 'SNEAKERS', price: 'Rp. 3.000.000', img: 'img/nike1.jpg' },
            { name: 'ADIDAS', category: 'SNEAKERS', price: 'Rp. 1.700.000', img: 'img/ADIDAS.jpeg' }
        ],
        CONVERSE: [
            { name: 'CONVERSE', category: 'SNEAKERS', price: 'Rp. 1.500.000', img: 'img/converse1.jpg.jpg' }
        ],
        NEW BALANCE: [
            { name: 'NEW BALANCE', category: 'SNEAKERS', price: 'Rp. 2.200.000', img: 'img/new balance.webp' }
        ],
        NIKE: [
            { name: 'NIKE', category: 'SNEAKERS', price: 'Rp. 3.000.000', img: 'img/nike1.jpg' }
        ],
        ADIDAS: [
            { name: 'ADIDAS', category: 'SNEAKERS', price:'Rp. 1.700.000', img: 'img/ADIDAS.jpeg' }
        ]
    };

    cars[category].forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.className = 'car';

        const img = document.createElement('img');
        img.src = car.img;
        img.alt = car.name;

        const h3 = document.createElement('h3');
        h3.textContent = car.name;

        const p1 = document.createElement('p');
        p1.textContent = `Kategori: ${car.category}`;

        const p2 = document.createElement('p');
        p2.textContent = `Harga: ${car.price}`;

        const button = document.createElement('p');
        
        

        carDiv.append(img, h3, p1, p2, button);
        content.appendChild(carDiv);
    });
}













