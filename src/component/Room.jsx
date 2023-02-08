import React, { useEffect, useState } from 'react'
// import { getRooms } from '../services/read'


const Room = ({name}) => {
    const [room, setRoom] = useState(true)

    const toogleIsLoading = () => {
        setRoom(current => (!current))
        console.log(room)
    }

    name = name[0].toUpperCase() + name.slice(1)

    return (
        <div className='room-setting'>
            <h2 class="room-name">{name}</h2>

            <div class="state">
                <RadioFormField name="State:" groupName="mode" choices={["auto", "manual"]} onChange={(e) => {setRoom(e.target.value)
                console.log(e.target.value)}} />
            </div>

            <label class="switch">
                <input type="checkbox" value='' onChange={toogleIsLoading}/>
                <span class="slider round"></span>
            </label>
        </div>
    )
}

export default Room


const RadioFormField = ({ name, choices, onChange, groupName }) => {
	return (
		<div className="form-field" onChange={onChange}>
			<label>{name}</label>
			{choices.map(c => <div className="radio-field"><input type="radio" value={c} name={groupName} />{c}</div>)}
		</div>
	)
}