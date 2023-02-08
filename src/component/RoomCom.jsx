import React from 'react'
import "../App.css"

const RoomCom = ({name, mode, modeSetting,onOffSetting, setLight}) => {
    return (
        <div className='room-component'>
            <h1 className='room-title'>{name}</h1>
            <div className='mode-component'>
                    <input type="radio" value='1' name='mode' checked={mode === 1} onChange={modeSetting}/>Auto
                    <input type="radio" value='2' name='mode' checked={mode === 2} onChange={modeSetting}/>Manual
            </div>
            <label class="switch" id="switch-part">
                <label>off</label>
                <input type="checkbox" className='switch-setting' id='switch-on-off' onChange={onOffSetting} disabled/>
                <label>on</label>
                <span class="slider round"></span>
            </label>
            <div className='bright-setting'>
                <button class="set-bright" name='bright-value' value={55} onClick={() => setLight(55)}>1</button>
                <button class="set-bright" name='bright-value' value={105} onClick={() => setLight(105)}>2</button>
                <button class="set-bright" name='bright-value' value={155} onClick={() => setLight(155)}>3</button>
                <button class="set-bright" name='bright-value' value={205} onClick={() => setLight(205)}>4</button>
                <button class="set-bright" name='bright-value' value={255} onClick={() => setLight(255)}>5</button>
            </div>
        </div>
    )
}

export default RoomCom