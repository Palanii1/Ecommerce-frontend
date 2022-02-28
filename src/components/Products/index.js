import React from 'react';
import { books } from './datass';
import '../Products/product.css'




const Products = () => {
  return (
    <section className='booklist'>
        {books.map((book) => {
            const {img, title, author} = book;
            return (
                <Book key={book.id} book={book} />
            );
        })}
    </section>
  );
};


const Book = (props) => {
    const { img, title, author } = props.book;
    return (
        <>
            <article className='book'>
                <img src={img} alt="" />
                <h1>{title}</h1>
                <h4>{author}</h4>
            </article>
        </>
    );
}

export default Products;
