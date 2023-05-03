import { useState } from 'react';
import listObat from '../data/listObatType.json'
import Footer from '../components/Footer';

const MarketOption = () => {
    const [activeTab,setActiveTab] = useState("obat");

    const handleActiveTab =(tabName:string)=>{
        setActiveTab(tabName);
    }
    
  return (
    <div>
    <div className="grid justify-around grid-cols-3 gap-2 md:grid-cols-5 mt-4 font-medium text-blue-700">
      <button onClick={()=> handleActiveTab("obat")}
       className="m-2 p-1 drop-shadow-lg bg-white  h-max-content md:h-11 hover:bg-blue-600 hover:rounded-lg hover:drop-shadow-xl  hover:text-white flex justify-center items-center">
        Obat
      </button>
      <button onClick={()=> handleActiveTab("Vitamin")}
       className="m-2 p-1 drop-shadow-lg bg-white h-max-content md:h-11 hover:bg-blue-600 hover:rounded-lg hover:drop-shadow-xl hover:text-white flex  justify-center items-center">
        Vitamin
      </button>
      <button onClick={() => handleActiveTab("Suplemen")}
       className="m-2 p-1 drop-shadow-lg bg-white hover:bg-blue-600 hover:rounded-lg h-max-content md:h-11 hover:text-white hover:drop-shadow-xl">
       Suplemen
      </button>
      <button onClick={()=>handleActiveTab("Booster")}
      className="m-2 p-1 drop-shadow-lg bg-white hover:bg-blue-600 hover:rounded-lg h-max-content md:h-11 hover:text-white hover:drop-shadow-xl">
        Booster
      </button>
      <button onClick={()=>handleActiveTab("Antibiotik")}
      className="m-2 p-1 drop-shadow-lg bg-white h-max-content md:h-11 hover:bg-blue-600 hover:rounded-lg hover:drop-shadow-xl hover:text-white">
        Antibiotik
      </button>
    </div>

        <div>
            {activeTab ==="obat" && <div className='grid sm:grid-cols-2 mt-5 gap-10 p-7 sm:p-10 cursor-pointer'>
                {listObat.filter(obat => obat.type==="obat").map((obat)=>{
                    return(
                        <div key={obat.id} className='border-2 border-gray-300 w-full p-5 hover:drop-shadow-lg rounded-lg'>
                            <img className='w-52 mx-auto' src={obat.image} alt="" />
                            <p className='text-center mb-7 font-serif font-bold text-2xl'>{obat.nama}</p>
                            <p>{obat.desc}</p>
                        </div>
                    )
                })}
                </div>}
                {activeTab ==="Vitamin" && <div className='grid sm:grid-cols-2 mt-5 gap-10 p-7 sm:p-10 cursor-pointer'>
                {listObat.filter(obat => obat.type==="Vitamin").map((obat)=>{
                    return(
                        <div key={obat.id} className='border-2 border-gray-300 w-full p-5 hover:drop-shadow-lg rounded-lg'>
                            <img  className='w-52 mx-auto' src={obat.image} alt="" />
                            <p className='text-center mb-7 font-serif font-bold text-2xl'>{obat.nama}</p>
                            <p>{obat.desc}</p>
                        </div>
                    )
                })}
                </div>}
                {activeTab ==="Suplemen" && <div className='grid sm:grid-cols-2 mt-5 gap-10 p-7 sm:p-10 cursor-pointer'>
                {listObat.filter(obat => obat.type==="Suplemen").map((obat)=>{
                    return(
                        <div key={obat.id} className='border-2 border-gray-300 w-full p-5 hover:drop-shadow-lg rounded-lg'>
                            <img  className='w-52 mx-auto' src={obat.image} alt="" />
                            <p className='text-center mb-7 font-serif font-bold text-2xl'>{obat.nama}</p>
                            <p>{obat.desc}</p>
                        </div>
                    )
                })}
                </div>}
                {activeTab ==="Booster" && <div className='grid sm:grid-cols-2 mt-5 gap-10 p-7 sm:p-10 cursor-pointer'>
                {listObat.filter(obat => obat.type==="Booster").map((obat)=>{
                    return(
                        <div key={obat.id} className='border-2 border-gray-300 w-full p-5 hover:drop-shadow-lg rounded-lg'>
                            <img  className='w-52 mx-auto' src={obat.image} alt="" />
                            <p className='text-center mb-7 font-serif font-bold text-2xl'>{obat.nama}</p>
                            <p>{obat.desc}</p>
                        </div>
                    )
                })}
                </div>}
                {activeTab ==="Antibiotik" && <div className='grid sm:grid-cols-2 mt-5 gap-10 p-7 sm:p-10 cursor-pointer'>
                {listObat.filter(obat => obat.type==="Antibiotik").map((obat)=>{
                    return(
                        <div key={obat.id} className='border-2 border-gray-300 w-full p-5 hover:drop-shadow-lg rounded-lg'>
                            <img  className='w-52 mx-auto' src={obat.image} alt="" />
                            <p className='text-center mb-7 font-serif font-bold text-2xl'>{obat.nama}</p>
                            <p>{obat.desc}</p>
                        </div>
                    )
                })}
                </div>}
               
        </div>
        <Footer/>
    </div>
  );
};

export default MarketOption;
