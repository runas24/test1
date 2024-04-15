function formatCurrency(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('ru-RU').format(value);
    input.value = formattedValue;
}

document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var overlay = document.getElementById("overlay");
    overlay.style.display = "flex"; // Показываем оверлей
    
    var progressBar = document.querySelector(".progress-bar");
    progressBar.style.width = "100%"; // Показываем прогресс на 100%
    
    var loadingMessage = document.querySelector(".loading-message");
    loadingMessage.textContent = "Заявка на рассмотрении..."; // Обновляем текст надписи
    
    // Твой рассчет максимальной суммы кредита
    
    setTimeout(function() {
        // После завершения рассчета
        overlay.style.display = "none"; // Скрываем оверлей
        
        // Показываем результат
        var maxLoanAmount = 100000; // Замени это на свой рассчет
        document.getElementById("maxLoanAmount").innerText = "Максимальная сумма кредита: " + maxLoanAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " тенге";
        
        // Добавляем надпись о предварительном одобрении заявки
        var approvalMessage = document.createElement("div");
        approvalMessage.textContent = "Ваша заявка предварительно одобрена";
        document.getElementById("maxLoanAmount").appendChild(approvalMessage);
    }, 10000); // Результат появится через 10 секунд (10000 миллисекунд)
});
