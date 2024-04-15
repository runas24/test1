function formatCurrency(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    input.value = formattedValue;
}

function showOverlay() {
    document.getElementById("overlay").style.display = "block";
}

function hideOverlay() {
    document.getElementById("overlay").style.display = "none";
}

function updateProgressBar(percent) {
    document.getElementById("progressBar").style.width = percent + "%";
}

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();
    showOverlay();

    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true; // Отключаем кнопку во время загрузки

    var desiredAmount = parseFloat(document.getElementById("desiredAmount").value.replace(/\D/g, ''));
    var creditBurden = parseFloat(document.getElementById("creditBurden").value.replace(/\D/g, ''));
    var pensionContributions = parseFloat(document.getElementById("pensionContributions").value.replace(/\D/g, ''));

    // Рассчитываем максимальную сумму кредита
    // Больший процент от пенсионных отчислений увеличивает максимальную сумму кредита
    var maxLoanAmount = desiredAmount - creditBurden + (pensionContributions * 6 * 2);

    // Прячем прогресс бар и показываем результат
    var percentComplete = 0;
    var interval = setInterval(function() {
        percentComplete += 10;
        updateProgressBar(percentComplete);
        if (percentComplete >= 100) {
            clearInterval(interval);
            hideOverlay();
            submitButton.disabled = false; // Включаем кнопку после загрузки
            document.getElementById("maxLoanAmount").innerText = "Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге";
        }
    }, 1000); // Обновляем прогресс каждую секунду
});
