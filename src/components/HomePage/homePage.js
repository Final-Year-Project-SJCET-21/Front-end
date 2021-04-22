import Image from '../../assets/img/Saly-10.png'
export const Header = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Web 
              <span className="inline-block text-deep-purple-accent-400">
                School
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              A Digital School To make Learning Digital
            </p>
          </div>
          
          <a
            href="/auth/login"
            aria-label=""
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                SignIn
            </button>
          </a>
        </div>
        <div className="relative">
        <img src={Image} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Header