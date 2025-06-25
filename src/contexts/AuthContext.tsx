import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  username: string;
  email?: string;
  telegramId?: string;
  balance: number;
  clicksRemaining: number;
  lastClickReset: number;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  register: (username: string, password: string, email?: string) => boolean;
  loginWithTelegram: (telegramData: any) => boolean;
  logout: () => void;
  addToBalance: (amount: number) => void;
  canClick: () => boolean;
  performClick: () => boolean;
  updateClickLimit: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      // Проверяем и обновляем лимит кликов при загрузке
      updateUserClickLimit(userData);
    }
  }, []);

  const updateUserClickLimit = (userData: User) => {
    const now = Date.now();
    const timeDiff = now - userData.lastClickReset;
    const thirtyMinutes = 30 * 60 * 1000; // 30 минут в миллисекундах

    if (timeDiff >= thirtyMinutes) {
      const updatedUser = {
        ...userData,
        clicksRemaining: 500,
        lastClickReset: now,
      };
      setUser(updatedUser);
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));

      // Обновляем также в массиве пользователей
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const userIndex = users.findIndex(
        (u: any) => u.username === userData.username,
      );
      if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updatedUser };
        localStorage.setItem("users", JSON.stringify(users));
      }
    }
  };

  const register = (
    username: string,
    password: string,
    email?: string,
  ): boolean => {
    if (!username || !password) return false;

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.find(
      (u: any) => u.username === username || (email && u.email === email),
    );

    if (userExists) return false;

    const newUser = {
      username,
      password,
      email,
      balance: 0,
      clicksRemaining: 500,
      lastClickReset: Date.now(),
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  };

  const login = (username: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (u: any) => u.username === username && u.password === password,
    );

    if (foundUser) {
      const userData: User = {
        username: foundUser.username,
        email: foundUser.email,
        balance: foundUser.balance || 0,
        clicksRemaining: foundUser.clicksRemaining || 500,
        lastClickReset: foundUser.lastClickReset || Date.now(),
      };
      setUser(userData);
      localStorage.setItem("currentUser", JSON.stringify(userData));
      updateUserClickLimit(userData);
      return true;
    }
    return false;
  };

  const loginWithTelegram = (telegramData: any): boolean => {
    // Симуляция Telegram авторизации
    const userData: User = {
      username: telegramData.username || `user_${telegramData.id}`,
      telegramId: telegramData.id,
      balance: 0,
      clicksRemaining: 500,
      lastClickReset: Date.now(),
    };
    setUser(userData);
    localStorage.setItem("currentUser", JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  const addToBalance = (amount: number) => {
    if (!user) return;

    const updatedUser = { ...user, balance: user.balance + amount };
    setUser(updatedUser);
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    // Обновляем также в массиве пользователей
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userIndex = users.findIndex((u: any) => u.username === user.username);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], balance: updatedUser.balance };
      localStorage.setItem("users", JSON.stringify(users));
    }
  };

  const canClick = (): boolean => {
    if (!user) return false;
    updateUserClickLimit(user);
    return user.clicksRemaining > 0;
  };

  const performClick = (): boolean => {
    if (!user || !canClick()) return false;

    const updatedUser = {
      ...user,
      balance: user.balance + 1,
      clicksRemaining: user.clicksRemaining - 1,
    };
    setUser(updatedUser);
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    // Обновляем также в массиве пользователей
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userIndex = users.findIndex((u: any) => u.username === user.username);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updatedUser };
      localStorage.setItem("users", JSON.stringify(users));
    }

    return true;
  };

  const updateClickLimit = () => {
    if (!user) return;
    updateUserClickLimit(user);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        loginWithTelegram,
        logout,
        addToBalance,
        canClick,
        performClick,
        updateClickLimit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
