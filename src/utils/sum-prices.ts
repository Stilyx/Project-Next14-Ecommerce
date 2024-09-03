export const sumPrices = (prices: number[]): number => {
	return prices.reduce((price, acc) => (acc += price), 0);
};
