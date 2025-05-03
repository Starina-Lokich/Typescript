import { Item } from './types';

export class Cart {
  private items: Item[] = [];

  add(item: Item): void {
    if (item.isDigital) {
      const existingItem = this.items.find((i) => i.id === item.id);
      if (!existingItem) {
        this.items.push(item);
      }
    } else {
      this.items.push(item);
    }
  }

  removeById(id: string | number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }

  decreaseQuantity(id: string | number): void {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
    }
  }

  calculateTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  calculateTotalPriceWithDiscount(discount: number): number {
    if (discount < 0 || discount > 100) {
      throw new Error('Скидка должна быть от 0 до 100');
    }
    const totalPrice = this.calculateTotalPrice();
    return totalPrice * (1 - discount / 100);
  }
}