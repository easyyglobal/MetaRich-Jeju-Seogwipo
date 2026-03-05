import { motion } from 'motion/react';
import { Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CorporateInsurance() {
  return (
    <div className="py-32">
      <section className="relative py-24 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/corporate-hero.jpg" alt="Building" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1 bg-primary/20 text-primary-light text-xs font-bold rounded-full mb-6 border border-primary/30">
              CORPORATE SOLUTIONS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">기업 및 단체 보험 솔루션</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              임직원의 복지부터 기업의 리스크 관리까지, <br />
              서귀포 지역 비즈니스 환경에 최적화된 단체 보험을 제안합니다.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">왜 메타리치 단체보험인가요?</h2>
              <div className="space-y-6">
                {[
                  { title: "맞춤형 설계", desc: "업종별 특성에 맞는 위험 요소를 분석하여 최적의 담보를 구성합니다." },
                  { title: "비용 효율성", desc: "단체 할인을 통해 개별 가입보다 훨씬 저렴한 보험료로 운영 가능합니다." },
                  { title: "간편한 관리", desc: "임직원 입/퇴사에 따른 배서 업무를 지점에서 전담하여 관리해 드립니다." },
                  { title: "복지 증진", desc: "탄탄한 보장으로 임직원의 애사심과 업무 몰입도를 높일 수 있습니다." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img src="/images/corporate-office.jpg" alt="Office" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-8 rounded-2xl shadow-xl max-w-xs">
                <Building2 className="text-primary mb-4" size={40} />
                <p className="font-bold text-slate-900">서귀포 지역 50+ 기업이 선택한 파트너</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">상담 및 견적 요청</h2>
          <div className="glass p-10 rounded-3xl border-slate-200">
            <p className="text-slate-600 mb-8">
              기업 규모와 업종에 맞는 최적의 견적서를 24시간 이내에 발송해 드립니다.
            </p>
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 gradient-primary text-white px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
            >
              기업 상담 신청하기 <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
