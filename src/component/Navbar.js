import React, {useContext} from 'react'

import { BookContext } from '../contexts/bookContext'

function Navbar() {
    const { books } = useContext(BookContext);
    return (
        <div className="navbar">
        <h1>Reading list</h1>
        <p> you have {books.length} books in your reading list</p>

            
        </div>
    )
}

export default Navbar

 