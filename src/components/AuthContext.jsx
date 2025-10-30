import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_USERS = "dtp_users";
const STORAGE_AUTH = "dtp_auth";

const AuthContext = createContext({
  user: null,
  login: async () => {},
  register: async () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_AUTH);
    if (raw) setUser(JSON.parse(raw));
  }, []);

  const persistAuth = (u) => {
    setUser(u);
    if (u) localStorage.setItem(STORAGE_AUTH, JSON.stringify(u));
    else localStorage.removeItem(STORAGE_AUTH);
  };

  const loadUsers = () => {
    const raw = localStorage.getItem(STORAGE_USERS);
    return raw ? JSON.parse(raw) : [];
  };
  const saveUsers = (users) => localStorage.setItem(STORAGE_USERS, JSON.stringify(users));

  const register = async ({ email, password, name }) => {
    const users = loadUsers();
    if (users.find((u) => u.email === email)) {
      throw new Error("Email already registered");
    }
    const newUser = { id: Date.now(), email, password, name: name || email.split("@")[0] };
    users.push(newUser);
    saveUsers(users);
    persistAuth({ id: newUser.id, email: newUser.email, name: newUser.name });
  };

  const login = async ({ email, password }) => {
    const users = loadUsers();
    const found = users.find((u) => u.email === email && u.password === password);
    if (!found) throw new Error("Invalid credentials");
    persistAuth({ id: found.id, email: found.email, name: found.name });
  };

  const logout = () => persistAuth(null);

  const value = useMemo(() => ({ user, register, login, logout }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}


