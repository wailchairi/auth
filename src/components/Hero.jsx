import { useAuth } from '../store/AuthContext';

const Hero = () => {
  const { user } = useAuth();
  return (
<div className="w-full bg-[#234781] py-16 px-4 text-center text-white ">
        <h2 className="text-5xl mb-6">Welcome back, <span className="text-[#69A2FF]">{user?.firstName}</span> </h2>
        <p className="max-w-5xl mx-auto text-xl leading-7">
          Welcome to our exclusive demo environment, where you can freely explore experimental functionalities, 
          interact with simulated datasets, and experience next-generation tools in development.
          This sandbox space has been specially configured to let you explore the following:
        </p>
      </div>
  );
}
export default Hero;