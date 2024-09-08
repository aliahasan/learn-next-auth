import LoginForm from "@/components/LoginForm";
import SocialLogin from "@/components/SocialLogin";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center m-4 ">
      <p className="text-3xl py-5 mb-5">Hey Welcome Dude 😎</p>
     <SocialLogin></SocialLogin>
    </div>
  );
};

export default Home;
