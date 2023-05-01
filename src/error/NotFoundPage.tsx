import { Link } from "react-router-dom"

const NotFoundComponent =() =>{
    return(
        <div className="bg-slate-950">
           <div className="text-center flex flex-col h-screen justify-center text-white">
            <p className="font-mono font-bold">The Page you were looking for doesn't exist</p>
            <div className="mt-5 mb-8 font-mono">
                <p>ERROR</p>
                <h1 className="text-8xl font-bold">404</h1>
                <p>PAGE NOT FOUND</p>
            </div>
            <Link to='/' className="bg-fuchsia-500 w-max mx-auto px-6 py-2 font-bold rounded-lg hover:bg-fuchsia-600">
            Go back home
            </Link>
           
           </div>
        </div>
    )
}
export default NotFoundComponent