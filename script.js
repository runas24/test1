function formatCurrency(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    input.value = formattedValue;
}

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var overlay = document.getElementById("overlay");
    var progressBarContainer = document.getElementById("progressBarContainer");
    var resultContainer = document.getElementById("resultContainer");
    var loadingMessage = document.getElementById("loadingMessage");
    var submitButton = document.getElementById("submitButton");
    submitButton.disabled = true; // Отключаем кнопку во время загрузки

    overlay.style.display = "flex"; // Показываем оверлей

    var desiredAmount = parseFloat(document.getElementById("desiredAmount").value.replace(/\D/g, ''));
    var creditBurden = parseFloat(document.getElementById("creditBurden").value.replace(/\D/g, ''));
    var pensionContributions = parseFloat(document.getElementById("pensionContributions").value.replace(/\D/g, ''));

    // Рассчитываем максимальную сумму кредита
    // Больший процент от пенсионных отчислений увеличивает максимальную сумму кредита
    var maxLoanAmount = desiredAmount - creditBurden + (pensionContributions * 6 * 2);

    setTimeout(function() {
        overlay.style.display = "none"; // Скрываем оверлей
        resultContainer.style.display = "block"; // Показываем контейнер с результатом

        document.getElementById("maxLoanAmount").innerText = "Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге";
        loadingMessage.innerText = "Результат загружен";

        submitButton.disabled = false; // Включаем кнопку после загрузки
    }, 10000); // Результат появится через 10 секунд (10000 миллисекунд)
});
