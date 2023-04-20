import Navbar from './Navbar';
import listDoctor from '../data/listDoctor.json'
import dasboardImage from '../Image/dashboard_page.png'

const SeeDoctor =() =>{
    return(
        <div>
            <Navbar/>
                <img src={dasboardImage} alt="" className='mx-auto px-3 drop-shadow-xl w-full md:w-min' />
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center p-2 gap-3 mt-5 '>
            {listDoctor.map((doctors,index)=>{
                return(
                    <div key={index} className='bg-gray-200 w-full m-auto flex justify-center items-center text-center rounded-lg cursor-pointer hover:bg-gray-100'>
                        <div>
                        <img src={doctors.doctorImage} alt=""  className='mx-auto mt-3'/>
                        <p className='mt-4 font-bold font-serif'>{doctors.name}</p>
                        <p className='text-sm font-light mt-1'>{doctors.spesialist}</p>
                        <p className='mb-3 text-sm font-thin'>{doctors.reviews}</p>
                        </div>
                    </div>
                )
            })}
             </div>
        </div>
    )
}

export default SeeDoctor