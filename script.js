document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true; // Отключаем кнопку во время загрузки

    var resultContainer = document.getElementById("resultContainer");
    resultContainer.classList.remove("show");

    // Добавляем сообщение о загрузке
    var loadingMessage = document.getElementById("loadingMessage");
    loadingMessage.style.display = "block";

    var desiredAmount = parseFloat(document.getElementById("desiredAmount").value.replace(/\D/g, ''));
    var creditBurden = parseFloat(document.getElementById("creditBurden").value.replace(/\D/g, ''));
    var pensionContributions = parseFloat(document.getElementById("pensionContributions").value.replace(/\D/g, ''));

    // Рассчитываем максимальную сумму кредита
    // Больший процент от пенсионных отчислений увеличивает максимальную сумму кредита
    var maxLoanAmount = desiredAmount - creditBurden + (pensionContributions * 6 * 2);

    setTimeout(function() {
        submitButton.disabled = false; // Включаем кнопку после загрузки

        loadingMessage.style.display = "none";

        var maxLoanAmountElement = document.getElementById("maxLoanAmount");
        maxLoanAmountElement.innerText = "Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге";

        resultContainer.classList.add("show");
    }, 10000); // Результат появится через 10 секунд (10000 миллисекунд)
});
