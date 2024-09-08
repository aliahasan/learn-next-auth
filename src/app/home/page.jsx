import { auth } from "@/auth";
import Logout from "@/components/Logout";
import Image from "next/image";
import { redirect } from "next/navigation";

const HomPage = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="flex flex-col items-center m-4">
      <h1 className="text-3x my-2">Hello {session?.user?.name}!</h1>
      {session?.user?.image ? (
        <Image
          src={session?.user?.image}
          alt="user image"
          width={72}
          height={72}
          className="rounded-full"
          priority={true}  
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-gray-400"></div>
      )}
      <Logout />
    </div>
  );
};

export default HomPage;
