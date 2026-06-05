"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "무료 체험은 어떻게 진행되나요?",
    answer: "가입 후 14일 동안 Pro 플랜의 모든 기능을 무료로 이용하실 수 있습니다. 결제 정보는 필요하지 않습니다.",
  },
  {
    question: "언제든지 구독을 취소할 수 있나요?",
    answer: "네, 설정 페이지에서 언제든지 구독을 취소할 수 있습니다. 취소하더라도 남은 결제 기간 동안은 계속 서비스를 이용할 수 있습니다.",
  },
  {
    question: "제 데이터는 안전한가요?",
    answer: "최고 수준의 암호화 기술을 적용하여 고객님의 데이터를 안전하게 보호하고 있습니다. 데이터는 외부에 절대 공유되지 않습니다.",
  },
  {
    question: "환불이 가능합니까?",
    answer: "결제 후 7일 이내에 서비스에 만족하지 않으시면 전액 환불해 드립니다.",
  },
  {
    question: "어떤 결제 수단을 지원하나요?",
    answer: "모든 주요 신용카드 및 체크카드를 지원합니다.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-lg font-medium text-gray-900">{faq.question}</span>
            <span className="ml-6 flex-shrink-0 text-gray-400">
              {openIndex === index ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
            </span>
          </button>
          {openIndex === index && (
            <div className="pb-6 pr-12">
              <p className="text-base text-gray-500">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
