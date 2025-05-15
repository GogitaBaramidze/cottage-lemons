"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const { t } = useTranslation();

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("Sending your message...");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", `6d78adc2-031a-4faa-b6ff-18971eeb796a`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage("Your message has been sent successfully!");
        event.target.reset();
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="w-full py-12 bg-gradient-to-b from-yellow-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block mb-3">
              <div className="flex items-center justify-center space-x-2">
                <div className="h-1 w-6 rounded-full bg-yellow-400"></div>
                <span className="text-yellow-600 font-medium">
                  Send a Message
                </span>
                <div className="h-1 w-6 rounded-full bg-yellow-400"></div>
              </div>
            </div>
            <h2 className="text-3xl font-serif font-bold mb-4">
              {t("contactUs")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our cottages? Fill out the form below and
              we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-yellow-100 overflow-hidden">
            <form onSubmit={onSubmit} className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label
                    htmlFor="firstname"
                    className="text-sm font-medium text-gray-700"
                  >
                    {t("firstname")}*
                  </label>
                  <Input
                    id="firstname"
                    name="firstname"
                    className="border-gray-200 focus:border-yellow-400 focus:ring-yellow-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="lastname"
                    className="text-sm font-medium text-gray-700"
                  >
                    {t("lastname")}*
                  </label>
                  <Input
                    id="lastname"
                    name="lastname"
                    className="border-gray-200 focus:border-yellow-400 focus:ring-yellow-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    {t("emailChoose")}*
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    className="border-gray-200 focus:border-yellow-400 focus:ring-yellow-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700"
                  >
                    {t("phone")}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="border-gray-200 focus:border-yellow-400 focus:ring-yellow-400"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  {t("message")}*
                </label>
                <Textarea
                  id="message"
                  name="message"
                  className="min-h-[150px] border-gray-200 focus:border-yellow-400 focus:ring-yellow-400"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                {status !== "idle" && (
                  <div
                    className={`flex items-center ${
                      status === "success"
                        ? "text-green-600"
                        : status === "error"
                          ? "text-red-600"
                          : "text-yellow-600"
                    }`}
                  >
                    {status === "loading" && (
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    )}
                    {status === "success" && (
                      <CheckCircle className="h-5 w-5 mr-2" />
                    )}
                    {status === "error" && (
                      <AlertCircle className="h-5 w-5 mr-2" />
                    )}
                    <span>{message}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="ml-auto rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-black hover:from-yellow-500 hover:to-yellow-400 px-6 py-2 h-auto"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {t("send")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
