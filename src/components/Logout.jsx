import { doLogout } from "@/app/actions";
const Logout = () => {
  return (
    <div className="my-5">
      <form action={doLogout}>
        <button
        className="bg-blue-300 px-4 py-1 rounded-md text-white"
        type="submit">Logout</button>
      </form>
    </div>
  );
};

export default Logout;
