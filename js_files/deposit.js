// function Deposit(){
//   return (
//     <h1>Deposit</h1>
//   )
// }



function validate(field, label){
  if (isNaN(field) || field < 0) {
    setStatus('Error: ' + label);
    setTimeout(() => setStatus(''),3000);
    return false;
  }
  return true;
}

function Deposit() {
    const [balance, setBalance] = React.useState(100);
    const [depositAmount, setDepositAmount] = React.useState('');
    const [status, setStatus]     = React.useState('');
    const ctx = React.useContext(UserContext)

    const handleDeposit = (e) => {
      
        e.preventDefault();
        const amount = parseFloat(depositAmount);
        if (validate(amount, 'Deposit'))
         {
            setBalance(prevBalance => prevBalance + amount);
            setDepositAmount('');
        }
    };

    return (
        <Card
        bgcolor="primary"
      header="Create Account"
      status={status}
      body={
                <><h1>Bank Account</h1><div>Balance: ${balance.toFixed(2)}</div><form onSubmit={handleDeposit}>
          <div controlId="depositAmount">
            <span>Deposit Amount</span>
            <input
              type="number"
              placeholder="Enter deposit amount"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)} />
          </div>
          <button variant="primary" type="submit">Deposit</button>
        </form></>
      }
        />
    );
}

