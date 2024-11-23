"use client";
import { LoginPageProps } from "@/types/auth";
import { loginSchema } from "@/validation/loginSchema";
import React, { useState } from "react";
import { z } from "zod";

export default function LoginPage({ type_of_user }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate using Zod
    try {
      loginSchema.parse({ email, password });
      setError(null); // Clear any previous error messages

      if (type_of_user == "service") {
        // Call Login For service
      } else if (type_of_user == "admin") {
        // Call Login For Admin
      } else {
        // Call Login For Citizen
      }

      // Proceed with login logic (e.g., call an API)
      console.log("Logged in:", { email, password });
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        const errorMessages = validationError.errors.map((err) => err.message);
        setError(errorMessages.join(", "));
      }
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Admin Login
      </h2>

      {error && (
        <p className="text-red-500 text-sm text-center mb-4">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Sign up
        </a>
      </p>
    </div>
  );
}
