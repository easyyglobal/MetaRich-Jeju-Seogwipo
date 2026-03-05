import { motion } from 'motion/react';
import { ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export default function Regulations() {
  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">금융소비자보호규정</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              메타리치 서귀포지점은 금융소비자의 권익을 보호하고 건전한 금융 질서를 확립하기 위해 최선을 다합니다.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><ShieldCheck size={24} /></div>
                <h2 className="text-2xl font-bold">금융소비자보호 헌장</h2>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 leading-relaxed text-slate-600 space-y-4">
                <p>우리는 고객의 신뢰를 최우선 가치로 삼으며, 모든 업무 수행에 있어 금융소비자의 권익 보호를 위해 다음의 사항을 준수할 것을 약속합니다.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-primary mt-1 shrink-0" /><span>고객의 이익을 최우선으로 하며, 정직하고 성실하게 업무를 수행한다.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-primary mt-1 shrink-0" /><span>금융상품 판매 시 고객이 충분히 이해할 수 있도록 성실히 설명한다.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}