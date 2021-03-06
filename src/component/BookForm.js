import React, {useContext, useState} from 'react';
import { BookContext } from '../contexts/bookContext'




 const BookForm = () => {
     const {addBook} = useContext(BookContext)
     const [ title, setTitle] = useState();
     const [ author, setAuthor] = useState();
     const handleSubmit = (e) => {
         e.preventDefault();
         console.log(title)
            addBook(title, author);
        setTitle('');
        setAuthor('');
     }
     
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="book title" value={title} onChange={(e) =>setTitle(e.target.value)} required/>
        <input type="text" placeholder="book author" value={author} onChange={(e) =>setAuthor(e.target.value)} required/>
        <input type="submit" value=" add Book"/>
        </form>
    )
}

export default BookForm

