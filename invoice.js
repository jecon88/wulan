document.addEventListener('DOMContentLoaded', function() {
    // Get the invoice container
    const invoiceContainer = document.getElementById('invoiceContainer');

    // Get transaction details from localStorage
    const transactionDetails = JSON.parse(localStorage.getItem('transactionDetails'));

    const dailyRates = {
        'CONVERSE': 1500000,
        'NEW BALANCE': 2200000,
        'NKE': 3000000,
        'ADIDAS': 1700000,
        // Add more car types and daily rates as needed
    };
    // Check if there are transaction details
    if (transactionDetails) {
        // Get the daily rate for the selected car
        const dailyRate = dailyRates[transactionDetails.carName];

        // Calculate total price based on rental days and daily rate
        const totalPrice = dailyRate * transactionDetails.rentalDays;

        // Create invoice content
        const invoiceContent = `
            <h3>Nama: ${transactionDetails.fullName}</h3>
            <p>Email: ${transactionDetails.email}</p>
            <p>Nomor Telepon: ${transactionDetails.phone}</p>
            <p>Nama Mobil: ${transactionDetails.carName}</p>
            <p>Sewa Perhari: Rp. ${transactionDetails.totalPrice} / hari</p>
            <p>Jumlah Hari Sewa: ${transactionDetails.rentalDays} hari</p>
            <p>Total Harga: Rp. ${totalPrice.toLocaleString()}</p>
            <p>Metode Pembayaran: ${transactionDetails.paymentMethod}</p>
        `;

        // Insert the content into the container
        invoiceContainer.innerHTML = invoiceContent;
    } else {
        // If no transaction details, show a message
        invoiceContainer.innerHTML = '<p> Anda belum melakukan transaksi.</p>';
    }
});
