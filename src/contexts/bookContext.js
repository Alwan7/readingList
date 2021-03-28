import React, {createContext, useState} from 'react'

import uuid from 'react-uuid'
export const BookContext = createContext();
const BookContextProvider = (props)=>{
    const [books, setBooks] = useState([
        {title: 'ali baba', author: 'alwan', id:'1'}
    ]);


const addBook = (title, author)=>{
    setBooks([...books, 
        {title: title, author: author, id: uuid()}
    ])
}
const removeBook = (id) =>{
     setBooks(books.filter(book => book.id !== id))
}
return(
    <BookContext.Provider value={{books, addBook, removeBook}}>
      {props.children}
    </BookContext.Provider>
)
}
export default BookContextProvider;