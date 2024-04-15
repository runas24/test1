function formatCurrency(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    input.value = formattedValue;
}

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true; // Отключаем кнопку во время загрузки

    // Добавляем сообщение о загрузке и анимацию
    var loadingMessage = document.createElement("div");
    loadingMessage.innerHTML = '<span class="loading"></span> Ваша заявка на рассмотрении...';
    loadingMessage.classList.add("loading-message");
    document.getElementById("resultContainer").innerHTML = ""; // Очищаем содержимое результата
    document.getElementById("resultContainer").appendChild(loadingMessage);

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

        var resultMessage = document.createElement("div");
        resultMessage.innerText = "Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге";
        document.getElementById("resultContainer").appendChild(resultMessage);
    }, 10000); // Результат появится через 10 секунд (10000 миллисекунд)
});
