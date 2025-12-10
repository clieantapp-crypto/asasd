"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Smartphone,
  CreditCard,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

export default function ZainPaymentForm({ setShow, setStepNumber }: any) {
  const [phone, setPhone] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [amount, setAmount] = useState("6.00");
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("bill");

  const renderAmountSelection = () =>
    phone.length === 8 &&
    !phoneError && (
      <div className="space-y-3 animate-in fade-in-50 slide-in-from-top-2 duration-300">
        <Label className="text-sm font-semibold text-slate-800">
          {activeTab === "bill"
            ? "اختر مبلغ الفاتورة"
            : "اختر باقة إعادة التعبئة"}
        </Label>
        <div className="w-full">
          <Select key={selectedAmount} onValueChange={handleAmountSelect}>
            <SelectTrigger className="h-14 text-right border-2 border-slate-200 hover:border-primary transition-all duration-200 focus:ring-2 focus:ring-primary/20">
              <div className="text-base font-semibold flex items-center gap-2">
                <span className="text-primary">{selectedAmount || 6}.000</span>
                <span className="text-sm opacity-70">د.ك</span>
              </div>
            </SelectTrigger>
            <SelectContent>
              {currentAmounts.map((value) => (
                <SelectItem
                  key={value}
                  value={value.toString()}
                  className="text-right"
                >
                  <div className="flex items-center gap-2 justify-end">
                    <span className="font-bold text-base">{value}.000</span>
                    <span className="text-sm opacity-70">د.ك</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    );

  useEffect(() => {
    localStorage.setItem("amount", amount);
  }, [amount]);

  useEffect(() => {
    if (phone && (phone.length !== 8 || !/^\d+$/.test(phone))) {
      setPhoneError("يجب أن يتكون رقم الهاتف من 8 أرقام صحيحة.");
    } else {
      setPhoneError("");
    }
  }, [phone]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length <= 8) {
      setPhone(value);
    }
  };

  const handleAmountSelect = (value: string) => {
    setSelectedAmount(value);
    localStorage.setItem("amount", value);
    setAmount(value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    try {
      // Simulate submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStepNumber(2);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid =
    phone.length === 8 &&
    !phoneError &&
    termsAccepted &&
    Number.parseInt(amount) > 0;

  const billAmounts = ["6", "10", "15", "20", "30", "50"];
  const rechargeAmounts = ["2", "5", "10", "15", "20", "30"];
  const currentAmounts = activeTab === "bill" ? billAmounts : rechargeAmounts;

  const renderPhoneNumberInput = () => (
    <div className="space-y-3">
      <Label className="text-sm font-semibold text-slate-800 flex items-center justify-between">
        <span>رقم الهاتف</span>
        <Badge
          variant="outline"
          className="text-xs font-medium border-primary/50 text-primary bg-primary/5"
        >
          مطلوب
        </Badge>
      </Label>
      <div className="relative">
        <Input
          type="tel"
          placeholder="XXXXXXXX"
          value={phone}
          onChange={handlePhoneChange}
          maxLength={8}
          className={`h-14 text-lg font-mono bg-white border-2 focus:ring-2 transition-all duration-200 placeholder:text-slate-300 text-right pr-12
            ${
              phoneError && phone.length > 0
                ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                : phone.length === 8 && !phoneError
                ? "border-green-500 focus:border-green-600 focus:ring-green-500/20"
                : "border-slate-200 focus:border-primary focus:ring-primary/20"
            }`}
          dir="rtl"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <Smartphone className="w-5 h-5 text-slate-400" />
        </div>
        {phone.length === 8 && !phoneError && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 animate-in zoom-in-50 duration-200">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
        )}
        {phoneError && phone.length > 0 && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 animate-in zoom-in-50 duration-200">
            <AlertCircle className="w-5 h-5 text-red-500" />
          </div>
        )}
      </div>
      {phoneError && phone.length > 0 && (
        <div className="flex items-center gap-2 text-sm text-red-600 animate-in slide-in-from-top-1 duration-200">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <p>{phoneError}</p>
        </div>
      )}
    </div>
  );

  const renderTermsAndConditions = () => (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-xl p-5 border border-slate-200/80 transition-all duration-200 hover:border-primary/30">
      <div className="flex items-start gap-4">
        <Checkbox
          id="terms"
          checked={termsAccepted}
          onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
          className="mt-1 data-[state=checked]:bg-primary data-[state=checked]:border-primary border-slate-300 transition-all"
        />
        <div className="space-y-2">
          <Label
            htmlFor="terms"
            className="text-sm font-semibold cursor-pointer text-slate-800 hover:text-primary transition-colors leading-relaxed"
          >
            أوافق على الشروط والأحكام
          </Label>
          <p className="text-xs text-slate-600 leading-relaxed">
            بالمتابعة، أنت توافق على شروط وأحكام الخدمة الخاصة بنا وسياسة
            الخصوصية.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100/50">
      <header className="bg-gradient-to-r from-primary via-primary to-primary/90 shadow-lg shadow-primary/10">
        <div className="max-w-2xl mx-auto px-6 py-6">
          <div className="flex items-center justify-center">
            <img
              src="/top.webp"
              alt="Zain Logo"
              className="h-12 object-contain"
            />
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-200/50">
            <div className="grid grid-cols-2 gap-0 p-1.5 bg-slate-100 m-4 rounded-xl">
              <button
                type="button"
                onClick={() => setActiveTab("bill")}
                className={`py-4 px-6 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  activeTab === "bill"
                    ? "bg-white text-primary shadow-md shadow-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                دفع الفاتورة
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("ess")}
                className={`py-4 px-6 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  activeTab === "ess"
                    ? "bg-white text-primary shadow-md shadow-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                إعادة تعبئة eeZee
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-slate-800 mb-1 text-right">
                  أود أن أعيد التعبئة لـ
                </h2>
                <p className="text-sm text-slate-600 text-right">
                  أدخل رقم الهاتف واختر المبلغ للمتابعة
                </p>
              </div>

              {renderPhoneNumberInput()}

              {renderAmountSelection()}

              {phone.length === 8 && !phoneError && (
                <div className="text-center animate-in fade-in-50 duration-300">
                  <button
                    type="button"
                    className="text-sm text-primary hover:text-primary/80 font-medium transition-colors inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled
                  >
                    <span className="text-lg">+</span>
                    <span>أضف رقم آخر</span>
                  </button>
                </div>
              )}

              {phone.length === 8 && !phoneError && selectedAmount && (
                <div className="animate-in fade-in-50 slide-in-from-top-2 duration-300">
                  {renderTermsAndConditions()}
                </div>
              )}

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-xs text-slate-500">
                    الملخص
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-slate-700">
                    الإجمالي
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">
                      {Number.parseFloat(amount).toFixed(3)}
                    </span>
                    <span className="text-sm text-slate-600 font-medium">
                      د.ك
                    </span>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                disabled={!isFormValid || isLoading}
                className="w-full h-14 text-base font-bold rounded-xl bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 disabled:shadow-none"
              >
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>جاري المعالجة...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5" />
                    <span>أعد التعبئة الآن</span>
                  </div>
                )}
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
                <Shield className="w-4 h-4" />
                <span>معاملة آمنة ومشفرة</span>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
