import { DigitalItem } from './types';

export class Movie implements DigitalItem {
  constructor(
    public id: string | number,
    public title: string,
    public price: number,
    public year: number,
    public country: string,
    public genre: string,
    public duration: number
  ) {}

  toString(): string {
    return `${this.title} (${this.year})`;
  }
}