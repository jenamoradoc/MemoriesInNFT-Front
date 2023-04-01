import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Landing(): JSX.Element {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className='w-full pt-12 p-5 text-white'>
      <div className='2xl:flex 2xl:justify-between'>
        <div className='lg:max-w-[100%] 2xl:max-w-[35%] lg:px-16 pb-10'>
            <div className='py-10 2xl:pt-[30%]'>
                <h2 className='text-5xl font-light py-5'>Introduciendo a Memorias</h2>
                <p>Bienvenidos a "Memorias", un proyecto que busca preservar los relatos de los excombatientes de Malvinas en una forma única y duradera. Estamos convirtiendo cada uno de estos relatos en un token no fungible (NFT) para que puedan ser atesorados y compartidos por coleccionistas, amantes de la historia y cualquier persona interesada en conocer más acerca de este conflicto bélico que marcó a nuestra sociedad.

                El objetivo de este proyecto es honrar la memoria de aquellos que lucharon por nuestro país en la Guerra de Malvinas, y crear un registro inmutable de sus vivencias y testimonios. Los NFT son una herramienta perfecta para lograrlo, ya que brindan una manera segura y confiable de almacenar y compartir información digital.

                En definitiva, "Memorias" busca convertirse en un punto de encuentro para todos aquellos que quieran conocer y preservar la historia de nuestro país, y especialmente para aquellos que sienten un profundo respeto y agradecimiento por quienes defendieron nuestra patria en momentos tan difíciles.</p>
            </div>
            <div className='flex justify-around'>
                <Link to="/home"><button className='border border-white py-1 px-3 hover:border-blue-400 hover:text-blue-400'>Crea tu NFT</button></Link>
                <Link to="/about"><button className='border-b-2 border-white py-1 px-3 hover:border-blue-400 hover:text-blue-400'>Lee sobre nosotros</button></Link>
            </div>
        </div>
        <div className='2xl:max-w-[90%] lg:items-center xl:pt-10'>
            <img src="https://imgs.search.brave.com/PEFDb6EnxzbwaGfrMgY2cTTr8euV6DVj6kV3w5j0Bxs/rs:fit:1200:1114:1/g:ce/aHR0cHM6Ly9jZG4t/aXRhbGlhbmktbWVk/aWEuaXRhbGlhbmku/aXQvc2l0ZS1tYXJk/ZWxwbGF0YS9zaXRl/cy83Ni8yMDIwLzA0/L0JhbmRlcmEtTWFs/dmluYXMtQXJnZW50/aW5hcy5wbmc" alt="malvinas" className='w-full px-10'/>
        </div>
      </div>
    </motion.div>
  )
}

export default Landing;
