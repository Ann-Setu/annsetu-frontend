import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
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
            Join Ann<span className="text-red-500">❤</span>setu
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Create an account to start your journey
          </p>
        </div>

        {/* 🔐 Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full mt-1 px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

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
              placeholder="Create a password"
              className="w-full mt-1 px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl font-semibold transition mt-4"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500 cursor-pointer hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
