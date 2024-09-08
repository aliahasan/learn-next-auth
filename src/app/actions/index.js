"use server";
import { signIn, signOut } from "@/auth";
export const doSocialLogin = async (formData) => {
  const action = formData.get("action");
  await signIn(action, {
    redirectTo: "/home",
  });
};

export const doLogout = async () => {
  await signOut({ redirectTo: "/" });
};

export const doCredentialLogin = async (formData) => {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (error) {
    console.error(error.message);
  }
};
