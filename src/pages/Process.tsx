import { motion, AnimatePresence } from 'motion/react';
import { ClipboardList, Search, FileCheck, Presentation, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react';

const steps = [
  {
    icon: <ClipboardList size={32} />,
    title: "상담 신청 및 접수",
    desc: "온라인 폼이나 전화를 통해 상담을 신청하시면 담당 전문가가 배정됩니다."
  },
  {
    icon: <Search size={32} />,
    title: "현황 파악 및 데이터 수집",
    desc: "고객님의 현재 보험 가입 내역과 재무 상태를 꼼꼼하게 파악합니다."
  },
  {
    icon: <FileCheck size={32} />,
    title: "정밀 분석 및 진단",
    desc: "수집된 데이터를 바탕으로 보장 공백과 비효율적인 지출을 분석합니다."
  },
  {
    icon: <Presentation size={32} />,
    title: "맞춤 솔루션 제안",
    desc: "분석 결과를 바탕으로 최적의 리모델링 및 자산관리 방안을 제시합니다."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "실행 및 사후 관리",
    desc: "제안된 내용을 실행하고, 주기적인 점검을 통해 지속적으로 관리해 드립니다."
  }
];

const faqs = [
  {
    question: "상담 비용이 발생하나요?",
    answer: "메타리치 서귀포지점의 정밀 보장 분석 및 상담 서비스는 지점 홍보 및 지역 사회 공헌의 일환으로 현재 별도의 비용 없이 제공되고 있습니다. 전문가의 고도화된 분석 리포트를 경험해 보세요."
  },
  {
    question: "기존 보험을 무조건 해지해야 하나요?",
    answer: "절대 아닙니다. 저희의 목표는 '해지'가 아닌 '최적화'입니다. 기존 보험 중 좋은 담보는 최대한 유지하고, 시대적 흐름이나 고객님의 상황 변화에 따라 비효율적인 부분만 정밀하게 조정하는 것을 원칙으로 합니다."
  },
  {
    question: "상담은 어디서 진행되나요?",
    answer: "고객님이 편하신 장소(자택, 카페 등)로 전문가가 직접 방문하거나, 저희 지점 사무실에서 진행 가능합니다. 비대면 상담도 지원합니다."
  },
  {
    question: "다른 지역에 살아도 신청 가능한가요?",
    answer: "저희는 제주 서귀포 지역 밀착형 서비스를 지향하지만, 제주도 전 지역 및 도외 지역 고객님들도 온라인/전화 상담을 통해 도움을 드릴 수 있습니다."
  }
];

export default function Process() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="pt-20">
      {/* Process Header */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">상담 프로세스</h1>
          <p className="text-gray-600">투명하고 체계적인 5단계 과정을 통해 최상의 솔루션을 약속합니다.</p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-white">
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
      <section className="py-24 bg-light-gray">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">자주 묻는 질문</h2>
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
