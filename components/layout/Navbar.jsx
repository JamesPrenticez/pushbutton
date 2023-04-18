import Link from "next/link"
import { project } from "../../constants"

export default function Navbar() {
  return (
    <header className="px-4 py-4 bg-ocean-3 text-white shadow-sm shadow-ocean-1 absolute top-0 right-0 left-0 ">
      <div className="flex justify-between mx-auto max-w-7xl px-4">
        <div className="flex items-center space-x-5">
          <Link href="/" passHref>
            <h1 className="hover:cursor-pointer hover:text-slate-300 mt-2">{project.name}</h1>
          </Link>
        </div>

        <div className="flex items-center space-x-5">
          <Link href={'/'} passHref>
            <h3 className="hover:cursor-pointer border-b border-transparent hover:border-b hover:border-ocean-1 mt-2">Home</h3>
          </Link>
          <Link href={'/about'} passHref>
            <h3 className="hover:cursor-pointer border-b border-transparent hover:border-b hover:border-ocean-1 mt-2">About</h3>
          </Link>
        </div>
      </div>
    </header>
  )
}