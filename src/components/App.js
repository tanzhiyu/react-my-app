import React from 'react';
import Link from './Link'
import VisibleTodos from '../containers/VisibleTodos'
import AddTodo from '../containers/AddTodo'
import Footer from './Footer'
function App() {

  return (
    <div>
       <AddTodo />
       <VisibleTodos />
       <Footer />
    </div>
  );
}

export default App;
