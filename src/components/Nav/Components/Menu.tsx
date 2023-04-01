import { useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3, HiBars3BottomLeft } from "react-icons/hi2";

function Menu(): JSX.Element {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = (): void => {
    setShow(!show);
  };

  return (
    <div
      className={`transition-all duration-100 ease-linear fixed top-0 bg-cyan-100 z-50
        ${show === true ? "w-full h-screen" : "w-20 h-20 rounded-br-full"}
      `}
    >
      <button onClick={handleShow} className="">
        {!show ? <HiBars3 className="w-12 h-12"/> : <HiBars3BottomLeft className="w-12 h-12"/>}
      </button>
      {show && <>
        <ul className="flex-col justify-center">
          <li className="w-full text-center py-5 text-2xl font-light"><Link to="/home" className="hover:text-blue-600 hover:border-b hover:border-blue-600">Pagina Principal</Link></li>
          <li className="w-full text-center py-5 text-2xl font-light"><Link to="/aboutus" className="hover:text-blue-600 hover:border-b hover:border-blue-600">Sobre Nosotros</Link></li>
        </ul>
      </> }
    </div>
  );
}

export default Menu;


