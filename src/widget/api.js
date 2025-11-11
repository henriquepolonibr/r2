export async function fetchStockData(symbol) {
    const apiUrl = `https://api.example.com/stocks?symbol=${symbol}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch stock data: ${response.status}`);
        }

        const data = await response.json();

        return {
            symbol: data.symbol,
            price: data.price,
            change: data.change,
            timestamp: data.timestamp,
        };
    } catch (error) {
        console.error('Error fetching stock data:', error);
        throw error;
    }
}