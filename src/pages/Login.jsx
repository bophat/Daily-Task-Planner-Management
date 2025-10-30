import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../components/AuthContext";

export default function Login() {
  const nav = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(form);
      nav("/");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark text-white px-4">
      <div className="w-full max-w-md glass-card p-8">
        <h1 className="text-2xl font-bold mb-1">Welcome back</h1>
        <p className="text-gray-text mb-6">Login to your account</p>
        {error && <div className="bg-red-500/10 text-red-300 text-sm p-3 rounded-lg mb-4">{error}</div>}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full bg-light rounded-lg px-4 py-3 outline-none"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full bg-light rounded-lg px-4 py-3 outline-none"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••"
            />
          </div>
          <button disabled={loading} className="w-full bg-primary hover:bg-primary/90 rounded-lg py-3 font-semibold">
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
        <p className="text-sm text-gray-text mt-6">
          Don’t have an account? <Link to="/register" className="text-primary">Create one</Link>
        </p>
      </div>
    </div>
  );
}


