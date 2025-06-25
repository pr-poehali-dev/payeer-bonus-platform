import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, loginWithTelegram } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (login(username, password)) {
      navigate("/dashboard");
    } else {
      setError("Неверный логин или пароль");
    }
  };

  const handleTelegramAuth = () => {
    // Симуляция Telegram авторизации
    const mockTelegramData = {
      id: Math.random().toString(36).substr(2, 9),
      username: `tg_user_${Date.now()}`,
      first_name: "Telegram User",
    };

    if (loginWithTelegram(mockTelegramData)) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Вход в систему</CardTitle>
          <CardDescription>Введите свои данные для входа</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Логин</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center">{error}</div>
            )}

            <Button type="submit" className="w-full">
              Войти
            </Button>
          </form>

          <div className="mt-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Или
                </span>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              className="w-full mt-4"
              onClick={handleTelegramAuth}
            >
              🚀 Войти через Telegram
            </Button>
          </div>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">Нет аккаунта? </span>
            <Link to="/register" className="text-blue-600 hover:underline">
              Зарегистрироваться
            </Link>
          </div>

          <div className="mt-4 text-center">
            <Link to="/" className="text-gray-500 hover:underline text-sm">
              ← На главную
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
