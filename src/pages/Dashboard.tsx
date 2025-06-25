import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Личный кабинет</h1>
          <Button onClick={handleLogout} variant="outline">
            Выйти
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>👋 Добро пожаловать!</CardTitle>
              <CardDescription>Вы успешно вошли в систему</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Ваш логин:</p>
                  <p className="text-lg font-semibold">{user?.username}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Статус:</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Активен
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📊 Информация</CardTitle>
              <CardDescription>Данные вашего аккаунта</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Дата входа:</p>
                  <p className="text-lg">
                    {new Date().toLocaleDateString("ru-RU")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Время:</p>
                  <p className="text-lg">
                    {new Date().toLocaleTimeString("ru-RU")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>🚀 Что дальше?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Это демо-версия системы авторизации. В реальном проекте здесь
              могли бы быть:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Профиль пользователя с возможностью редактирования</li>
              <li>История активности</li>
              <li>Настройки аккаунта</li>
              <li>Дополнительная функциональность</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
