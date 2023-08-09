import helloDocLogo from "../Image/helo_doc_logo.png"
const Footer =() =>{
    return(
        <div className='p-8 bg-green-500 pl-10 text-white'>
            <div className='ml-3'>
            <img src={helloDocLogo} alt="wibu_doc_logo" />
            <h2 className='font-bold mt-4 mb-4'>Site Map</h2>

            <div className='md:flex justify-between '>
            <div className='leading-8'>
                <p>FAQ</p>
                <p>Blog</p>
                <p>Syarat & Ketentuan</p>
                <p>Kebijakan Privasi</p>
                <p>Promo</p>
            </div>
            
            <div className='leading-8'>
                <p>Karir</p>
                <p>Security</p>
                <p>Media</p>
                <p>Corporate</p>
           
            </div>
            <div className='leading-8 mt-5 md:mt-0'>
                <p>Layanan Pengaduan Konsumen</p>
                <p>PT Media Dokter Investama</p>
                <p>Jl. H.R. Rasuna Said Kav B32-33, Jakarta Selatan</p>
                <p>help@halodoc.com / 021-5095-9900</p>
                </div>

            </div>
            </div>


        </div>
    )
}

export default Footer