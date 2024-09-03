export const formatDollar = (money: number) => {
	const formatedNumber = new Intl.NumberFormat("en-US", {
		currency: "USD",
		currencyDisplay: "symbol",
	});

	return formatedNumber.format(money);
};
