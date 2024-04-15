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
        var submitButton = document.querySelector('button[type="submit"]');
        submitButton.disabled = true; // Отключаем кнопку во время загрузки

        var desiredAmount = parseFloat(document.getElementById("desiredAmount").value.replace(/\D/g, ''));
        var creditBurden = parseFloat(document.getElementById("creditBurden").value.replace(/\D/g, ''));
        var pensionContributions = parseFloat(document.getElementById("pensionContributions").value.replace(/\D/g, ''));

        // Рассчитываем максимальную сумму кредита
        // Больший процент от пенсионных отчислений увеличивает максимальную сумму кредита
        var maxLoanAmount = desiredAmount - creditBurden + (pensionContributions * 6 * 2);

        setTimeout(function() {
            submitButton.disabled = false; // Включаем кнопку после загрузки

            overlay.style.display = "none";
            progressText.innerText = "Ваша заявка предварительно одобрена";

            document.getElementById("maxLoanAmount").innerText = "Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге";
        }, 1000); // Здесь можно установить другое значение задержки, если нужно
    }, 5000); // Здесь можно установить другое значение задержки, если нужно
});
