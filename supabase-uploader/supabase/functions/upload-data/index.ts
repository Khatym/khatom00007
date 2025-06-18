// index.ts
import fetch from 'node-fetch';

export const main = async () => {
  try {
    // 1. جلب بيانات العملات
<<<<<<< HEAD
    const currencyRes = await fetch('https://open.er-api.com/v6/latest/USD', {});
=======
<<<<<<< HEAD
    const currencyRes = await fetch('https://open.er-api.com/v6/latest/USD', {});
=======
    const currencyRes = await fetch('https://open.er-api.com/v6/latest/USD');
>>>>>>> temp-fix
>>>>>>> 9e23e6e8e65b41ac1a206d30d300eeb3294c22ac
    const currencyData = await currencyRes.json();

    // 2. جلب بيانات الذهب
    const goldRes = await fetch('https://www.goldapi.io/api/XAU/USD', {
      headers: {
        'x-access-token': 'goldapi-fwwkpcsmbfd2pye-io',
        'Content-Type': 'application/json'
      }
    });
    const goldData = await goldRes.json();

    // 3. جلب العملات الرقمية (مثال: Bitcoin و Ethereum فقط)
<<<<<<< HEAD
    const cryptoRes = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd', {});
=======
<<<<<<< HEAD
    const cryptoRes = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd', {});
=======
    const cryptoRes = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
>>>>>>> temp-fix
>>>>>>> 9e23e6e8e65b41ac1a206d30d300eeb3294c22ac
    const cryptoData = await cryptoRes.json();

    // 4. دمج البيانات
    const allData = {
      timestamp: new Date().toISOString(),
      currency: currencyData,
      gold: goldData,
      crypto: cryptoData,
    };

    // 5. طباعة البيانات (لاحقًا هنرفعها على GitHub)
    console.log(JSON.stringify(allData, null, 2));

    return new Response(JSON.stringify({ message: 'Data fetched successfully', data: allData }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}