"use client";

import { FbIcon, InstaIcon, WhatsappIcon } from "@/components/svg";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail } from "lucide-react";

function Header() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params.locale;

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-block mb-3">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-1 w-6 rounded-full bg-yellow-400"></div>
              <span className="text-yellow-600 font-medium">Get in Touch</span>
              <div className="h-1 w-6 rounded-full bg-yellow-400"></div>
            </div>
          </div>
          <h1
            className={`text-4xl font-serif font-bold mb-4 ${locale === "en" ? "font-playwrite" : "font-georgian"}`}
          >
            {t("cottageLemons")}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to answer any questions you might have about our cottages
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-yellow-100 p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {t("address")}
                  </h3>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/dir/?api=1&destination=41.643173265504%2C42.011096477509"
                    className="mt-1 text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    {t("addressItem")}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {t("phone")}
                  </h3>
                  <div className="mt-1 space-y-1">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="tel:+995595912296"
                      className="block text-gray-600 hover:text-yellow-600 transition-colors"
                    >
                      +995 595 912 296
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="tel:+995595912296"
                      className="block text-gray-600 hover:text-yellow-600 transition-colors"
                    >
                      +995 595 912 296
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {t("email")}
                  </h3>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:cottagelemons@gmail.com"
                    className="mt-1 text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    cottagelemons@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                    className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 hover:bg-yellow-200 transition-colors"
                  >
                    <FbIcon className="h-5 w-5" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                    className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 hover:bg-yellow-200 transition-colors"
                  >
                    <InstaIcon className="h-5 w-5" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                    className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 hover:bg-yellow-200 transition-colors"
                  >
                    <WhatsappIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
