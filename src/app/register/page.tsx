"use client";

import React, { useState, ChangeEvent } from "react";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff, User, Mail, Lock, Check, X } from "lucide-react";
import Button from "@/app/components/buttons/Button";
import Image from "next/image"

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
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  agreeToTerms?: string;
}

// Enhanced Input Component
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
      {type === "password" && (
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
        <X size={16} />
        {error}
      </p>
    )}
  </div>
);

// Password Strength Indicator
interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
  const requirements = [
    { label: "At least 8 characters", test: password.length >= 8 },
    { label: "Contains uppercase letter", test: /[A-Z]/.test(password) },
    { label: "Contains lowercase letter", test: /[a-z]/.test(password) },
    { label: "Contains number", test: /\d/.test(password) },
    {
      label: "Contains special character",
      test: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    },
  ];

  const strength = requirements.filter((req) => req.test).length;
  const strengthColors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-green-500",
  ];
  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];

  return (
    <div className="mt-2">
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded ${
              i < strength ? strengthColors[strength - 1] : "bg-gray-200"
            }`}
          />
        ))}
      </div>
      <p className="text-xs text-gray-600 mb-2">
        Password strength:{" "}
        <span
          className={`font-medium ${
            strength > 2 ? "text-green-600" : "text-red-600"
          }`}
        >
          {strengthLabels[strength - 1] || "Very Weak"}
        </span>
      </p>
      <div className="space-y-1">
        {requirements.map((req, i) => (
          <div key={i} className="flex items-center gap-1 text-xs">
            {req.test ? (
              <Check size={12} className="text-green-500" />
            ) : (
              <X size={12} className="text-red-500" />
            )}
            <span className={req.test ? "text-green-600" : "text-gray-500"}>
              {req.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

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

  const handleSignIn = () => {
    window.location.href = "/signin";
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
                      src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1737469420/image_18_gwbxab.png"
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
                  Join the Future of Agriculture
                </h1>
                <p className="text-green-100 text-lg mb-8">
                  Create your account today and become part of our thriving
                  community of farmers, buyers, and agricultural enthusiasts.
                </p>

                {/* Benefits */}
                <div className="space-y-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">
                      🚜 For Farmers
                    </h3>
                    <p className="text-green-100 text-sm">
                      Showcase your products, connect with buyers, and grow your
                      business
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">
                      🛒 For Buyers
                    </h3>
                    <p className="text-green-100 text-sm">
                      Access fresh, quality products directly from local farms
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">
                      🏡 Land Leasing
                    </h3>
                    <p className="text-green-100 text-sm">
                      Discover and lease agricultural land opportunities
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm text-green-100">Happy Farmers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">99%</div>
                  <div className="text-sm text-green-100">
                    Satisfaction Rate
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="lg:w-1/2 p-6 lg:p-8 flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Create Account
                </h2>
                <p className="text-gray-600">
                  Join Heypexx Farm today and start your agricultural journey
                </p>
              </div>

              <div className="space-y-6">
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  error={errors.fullName}
                  icon={User}
                  required
                />

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

                <div>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleInputChange}
                    error={errors.password}
                    icon={Lock}
                    showPassword={showPassword}
                    onTogglePassword={() => setShowPassword(!showPassword)}
                    required
                  />
                  {formData.password && (
                    <PasswordStrength password={formData.password} />
                  )}
                </div>

                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  error={errors.confirmPassword}
                  icon={Lock}
                  showPassword={showConfirmPassword}
                  onTogglePassword={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  required
                />

                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to the{" "}
                      <button
                        type="button"
                        className="text-green-600 hover:text-green-700 font-medium"
                      >
                        Terms and Conditions
                      </button>{" "}
                      and{" "}
                      <button
                        type="button"
                        className="text-green-600 hover:text-green-700 font-medium"
                      >
                        Privacy Policy
                      </button>
                    </span>
                  </label>
                  {errors.agreeToTerms && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <X size={16} />
                      {errors.agreeToTerms}
                    </p>
                  )}
                </div>

                <Button
                  bgColor="bg-green-600 hover:bg-green-700"
                  textColor="text-white"
                  text="Create Account"
                />

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
                  bgColor="bg-white hover:bg-gray-50 border border-gray-300"
                  textColor="text-gray-700"
                  icon={FcGoogle}
                  text="Continue with Google"
                />

                <p className="text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={handleSignIn}
                    className="text-green-600 hover:text-green-700 font-medium transition-colors"
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
