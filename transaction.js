let cart = [];
let total = 0;

document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const transactionDate = document.getElementById('transactionDate').value;

    const transactionDetails = {
        customerName,
        customerEmail,
        transactionDate
    };

    localStorage.setItem('transactionDetails', JSON.stringify(transactionDetails));
    displayTransactionDetails();
});

function displayTransactionDetails() {
    const transactionDetails = JSON.parse(localStorage.getItem('transactionDetails'));

    if (transactionDetails) {
        const table = document.getElementById('transactionDetailsTable');
        const newRow = table.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);

        cell1.textContent = transactionDetails.customerName;
        cell2.textContent = transactionDetails.customerEmail;
        cell3.textContent = transactionDetails.transactionDate;
        cell4.textContent = cart.map(item => `${item.name} - Rp. ${item.price.toLocaleString()}`).join(', ');
        cell5.textContent = `Rp. ${total.toLocaleString()}`;

        document.getElementById('continueShopping').style.display = 'block';
    }
}

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    total += productPrice;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    cart.forEach((item) => {
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
    saveReceipt();
    document.getElementById('checkoutLink').click();
}

function saveReceipt() {
    const receipt = {
        items: cart,
        total: total
    };
    localStorage.setItem('receipt', JSON.stringify(receipt));
}

function refreshCart() {
    cart = [];
    total = 0;
    updateCart();
}

function continueToReceipt() {
    window.location.href = 'receipt.html';
}

document.addEventListener('DOMContentLoaded', function() {
    displayTransactionDetails();
});
