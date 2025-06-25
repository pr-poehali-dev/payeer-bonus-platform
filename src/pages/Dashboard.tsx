import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout, performClick, canClick, updateClickLimit } = useAuth();
  const navigate = useNavigate();
  const [clickAnimation, setClickAnimation] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Обновляем лимит кликов каждые 30 секунд (для демонстрации)
    const interval = setInterval(() => {
      updateClickLimit();
    }, 30000);

    return () => clearInterval(interval);
  }, [updateClickLimit]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleBulldogClick = () => {
    if (canClick()) {
      if (performClick()) {
        setClickAnimation(true);
        setTimeout(() => setClickAnimation(false), 200);
      }
    } else {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }
  };

  const getTimeUntilReset = () => {
    if (!user) return "";
    const now = Date.now();
    const nextReset = user.lastClickReset + 30 * 60 * 1000; // 30 минут
    const timeLeft = nextReset - now;

    if (timeLeft <= 0) return "Обновление доступно!";

    const minutes = Math.floor(timeLeft / (60 * 1000));
    const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            🐕 Бульдог Кликер
          </h1>
          <Button onClick={handleLogout} variant="outline">
            Выйти
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="md:col-span-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                Добро пожаловать, {user?.username}!
              </CardTitle>
              <CardDescription>
                Кликай по бульдогу и зарабатывай монеты!
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>💰 Баланс</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {user?.balance || 0} монет
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>⚡ Клики</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl font-bold">
                  {user?.clicksRemaining || 0} / 500
                </div>
                <div className="text-sm text-gray-600">
                  До обновления: {getTimeUntilReset()}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="relative inline-block">
                <img
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=300&fit=crop"
                  alt="Бульдог"
                  className={`w-64 h-64 mx-auto rounded-full cursor-pointer transition-all duration-200 hover:scale-105 ${
                    clickAnimation ? "scale-110 brightness-110" : ""
                  } ${!canClick() ? "grayscale cursor-not-allowed" : ""}`}
                  onClick={handleBulldogClick}
                />
                {clickAnimation && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-yellow-500 animate-bounce">
                      +1
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-6">
                {canClick() ? (
                  <p className="text-lg text-gray-700">
                    Кликай на бульдога, чтобы заработать монеты! 🐕💰
                  </p>
                ) : (
                  <div className="space-y-2">
                    <p className="text-lg text-red-600 font-semibold">
                      Загляни позже... 😴
                    </p>
                    <p className="text-sm text-gray-600">
                      Лимит кликов исчерпан. Подожди немного!
                    </p>
                  </div>
                )}
              </div>

              {showMessage && (
                <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 rounded-lg">
                  <p className="text-yellow-800">
                    🚫 Клики закончились! Подожди до обновления лимита.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>📊 Статистика</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {500 - (user?.clicksRemaining || 0)}
                </div>
                <div className="text-sm text-gray-600">Кликов сегодня</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {user?.balance || 0}
                </div>
                <div className="text-sm text-gray-600">Всего заработано</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
