import WibuDocContent from "../content/WibuDocContent"
import DoctorOptions from "./DoctorOptions"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Home =() =>{
    return(
        <div>
            <Navbar/>
            <DoctorOptions/>
            <WibuDocContent/>
            <Footer/>
        </div>
    )
}

export default Home