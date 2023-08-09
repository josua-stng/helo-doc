import DashboardContentPage from '../Image/dashboard_page.png'
const WibuDocContent =() =>{
    return(
        <div className=''>
            <h1 className='text-2xl mt-5 ml-5 font-bold font-serif'>Penawaran Menarik</h1>
           <div className='grid sm:grid-cols-2 lg:grid-cols-3  justify-center items-center p-5 gap-5 text-justify'>
            <div className='border-2 border-gray-300 p-5 rounded-lg cursor-pointer hover:drop-shadow-lg'>
                <img src={DashboardContentPage} alt="" className='mx-auto'/>
                <p className='mt-2 lg:mt-4'>Kini di Helo Doc menawarkan untuk mengecek kondisi kesehatan terkait dengan Covid - 19 dan bisa meminimalisir terkena Covid -19,serta bisa melakukan konsultasi terkait penyakit tersebut</p>    
            </div>
            <div className='border-2 border-gray-300 p-5 rounded-lg cursor-pointer hover:drop-shadow-lg'>
                <img src={DashboardContentPage} alt="" className='mx-auto' />
                <p className='mt-2 lg:mt-4'>Dalam upaya pencegahan penyebaran COVID-19, kami di rumah sakit kami telah menerapkan berbagai langkah keamanan dan pencegahan, termasuk peningkatan frekuensi pembersihan dan sterilisasi.</p>    
            </div>
            <div className='border-2 border-gray-300 p-5 rounded-lg cursor-pointer hover:drop-shadow-lg'>
                <img src={DashboardContentPage} alt="" className='mx-auto'/>
                <p className='mt-2 lg:mt-4'>Kami memahami bahwa pandemi COVID-19 telah memengaruhi hidup kita semua, dan sebagai rumah sakit yang berkomitmen untuk memberikan perawatan berkualitas tinggi.</p>    
            </div>
           </div>
        </div>
    )
}

export default WibuDocContent