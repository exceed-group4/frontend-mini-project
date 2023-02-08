import axios from "axios";

export async function getRoom() {
    const res = await axios.get("http://group4.exceed19.online/status")
    return res.data
}

export async function addRoom(room) {
    const res = await axios.post(`http://group4.exceed19.online/statuss`, room)
    return res.data
}