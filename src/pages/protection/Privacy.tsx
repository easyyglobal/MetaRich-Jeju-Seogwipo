import { motion } from 'motion/react';
import { Lock, Eye, ShieldAlert } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">개인정보처리방침</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">고객님의 소중한 정보를 안전하게 보호하기 위해 최선의 노력을 다하고 있습니다.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-12 text-slate-600 leading-relaxed">
            메타리치 서귀포지점은 고객의 개인정보를 중요시하며, "개인정보 보호법" 등 관련 법령을 준수하고 있습니다.
          </div>
          <div className="space-y-12">
            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Eye size={20} className="text-primary" />1. 수집하는 개인정보의 항목</h3>
              <p className="text-slate-500 text-sm">수집항목: 성명, 연락처, 연령대, 거주지역 등</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}