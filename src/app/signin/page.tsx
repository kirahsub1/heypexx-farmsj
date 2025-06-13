"use client";

import React, { useState, ChangeEvent } from "react";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface InputProps {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  icon?: React.ElementType;
  showPassword?: boolean;
  onTogglePassword?: () => void;
  required?: boolean;
  name: string;
}

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  icon: Icon,
  showPassword,
  onTogglePassword,
  required = false,
  name,
}) => (
  <div className="relative">
    <div className="relative">
      {Icon && (
        <Icon
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-3 ${Icon ? "pl-10" : ""} ${
          type === "password" ? "pr-10" : ""
        } border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
          error
            ? "border-red-500 bg-red-50"
            : "border-gray-300 hover:border-gray-400"
        }`}
      />
      {type === "password" && onTogglePassword && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
    {error && (
      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
        <span>⚠️</span>
        {error}
      </p>
    )}
  </div>
);

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      // TODO: Add your authentication logic here      // For now, simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push("/userDashboard");
    } catch (error) {
      console.error("Login error:", error);
      setErrors({
        email: "Invalid credentials",
        password: "Invalid credentials",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = () => {
    // Add your Google auth logic here
    console.log("Google auth triggered");
  };
  const router = useRouter();

  const handleForgotPassword = () => {
    router.push("/forgetPassword");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-2">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[650px]">
          {/* Left Side - Branding */}
          <div className="lg:w-1/2 relative bg-gradient-to-br from-green-600/30 to-green-800/40 p-6 flex flex-col justify-between">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1749559201/image_immm0o.png"
                alt="Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-green-800/40" />
            </div>

            {/* Content (now relative to appear above background) */}
            <div className="relative z-10">
              {/* Logo */}
              <div className="flex items-center gap-3 text-white mb-12">
                <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xl">
                    <Image
                      src="https://res.cloudinary.com/dgcjq4kbf/image/upload_v1737469420/image_18_gwbxab.png"
                      alt="Heypexx Farm Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </span>
                </div>
                <span className="text-xl font-bold">Heypexx Farm</span>
              </div>

              {/* Main Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Welcome Back to Fresh Farm Products
                </h1>
                <p className="text-green-100 text-lg mb-8">
                  Continue your journey with sustainable agriculture. Connect
                  with farmers, discover fresh products, and explore land
                  leasing opportunities.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 text-white">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold">10K+</div>
                    <div className="text-sm text-green-100">Active Farmers</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold">50K+</div>
                    <div className="text-sm text-green-100">Products Sold</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 text-white">
                <div className="flex items-center gap-3">
                  <span className="text-green-300">✓</span>
                  <span>Direct connection with local farmers</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-300">✓</span>
                  <span>Fresh, organic farm products</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-300">✓</span>
                  <span>Land leasing opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="lg:w-1/2 p-6 lg:p-8 flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Welcome Back!
                </h2>
                <p className="text-gray-600">
                  Sign in to your Heypexx Farm account
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    icon={Mail}
                    required
                  />

                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    error={errors.password}
                    icon={Lock}
                    showPassword={showPassword}
                    onTogglePassword={() => setShowPassword(!showPassword)}
                    required
                  />

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      />
                      <span className="text-gray-700">Remember me</span>
                    </label>
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-green-600 hover:text-green-700 font-medium transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>
                </div>

                <Button
                  variant="primary"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Sign In"}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                  onClick={handleGoogleAuth}
                  disabled={loading}
                  type="button"
                >
                  <FcGoogle className="h-5 w-5" />
                  Continue with Google
                </Button>

                <p className="text-center text-sm text-gray-600">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    className="text-green-600 hover:text-green-700 font-medium transition-colors"
                  >
                    Sign up
                  </Link>
                </p>

                <p className="text-xs text-center text-gray-500 mt-4">
                  By continuing you agree to Heypexx Farm&apos;s
                  <Link
                    href="/terms"
                    className="text-green-600 hover:text-green-700"
                  >
                    Terms and Conditions
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
