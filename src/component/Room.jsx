import React, { useEffect, useState } from 'react'
// import { getRooms } from '../services/read'


const Room = ({ name }) => {
    const [room, setRoom] = useState(true)

    const toogleIsLoading = () => {
        setRoom(current => (!current))
        console.log(room)
    }

    const toggleDisabled = (mode) => {
        const toggleButton = document.getElementById('switch-on-off')
        if (mode === 'auto') {
            toggleButton.setAttribute('disabled', '')
            // console.log(room)
        }
        if (mode === 'manual') {
            toggleButton.removeAttribute('disabled')
        }
    }
    name = name[0].toUpperCase() + name.slice(1)

    return (
        <div className='room-setting'>
            <h2>{name}</h2>

            <div class="state-wrapper">
                <div class="state-choice" onChange={(e) => {
                    setRoom(e.target.value)
                    console.log(e.target.value)
                    toggleDisabled(e.target.value)
                }}>
                    <p class="state">State:</p>
                    <input type="radio" value='auto' name='mode' />Auto
                    <input type="radio" value='manual' name='mode' />Manual
                </div>
            </div>

            <label class="switch" id="switch-part">
                <input type="checkbox" id='switch-on-off' value='' onChange={toogleIsLoading} />
                <span class="slider round"></span>
            </label>
        </div>
    )
}

export default Room


const RadioFormField = ({ name, choices, onChange, groupName, }) => {
    return (
        <div className="form-field" onChange={onChange}>
            <label>{name}</label>
            {choices.map(c => <div className="radio-field"><input type="radio" value={c} name={groupName} />{c}</div>)}
        </div>
    )
}