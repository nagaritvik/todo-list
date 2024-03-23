import { useState } from 'react';
import './App.css';
import { v4 as uuiv4 } from 'uuid'
import List from './components/list/List.js';

function App() {
  const [text, settext] = useState('')
  const [todolist, settodolist] = useState([])
  const handlechange = (e) => {
    settext(e.target.value)
  }
  const handleclick = () => {
    const newtodoitem = {
      id: uuiv4(),
      item: text,
      done: false,
    }
    settodolist([...todolist, newtodoitem])
    settext('')
  }
  const handletoggle = (itemid) => {
    const newtodolist = todolist.map((listitem) => {
      if (listitem.id === itemid) {
        return { ...listitem, done: !listitem.done }
      }
      return todolist
    })
    settodolist(newtodolist)
  }
  const handledelete = (itemid) => {
    const newtodolist = todolist.filter((listitem) => (listitem.id) !== itemid)
    settodolist(newtodolist)
  }
  return (
    <div className="App">
      <h1>To do list</h1>
      <div className='adder'>
        <input type='text' placeholder='Enter your items' value={text} onChange={handlechange} />
        <span onClick={handleclick}>+</span>
      </div>
      {todolist.length > 0 && <List todolist={todolist} handletoggle={handletoggle} handledelete={handledelete} />}
    </div>
  );
}

export default App;
