import { getServerSession } from "next-auth";
import { authOption } from "./auth/[...nextAuth]/route";

export const headerToken = async () => {
  // get token from cookies
  const session = await getServerSession(authOption);
  console.log("token : ",session?.user?.token);
  return {
    authorization: `Bearer ${session?.user?.token}`,
    "Content-Type": "application/json",
  };
};
