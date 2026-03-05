import { motion } from 'motion/react';
import { Lock, Eye, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function Privacy() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 pt-32 pb-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">개인정보처리방침</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              고객님의 소중한 정보를 안전하게 보호하기 위해 <br className="hidden md:block" />
              최선의 노력을 다하고 있습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-12">
              <p className="text-slate-600 leading-relaxed">
                메타리치 서귀포지점(이하 '회사')은 고객의 개인정보를 중요시하며, "개인정보 보호법" 등 관련 법령을 준수하고 있습니다. 
                회사는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 
                개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Eye size={20} className="text-primary" />
                  1. 수집하는 개인정보의 항목
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  회사는 상담 신청, 서비스 제공 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
                </p>
                <ul className="text-sm text-slate-500 list-disc pl-5 space-y-1 mt-2">
                  <li>수집항목: 성명, 연락처, 연령대, 거주지역, 관심 분야 등</li>
                  <li>수집방법: 홈페이지 상담 신청 폼, 전화 상담 등</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Lock size={20} className="text-primary" />
                  2. 개인정보의 수집 및 이용목적
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
                </p>
                <ul className="text-sm text-slate-500 list-disc pl-5 space-y-1 mt-2">
                  <li>보험 보장 분석 및 재무 컨설팅 서비스 제공</li>
                  <li>상담 신청에 따른 본인 확인 및 안내 연락</li>
                  <li>지점 특별 사업 및 세미나 안내 (동의 시)</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <ShieldAlert size={20} className="text-primary" />
                  3. 개인정보의 보유 및 이용기간
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 
                  단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
                </p>
                <ul className="text-sm text-slate-500 list-disc pl-5 space-y-1 mt-2">
                  <li>보존 항목: 상담 신청 기록</li>
                  <li>보존 기간: 3년 (전자상거래 등에서의 소비자보호에 관한 법률)</li>
                </ul>
              </section>
            </div>

            <div className="mt-16 p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <p className="text-xs text-slate-500 leading-relaxed">
                본 방침은 2024년 3월 1일부터 시행됩니다. 내용의 추가, 삭제 및 수정이 있을 시에는 홈페이지를 통해 고지할 것입니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
