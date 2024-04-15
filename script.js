function formatCurrency(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    input.value = formattedValue;
}

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var submitButton = document.getElementById('submitButton');
    submitButton.disabled = true; // Отключаем кнопку во время загрузки

    // Добавляем сообщение о загрузке
    var loadingMessage = document.createElement("div");
    loadingMessage.innerText = "Ваша заявка на рассмотрении...";
    loadingMessage.classList.add("loading-message");
    document.getElementById("maxLoanAmount").appendChild(loadingMessage);

    var desiredAmount = parseFloat(document.getElementById("desiredAmount").value.replace(/\D/g, ''));
    var creditBurden = parseFloat(document.getElementById("creditBurden").value.replace(/\D/g, ''));
    var pensionContributions = parseFloat(document.getElementById("pensionContributions").value.replace(/\D/g, ''));

    // Рассчитываем максимальную сумму кредита
    // Больший процент от пенсионных отчислений увеличивает максимальную сумму кредита
    var maxLoanAmount = desiredAmount - creditBurden + (pensionContributions * 6 * 2);

    setTimeout(function() {
        // Удаляем сообщение о загрузке
        loadingMessage.remove();

        submitButton.disabled = false; // Включаем кнопку после загрузки

        var maxLoanAmountElement = document.getElementById("maxLoanAmount");
        maxLoanAmountElement.innerText = "Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге";
        maxLoanAmountElement.style.opacity = 1; // Плавное появление результата
    }, 10000); // Результат появится через 10 секунд (10000 миллисекунд)

    // Добавляем анимацию к кнопке "Рассчитать"
    submitButton.classList.add("loading");
});

