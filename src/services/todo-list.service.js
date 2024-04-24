import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextAuth]/route";

// get token from cookies
const session = await getServerSession(authOption);
console.log("token is : ", session?.user?.token)

export const getToDoListService = async ()=> {
   const res = await fetch ('http://110.74.194.123:8989/api/todo/v1/workspaces',
   {
   headers: {
      authorization: `Bearer ${session?.user?.token}`
   }

});
const data = await res.json();
return data
};