import { motion } from 'motion/react';
import { Award, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Certificate() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">보험대리점 등록증</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              메타리치는 법규를 준수하며 정식 등록된 전문 보험대리점입니다. <br className="hidden md:block" />
              투명한 정보 공개로 고객님의 신뢰에 보답하겠습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-8">대리점 등록 정보</h2>
              <div className="space-y-6">
                {[
                  { label: "대리점명", value: "메타리치 (MetaRich)" },
                  { label: "등록번호", value: "제2024030000호" },
                  { label: "등록일자", value: "2024년 03월 01일" },
                  { label: "대표이사", value: "OOO (본사 기준)" },
                  { label: "본사 소재지", value: "서울특별시 서초구 ..." }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between py-4 border-b border-slate-100">
                    <span className="text-slate-500 font-medium">{item.label}</span>
                    <span className="text-slate-900 font-bold">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="text-primary" />
                  <h4 className="font-bold">정식 등록 여부 확인</h4>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  보험대리점의 정식 등록 여부는 생명보험협회 또는 손해보험협회 홈페이지의 '모집종사자 조회' 메뉴를 통해 누구나 직접 확인하실 수 있습니다.
                </p>
                <a 
                  href="https://meta-on.kr/#/inquiry" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
                >
                  모집종사자 통합조회 바로가기 <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white p-4 rounded-[2rem] shadow-2xl border border-slate-100">
                <div className="aspect-[3/4] bg-slate-100 rounded-[1.5rem] flex flex-col items-center justify-center border-2 border-dashed border-slate-200">
                  <Award size={64} className="text-slate-300 mb-4" />
                  <p className="text-slate-400 font-medium">등록증 이미지 준비 중</p>
                  <p className="text-slate-300 text-xs mt-2">(실제 등록증 스캔본이 배치될 영역입니다)</p>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-xs text-slate-400">※ 위 이미지는 예시이며, 실제 등록증은 지점 내 비치되어 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
