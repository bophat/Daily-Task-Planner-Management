import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../components/AuthContext";

export default function Register() {
  const nav = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (form.password.length < 6) return setError("Password must be at least 6 characters");
    if (form.password !== form.confirm) return setError("Passwords do not match");
    setLoading(true);
    try {
      await register({ name: form.name, email: form.email, password: form.password });
      nav("/");
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark text-white px-4">
      <div className="w-full max-w-md glass-card p-8">
        <h1 className="text-2xl font-bold mb-1">Create account</h1>
        <p className="text-gray-text mb-6">Register with your email</p>
        {error && <div className="bg-red-500/10 text-red-300 text-sm p-3 rounded-lg mb-4">{error}</div>}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Full name</label>
            <input
              type="text"
              required
              className="w-full bg-light rounded-lg px-4 py-3 outline-none"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Amanda"
            />
          </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <div>
              <label className="block text-sm mb-1">Confirm</label>
              <input
                type="password"
                required
                className="w-full bg-light rounded-lg px-4 py-3 outline-none"
                value={form.confirm}
                onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                placeholder="••••••••"
              />
            </div>
          </div>
          <button disabled={loading} className="w-full bg-primary hover:bg-primary/90 rounded-lg py-3 font-semibold">
            {loading ? "Creating..." : "Create account"}
          </button>
        </form>
        <p className="text-sm text-gray-text mt-6">
          Already have an account? <Link to="/login" className="text-primary">Sign in</Link>
        </p>
      </div>
    </div>
  );
}


