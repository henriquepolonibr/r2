'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    import('../widget/index.js');
  }, []);

  return (
    <main>
      <stocks-widget symbol="AAPL"></stocks-widget>
    </main>
  );
}