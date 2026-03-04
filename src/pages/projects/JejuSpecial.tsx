import { motion } from 'motion/react';
import { Map, Palmtree, Anchor, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function JejuSpecial() {
  return (
    <div>
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/jeju-special-hero.jpg" alt="Jeju Forest" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">제주 특화 사업 안내</h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              제주도민의 삶과 환경을 가장 잘 이해하는 메타리치 서귀포지점만의 <br />
              지역 밀착형 특화 서비스를 소개합니다.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                icon: <Palmtree className="text-emerald-500" size={48} />,
                title: "농/어업 리스크 관리",
                desc: "제주의 주요 산업인 농업과 어업 종사자분들을 위한 특화 재해 보험 및 리스크 관리 솔루션을 제공합니다.",
                image: "/images/jeju-farming.jpg"
              },
              {
                icon: <Anchor className="text-blue-500" size={48} />,
                title: "제주 특화 담보 안내",
                desc: "강풍, 태풍 등 제주의 기후 특성을 고려한 화재보험 특약 및 시설물 보험 정보를 가장 정확하게 안내합니다.",
                image: "/images/jeju-fishing.jpg"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="h-64 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-10">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8">{item.desc}</p>
                  <Link to="/apply" className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                    상담 신청하기 <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Map className="text-emerald-600 mx-auto mb-8" size={64} />
          <h2 className="text-3xl font-bold mb-6">제주도민을 위한 가장 가까운 파트너</h2>
          <p className="text-slate-600 text-lg mb-10">
            우리는 단순히 보험을 파는 것이 아니라, 제주의 가치를 지키는 일을 합니다. <br />
            지역 사회와 상생하는 메타리치 서귀포지점이 되겠습니다.
          </p>
          <Link
            to="/apply"
            className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-emerald-700 transition-all"
          >
            지역 특화 상담 신청
          </Link>
        </div>
      </section>
    </div>
  );
}
