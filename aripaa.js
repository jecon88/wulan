function openModal(carName, price) {
    document.getElementById('carName').value = carName;
    document.getElementById('totalPrice').value = ''; // Reset the total price field
    document.getElementById('transactionModal').style.display = 'block';

    // Set up event listener to calculate total price when rentalDays input changes
    document.getElementById('rentalDays').addEventListener('input', function() {
        const rentalDays = parseInt(this.value, 10) || 0;
        const totalPrice = rentalDays * price;
        document.getElementById('totalPrice').value = `Rp. ${totalPrice.toLocaleString()}`;
    });
}

function closeModal() {
    document.getElementById('transactionModal').style.display = 'none';
}

function closeConfirmationModal() {
    document.getElementById('confirmationModal').style.display = 'none';
}

document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const carName = document.getElementById('carName').value;
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const rentalDays = document.getElementById('rentalDays').value;
    const totalPrice = document.getElementById('totalPrice').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    const confirmationMessage = `
        <strong>Bukti Transaksi</strong><br>
        Nama Mobil: ${carName}<br>
        Nama Lengkap: ${fullName}<br>
        Email: ${email}<br>
        Nomor Telepon: ${phone}<br>
        Jumlah Hari Sewa: ${rentalDays} hari<br>
        Harga Perhari: ${totalPrice}<br>
        Metode Pembayaran: ${paymentMethod}
        
    `;

    document.getElementById('confirmationMessage').innerHTML = confirmationMessage;
    document.getElementById('transactionModal').style.display = 'none';
    document.getElementById('confirmationModal').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function() {
    const transactionForm = document.getElementById('transactionForm');

    transactionForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const carName = document.getElementById('carName').value;
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const rentalDays = document.getElementById('rentalDays').value;
        const totalPrice = document.getElementById('totalPrice').value;
        const paymentMethod = document.getElementById('paymentMethod').value;

        // Create a transaction details object
        const transactionDetails = {
            carName,
            fullName,
            email,
            phone,
            rentalDays,
            totalPrice,
            paymentMethod
        };

        // Store transaction details in localStorage
        localStorage.setItem('transactionDetails', JSON.stringify(transactionDetails));

        // Display confirmation message
        document.getElementById('confirmationMessage').textContent = 'Transaksi berhasil. Silakan cek halaman Invoice untuk melihat bukti transaksi anda.';
        document.getElementById('confirmationModal').style.display = 'block';
    });

    // Function to open modal
    window.openModal = function(carName, carPrice) {
        document.getElementById('carName').value = carName;
        document.getElementById('totalPrice').value = carPrice;
        document.getElementById('transactionModal').style.display = 'block';
    }

    // Function to close modal
    window.closeModal = function() {
        document.getElementById('transactionModal').style.display = 'none';
    }

    // Function to close confirmation modal
    window.closeConfirmationModal = function() {
        document.getElementById('confirmationModal').style.display = 'none';
    }


    let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    total += productPrice;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Rp. ${item.price.toLocaleString()}`;
        cartList.appendChild(listItem);
    });
    document.getElementById('total').textContent = total.toLocaleString();
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }
    alert(`Thank you for your purchase! Your total is Rp. ${total.toLocaleString()}`);
    refreshCart();
}

function refreshCart() {
    cart = [];
    total = 0;
    updateCart();
}
});


