
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  LineChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset
} from "@/components/ui/sidebar";

const salesData = [
  { name: "Янв", продажи: 4000, прибыль: 2400 },
  { name: "Фев", продажи: 3000, прибыль: 1398 },
  { name: "Мар", продажи: 2000, прибыль: 9800 },
  { name: "Апр", продажи: 2780, прибыль: 3908 },
  { name: "Май", продажи: 1890, прибыль: 4800 },
  { name: "Июн", продажи: 2390, прибыль: 3800 },
];

const clientsData = [
  { name: "Янв", клиенты: 40 },
  { name: "Фев", клиенты: 30 },
  { name: "Мар", клиенты: 20 },
  { name: "Апр", клиенты: 27 },
  { name: "Май", клиенты: 18 },
  { name: "Июн", клиенты: 23 },
];

const recentClients = [
  { id: 1, name: "Иванов Иван", purchases: 12, totalSpent: "124 500 ₽", avatar: "" },
  { id: 2, name: "Петрова Мария", purchases: 8, totalSpent: "98 300 ₽", avatar: "" },
  { id: 3, name: "Сидоров Алексей", purchases: 15, totalSpent: "156 750 ₽", avatar: "" },
  { id: 4, name: "Козлова Анна", purchases: 5, totalSpent: "67 200 ₽", avatar: "" },
];

const recentOrders = [
  { id: "ORD-2023-001", client: "Иванов Иван", date: "15.05.2025", amount: "24 500 ₽", status: "Выполнен" },
  { id: "ORD-2023-002", client: "Петрова Мария", date: "14.05.2025", amount: "18 300 ₽", status: "В обработке" },
  { id: "ORD-2023-003", client: "Сидоров Алексей", date: "13.05.2025", amount: "32 750 ₽", status: "Отправлен" },
  { id: "ORD-2023-004", client: "Козлова Анна", date: "12.05.2025", amount: "15 200 ₽", status: "Выполнен" },
];

const Index = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar>
          <SidebarHeader className="flex items-center px-4 py-2">
            <div className="flex items-center space-x-2">
              <div className="p-1 bg-purple-600 rounded-md">
                <Icon name="LayoutDashboard" className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-semibold">CRM Система</span>
            </div>
            <SidebarTrigger className="ml-auto" />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive tooltip="Дашборд">
                  <Icon name="LayoutDashboard" />
                  <span>Дашборд</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Клиенты">
                  <Icon name="Users" />
                  <span>Клиенты</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Заказы">
                  <Icon name="ShoppingCart" />
                  <span>Заказы</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Продажи">
                  <Icon name="BarChart" />
                  <span>Продажи</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Табель">
                  <Icon name="ClipboardList" />
                  <span>Табель</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Настройки">
                  <Icon name="Settings" />
                  <span>Настройки</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="px-4 py-2">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>АП</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Администратор</p>
                <p className="text-xs text-muted-foreground">admin@example.com</p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">Дашборд</h1>
              <p className="text-muted-foreground">Обзор вашего бизнеса</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline">
                <Icon name="FileText" className="mr-2 h-4 w-4" />
                Отчёты
              </Button>
              <Button>
                <Icon name="Plus" className="mr-2 h-4 w-4" />
                Новый клиент
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground font-medium">Продажи сегодня</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42 500 ₽</div>
                <div className="flex items-center text-sm text-green-600">
                  <Icon name="TrendingUp" className="h-4 w-4 mr-1" />
                  <span>+12.5%</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground font-medium">Новые клиенты</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <div className="flex items-center text-sm text-green-600">
                  <Icon name="TrendingUp" className="h-4 w-4 mr-1" />
                  <span>+4.3%</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground font-medium">Открытые заказы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">16</div>
                <div className="flex items-center text-sm text-amber-600">
                  <Icon name="Clock" className="h-4 w-4 mr-1" />
                  <span>5 просрочено</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground font-medium">Средний чек</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18 300 ₽</div>
                <div className="flex items-center text-sm text-red-600">
                  <Icon name="TrendingDown" className="h-4 w-4 mr-1" />
                  <span>-2.1%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Динамика продаж</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="продажи" stroke="#8884d8" />
                    <Line type="monotone" dataKey="прибыль" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Новые клиенты</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={clientsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="клиенты" fill="#6E59A5" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Tabs defaultValue="clients">
              <div className="flex justify-between items-center">
                <TabsList>
                  <TabsTrigger value="clients">Последние клиенты</TabsTrigger>
                  <TabsTrigger value="orders">Последние заказы</TabsTrigger>
                </TabsList>
                <Button variant="ghost" size="sm">
                  Показать все
                  <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
                </Button>
              </div>
              <TabsContent value="clients" className="mt-4">
                <Card>
                  <CardContent className="p-0">
                    <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="text-xs text-muted-foreground uppercase bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3">Клиент</th>
                            <th scope="col" className="px-6 py-3">Покупок</th>
                            <th scope="col" className="px-6 py-3">Сумма</th>
                            <th scope="col" className="px-6 py-3">Действия</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentClients.map((client) => (
                            <tr key={client.id} className="bg-white border-b">
                              <td className="px-6 py-4">
                                <div className="flex items-center space-x-3">
                                  <Avatar>
                                    <AvatarImage src={client.avatar} />
                                    <AvatarFallback>{client.name.substring(0, 2)}</AvatarFallback>
                                  </Avatar>
                                  <span>{client.name}</span>
                                </div>
                              </td>
                              <td className="px-6 py-4">{client.purchases}</td>
                              <td className="px-6 py-4">{client.totalSpent}</td>
                              <td className="px-6 py-4">
                                <Button variant="ghost" size="sm">
                                  <Icon name="ExternalLink" className="h-4 w-4" />
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="orders" className="mt-4">
                <Card>
                  <CardContent className="p-0">
                    <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="text-xs text-muted-foreground uppercase bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3">ID Заказа</th>
                            <th scope="col" className="px-6 py-3">Клиент</th>
                            <th scope="col" className="px-6 py-3">Дата</th>
                            <th scope="col" className="px-6 py-3">Сумма</th>
                            <th scope="col" className="px-6 py-3">Статус</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentOrders.map((order) => (
                            <tr key={order.id} className="bg-white border-b">
                              <td className="px-6 py-4 font-medium">{order.id}</td>
                              <td className="px-6 py-4">{order.client}</td>
                              <td className="px-6 py-4">{order.date}</td>
                              <td className="px-6 py-4">{order.amount}</td>
                              <td className="px-6 py-4">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  order.status === "Выполнен" 
                                    ? "bg-green-100 text-green-800" 
                                    : order.status === "В обработке" 
                                    ? "bg-blue-100 text-blue-800" 
                                    : "bg-yellow-100 text-yellow-800"
                                }`}>
                                  {order.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card>
              <CardHeader>
                <CardTitle>Статистика по товарам</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Смартфон XYZ Pro</span>
                      <span className="text-sm text-muted-foreground">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Наушники Аудио 5</span>
                      <span className="text-sm text-muted-foreground">63%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '63%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Планшет ТабМ</span>
                      <span className="text-sm text-muted-foreground">49%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '49%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Смарт-часы Тайм 2</span>
                      <span className="text-sm text-muted-foreground">35%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-6">
                  Подробный отчёт
                </Button>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
