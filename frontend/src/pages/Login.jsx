import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff, Mail, Lock, Chrome, Loader2 } from 'lucide-react';
import axios from 'axios';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // Get backend URL from environment variable
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/users/signin`,
        loginData,
        { withCredentials: true }
      );

      setSuccess("Login successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);

    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      window.location.href = `${BACKEND_URL}/api/auth/signin/google`;
    } catch (err) {
      setError('Google authentication failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-slate-400 mt-2">Sign in to your account</p>
        </div>

        <Card className="border border-slate-800 shadow-2xl bg-[#111] text-white">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-2xl font-semibold text-center text-white">
              Login
            </CardTitle>
            <CardDescription className="text-center text-slate-400">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {error && (
              <Alert variant="destructive" className="bg-red-950/50 border-red-700 text-red-400">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="border-green-700 bg-green-900/30 text-green-400">
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}

            <Button 
              type="button"
              variant="outline" 
              className="w-full h-11 border-slate-700 bg-[#1a1a1a] hover:bg-slate-800 transition-all duration-200 text-slate-200"
              onClick={handleGoogleAuth}
              disabled={loading}
            >
              <Chrome className="w-4 h-4 mr-2" />
              Continue with Google
            </Button>

            <div className="relative">
              <Separator className="bg-slate-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-[#111] px-2 text-sm text-slate-500">or</span>
              </div>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-slate-300">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 h-11 border-slate-700 bg-[#1a1a1a] text-white placeholder-slate-500 focus:border-yellow-500 focus:ring-yellow-500"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-slate-300">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="pl-10 pr-10 h-11 border-slate-700 bg-[#1a1a1a] text-white placeholder-slate-500 focus:border-yellow-500 focus:ring-yellow-500"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-2 h-7 w-7 p-0 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-slate-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-slate-500" />
                    )}
                  </Button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-11 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition-all duration-200"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>

            <div className="text-center text-sm">
              <span className="text-slate-400">Don't have an account? </span>
              <a
                href="/signup"
                className="font-medium text-yellow-400 hover:text-yellow-300 hover:underline transition-colors"
              >
                Sign up
              </a>
            </div>

            <div className="text-center">
              <a
                href="/forgot-password"
                className="text-sm text-slate-500 hover:text-yellow-400 hover:underline transition-colors"
              >
                Forgot your password?
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
