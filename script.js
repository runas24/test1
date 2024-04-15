document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var overlay = document.getElementById("overlay");
    var resultContainer = document.getElementById("resultContainer");
    var loadingMessage = document.getElementById("loadingMessage");
    var maxLoanAmountDisplay = document.getElementById("maxLoanAmount");

    var desiredAmount = parseFloat(document.getElementById("desiredAmount").value.replace(/\D/g, ''));
    var creditBurden = parseFloat(document.getElementById("creditBurden").value.replace(/\D/g, ''));
    var pensionContributions = parseFloat(document.getElementById("pensionContributions").value.replace(/\D/g, ''));

    // Показываем оверлей с сообщением о загрузке
    overlay.style.display = "flex";
    loadingMessage.innerText = "Ваша заявка на рассмотрении...";

    // Рассчитываем максимальную сумму кредита
    // Больший процент от пенсионных отчислений увеличивает максимальную сумму кредита
    var maxLoanAmount = desiredAmount - creditBurden + (pensionContributions * 6 * 2);

    setTimeout(function() {
        // Устанавливаем результат и скрываем сообщение о загрузке
        maxLoanAmountDisplay.innerText = "Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге";
        loadingMessage.innerText = "";
    }, 10000); // Результат появится через 10 секунд (10000 миллисекунд)
});
