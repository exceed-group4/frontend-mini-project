import React, { useEffect, useState } from 'react'
// import { getRooms } from '../services/read'
import { addRoom, getRoom } from '../services/read'


const Kitchen = () => {
    const [room, setRoom] = useState(true)
    let lightSet = 0

    let setLight = (num) => {
        lightSet = num
    }

    useEffect(() => {
        //event.preventDefault()
        const payload = {
            "id": 2,
            "mode": 1,
            "status": 1,
            "light": lightSet
        }

        let status = 0

        fetch('', {
            method: 'PUT', // or 'PUT'
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((response) => {
                status = response.status
                return response.json()
            })
            .then((data) => {
                if (status === 200) {
                    alert(data.detail)
                }
                else if (status === 422) {
                    alert("Please complete all fields.")
                }
                else {
                    alert(data.detail)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [room])

    const toggleIsLoading = () => {
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

    return (
        <div className='room-setting'>
            <h2>Kitchen</h2>
            <div>
                <div onChange={(e) => {
                    setRoom(e.target.value)
                    console.log(e.target.value)
                    toggleDisabled(e.target.value)
                }}>
                    <input type="radio" value='auto' name='mode' />Auto
                    <input type="radio" value='manual' name='mode' />Manual
                </div>

            </div>
            <label class="switch" id="switch-part">
                <input type="checkbox" id='switch-on-off' value='' onChange={toggleIsLoading} />
                <span class="slider round"></span>
            </label>
            <div>
                <button class="set-bright" name='bright-value' value={55} onClick={e => setLight(55)}>1</button>
                <button class="set-bright" name='bright-value' value={105} onClick={e => setLight(105)}>2</button>
                <button class="set-bright" name='bright-value' value={155} onClick={e => setLight(155)}>3</button>
                <button class="set-bright" name='bright-value' value={205} onClick={e => setLight(205)}>4</button>
                <button class="set-bright" name='bright-value' value={255} onClick={e => setLight(255)}>5</button>
            </div>
        </div>
    )
}

export default Kitchen