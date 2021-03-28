

import BookForm from './component/BookForm';
import BookList from './component/BookList';
import Navbar from './component/Navbar';
import BookContextProvider from './contexts/bookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider >
      <Navbar/>
      <BookForm />
      <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
