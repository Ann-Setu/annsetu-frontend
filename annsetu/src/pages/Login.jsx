import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      
      <section className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8"
        >
          {/* 🌿 Heading */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">
              Welcome to Ann<span className="text-red-500">❤</span>setu
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Login to continue your journey
            </p>
          </div>

          {/* 🔐 Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            {/* Forgot */}
            <div className="text-right text-sm">
              <span className="text-orange-500 cursor-pointer hover:underline">
                Forgot Password?
              </span>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl font-semibold transition"
            >
              Login
            </motion.button>
          </form>

          {/* Signup */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-orange-500 cursor-pointer hover:underline"
            >
              Sign up
            </Link>
          </p>
        </motion.div>
      </section>
    </>
  );
}
