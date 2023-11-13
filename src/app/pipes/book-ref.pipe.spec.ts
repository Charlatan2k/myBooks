import { BookRefPipe } from './book-ref.pipe';

describe('BookRefPipe', () => {
  it('create an instance', () => {
    const pipe = new BookRefPipe();
    expect(pipe).toBeTruthy();
  });
});
