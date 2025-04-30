import { useState } from 'react';
import { Link  } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('emilys'); // DummyJSON test user
  const [password, setPassword] = useState('emilyspass');
  const [error, setError] = useState(null);
  const { login } = useAuth();

  const handleSubmit  = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      
     
    } catch (err) {
      setError(err.message || 'Login failed. Check your credentials.');
    }
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#234781]">
      <div className="bg-[#F6F7FB] p-8 rounded-2xl shadow-md w-[350px]">
        <h2 className="text-3xl text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-4">
            <label htmlFor="Email address" className="block text-sm font-medium text-gray-700 mb-1">
            Email address
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            
            className="bg-[#407AD7] text-white w-full text-xl mt-4 px-4 py-2 rounded-md hover:bg-[#336BC4] transition"
          >
            Log in
          </button>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mt-3 text-center">{error}</p>}
        </form>

        {/* Footer */}
        <p className="text-center mt-3 mb-4">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-[#407AD7] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;