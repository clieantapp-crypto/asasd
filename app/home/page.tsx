"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Wifi,
  Users,
  TrendingUp,
  Zap,
  Satellite,
  Radio,
  Network,
  MapPin,
  Activity,
  Building2,
  Cloud,
  Brain,
  ChevronDown,
  Signal,
  Antenna,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function GlobalTelecommunications() {
  const [selectedRegion, setSelectedRegion] = useState("global");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const globalStats = [
    {
      title: "المشتركين العالميين",
      value: "8.58B",
      change: "+3.2%",
      icon: <Users className="h-6 w-6" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "تغطية 5G",
      value: "35%",
      change: "+12%",
      icon: <Radio className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "مستخدمي الإنترنت",
      value: "5.16B",
      change: "+1.9%",
      icon: <Globe className="h-6 w-6" />,
      color: "from-violet-500 to-purple-600",
    },
    {
      title: "انتشار الهاتف المحمول",
      value: "109%",
      change: "+0.8%",
      icon: <Smartphone className="h-6 w-6" />,
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "متوسط السرعة",
      value: "85 Mbps",
      change: "+15%",
      icon: <Zap className="h-6 w-6" />,
      color: "from-amber-500 to-orange-600",
    },
    {
      title: "القيمة السوقية",
      value: "$1.8T",
      change: "+4.1%",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "from-pink-500 to-rose-600",
    },
  ];

  const regions = [
    {
      id: "global",
      name: "نظرة عالمية",
      subscribers: "8.58B",
      coverage: "35%",
      avgSpeed: "85 Mbps",
      companies: 2847,
    },
    {
      id: "asia",
      name: "آسيا والمحيط الهادئ",
      subscribers: "4.2B",
      coverage: "42%",
      avgSpeed: "95 Mbps",
      companies: 1245,
    },
    {
      id: "europe",
      name: "أوروبا",
      subscribers: "1.1B",
      coverage: "78%",
      avgSpeed: "120 Mbps",
      companies: 456,
    },
    {
      id: "americas",
      name: "الأمريكتين",
      subscribers: "1.8B",
      coverage: "65%",
      avgSpeed: "110 Mbps",
      companies: 678,
    },
    {
      id: "africa",
      name: "أفريقيا",
      subscribers: "1.2B",
      coverage: "18%",
      avgSpeed: "45 Mbps",
      companies: 234,
    },
    {
      id: "middle-east",
      name: "الشرق الأوسط",
      subscribers: "280M",
      coverage: "55%",
      avgSpeed: "75 Mbps",
      companies: 134,
    },
  ];

  const majorCompanies = [
    {
      name: "تشاينا موبايل",
      country: "الصين",
      subscribers: "975M",
      revenue: "$109B",
      technology: "رائدة 5G",
      color: "from-rose-500 to-pink-600",
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      name: "فودافون جروب",
      country: "المملكة المتحدة",
      subscribers: "300M",
      revenue: "$52B",
      technology: "رائدة إنترنت الأشياء",
      color: "from-red-500 to-rose-600",
      icon: <Network className="h-6 w-6" />,
    },
    {
      name: "فيريزون",
      country: "الولايات المتحدة",
      subscribers: "143M",
      revenue: "$136B",
      technology: "5G الترا",
      color: "from-blue-500 to-indigo-600",
      icon: <Satellite className="h-6 w-6" />,
    },
    {
      name: "إيه تي آند تي",
      country: "الولايات المتحدة",
      subscribers: "230M",
      revenue: "$171B",
      technology: "رائدة الألياف",
      color: "from-cyan-500 to-blue-600",
      icon: <Wifi className="h-6 w-6" />,
    },
    {
      name: "دويتشه تيليكوم",
      country: "ألمانيا",
      subscribers: "242M",
      revenue: "$122B",
      technology: "الحوسبة الطرفية",
      color: "from-purple-500 to-violet-600",
      icon: <Cloud className="h-6 w-6" />,
    },
    {
      name: "سوفت بنك",
      country: "اليابان",
      subscribers: "88M",
      revenue: "$47B",
      technology: "تكامل الذكاء الاصطناعي",
      color: "from-amber-500 to-orange-600",
      icon: <Brain className="h-6 w-6" />,
    },
  ];

  const technologies = [
    {
      id: "5g",
      name: "شبكات 5G",
      adoption: "35%",
      description: "تقنية لاسلكية من الجيل التالي بزمن استجابة منخفض للغاية",
      features: [
        "سرعات تصل إلى 20 جيجابت في الثانية نظرياً",
        "زمن استجابة 1 مللي ثانية للتطبيقات الفورية",
        "اتصال هائل لأجهزة إنترنت الأشياء",
        "قدرات تقسيم الشبكة",
        "النطاق العريض المحمول المحسن",
        "اتصالات حرجة المهام",
      ],
      regions: {
        "آسيا والمحيط الهادئ": "42%",
        أوروبا: "78%",
        الأمريكتين: "65%",
        أفريقيا: "18%",
        "الشرق الأوسط": "55%",
      },
    },
    {
      id: "fiber",
      name: "الألياف البصرية",
      adoption: "68%",
      description: "بنية تحتية للإنترنت عالي السرعة باستخدام إشارات ضوئية",
      features: [
        "سرعات جيجابت للمستهلكين",
        "تحميل/تنزيل متماثل",
        "زمن استجابة منخفض وموثوقية عالية",
        "بنية تحتية مستقبلية",
        "دعم لبث 8K",
        "اتصال على مستوى المؤسسات",
      ],
      regions: {
        "آسيا والمحيط الهادئ": "72%",
        أوروبا: "85%",
        الأمريكتين: "78%",
        أفريقيا: "25%",
        "الشرق الأوسط": "60%",
      },
    },
    {
      id: "satellite",
      name: "إنترنت الأقمار الصناعية",
      adoption: "12%",
      description: "اتصال عالمي من خلال أقمار صناعية في مدار أرضي منخفض",
      features: [
        "تغطية عالمية تشمل المناطق النائية",
        "كوكبات المدار الأرضي المنخفض",
        "اتصالات التعافي من الكوارث",
        "اتصال بحري وطيران",
        "سد الفجوة الرقمية",
        "شبكات الاستجابة للطوارئ",
      ],
      regions: {
        "آسيا والمحيط الهادئ": "8%",
        أوروبا: "15%",
        الأمريكتين: "18%",
        أفريقيا: "22%",
        "الشرق الأوسط": "12%",
      },
    },
  ];

  const innovations = [
    {
      title: "أبحاث 6G",
      description: "تطوير تقنية لاسلكية من الجيل التالي",
      timeline: "2030+",
      impact: "ثوري",
      color: "bg-gradient-to-br from-purple-500 via-violet-600 to-purple-700",
    },
    {
      title: "شبكات الكم",
      description: "أنظمة اتصالات كمية فائقة الأمان",
      timeline: "2028+",
      impact: "تحويلي",
      color: "bg-gradient-to-br from-blue-500 via-cyan-600 to-blue-700",
    },
    {
      title: "شبكات مدعومة بالذكاء الاصطناعي",
      description: "بنية تحتية شبكية ذكية ذاتية التحسين",
      timeline: "2025+",
      impact: "كبير",
      color: "bg-gradient-to-br from-emerald-500 via-teal-600 to-emerald-700",
    },
    {
      title: "اتصالات هولوغرافية",
      description: "مكالمات ومؤتمرات فيديو ثلاثية الأبعاد",
      timeline: "2027+",
      impact: "ثوري",
      color: "bg-gradient-to-br from-orange-500 via-amber-600 to-orange-700",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 md:p-8"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <motion.div
              className="relative w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Globe className="h-10 w-10 text-white" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse border-2 border-white" />
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-600 dark:from-slate-100 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              الاتصالات العالمية
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
            نظرة شاملة على مشهد الاتصالات العالمي والتقنيات واتجاهات السوق
          </p>
        </motion.div>

        {/* Global Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {globalStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
            >
              <Card className="relative border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <CardContent className="p-6 relative">
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2 font-medium">
                      {stat.title}
                    </div>
                    <Badge
                      variant="outline"
                      className="text-xs text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30"
                    >
                      {stat.change}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Regional Overview */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3">
              نظرة إقليمية
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <Card
                  className={`relative border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group ${
                    selectedRegion === region.id
                      ? "ring-2 ring-blue-500 dark:ring-blue-400"
                      : ""
                  }`}
                  onClick={() => setSelectedRegion(region.id)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-600/5 dark:from-blue-500/10 dark:to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader className="pb-4 relative">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                        {region.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg">
                        <div className="text-slate-600 dark:text-slate-400 text-xs mb-1">
                          المشتركين
                        </div>
                        <div className="font-bold text-lg text-slate-900 dark:text-white">
                          {region.subscribers}
                        </div>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg">
                        <div className="text-slate-600 dark:text-slate-400 text-xs mb-1">
                          تغطية 5G
                        </div>
                        <div className="font-bold text-lg text-slate-900 dark:text-white">
                          {region.coverage}
                        </div>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg">
                        <div className="text-slate-600 dark:text-slate-400 text-xs mb-1">
                          متوسط السرعة
                        </div>
                        <div className="font-bold text-lg text-slate-900 dark:text-white">
                          {region.avgSpeed}
                        </div>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg">
                        <div className="text-slate-600 dark:text-slate-400 text-xs mb-1">
                          الشركات
                        </div>
                        <div className="font-bold text-lg text-slate-900 dark:text-white">
                          {region.companies}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Major Companies */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3">
              مشغلي الاتصالات العالميين الرائدين
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorCompanies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <CardHeader
                    className={`bg-gradient-to-br ${company.color} text-white p-6 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full"
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                      transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                        {company.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold mb-1">
                          {company.name}
                        </CardTitle>
                        <p className="text-white/90 text-sm flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5" />
                          {company.country}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                        <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                          المشتركين
                        </span>
                        <span className="font-bold text-slate-900 dark:text-white">
                          {company.subscribers}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                        <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                          الإيرادات
                        </span>
                        <span className="font-bold text-slate-900 dark:text-white">
                          {company.revenue}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                        <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                          التقنية
                        </span>
                        <Badge
                          variant="outline"
                          className={`bg-gradient-to-r ${company.color} text-white border-0 shadow-sm`}
                        >
                          {company.technology}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3">
              التقنيات العالمية
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full" />
          </div>
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardHeader
                    className="cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-colors duration-200"
                    onClick={() => toggleCard(tech.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-5">
                        <motion.div
                          className="w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-600 rounded-2xl flex items-center justify-center text-white shadow-xl"
                          whileHover={{ rotate: 5, scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Activity className="h-10 w-10" />
                        </motion.div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            {tech.name}
                          </CardTitle>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                            {tech.description}
                          </p>
                          <Badge className="mt-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 shadow-sm">
                            الاعتماد العالمي: {tech.adoption}
                          </Badge>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedCard === tech.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-7 w-7 text-slate-400 dark:text-slate-500" />
                      </motion.div>
                    </div>
                  </CardHeader>
                  <AnimatePresence>
                    {expandedCard === tech.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardContent className="pt-0 pb-8">
                          <div className="grid md:grid-cols-2 gap-8 mt-4">
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl">
                              <h4 className="font-bold text-lg mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                                <Signal className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                الميزات الرئيسية
                              </h4>
                              <div className="space-y-3">
                                {tech.features.map((feature, idx) => (
                                  <motion.div
                                    key={idx}
                                    className="flex items-start gap-3 group"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * idx }}
                                  >
                                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                                    <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                      {feature}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl">
                              <h4 className="font-bold text-lg mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                                <Antenna className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                                الاعتماد الإقليمي
                              </h4>
                              <div className="space-y-4">
                                {Object.entries(tech.regions).map(
                                  ([region, percentage], idx) => (
                                    <motion.div
                                      key={region}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.05 * idx }}
                                    >
                                      <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                          {region}
                                        </span>
                                        <span className="text-sm font-bold text-slate-900 dark:text-white">
                                          {percentage}
                                        </span>
                                      </div>
                                      <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                        <motion.div
                                          className="h-3 bg-gradient-to-r from-blue-500 via-indigo-600 to-violet-600 rounded-full"
                                          initial={{ width: 0 }}
                                          animate={{ width: percentage }}
                                          transition={{
                                            duration: 0.8,
                                            delay: 0.1 * idx,
                                          }}
                                        />
                                      </div>
                                    </motion.div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Innovations */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3">
              الابتكارات المستقبلية
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full group">
                  <div
                    className={`${innovation.color} p-8 text-white relative overflow-hidden h-full flex flex-col`}
                  >
                    <motion.div
                      className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full"
                      animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 0] }}
                      transition={{
                        duration: 15,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                    <motion.div
                      className="absolute -left-10 -bottom-10 w-40 h-40 bg-black/10 rounded-full"
                      animate={{ scale: [1, 1.2, 1], rotate: [0, -180, 0] }}
                      transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                    <div className="relative z-10 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold mb-3 group-hover:scale-105 transition-transform">
                        {innovation.title}
                      </h3>
                      <p className="text-white/95 text-sm mb-6 leading-relaxed flex-1">
                        {innovation.description}
                      </p>
                      <div className="flex justify-between items-center pt-4 border-t border-white/20">
                        <Badge
                          variant="secondary"
                          className="bg-white/25 hover:bg-white/35 text-white border-white/30 backdrop-blur-sm font-medium"
                        >
                          {innovation.timeline}
                        </Badge>
                        <span className="text-xs font-bold uppercase tracking-wider">
                          {innovation.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 overflow-hidden relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-600/10"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
            />
            <CardContent className="p-12 md:p-16 relative">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-5 text-slate-900 dark:text-white">
                  اتصل بالشبكة العالمية
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                  استكشف الفرص في سوق الاتصالات العالمية وابق في المقدمة مع
                  الابتكارات التكنولوجية التي تشكل عالمنا المتصل.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg font-semibold"
                  >
                    تحليل السوق
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-semibold bg-transparent"
                  >
                    اتجاهات التكنولوجيا
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-semibold bg-transparent"
                  >
                    رؤى الصناعة
                  </Button>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
