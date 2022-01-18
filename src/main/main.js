import './main.css';
import React, { useState } from 'react';
import plusIcon from '../img/Plus-icon.svg';

function Main() {

    const [notes, setNotes] = useState([]);     //массив с нужными стейты
	const [value, setValue] = useState('');
    const [countActive, setCountActive] = useState(0);
	
	const result = notes.map((note, index) => { //создание нового массива с измененимями
		return <p className='tasks-display' key={index}>{note}</p>;
	});

    const submitBtn = e => {

      if (value === '') {             //проверка на пустую строку
        alert('Error! Task name is empty. Please enter a valid name.')
        
        } else {
        setNotes([...notes, value]); //по нажатию enter запись изменений
        setValue('');                //очистка input               
        setCountActive(countActive + 1);
        }
    };

    const [visibleBacklog, setVisibleBacklog] = useState(false);

    let hiddenInput;
        if (visibleBacklog) {
            hiddenInput =<div>
                <input className='input input-backlog'
                value={ value } 
                onChange={event => setValue(event.target.value)}
                />
            <button className='submit-btn' onClick={ submitBtn }>Submit</button>
            </div>;
    }

    const [visibleReady, setVisibleReady] = useState(false);

    let readyTasks;

    if (visibleReady) {

        readyTasks = <div>
            {result}
        </div>
    }
    
    return <>
        <div className='main'>
            <div className="container">
                <p className="tasks-title">Backlog</p>
                <>{result}</>
                <button className="add-card-btn" onClick={() => setVisibleBacklog(!visibleBacklog)}>
                <img src={plusIcon} className="arrow-down-icon" alt="arrow-down-icon" height="12px" width="12px"></img>
                Add card
                </button>
                {hiddenInput}
            </div>
            <div className="container">
                <p className="tasks-title">Ready</p>
                <button className="add-card-btn" onClick={() => setVisibleReady(!visibleReady)}>
                <img src={plusIcon} className="arrow-down-icon" alt="arrow-down-icon" height="12px" width="12px"></img>
                Add card
                </button>
                {readyTasks}
            </div>
            <div className="container">
                <p className="tasks-title">In Progress</p>
                <button className="add-card-btn">
                <img src={plusIcon} className="arrow-down-icon" alt="arrow-down-icon" height="12px" width="12px"></img>
                Add card
                </button>
            </div>
            <div className="container">
                <p className="tasks-title">Finished</p>
                <button className="add-card-btn">
                <img src={plusIcon} className="arrow-down-icon" alt="arrow-down-icon" height="12px" width="12px"></img>
                Add card
                </button>
            </div>
        </div>
    <footer className="footer">
        <span className="footer-text active-tasks">Active tasks: {countActive} </span>
        <span className="footer-text finished-tasks">Finished tasks: 0 </span>
        <span className="footer-text board-tasks">Kanban board by NAME, YEAR </span>
    </footer>
    </>
}

export default Main;