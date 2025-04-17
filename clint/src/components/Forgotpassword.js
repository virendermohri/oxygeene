"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OtpInput from "react-otp-input";

const ForgotPassword=()=> {
  const [formData, setFormData] = useState({ email: "" });
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    if (otpSent && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [otpSent, timer]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setOtpSent(true);
    setTimer(30);
    setIsResendDisabled(true);
    toast.success("OTP sent successfully!");
  };

  const handleResendOTP = () => {
    setOtp("");
    setTimer(30);
    setIsResendDisabled(true);
    toast.info("Resending OTP...");
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="flex h-[70vh] m-auto items-center justify-center   px-4">
        <div className="w-full max-w-xl p-8 space-y-6 bg-white   rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 ">
              Password Reset
            </h2>
            <p className="text-gray-500 ">Sign in to continue</p>
          </div>

          <form className="space-y-4" onSubmit={handleSendOTP}>
            <div>
              <label className="block text-sm font-medium text-gray-700 ">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-md bg-gray-50  text-gray-900  focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="example@example.com"
              />
            </div>

            {!otpSent ? (
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 transition-all"
              >
                Send OTP
              </button>
            ) : (
              <>
                <div className="flex flex-col items-center">
                  <label className="block text-sm w-full font-medium text-gray-700 ">
                    Enter OTP
                  </label>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={<span className="mr-4"></span>}
                    renderInput={(props) => (
                      <input
                        {...props}
                        name="otp"
                        className=" text-center text-[30px] font-semibold border-2 border-gray-300  rounded-lg focus:outline-none focus:border-indigo-500  transition-all duration-200 bg-white  text-gray-800  shadow-md"
                      />
                    )}
                  />
                </div>

                <div className="text-center flex justify-end text-sm text-gray-600 ">
                  {isResendDisabled ? (
                    <p>Resend OTP in <span className="font-bold text-indigo-500">{timer}s</span></p>
                  ) : (
                    <button
                      onClick={handleResendOTP}
                      className="text-indigo-600 font-medium hover:underline focus:outline-none"
                    >
                      Resend OTP
                    </button>
                  )}
                </div>

                <button className="w-full px-4 py-2 mt-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 transition-all">
                  Verify OTP
                </button>
              </>
            )}
          </form>

          <p className="text-center text-sm text-gray-600 ">
            Don&#39;t have an account?{" "}
            <Link href="/signup" className="text-indigo-600  hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default ForgotPassword