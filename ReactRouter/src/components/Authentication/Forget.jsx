import React from 'react';

function Forget() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Forget Password</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your registered email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-700 text-white py-2 rounded hover:bg-orange-800 transition-colors duration-300"
          >
            Reset Password
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Remember your password?{' '}
            <a href="/login" className="text-orange-700 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Forget;
