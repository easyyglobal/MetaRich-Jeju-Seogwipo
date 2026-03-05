import { motion } from 'motion/react';
import { Award, Users, Heart, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="py-32">
      {/* Hero */}
      <section className="bg-primary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            메타리치 제주 서귀포지점
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            우리는 단순한 보험 판매를 넘어, 고객의 전 생애 주기를 함께 고민하고 
            가장 가치 있는 자산 관리 솔루션을 제공합니다.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">OUR PHILOSOPHY</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">고객의 삶을 최우선으로 생각하는 <br className="hidden md:block" /> 정직한 금융 파트너</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                메타리치 서귀포지점은 제주 지역 사회의 일원으로서, 이웃들의 경제적 안정을 위해 존재합니다. 
                우리는 '강매'가 아닌 '컨설팅'을 지향하며, 고객이 이해하지 못하는 상품은 절대 권하지 않습니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Award className="text-secondary" />, title: "전문성", desc: "끊임없는 교육과 연구" },
                  { icon: <Users className="text-secondary" />, title: "신뢰", desc: "투명한 정보 공개" },
                  { icon: <Heart className="text-secondary" />, title: "진심", desc: "고객의 상황에 공감" },
                  { icon: <MapPin className="text-secondary" />, title: "지역 밀착", desc: "서귀포 지역 특화 케어" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-light-gray">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/about-team.jpg"
                alt="Team Meeting"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-secondary text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold mb-1">100%</p>
                <p className="text-sm font-medium">고객 중심 컨설팅 지향</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">메타리치 브랜드 소개</h2>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-8">
              메타리치는 'Meta(초월)'와 'Rich(풍요)'의 합성어로, 
              기존의 금융 서비스를 넘어 고객에게 진정한 삶의 풍요를 선사하겠다는 의지를 담고 있습니다. 
              전국적인 네트워크와 탄탄한 인프라를 바탕으로 최적의 금융 상품을 선별하여 제공합니다.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <p className="text-primary text-2xl font-bold">30+</p>
                <p className="text-gray-500 text-sm">제휴 보험사</p>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
              <div className="text-center">
                <p className="text-primary text-2xl font-bold">10,000+</p>
                <p className="text-gray-500 text-sm">누적 고객 수</p>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
              <div className="text-center">
                <p className="text-primary text-2xl font-bold">98%</p>
                <p className="text-gray-500 text-sm">고객 만족도</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
