function formatCurrency(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    input.value = formattedValue;
}

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.classList.add("loading"); // Добавляем класс "loading" при отправке формы

    var maxLoanAmount = document.getElementById("maxLoanAmount");
    maxLoanAmount.innerText = "Ваша заявка на рассмотрении..."; // Показываем сообщение о загрузке

    var desiredAmount = parseFloat(document.getElementById("desiredAmount").value.replace(/\D/g, ''));
    var creditBurden = parseFloat(document.getElementById("creditBurden").value.replace(/\D/g, ''));
    var pensionContributions = parseFloat(document.getElementById("pensionContributions").value.replace(/\D/g, ''));

    // Рассчитываем максимальную сумму кредита
    // Больший процент от пенсионных отчислений увеличивает максимальную сумму кредита
    var maxLoanAmountValue = desiredAmount - creditBurden + (pensionContributions * 6 * 2);

    setTimeout(function() {
        submitButton.classList.remove("loading"); // Удаляем класс "loading" после загрузки
        maxLoanAmount.innerText = "Максимальная сумма кредита: " + maxLoanAmountValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге";
    }, 10000); // Результат появится через 10 секунд (10000 миллисекунд)
});

