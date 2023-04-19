import WibuDocContent from "../content/WibuDocContent"
import DoctorOptions from "./DoctorOptions"
import Navbar from "./Navbar"

const Home =() =>{
    return(
        <div>
            <Navbar/>
            <DoctorOptions/>
            <WibuDocContent/>
            <h1>Home Page Menu</h1>
        </div>
    )
}

export default Home