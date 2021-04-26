import Image from '../../assets/img/Saly-10.png'
export const Header = () => {
  return (
    <div className="bg-deep-purple-accent-400  px-4 py-16 mx-auto h-full md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center p-8">
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
        </div>
        <div className="relative">
        <img src={Image} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Header