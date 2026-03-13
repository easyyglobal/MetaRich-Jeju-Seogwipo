import { motion, AnimatePresence } from 'motion/react';
import { ClipboardList, Search, FileCheck, Presentation, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react';

const steps = [
  {
    icon: <ClipboardList size={32} />,
    title: "전략적 상담 예약",
    desc: "단순한 접수를 넘어, 고객님의 니즈를 사전에 파악하여 최적의 전문가를 매칭하는 맞춤형 예약 프로세스입니다."
  },
  {
    icon: <Search size={32} />,
    title: "정밀 보장 자산 감사",
    desc: "고객이 보유한 금융 자산을 전문가의 시각으로 철저히 분석하여, 보장의 실효성과 리스크 관리 상태를 객관적으로 평가합니다."
  },
  {
    icon: <FileCheck size={32} />,
    title: "핵심 리스크 진단",
    desc: "현상을 넘어 보장 공백과 비효율적인 지출 구조를 날카롭게 진단하여, 전문적이고 전략적인 개선 지점을 도출합니다."
  },
  {
    icon: <Presentation size={32} />,
    title: "최적화 솔루션 브리핑",
    desc: "분석된 데이터를 기반으로 고객의 생애 주기에 맞춘 최적의 포트폴리오를 제안하며, 명확한 해결책을 제시합니다"
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "지속 가능한 파트너십 케어",
    desc: "실행 이후에도 급변하는 금융 시장에 맞춰 정기적으로 모니터링을 진행하며, 고객의 자산 가치를 지키는 동반자로서 끝까지 함께합니다."
  }
];

const faqs = [
  {
    question: "컨설팅 비용이 발생하나요?",
    answer: "메타리치 서귀포지점의 전문 컨설팅은 지역 사회의 올바른 금융 문화 정착을 위해 현재 무상으로 지원되고 있습니다. "
  },
  {
    question: "기존 계약을 반드시 조정해야 하나요?",
    answer: "아닙니다. 저희의 원칙은 '유지'를 통한 '최적화'입니다. 고객님께 유리한 기존 담보는 철저히 보호하며, 불필요한 비용이 발생하는 부분에 대해서만 전략적인 조정을 제안합니다."
  },
  {
    question: "상담은 어떤 방식으로 진행되나요?",
    answer: "고객님이 원하시는 장소로 방문하거나, 지점 내 프라이빗 상담실에서 진행됩니다."
  },
  {
    question: "서귀포 외 지역에서도 신청이 가능한가요?",
    answer: "제주 전 지역은 물론, 전국 어디서나 메타리치의 전문 서비스를 받으실 수 있습니다."
  }
];

export default function Process() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div>
      {/* Process Header */}
      <section className="bg-white pt-[140px] md:pt-[180px] pb-[50px] md:pb-[100px] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">상담 프로세스</h1>
          <p className="text-gray-600">투명하고 체계적인 5단계 과정을 통해 최적의 솔루션을 약속합니다.</p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mb-6 shadow-xl relative">
                    <span className="absolute -top-2 -left-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold border-4 border-white">
                      {i + 1}
                    </span>
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-light-gray">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">자주 묻는 질문</h2>
            <p className="text-gray-600">궁금하신 점을 미리 확인해 보세요.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900">{faq.question}</span>
                  {openFaq === i ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-400" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
