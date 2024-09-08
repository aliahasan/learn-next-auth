import LoginForm from "@/components/LoginForm";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center m-4 ">
      <p className="text-3xl">Its Time to Sign in</p>
      <LoginForm></LoginForm>
    </div>
  );
};

export default Home;
