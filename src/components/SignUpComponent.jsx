import Image from "next/image";

export default function SignUpComponent() {
  return (
    <div className="ml-[10rem]">
      <div className="w-96 h-96 relative flex-col justify-start items-start inline-flex">
        <div className="w-96 h-20 justify-between items-center inline-flex">
          <div className="justify-start items-center gap-6 mt-[5rem] flex">
            <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
          </div>
        </div>
        <div className="absolute">
          <img
            className="ml-[50rem] mt-[8rem] w-[20rem]"
            src="/assets/icons/sign-up.svg"
          />
        </div>
        <form className="w-96 h-96 mt-10 relative">
          <div className="w-80 h-20 left-0 top-0 absolute">
            <div className="w-80 h-12 left-0 top-[34px] absolute bg-zinc-100 rounded-lg" />
            <div className="w-28 left-0 top-0 absolute text-neutral-600 text-base font-normal font-['SF Pro Display']">
              First Name :
            </div>
            <input
              className="w-36 left-[23px] top-[48px] absolute text-neutral-600 text-sm font-normal font-['Poppins']"
              style={{
                color: "neutral-600",
                fontSize: "base",
                fontWeight: "normal",
                fontFamily: "Poppins",
              }}
              type="text"
              placeholder="Enter your name.."
            />
          </div>
          <div className="w-80 h-20 left-0 top-[112px] absolute">
            <div className="w-80 h-12 left-0 top-[34px] absolute bg-zinc-100 rounded-lg" />
            <div className="w-20 left-0 top-0 absolute text-neutral-600 text-base font-normal font-['SF Pro Display']">
              Email :
            </div>
            <input
              className="w-28 left-[22.54px] top-[48.47px] absolute text-neutral-600 text-sm font-normal font-['SF Pro Display']"
              style={{
                color: "neutral-600",
                fontSize: "base",
                fontWeight: "normal",
                fontFamily: "SF Pro Display",
              }}
              type="email"
              placeholder="info@xyz.com"
            />
          </div>
          <div className="w-80 h-20 left-0 top-[224px] absolute">
            <div className="w-80 h-12 left-0 top-[34px] absolute bg-zinc-100 rounded-lg" />
            <div className="w-24 left-0 top-0 absolute">
              <span
                style={{
                  color: "neutral-600",
                  fontSize: "base",
                  fontWeight: "normal",
                  fontFamily: "SF Pro Display",
                }}
              >
                Password
              </span>

              <span
                style={{
                  color: "neutral-600",
                  fontSize: "base",
                  fontWeight: "normal",
                  fontFamily: "Poppins",
                }}
              >
                :
              </span>
            </div>
            <input
              className="w-28 left-[22.54px] top-[48.47px] absolute text-neutral-600 text-sm font-normal font-['SF Pro Display']"
              style={{
                color: "neutral-600",
                fontSize: "base",
                fontWeight: "normal",
                fontFamily: "SF Pro Display",
              }}
              type="password"
              placeholder="xxxxxxxxx"
            />
          </div>
          <div className="w-80 h-20 left-[388px] top-0 absolute">
            <div className="w-80 h-12 left-0 top-[34px] absolute bg-zinc-100 rounded-lg" />
            <div className="w-28 left-0 top-0 absolute text-neutral-600 text-base font-normal font-['SF Pro Display']">
              Last Name :
            </div>
            <input
              className="w-36 left-[23px] top-[52px] absolute text-neutral-600 text-sm font-normal font-['SF Pro Display']"
              style={{
                color: "neutral-600",
                fontSize: "base",
                fontWeight: "normal",
                fontFamily: "SF Pro Display",
              }}
              type="text"
              placeholder="Enter your name.."
            />
          </div>
          <div className="w-80 h-20 left-[388px] top-[112px] absolute">
            <div className="w-80 h-12 left-0 top-[34px] absolute bg-zinc-100 rounded-lg" />
            <div className="w-28 left-0 top-0 absolute text-neutral-600 text-base font-normal font-['SF Pro Display']">
              Mobile No. :
            </div>
            <input
              className="w-36 left-[22.61px] top-[48.47px] absolute text-neutral-600 text-sm font-normal font-['SF Pro Display']"
              style={{
                color: "neutral-600",
                fontSize: "base",
                fontWeight: "normal",
                fontFamily: "SF Pro Display",
              }}
              type="tel"
              placeholder="+91 - 98596 58000"
            />
          </div>
          <div className="w-80 h-20 left-[388px] top-[224px] absolute">
            <div className="w-80 h-12 left-0 top-[34px] absolute bg-zinc-100 rounded-lg" />
            <div className="w-44 left-0 top-0 absolute text-neutral-600 text-base font-normal font-['SF Pro Display']">
              Confirm Password :
            </div>
            <input
              className="w-36 left-[22.61px] top-[48.47px] absolute text-neutral-600 text-sm font-normal font-['SF Pro Display']"
              style={{
                color: "neutral-600",
                fontSize: "base",
                fontWeight: "normal",
                fontFamily: "SF Pro Display",
              }}
              type="password"
              placeholder="xxxxxxxxx"
            />
          </div>
          {/* <div className="w-36 left-[31px] top-[361px] absolute text-center text-white text-base font-semibold font-['Poppins']">
            Sign up{" "}
          </div> */}
          <button className="mt-[23rem] w-[10rem] h-12 px-6 bg-blue-600 rounded-2xl justify-center items-center gap-2 inline-flex">
            <div className="text-white text-xl font-bold font-['SF Pro Display'] tracking-tight">
              Sign Up
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
