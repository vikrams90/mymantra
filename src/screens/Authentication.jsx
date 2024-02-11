import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { signInGoogle } from "../Features/userSlice";

const Authentication = () => {
  const [type, setType] = useState("email");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch()
    
  const handleType = (e) => {
    if (e.target.classList.contains("email")) setType("email");
    else setType("mobile");
  };

    const handleGoogle = () => {
        dispatch(signInGoogle(email))
    }
    
  const handleSubmit = (event) => {
    console.log(phoneNumber, email);
    // if (email === "" || phoneNumber === "")
    //   setError("Please fill out all fields");
    // else {
      setError("");
      setEmail("");
      setPhoneNumber("");
    // }
  };

  return (
    <div className='w-full min-h-[88vh] bg-[#ffeaef] flex justify-center'>
      <div className='flex flex-col w-3/12 py-12'>
        <div className='w-[full]'>
          <img
            src='https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/26/f96c9b3f-6c5c-4383-8f11-12de043faa501698300150501-Flat_400--1-.jpg'
            alt=''
          />
        </div>

        <div className='bg-white flex gap-6 flex-col py-8 px-8'>
          <h1 className='text-lg font-bold'>
            Login <span className='text-sm font-medium'>or</span> Signup
          </h1>

          {type === "email" ? (
            <div className='email'>
              <p
                className='mobile cursor-pointer mb-2 text-[#ff3f6c]'
                onClick={handleType}
                href=''
              >
                for mobile click here
              </p>
              <input
                className='py-2 px-4 border-black border-2 w-full'
                type='email'
                placeholder='type your email here'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                required={true}
              />
            </div>
          ) : (
            <div className='mobile'>
              <p
                className='email cursor-pointer mb-2 text-[#ff3f6c]'
                onClick={handleType}
                href=''
              >
                for email click here
              </p>
              <input
                className='py-2 px-4 border-black border-2 w-full'
                type='tel'
                maxLength={10}
                minLength={10}
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                placeholder='Mobile number'
              />
            </div>
          )}

          <p className='text-xs'>
            By continuing, I agree to the{" "}
            <span className='text-[#ff3f6c]'>Terms of use</span> &{" "}
            <span className='text-[#ff3f6c]'>Privacy policy</span>
          </p>
          {error ? <p>{error}</p> : <></>}
          <button
            onClick={handleSubmit}
            className='bg-[#ff3f6c] py-2 text-white'
          >
            Continue
          </button>
          {type === "email" ? (
            <button onClick={handleGoogle} className='bg-[#ffffff] py-2 text-black border-black border-2 flex gap-1 justify-center items-center'>
              Continue with <FaGoogle />
            </button>
          ) : (
            <></>
          )}
          <p className='text-sm'>
            Have trouble logging in?
            <a className='text-[#ff3f6c]' href=''>
              Get Help
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
