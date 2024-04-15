function formatCurrency(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    input.value = formattedValue;
}

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var overlay = document.getElementById("overlay");
    overlay.style.display = "flex"; // Показываем оверлей

    var progressBar = document.querySelector('.progress-bar');
    var progressText = document.querySelector('.progress-text');

    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    // Временная задержка для имитации загрузки
    var progress = 0;
    var interval = setInterval(function() {
        progress += 10;
        progressBar.style.width = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(function() {
                overlay.style.display = "none"; // Скрываем оверлей
                submitButton.disabled = false;
                var maxLoanAmount = /* вставь сюда расчет максимальной суммы кредита */;
                document.getElementById("maxLoanAmount").innerText = "Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге";
                document.getElementById("resultMessage").innerText = "Ваша заявка предварительно одобрена";
            }, 1000); // Подождем 1 секунду перед отображением результата
        }
    }, 100); // Прогресс обновляется каждые 0.1 секунды
});

