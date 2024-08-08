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
    window.location.href = 'transaksi_form.html';
});