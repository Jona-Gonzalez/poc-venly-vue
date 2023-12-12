export interface TBodyCheckout {
  price_data: PriceData;
  quantity: number;
}

export interface PriceData {
  product_data: ProductData;
  unit_amount: number;
  currency: string;
}

export interface ProductData {
  name: string;
}
