import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    
    const handleClick = (route:string) =>{
        navigate(route);
    }
    return (
        <div className="ml-53 p-3">
            <h1 className="pb-3">
                All Files
            </h1>
            <div className="flex flex-wrap justify-between">
                <div className="flex gap-2">
                    <button className="border-2 border-gray-100 text-sm rounded p-1 pl-1.5 pr-1.5 focus:bg-blue-950 focus:text-white" 
                    onClick={() => handleClick("/All")}> All </button>
                    <button className="border-2 border-gray-100 text-sm rounded p-1 pl-1.5 pr-1.5 focus:bg-blue-950 focus:text-white"> Folder </button>
                    <button className="border-2 border-gray-100 text-sm rounded p-1 pl-1.5 pr-1.5 focus:bg-blue-950 focus:text-white"
                    onClick={() => handleClick("/Files")}> Files </button>
                    <button className="border-2 border-gray-100 text-sm rounded p-1 pl-1.5 pr-1.5 focus:bg-blue-950 focus:text-white"> Pictures </button>
                    <button className="border-2 border-gray-100 text-sm rounded p-1 pl-1.5 pr-1.5 focus:bg-blue-950 focus:text-white"> Videos </button>
                </div>
                <div className="flex gap-2">
                    <button className="border-2 border-gray-100 text-sm rounded gap-1 p-1 pl-1.5 pr-1.5 flex"> Sort by <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    </button>
                    <div className="flex border-2 border-gray-100 rounded-r">
                        <button className="bg-blue-950 pl-1 pr-1 rounded-l text-white"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                        </svg></button>
                        <button className="text-gray-600 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                            </svg></button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Hero;