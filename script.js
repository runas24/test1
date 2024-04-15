function formatCurrency(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    input.value = formattedValue;
}

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var overlay = document.getElementById("overlay");
    var progressText = document.querySelector('.progress-text');

    overlay.style.display = "flex";

    // Simulate processing delay
    setTimeout(function() {
        overlay.style.display = "none";
        progressText.innerText = "Ваша заявка предварительно одобрена";
    }, 10000);
});

