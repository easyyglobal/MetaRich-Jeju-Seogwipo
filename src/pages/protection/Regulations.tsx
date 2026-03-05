import { motion } from 'motion/react';
import { ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export default function Regulations() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 pt-[180px] pb-[100px] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100" stroke="white" fill="transparent" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">금융소비자보호규정</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              메타리치 서귀포지점은 금융소비자의 권익을 보호하고 <br className="hidden md:block" />
              건전한 금융 질서를 확립하기 위해 최선을 다합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="text-2xl font-bold">금융소비자보호 헌장</h2>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 leading-relaxed text-slate-600 space-y-4">
                <p>우리는 고객의 신뢰를 최우선 가치로 삼으며, 모든 업무 수행에 있어 금융소비자의 권익 보호를 위해 다음의 사항을 준수할 것을 약속합니다.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                    <span>고객의 이익을 최우선으로 하며, 정직하고 성실하게 업무를 수행한다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                    <span>금융상품 판매 시 고객이 충분히 이해할 수 있도록 성실히 설명한다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                    <span>고객의 정보를 소중히 관리하며, 법령에 정해진 목적 외에는 사용하지 않는다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                    <span>불건전 영업행위를 근절하고 건전한 금융 질서 확립에 앞장선다.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <FileText size={24} />
                </div>
                <h2 className="text-2xl font-bold">주요 내부통제 규정</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "적합성 원칙", desc: "고객의 재산상황, 가입목적 등을 고려하여 적합한 상품을 권유합니다." },
                  { title: "설명의무 준수", desc: "상품의 내용, 수익성, 위험성 등을 고객이 이해할 수 있도록 설명합니다." },
                  { title: "불공정행위 금지", desc: "우월적 지위를 이용한 부당한 권유나 강요 행위를 일체 금지합니다." },
                  { title: "민원 처리 절차", desc: "고객의 불편사항을 신속하고 공정하게 처리하기 위한 전담 창구를 운영합니다." }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <h4 className="font-bold mb-2 text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
