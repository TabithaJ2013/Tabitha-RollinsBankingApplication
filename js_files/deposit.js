// function Deposit(){
//   return (
//     <h1>Deposit</h1>
//   )
// }


function Deposit() {
    const [balance, setBalance] = React.useState(100);
    const [depositAmount, setDepositAmount] = React.useState('');

    const handleDeposit = (e) => {
        e.preventDefault();
        const amount = parseFloat(depositAmount);
        if (!isNaN(amount) && amount > 0) {
            setBalance(prevBalance => prevBalance + amount);
            setDepositAmount('');
        }
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>Bank Account</Card.Title>
                <Card.Text>Balance: ${balance.toFixed(2)}</Card.Text>
                <Form onSubmit={handleDeposit}>
                    <Form.Group controlId="depositAmount">
                        <Form.Label>Deposit Amount</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter deposit amount"
                            value={depositAmount}
                            onChange={(e) => setDepositAmount(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">Deposit</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

