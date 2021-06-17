import Image from '../../assets/img/Saly-10.png'
import Logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <div className=" flex flex-warp bg-deep-purple-accent-400  h-screen content-center">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        {/* <div className="flex flex-col justify-center p-8">
          <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Web 
              <span className="inline-block text-white">
                School
              </span>
            </h2>
            <p className="text-base text-white md:text-lg">
              A Digital School To make Learning Digital
            </p>
          </div>
          
          <a
            href="/auth/login"
            aria-label=""
          >
            <button className="bg-white hover:shadow-lg text-black font-bold py-2 px-4 rounded">
                SignIn
            </button>
          </a>
        </div> */}
          <div className="flex flex-col justify-center mx-auto">
            <div className=" mx-auto mb-6 "> 
              <img class="w-2/3 mx-auto content-center" src={Logo} alt="Logo"/>
              <br/>
                <p className="text-base text-center text-white md:text-lg">
                  A Digital School To make Learning Digital
                </p>
            </div>
            <div className="flex flex-row mx-auto space-x-2">
            <Link to="/auth/login" className="  text-black bg-white hover:bg-gray-400 font-bold py-2 px-4 rounded" aria-label=""            >
              {/* <button className="bg-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> */}
                  SignIn
              {/* </button> */}
            </Link>
            <Link to="/auth/register" className="  text-black bg-white hover:bg-gray-400 font-bold py-2 px-4 rounded" aria-label=""            >
              {/* <button className="bg-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> */}
                  sign Up
              {/* </button> */}
            </Link>
            </div>
        </div>
        <div className="flex flex-col justify-center">
        <img src={Image} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Header