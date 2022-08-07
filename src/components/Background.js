import blueblob from "../images/blueblob.png"
import yellowblob from "../images/yellowblob.png"

export default function Background() {
    return (
    <div>
        <img id="blue-blob" alt="blue blob shape" src={blueblob}/>
        <img id="yellow-blob" src={yellowblob} alt="yellow blob shape"/>
    </div>
    )
}