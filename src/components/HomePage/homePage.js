import React from 'react';


export  const HomePage = () => {
    return (
      <div className="container">     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 min-h-screen items-center">
        <div className="order-1 lg:order-0">
          <h1 className="text-4xl lg:text-5xl px-2 uppercase"> lorem ipsum</h1>
        </div>
        <div className="justify-center order-0 lg:order-1">
          {/* login form */}
          <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
              <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
                Email
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Email"/>
                </label>
              </div>
            <div class="mb-6">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
              Password          
              <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************"/>
              </label>
              <p class="text-red text-xs italic">Please choose a password.</p>
            </div>
            <div class="flex items-center justify-between">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
                Sign In
            </button>
              <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          {/* End of login form */}


          
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 min-h-screen items-center">
        <div>

        </div>
        <div>
        <h1 className="text-4xl lg:text-5xl px-2 uppercase"> lorem ipsum</h1>
        </div>
      </div>
    </div>
    );
  };

  export default HomePage