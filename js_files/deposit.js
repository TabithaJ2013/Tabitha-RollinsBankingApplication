// function Deposit(){
//   return (
//     <h1>Deposit</h1>
//   )
// }
import React, { useState } from 'react';

function Deposit() {
    const [balance, setBalance] = useState(100);

    const deposit = (amount) => {
        if (amount > 0) {
            setBalance(prevBalance => prevBalance + amount);
        }
    };

    return (
        <div>
            <h1>Bank Account</h1>
            <p>Balance: ${balance.toFixed(2)}</p>
            <input type="number" id="depositAmount" placeholder="Enter deposit amount" />
            <button onClick={() => {
                const depositAmount = parseFloat(document.getElementById("depositAmount").value);
                deposit(depositAmount);
            }}>Deposit</button>
        </div>
    );
}

export default BankAccount;
