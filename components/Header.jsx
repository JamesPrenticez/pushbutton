import Link from "next/link"

export default function Header() {
  return (
    <header className="py-4 bg-ocean-4 text-white shadow-sm shadow-ocean-1 ">
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
            <Link href={'/notes'} passHref>
              <h3 className="hover:cursor-pointer border-b border-transparent hover:border-b hover:border-ocean-1 mt-2">Notes</h3>
            </Link>
            <Link href={'/readstream'} passHref>
              <h3 className="hover:cursor-pointer border-b border-transparent hover:border-b hover:border-ocean-1 mt-2">Read Stream</h3>
            </Link>
            <button 
              className="hover:cursor-pointer border border-ocean-1  hover:text-white hover:bg-ocean-1 px-4 py-1 rounded-full mt-2"
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