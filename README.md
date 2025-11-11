This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# R2Stocks Widget

R2Stocks is a lightweight, embeddable stock quote widget designed for easy integration into any web application. It provides real-time stock data with customizable themes.

## Features
- **Real-time Stock Data**: Fetches live stock prices and updates dynamically.
- **Customizable Themes**: Supports dynamic theming using CSS variables.
- **Lightweight**: Built with vanilla JavaScript and Web Components.
- **Containerized**: Easily deployable using Docker and Nginx.

## Installation

### Clone the Repository
```bash
git clone https://github.com/henriquepolonibr/r2.git
cd r2
```

### Install Dependencies
```bash
npm install
```

## Usage

### Local Development
1. Start a local server:
   ```bash
   npm run dev
   ```
2. Open `http://localhost:3000/public/demo.html` in your browser.

### Docker Deployment
1. Build the Docker image:
   ```bash
   docker build -t r2stocks .
   ```
2. Run the container:
   ```bash
   docker run -p 8080:80 r2stocks
   ```
3. Open `http://localhost:8080` in your browser.

## Configuration

### Widget Attributes
- `symbol`: The stock symbol to display (e.g., `AAPL`, `MSFT`).
- `theme`: JSON string for custom theme settings (e.g., `{"primaryColor":"#0070f3"}`).

### Example
```html
<stocks-widget symbol="AAPL" theme='{"primaryColor":"#0070f3"}'></stocks-widget>
```

## Testing

### Unit Tests
Run Jest tests:
```bash
npm test
```

### End-to-End Tests
Run Playwright tests:
```bash
npx playwright test
```

## License
This project is licensed under the MIT License.
