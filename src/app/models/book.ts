export class Book {
  public id_book: number;
  public id_user?: number;
  public title: string;
  public b_type: string;
  public autor: string;
  public price: number;
  public photo: string;

  constructor(
    title: string,
    b_type: string,
    autor: string,
    price: number,
    photo: string,
    id_book: number = 0,
    id_user: number = 0
  ) {
    this.id_book = id_book;
    this.id_user = id_user;
    this.title = title;
    this.b_type = b_type;
    this.autor = autor;
    this.price = price;
    this.photo = photo;
  }
}
