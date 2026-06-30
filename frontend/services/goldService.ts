export async function getGoldPrice() {
  try {
    const response = await fetch("/api/gold");

    const json = await response.json();

    return {
      price: json.data.price_wo_gst,
      buy: json.data.aura_buy_price,
      sell: json.data.aura_sell_price,
      updated: json.data.created_at,
    };
  } catch (error) {
    console.error(error);

    return null;
  }
}