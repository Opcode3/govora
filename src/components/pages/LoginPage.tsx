"use client";
import { loginAdmin } from "@/services/authService";
import { LoginPageProps } from "@/types/auth";
import { loginSchema } from "@/validation/loginSchema";
import { setCookie } from "cookies-next";
import { LoaderCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { z } from "zod";

export default function LoginPage({ type_of_user }: LoginPageProps) {
  const [email, setEmail] = useState("opcode3@gmail.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Make handleSubmit async to use await
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate using Zod
    try {
      loginSchema.parse({ email, password });
      setError(null); // Clear any previous error messages
      setIsLoading(true);
      if (type_of_user === "service") {
        // Call Login For service
      } else if (type_of_user === "admin") {
        // Call Login For Admin
        const result = await loginAdmin({
          username: email,
          password,
          type: "login",
        });

        // Assuming the loginAdmin result structure is like:
        // result = { data: ..., jwttoken: ..., firstname: ..., username: ... }
        if (
          result &&
          result.data &&
          result.data.token &&
          result.data.token.length > 10
        ) {
          // Set the cookies with a max age of 12 hours (43200 seconds)
          setCookie("jwttoken", result.data.token, {
            path: "/",
            maxAge: 43200,
          });
          setCookie("firstname", result.data.name, {
            path: "/",
            maxAge: 43200,
          });
          setCookie("username", result.data.email, {
            path: "/",
            maxAge: 43200,
          });

          // Redirect to the admin dashboard
          router.push("/admin");
        } else {
          setError(result.message);
        }
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6 uppercase">
        {type_of_user} Login
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

        {/* <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
        >
          Login
        </button> */}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 flex items-center justify-center"
          disabled={isLoading} // Disable the button while loading
        >
          {isLoading ? (
            <LoaderCircleIcon className="animate-spin" />
          ) : (
            "Login" // Button text when not loading
          )}
          {isLoading && <span className="ml-2">Loading...</span>}{" "}
        </button>
      </form>

      {type_of_user === "citizen" && (
        <p className="mt-4 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      )}
    </div>
  );
}
