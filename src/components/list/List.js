import React from 'react'
import './List.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
const List = ({ todolist, handletoggle, handledelete }) => {
    return <ul className='list'>
        {
            todolist.map((listitem) =>
                <li key={listitem.id} className={listitem.done ? 'done' : ''}>
                    <span>{listitem.item}</span>
                    <span className='actions'>
                        {
                            listitem.done ? <CancelIcon onClick={() => handletoggle(listitem.id)} /> : <CheckCircleIcon onClick={() => handletoggle(listitem.id)} />
                        }
                        <DeleteForeverIcon onClick={() => handledelete(listitem.id)} />

                    </span>
                </li>
            )
        }
    </ul>
};

export default List