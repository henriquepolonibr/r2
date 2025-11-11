class StocksWidget extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        const symbol = this.getAttribute('symbol') || 'AAPL';
        this.renderLoading();

        try {
            const data = await this.fetchStockData(symbol);
            this.render(data);
        } catch (error) {
            this.renderError();
            console.error('Error fetching stock data:', error);
        }
    }

    renderLoading() {
        this.shadowRoot.innerHTML = '<p>Loading stock data...</p>';
    }

    renderError() {
        this.shadowRoot.innerHTML = '<p>Failed to load stock data. Please try again later.</p>';
    }

    render(data) {
        this.shadowRoot.innerHTML = `
      <style>
        /* Add widget styles here */
      </style>
      <div>
        <h2>${data.symbol}</h2>
        <p>Price: $${data.price}</p>
        <p>Change: ${data.change}%</p>
      </div>
    `;
    }

    async fetchStockData(symbol) {
        const response = await fetch(`https://api.example.com/stocks?symbol=${symbol}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }
}

customElements.define('stocks-widget', StocksWidget);