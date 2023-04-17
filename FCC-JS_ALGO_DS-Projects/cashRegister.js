export default function cashRegister() {

	let [price, cash, cid] = prompt("Enter the same arguments as required by the fcc problem");

	const currencies = {
		"PENNY": 1,
		"NICKEL": 5,
		"DIME": 10,
		"QUARTER": 25,
		"ONE": 100,
		"FIVE": 500,
		"TEN": 1000,
		"TWENTY": 2000,
		"ONE HUNDRED": 10000
	};

	let change = Math.trunc(cash * 100 - price * 100);
	let closed = true;
	const cashCollected = [];

	// looping through cid in descending order
	for (let i = cid.length - 1; i >= 0; i--) {

		const moneyVal = currencies[cid[i][0]];
		const moneyAmount = cid[i][1] * 100;

		// looping out of currencies that are greater than required change as well as when that currency is 0 in cid

		if (moneyVal > change || moneyAmount === 0) continue;

		const have_pieces = moneyAmount / moneyVal;

		const required_pieces = Math.trunc(change / moneyVal);
		if (have_pieces !== required_pieces) closed = false;

		const amount = have_pieces >= required_pieces ? required_pieces * moneyVal :
			have_pieces * moneyVal;

		change -= amount;

		cashCollected.push([cid[i][0], amount / 100])
	}

	const result = change ? { status: "INSUFFICIENT_FUNDS", change: [] } :
		closed ? { status: "CLOSED", change: cid } : { status: "OPEN", change: cashCollected };

	alert(result);
}
