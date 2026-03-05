import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinancialEducation() {
  return (
    <div>
      <section className="relative  pt-[180px] pb-[100px] overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <span className="inline-block px-4 py-1 bg-white/20 text-white text-xs font-bold rounded-full mb-6 backdrop-blur-md">
              EDUCATION PROGRAM
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">찾아가는 금융 교육 세미나</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              어려운 경제, 복잡한 보험. <br />
              서귀포 주민들의 올바른 금융 생활을 위해 메타리치가 직접 찾아갑니다.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="text-primary" size={40} />,
                title: "기초 경제 상식",
                desc: "금리, 물가, 환율 등 실생활에 꼭 필요한 기초 경제 원리를 쉽게 설명해 드립니다."
              },
              {
                icon: <GraduationCap className="text-primary" size={40} />,
                title: "똑똑한 보험 가입",
                desc: "보험 용어부터 증권 분석 방법까지, 속지 않고 가입하는 노하우를 공유합니다."
              },
              {
                icon: <Users className="text-primary" size={40} />,
                title: "생애 주기별 설계",
                desc: "사회초년생부터 은퇴 준비 세대까지, 각 시기에 맞는 자산 관리 전략을 제안합니다."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-slate-50 border border-slate-100 transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-12 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">우리 단체/모임에서도 세미나가 가능한가요?</h2>
              <p className="text-slate-300">
                5인 이상의 소모임부터 대규모 단체까지, 서귀포 지역 어디든 신청 가능합니다. 
                교육 주제는 신청 단체의 성격에 맞춰 조정해 드립니다.
              </p>
            </div>
            <Link
              to="/apply"
              className="whitespace-nowrap bg-white text-primary px-10 py-4 rounded-full font-bold shadow-xl hover:bg-primary hover:text-white transition-all"
            >
              세미나 신청하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
