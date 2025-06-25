import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FAQ = () => {
  const faqs = [
    {
      question: "Как происходят выплаты?",
      answer:
        "Выплаты производятся автоматически каждые 24 часа на ваш Payeer кошелек. Минимальная сумма для вывода - $1.",
    },
    {
      question: "Какая комиссия платформы?",
      answer:
        "Мы берём 20% с каждого клика. Остальные 80% идут напрямую на ваш счёт.",
    },
    {
      question: "Как работает защита от ботов?",
      answer:
        "Используем ИИ-систему анализа поведения пользователей с точностью 99.9%. Боты и накрутка автоматически отфильтровываются.",
    },
    {
      question: "Могу ли я размещать любую рекламу?",
      answer:
        "Реклама проходит модерацию в течение 5 минут. Запрещены: Adult, казино, финансовые пирамиды, нелегальные товары.",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Часто задаваемые вопросы
          </h1>
          <p className="text-xl text-gray-600">
            Ответы на популярные вопросы о нашей платформе
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="HelpCircle" size={20} className="text-blue-500" />
                  <span>{faq.question}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
