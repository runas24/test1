function formatCurrency(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    input.value = formattedValue;
}

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true; // Отключаем кнопку во время загрузки

    var loader = document.getElementById("loader");
    var loadingMessage = document.getElementById("loadingMessage");
    var resultMessage = document.getElementById("resultMessage");

    loader.style.display = "block"; // Показываем прогресс бар
    loadingMessage.style.display = "block"; // Показываем сообщение "Заявка на рассмотрении"

    // Имитация задержки выполнения расчета
    setTimeout(function() {
        submitButton.disabled = false; // Включаем кнопку после загрузки

        loader.style.display = "none"; // Скрываем прогресс бар
        loadingMessage.style.display = "none"; // Скрываем сообщение "Заявка на рассмотрении"

        // Показываем сообщение с результатом и статусом заявки
        resultMessage.innerText = "Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге. Ваша заявка предварительно одобрена.";
        resultMessage.style.display = "block"; // Показываем сообщение "Ваша заявка предварительно одобрена"
    }, 10000); // Результат появится через 10 секунд (10000 миллисекунд)
});
