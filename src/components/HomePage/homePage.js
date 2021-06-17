import Image from "../../assets/img/Saly-10.png";
import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className=" flex flex-warp   bg-hero-pattern bg-cover h-screen ">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-start md:justify-center mx-auto order-last md:order-first">
          <div className=" mx-auto mb-6 ">
            <img class="w-2/3 mx-auto content-center" src={Logo} alt="Logo" />
            <p className="text-base text-center text-white md:text-lg">
              A Digital School To make Learning Digital
            </p>
          </div>
          <div className="flex flex-row mx-auto space-x-2">
            <Link
              to="/auth/login"
              className="  text-black bg-white hover:bg-gray-400 font-bold py-2 px-4 rounded"
              aria-label=""
            >
              SignIn
            </Link>
            <Link
              to="/auth/register"
              className="  text-black bg-white hover:bg-gray-400 font-bold py-2 px-4 rounded"
              aria-label=""
            >
              sign Up
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-end md:justify-center">
          <img src={Image} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
