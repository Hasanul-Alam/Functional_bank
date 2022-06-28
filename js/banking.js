document.getElementById('deposit-submit-btn').addEventListener('click', function(){
    const inputText = document.getElementById('deposit-field');
    const inputValue = parseFloat(inputText.value);

    // Get the current deposit amount
    const currentDeposit = document.getElementById('deposit-amount');
    const currentDepositValue = parseFloat(currentDeposit.innerText);

    // Add input value to deposit amount
    currentDeposit.innerText = inputValue + currentDepositValue;

    // Update balance
    const currentBalance = document.getElementById('balance-amount');
    const currentBalanceValue = parseFloat(currentBalance.innerText);
    currentBalance.innerText = currentBalanceValue + inputValue;
    // Clear deposit input field
    inputText.value = '';
});

// Handle widthdraw
document.getElementById('withdraw-submit-btn').addEventListener('click', function(){
    // Get withdraw input amount
    const withdrawText = document.getElementById('withdraw-field');
    const withdrawValue = parseFloat(withdrawText.value);

    // Get current withdraw amount
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountValue = parseFloat(withdrawAmount.innerText);

    // Add withdraw value to withdraw amount
    withdrawAmount.innerText = withdrawAmountValue + withdrawValue;

    // Update balance
    const currentBalance = document.getElementById('balance-amount');
    const currentBalanceValue = parseFloat(currentBalance.innerText);
    currentBalance.innerText = currentBalanceValue - withdrawValue;

    // Clear withdraw input field
    withdrawText.value = '';
});