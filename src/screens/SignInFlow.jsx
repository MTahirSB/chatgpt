import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import ErrorPage from "../utils/ErrorPage";
import Handler from "../utils/Handler";
import Auth from "../utils/Auth";

function SignInFlow({ user, setFn }) {
  const [nf, SetNF] = useState(false);
  const { id } = useParams();
  const [flow, setFlow] = useState(true);
  useEffect(() => {
    if (!(id === "login" || id === "signup")) {
      SetNF(true);
    } else if (id === "login") {
      setFlow(true);
    } else {
      setFlow(false);
    }
  }, []);

  const schema = { email: "", password: "" };
  const [cred, setCred] = useState(schema);

  const [googlesignin, createUser, signinUser] = Auth(setFn);
  if (user) return <Navigate to="/" />;

  // signout()

  if (nf) return <ErrorPage />;

  return (
    <div className=" w-full h-screen flex justify-center">
      <div className=" h-full flex flex-col items-center  justify-between py-10 ">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/chatgpt.png"
          alt="chatgpt"
        />
        <div className=" flex flex-col space-y-4 items-center w-[350px]">
          <h1 className=" text-3xl font-medium ">
            {flow ? "Welcome Back" : "Create your account"}
          </h1>
          <input
            name="email"
            value={cred.email}
            onChange={(e) => Handler(e, setCred)}
            className=" border-gray-500 rounded-md border w-full py-3 px-3"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={cred.password}
            onChange={(e) => Handler(e, setCred)}
            className={` border-gray-500 rounded-md  border w-full py-3 px-3 `}
            placeholder="Password"
          />
          {!flow ? (
            <button
              onClick={() => createUser(cred.email, cred.password)}
              className=" text-white bg-[#10a37f] w-full py-3 text-lg rounded-md"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={() => signinUser(cred.email, cred.password)}
              className=" text-white bg-[#10a37f] w-full py-3 text-lg rounded-md"
            >
              Continue
            </button>
          )}
          <div className=" flex items-center text-sm space-x-1 pb-8">
            <p>
              {flow ? "Don't have an account?" : "Already have an account?"}
            </p>
            <button onClick={() => setFlow(!flow)} className=" text-[#10a37f]">
              {flow ? "Sign Up" : "Log in"}
            </button>
          </div>
          <div className=" w-full relative ">
            <div className=" border-t h-[1px] flex-grow w-full bg-gray-500" />
            <p className=" absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4">
              OR
            </p>
          </div>
          <div className="w-full space-y-2 pt-8">
            <div
              onClick={googlesignin}
              className=" flex items-center space-x-2 w-full border py-3 px-4 rounded-md cursor-pointer"
            >
              <img
                width="26"
                height="26"
                src="https://img.icons8.com/fluency/48/google-logo.png"
                alt="google-logo"
              />
              <p className=" text-sm">Continue With Google</p>
            </div>
            <div className=" flex items-center space-x-2 w-full border py-3 px-4 rounded-md cursor-pointer">
              <img
                width="26"
                height="26"
                src="https://img.icons8.com/color/48/microsoft.png"
                alt="microsoft-logo"
              />
              <p className=" text-sm">Continue With Microsoft Account</p>
            </div>
            <div className=" flex items-center space-x-2 w-full border py-3 px-4 rounded-md cursor-pointer">
              <img
                width="26"
                height="26"
                src="https://img.icons8.com/ios-filled/50/mac-os.png"
                alt="Apple-logo"
              />
              <p className=" text-sm">Continue With Apple</p>
            </div>
          </div>
        </div>

        <div className="text-[#10a37f] text-sm tracking-tight underline flex space-x-2">
          <p>Terms or use</p>
          <p> | </p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default SignInFlow;
