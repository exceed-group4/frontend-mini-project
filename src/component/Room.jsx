import React, { useEffect, useState } from 'react'
import RoomCom from './RoomCom'


const Room = () => {
    const [mode, setMode] = useState(1)
    const [light, setLight] = useState(0)
    const [onOff, setOnOff] = useState(0)

    useEffect(() => {
        try {
            fetch("http://group4.exceed19.online/status").then((r_data) => {
                if (r_data.status === 400) {
                    console.log("not found")
                }
                else {
                    r_data.json().then((d) => {
                        console.log("result", d)
                    }
                )
                }
            })
        }
        catch (error) {
            console.log("error")
        }
    },[])

    useEffect(() => {
        //event.preventDefault()
        const payload = {
            "id": 1,
            "mode": mode,
            "status": onOff,
            "light": light
        }

        let status = 0

        fetch('http://group4.exceed19.online/update/front', {
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
                    console.log(data.detail)
                }
                else if (status === 422) {
                    console.log("Please complete all fields.")
                }
                else {
                    console.log(data.detail)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [mode,onOff,light])

    const onOffSetting = () => {
        const onOffButton = document.getElementById('switch-on-off')
        if (onOffButton.checked){
            setOnOff(0)
        }
        else {
            setOnOff(1)
        }
        console.log(onOff)
    }

    const modeSetting = event => {
        const toggleButton = document.getElementById('switch-on-off')
        if (event.target.value === '1') {
            toggleButton.setAttribute('disabled', '')
            setMode(1)
        }
        if (event.target.value === '2') {
            toggleButton.removeAttribute('disabled')
            setMode(2)
        }
    }

    return (
        <div className='room-setting'>
            <RoomCom name={'kitchen'} mode={mode} modeSetting={modeSetting} onOffSetting={onOffSetting} setLight={setLight}/>
        </div>
    )
}

export default Room