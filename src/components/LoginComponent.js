"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function LoginComponent() {
    const router = useRouter();
    //define handle login
    async function handleLogin(userInfo) {
        //define structure object
        const newUserInfo={
            email: userInfo.get("email"),
            password: userInfo.get("password")
        };
        //calling next auth service and passing "newUserInfo"
        const res = await signIn("credentials", {
            redirect:false,
            ...newUserInfo,
        });
        //checking if login success
        if (res.ok){
            router.push('/todo-list');
        }
    }
  return (
    <div className="ml-[6rem] -mt-11">
      <div className="w-96 h-96 relative bg-white rounded-2xl">
        <div className="w-96 h-96 absolute">
          <div className="w-96 h-96 absolute">
            <img
              className="w-[70rem] h-[70rem] -mt-[6rem] ml-[45rem] absolute"
              src="/assets/icons/login.svg"
            />
          </div>
        </div>

        <div className="w-[20rem] left-[107px] top-[829px] absolute text-zinc-500 text-base font-normal font-['SF Pro Display'] leading-snug tracking-wide">
          © 2024 My office . All Rights Reserved
        </div>
        <div className="w-96 h-96 left-[232px] top-[221px] absolute">
          <div className="left-0 top-0 absolute text-neutral-600 text-2xl font-bold font-['SF Pro Display'] leading-9">
            Login
          </div>
          <form action={handleLogin}>
            <div className="w-96 h-72 left-0 top-[61.63px] absolute flex-col justify-start items-start gap-4 inline-flex">
              <div className="flex-col justify-start items-start flex">
                <div className="flex-col justify-start items-start gap-1 flex">
                  <div className="w-96 h-14 px-4 bg-white rounded border border-stone-300 justify-start items-center inline-flex">
                    <input
                      className="grow shrink basis-0 h-10 justify-start items-center flex"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start flex">
                <div className="flex-col justify-start items-start gap-1 flex">
                  <div className="flex-col justify-start items-start flex">
                    <div className="flex-col justify-start items-start gap-1 flex">
                      <div className="w-96 h-14 px-4  bg-white rounded border border-stone-300 justify-start items-center inline-flex">
                        <input
                          className="grow shrink basis-0 h-10 justify-start items-center flex"
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-28 h-1" />
              <div className="w-96 justify-start items-start inline-flex">
                <div className="w-96 justify-start items-start inline-flex">
                  <button
                    type="submit"
                    className="grow shrink basis-0 h-12 px-7 py-3.5 bg-stone-300 rounded-lg justify-center items-center gap-0.5 flex"
                  >
                    <div className="text-white text-lg font-bold font-['SF Pro Display'] leading-relaxed tracking-wide">
                      Login
                    </div>
                  </button>
                </div>
              </div>
              <div className="w-28 h-px" />
              <div>
                <span className="text-neutral-600 text-base font-normal font-['SF Pro Display'] leading-snug tracking-tight">
                  Don’t have an account ?
                </span>
                <span className="text-sky-500 text-base font-bold font-['Lato'] leading-snug tracking-tight">
                  {" "}
                </span>
                <Link href={"/"} className="text-blue-600 text-base font-bold font-['SF Pro Display'] leading-snug tracking-tight">
                  Register
                </Link>
              </div>
            </div>
          </form>
          <div className="w-96 h-11 left-0 top-[365.31px] absolute">
            <div className="w-40 h-11 p-3 left-[112.06px] top-[-0px] absolute bg-white justify-center items-center gap-3 inline-flex">
              <div className="text-stone-300 text-base font-normal font-['Lato'] leading-snug tracking-tight">
                Continue with
              </div>
            </div>
          </div>
          <div className="w-96 h-32 left-0 top-[437.03px] absolute flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-96 justify-start items-start inline-flex">
              <button className="grow shrink basis-0 h-14 px-7 py-3.5 rounded-lg border border-stone-300 justify-center items-center gap-4 flex">
                <div className="w-4 h-5 py-px flex-col justify-center items-center inline-flex">
                  <div className="w-4 h-5 relative">
                    <div className="w-4 h-5 left-0 top-0 absolute"></div>
                    <div className="w-3.5 h-2 left-[0.97px] top-0 absolute"></div>
                  </div>
                </div>
                <div className="text-neutral-600 text-base font-bold font-['Lato'] leading-snug tracking-tight">
                  Google
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-60 h-12 left-[75px] top-[60px] absolute justify-between items-center inline-flex">
          <div className="justify-start items-center gap-3.5 flex">
            <div className="flex justify-between">
              <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
