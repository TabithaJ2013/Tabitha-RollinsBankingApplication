// function Deposit(){
//   return (
//     <h1>Deposit</h1>
//   )
// }


function Deposit() {
    const [balance, setBalance] = React.useState(100);
    const [depositAmount, setDepositAmount] = React.useState('');
    const [status, setStatus]     = React.useState('');
    const handleDeposit = (e) => {
        e.preventDefault();
        const amount = parseFloat(depositAmount);
        if (!isNaN(amount) && amount > 0) {
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
          <form.Group controlId="depositAmount">
            <span>Deposit Amount</span>
            <input
              type="number"
              placeholder="Enter deposit amount"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)} />
          </form.Group>
          <Button variant="primary" type="submit">Deposit</Button>
        </form></>
      }
        />
    );
}

