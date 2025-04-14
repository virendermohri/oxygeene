"use client"
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Page() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,

        });
        localStorage.setItem("auth-token", data.authToken); // Save token for authentication
        localStorage.setItem("user", JSON.stringify(data.user)); // Save token for authentication
       
        
        setTimeout(() => {
          window.location.href = "/"; // Redirect after login
        }, 1500);
      } else {
        toast.error(data.error || "Invalid email or password", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,

        });
      }
    } catch (error) {
      // toast.error("Something went wrong. Try again later.");
      toast.error(error || "Invalid email or password", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
    <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover

      />
      <div className="flex min-h-[80vh] items-center justify-center   px-4">
        <div className="w-full max-w-2xl p-8 space-y-6 bg-white   rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 ">
              Welcome Back!
            </h2>
            <p className="text-gray-500 ">Sign in to continue</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
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
                className="w-full mt-1 px-4 py-2 border rounded-md bg-gray-50 text-gray-900  focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="example@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 ">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-md bg-gray-50  text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="••••••••"
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="flex  items-center">
                <input type="checkbox" required name="rememberMe" className="form-checkbox cursor-pointer text-indigo-600" />
                <span className="ml-2 cursor-pointer text-sm text-gray-600">
                  Remember me
                </span>
              </label>
              <Link href="/forgot-password" className="text-sm text-indigo-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 transition-all"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 ">
            Don't have an account?{" "}
            <Link href="/signup" className="text-indigo-600  hover:underline">
              Sign up
            </Link>
          </p>
        </div>

      </div>

    </>
  );
}
