"use client";
import { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
  
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Signup successful!");
        localStorage.setItem("auth-token", data.authToken);
        localStorage.setItem("user", JSON.stringify(data.user));
        setTimeout(() => (window.location.href = "/"), 1500);
      } else {
        toast.error(data.error || "Invalid credentials");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="min-h-screen   flex items-center justify-center px-4">
        <div className="max-w-2xl w-full bg-white p-10  rounded-2xl ">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-indigo-700">Create Account</h2>
            <p className="text-gray-500 mt-2">Start your journey with Oxygeene</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600 font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  placeholder="Virender Kumar"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  placeholder="9876543210"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
                placeholder="example@oxygeene.com"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
                placeholder="Kurukshetra, Haryana"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600 font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 font-medium">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-4 rounded-md transition duration-200"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-600 hover:underline">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
