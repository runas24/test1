function formatCurrency(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    input.value = formattedValue;
}

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var submitButton = document.getElementById('submitButton');
    submitButton.disabled = true; // Отключаем кнопку во время загрузки

    var loadingMessage = document.getElementById('loading');
    loadingMessage.style.display = 'block'; // Показываем сообщение о загрузке

    var desiredAmount = parseFloat(document.getElementById("desiredAmount").value.replace(/\D/g, ''));
    var creditBurden = parseFloat(document.getElementById("creditBurden").value.replace(/\D/g, ''));
    var pensionContributions = parseFloat(document.getElementById("pensionContributions").value.replace(/\D/g, ''));

    // Рассчитываем максимальную сумму кредита
    // Больший процент от пенсионных отчислений увеличивает максимальную сумму кредита
    var maxLoanAmount = desiredAmount - creditBurden + (pensionContributions * 6 * 2);

    setTimeout(function() {
        submitButton.disabled = false; // Включаем кнопку после загрузки
        loadingMessage.style.display = 'none'; // Скрываем сообщение о загрузке

        var approvalMessage = document.getElementById('approvalMessage');
        approvalMessage.style.display = 'block'; // Показываем сообщение о предварительном одобрении

        document.getElementById("maxLoanAmount").innerText = "Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге";
    }, 10000); // Результат появится через 10 секунд (10000 миллисекунд)
});
