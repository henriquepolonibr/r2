import { fetchStockData } from '../widget/api';
import { applyTheme } from '../widget/theme';

describe('StocksWidget', () => {
    test('fetchStockData returns correct data', async () => {
        const mockData = {
            symbol: 'AAPL',
            price: 150,
            change: 1.2,
            timestamp: '2025-11-11T10:00:00Z',
        };

        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockData),
            })
        );

        const data = await fetchStockData('AAPL');
        expect(data).toEqual(mockData);
    });

    test('applyTheme applies correct styles', () => {
        const shadowRoot = document.createElement('div');
        const theme = {
            primaryColor: '#ff0000',
            backgroundColor: '#000000',
            fontFamily: 'Verdana',
        };

        applyTheme(shadowRoot, theme);

        const style = shadowRoot.querySelector('style');
        expect(style).not.toBeNull();
        expect(style.textContent).toContain('--primary-color: #ff0000');
        expect(style.textContent).toContain('--background-color: #000000');
        expect(style.textContent).toContain('--font-family: Verdana');
    });
});