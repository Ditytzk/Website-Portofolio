document.getElementById('backToHome').addEventListener('click', function() {
    window.location.href = "beranda.html";
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pesan berhasil dikirim!');
});
