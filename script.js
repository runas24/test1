function formatCurrency(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    input.value = formattedValue;
}

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var overlay = document.getElementById('overlay');
    var progressBar = document.getElementById('progress-bar');
    var loadingMessage = document.getElementById('loading-message');
    var maxLoanAmountDiv = document.getElementById('maxLoanAmount');
    
    overlay.style.display = 'flex'; // Показываем оверлей

    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true; // Отключаем кнопку во время загрузки

    // Ваш существующий код здесь...

    setTimeout(function() {
        submitButton.disabled = false; // Включаем кнопку после загрузки
        overlay.style.display = 'none'; // Скрываем оверлей

        // Ваш существующий код здесь...
        
        // Показываем результат
        maxLoanAmountDiv.innerText = "Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге";
        maxLoanAmountDiv.innerHTML += "<p>Ваша заявка предварительно одобрена</p>";
    }, 10000); // Результат появится через 10 секунд (10000 миллисекунд)
});
