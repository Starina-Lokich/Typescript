export interface Item {
    id: string | number;
    price: number;
    isDigital?: boolean; // Для электронных товаров
  }
  
  export interface DigitalItem extends Item {
    title: string;
    year?: number;
    country?: string;
    genre?: string;
    duration?: number;
  }