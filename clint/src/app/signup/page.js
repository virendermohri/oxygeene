"use client"
import { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SignupPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Signup successful!", {
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
        toast.error(data.error || "Invalid credentials", {
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
      toast.error("Something went wrong. Try again later.");
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
        <div className="w-full max-w-2xl p-8 space-y-4 bg-white  rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 ">
              Create an Account
            </h2>
            <p className="text-gray-500 ">
              Sign up to get started
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 ">
                Full Name
              </label>
              <input
                type="name"
                name="name"
                id="new-name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-md bg-gray-50  text-gray-900  focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 ">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="user-email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-md bg-gray-50  text-gray-900  focus:ring-indigo-500 focus:border-indigo-500"
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
                id="new-password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-md bg-gray-50 text-gray-900  focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="new-confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-md bg-gray-50 text-gray-900  focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 transition-all"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 ">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-600  hover:underline">
              Sign in
            </Link>
          </p>
        </div>

      </div>
    </>

  );
}
