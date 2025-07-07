import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-6xl font-mono">
                T
              </div>
            </div>

            <h1 className="text-6xl font-bold mb-6 font-mono">
              <span className="text-emerald-400">ТИМОФЕЙ</span>
              <br />
              <span className="text-2xl text-gray-300">DEVELOPER</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Информационные системы и программирование • Изучаю фронтенд
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge
                variant="outline"
                className="bg-emerald-500/20 text-emerald-400 border-emerald-500"
              >
                JavaScript
              </Badge>
              <Badge
                variant="outline"
                className="bg-emerald-500/20 text-emerald-400 border-emerald-500"
              >
                React
              </Badge>
              <Badge
                variant="outline"
                className="bg-emerald-500/20 text-emerald-400 border-emerald-500"
              >
                TypeScript
              </Badge>
              <Badge
                variant="outline"
                className="bg-emerald-500/20 text-emerald-400 border-emerald-500"
              >
                Frontend
              </Badge>
            </div>

            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Icon name="Download" className="mr-2" />
                Скачать резюме
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/20"
              >
                <Icon name="Mail" className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 font-mono">
              <span className="text-emerald-400">&gt;</span> РЕЗЮМЕ
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-emerald-400 flex items-center">
                    <Icon name="GraduationCap" className="mr-2" />
                    Образование
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-white">
                        Информационные системы и программирование
                      </h3>
                      <p className="text-gray-400">
                        Специализация в области разработки и администрирования
                        ИС
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-emerald-400 flex items-center">
                    <Icon name="Code" className="mr-2" />
                    Навыки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-white">
                          JavaScript
                        </span>
                        <span className="text-sm text-gray-400">75%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-emerald-400 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-white">
                          React
                        </span>
                        <span className="text-sm text-gray-400">60%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-emerald-400 h-2 rounded-full w-3/5"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-white">
                          TypeScript
                        </span>
                        <span className="text-sm text-gray-400">50%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-emerald-400 h-2 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 font-mono">
              <span className="text-emerald-400">&gt;</span> ПРОЕКТЫ
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-emerald-400 flex items-center">
                    <Icon name="Globe" className="mr-2" />
                    Веб-приложение
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    React • TypeScript • Tailwind
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Современное SPA приложение с адаптивным дизайном
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/20"
                    >
                      <Icon name="Github" className="mr-1" size={16} />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/20"
                    >
                      <Icon name="ExternalLink" className="mr-1" size={16} />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-emerald-400 flex items-center">
                    <Icon name="Database" className="mr-2" />
                    API сервис
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Node.js • Express • MongoDB
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    RESTful API для управления данными
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/20"
                    >
                      <Icon name="Github" className="mr-1" size={16} />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/20"
                    >
                      <Icon name="ExternalLink" className="mr-1" size={16} />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-emerald-400 flex items-center">
                    <Icon name="Smartphone" className="mr-2" />
                    Мобильное приложение
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    React Native • Firebase
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Кроссплатформенное мобильное приложение
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/20"
                    >
                      <Icon name="Github" className="mr-1" size={16} />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/20"
                    >
                      <Icon name="ExternalLink" className="mr-1" size={16} />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 font-mono">
              <span className="text-emerald-400">&gt;</span> КОНТАКТЫ
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Icon
                    name="Mail"
                    className="mx-auto mb-4 text-emerald-400"
                    size={32}
                  />
                  <h3 className="font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-400">timofey.dev@example.com</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Icon
                    name="Github"
                    className="mx-auto mb-4 text-emerald-400"
                    size={32}
                  />
                  <h3 className="font-semibold text-white mb-2">GitHub</h3>
                  <p className="text-gray-400">github.com/timofey-dev</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Icon
                    name="MessageCircle"
                    className="mx-auto mb-4 text-emerald-400"
                    size={32}
                  />
                  <h3 className="font-semibold text-white mb-2">Telegram</h3>
                  <p className="text-gray-400">@timofey_dev</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
