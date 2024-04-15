function formatCurrency(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    input.value = formattedValue;
}

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true; // Отключаем кнопку во время загрузки

    // Показываем прогресс и текст "Заявка на рассмотрении"
    document.getElementById("progressBar").style.display = "block";
    document.querySelector(".progress").style.width = "0%";
    document.querySelector(".progress-text").style.display = "block";

    var desiredAmount = parseFloat(document.getElementById("desiredAmount").value.replace(/\D/g, ''));
    var creditBurden = parseFloat(document.getElementById("creditBurden").value.replace(/\D/g, ''));
    var pensionContributions = parseFloat(document.getElementById("pensionContributions").value.replace(/\D/g, ''));

    // Рассчитываем максимальную сумму кредита
    // Больший процент от пенсионных отчислений увеличивает максимальную сумму кредита
    var maxLoanAmount = desiredAmount - creditBurden + (pensionContributions * 6 * 2);

    setTimeout(function() {
        submitButton.disabled = false; // Включаем кнопку после загрузки

        // Показываем результат и текст "Ваша заявка предварительно одобрена"
        document.getElementById("maxLoanAmount").innerText = "Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге";
        document.getElementById("progressBar").style.display = "none";
        document.getElementById("result").style.display = "block";
    }, 10000); // Результат появится через 10 секунд (10000 миллисекунд)
});
