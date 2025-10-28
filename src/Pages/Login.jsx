import React from "react";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg')] bg-cover bg-center">
      <div className="backdrop-blur-2xl  rounded-3xl shadow-2xl overflow-hidden max-w-md w-full m-4 p-10">
        <h1 className="text-3xl font-bold text-indigo-950 mb-2 text-center">
          Let’s sign you in
        </h1>
        <p className="font-medium text-indigo-950 mb-6 text-center">
          Welcome back! Glad to see you again.
        </p>

        <input
          type="text"
          placeholder="Email address"
          className="bg-gray-200/50 w-full px-6 h-12 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />

        <input
          type="password"
          name="pw"
          id="pw"
          placeholder="Password"
          className="bg-gray-200/50 w-full px-6 h-12 mt-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <div className="flex items-center mb-5 gap-2">
          <input type="checkbox" name="remember" id="remember" />
          <h1 className="text-sm font-semibold text-indigo-950">Remember me</h1>

          <a
            href="#"
            className="text-sm font-semibold text-indigo-950 hover:underline ml-auto"
          >
            Forgot password?
          </a>
        </div>

        <button className="w-full text-white font-semibold py-3 bg-gradient-to-tl from-red-500 to-red-600 mt-1 mb-4 rounded-xl hover:bg-red-700 transition">
          Sign in now
        </button>

        <div className="flex items-center gap-4 my-3">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-gray-500 text-sm font-medium">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <div className="p-[2px] mt-2 rounded-xl bg-gradient-to-r from-red-400 via-yellow-500 to-blue-600 inline-block w-full">
          <button className="bg-white w-full rounded-xl font-semibold text-center py-2 flex items-center justify-center gap-2">
            <img
              src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
              alt="Google Logo"
              className="w-5 h-5"
            />
            <span className="text-gray-700 font-semibold">
              Sign in with Google
            </span>
          </button>
        </div>

        <p className="font-medium text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a
            href="#"
            className="underline text-indigo-900 hover:text-indigo-950"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
