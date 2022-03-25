import Link from "next/link"

export default function Header() {
  return (
    <header className="py-4 shadow-sm bg-black text-white">
      <div className="flex justify-between mx-auto max-w-7xl">
        <div className="flex items-center space-x-5">
          <Link href="/" passHref>
            <h1 className="hover:cursor-pointer hover:text-slate-300 mt-2">Push Button</h1>
          </Link>
        </div>

        <div className="flex items-center space-x-5">
          { !true ? //session
          <>
            
          </> 
          :
          <>
            <Link href={'/extract'} passHref>
              <h3 className="hover:cursor-pointer border-b border-transparent hover:border-b hover:border-green-500 mt-2">Extract</h3>
            </Link>
            <button 
              className="hover:cursor-pointer border border-green-500  hover:text-white hover:bg-green-500 px-4 py-1 rounded-full mt-2"
              onClick={()=>{}}
            >
                Sign In
            </button>
          </>} 
        </div>
      </div>
    </header>
  )
}