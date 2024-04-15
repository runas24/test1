function formatCurrency(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    input.value = formattedValue;
}

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true; // Отключаем кнопку во время загрузки

    // Добавляем сообщение о загрузке
    var loadingMessage = document.createElement("div");
    loadingMessage.innerHTML = '<div class="loader"></div><p class="loading-text">Ваша заявка на рассмотрении...</p>';
    loadingMessage.classList.add("loading-message");
    document.body.appendChild(loadingMessage); // Добавляем сообщение о загрузке к body

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

        // Выводим результат в отдельном окне
        var resultWindow = window.open("", "Результат", "width=400,height=200");
        resultWindow.document.write("<h3 style='text-align:center;'>Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге</h3>");
    }, 20000); // Результат появится через 20 секунд (20000 миллисекунд)
});
