import { Link } from "react-router-dom"

function Nav() {
  return (
      <div className='flex justify-between px-10 bg-cyan-100 py-2 border-b border-black fixed z-50 w-full'>
        <ul>
          <li className='w-[100px]'>
            <Link to="/">
              <img src="https://imgs.search.brave.com/1Lqa7rJZ36p1PTvl8YEVTA45FFtXWpZtNY-NvgOGl84/rs:fit:500:462:1/g:ce/aHR0cHM6Ly93d3cu/bWFsdmluYXNzaWVt/cHJlLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8xMS9t/YWx2aW5hcy0yMDIw/LnBuZw" alt="logomalvinas" className='w-full'/>
            </Link>
          </li>
        </ul>
        <ul className='flex items-center'>
          <li className='px-10'>
            <Link to="/home"><p className='font-light text-xl hover:text-blue-900 hover:border-b hover:border-blue-900'>Pagina Principal</p></Link>
          </li>
          <li className='px-10'>
            <Link to="/aboutus"><p className='font-light text-xl hover:text-blue-900 hover:border-b hover:border-blue-900'>Sobre Nosotros</p></Link>
          </li>
        </ul>
      </div>
  )
}

export default Nav
