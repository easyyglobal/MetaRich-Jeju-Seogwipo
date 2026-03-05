import { motion } from 'motion/react';
import { Award, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Certificate() {
  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">보험대리점 등록증</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">메타리치는 법규를 준수하며 정식 등록된 전문 보험대리점입니다.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">대리점 등록 정보</h2>
            <div className="space-y-4 text-slate-600">
              <p>• 대리점명: 메타리치 (MetaRich)</p>
              <p>• 등록번호: 제2024030000호</p>
              <a href="https://meta-on.kr/#/inquiry" target="_blank" className="text-primary font-bold inline-flex items-center gap-1">정식 등록 여부 확인 <ExternalLink size={14} /></a>
            </div>
          </div>
          <div className="bg-slate-100 aspect-[3/4] rounded-3xl flex items-center justify-center text-slate-400 border-2 border-dashed border-slate-200">등록증 이미지 준비 중</div>
        </div>
      </section>
    </div>
  );
}