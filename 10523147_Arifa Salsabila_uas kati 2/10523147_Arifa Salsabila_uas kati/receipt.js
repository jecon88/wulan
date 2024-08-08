document.addEventListener('DOMContentLoaded', () => {
    const receipt = JSON.parse(localStorage.getItem('receipt'));
    const transactionDetails = JSON.parse(localStorage.getItem('transactionDetails'));

    if (!receipt || !transactionDetails) {
        alert('No transaction details found!');
        return;
    }

    const receiptDiv = document.getElementById('receipt');
    receiptDiv.innerHTML = '<h3>Receipt</h3>';

    const details = document.createElement('p');
    details.innerHTML = `
        <strong>Customer Name:</strong> ${transactionDetails.customerName}<br>
        <strong>Customer Email:</strong> ${transactionDetails.customerEmail}<br>
        <strong>Transaction Date:</strong> ${transactionDetails.transactionDate}<br>
        <strong>Total:</strong> Rp. ${receipt.total.toLocaleString()}
    `;
    receiptDiv.appendChild(details);

    const itemList = document.createElement('ul');
    receipt.items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Rp. ${item.price.toLocaleString()}`;
        itemList.appendChild(listItem);
    });
    receiptDiv.appendChild(itemList);
});