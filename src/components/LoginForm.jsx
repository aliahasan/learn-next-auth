import { doSocialLogin } from "@/app/actions";

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center my-10">
      <form action={doSocialLogin} className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center gap-6">
          <button
            className="bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white px-6 py-2 rounded-lg shadow-lg hover:opacity-90 transition duration-300"
            type="submit"
            name="action"
            value="google"
          >
            Sign in with Google
          </button>
          <button
            className="bg-gradient-to-r from-[#333333] to-[#6e5494] text-white px-6 py-2 rounded-lg shadow-lg hover:opacity-90 transition duration-300"
            type="submit"
            name="action"
            value="github"
          >
            Sign in with Github
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
