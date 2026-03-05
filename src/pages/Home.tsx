import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, TrendingUp, HeartHandshake, CheckCircle2, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/utils/cn';

const testimonials = [
  {
    name: "김*희 고객님",
    age: "40대 주부",
    content: "매달 나가는 보험료가 부담스러워 상담을 신청했는데, 중복된 보장을 정리해주셔서 너무 만족스럽네요. 설명도 너무 친절하셔서 믿음이 갑니다.",
    rating: 5
  },
  {
    name: "이*준 고객님",
    age: "30대 직장인",
    content: "유튜브 보고 혼자 가입했던 보험들이 제게는 맞지 않았단 걸 알게 됐네요. 제 상황에 딱 맞는 암 보험으로 준비할 수 있게 도움주셔서 이제야 안심이 됩니다.",
    rating: 5
  },
  {
    name: "박*수 고객님",
    age: "50대 자영업자",
    content: "서귀포 지역이라 직접 찾아오셔서 상담해주시는 게 너무 좋았습니다. 작은 부분들 까지도 세심히 말씀해주셔서 정말 큰 도움이 됐어요.",
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-jeju.jpg"
            alt="Jeju Landscape"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-white"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 border-white/30"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-slate-900 text-xs font-bold tracking-widest uppercase">
                Metarich Jeju Seogwipo
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight drop-shadow-sm">
              보험을 넘어 <br />
              <span className="text-gradient">당신의 인생을</span> <br />
              설계합니다.
            </h1>
            
            <p className="text-xl text-slate-200 mb-12 leading-relaxed max-w-xl drop-shadow-sm">
              단순한 상품 판매가 아닌, 데이터 기반의 정밀 분석으로 
              고객님의 생애 주기에 최적화된 가치를 제안합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/apply"
                className="gradient-primary text-white px-10 py-5 rounded-2xl text-lg font-bold hover:shadow-[0_20px_40px_-10px_rgba(0,96,174,0.4)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
              >
                정밀 보장분석 신청하기
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="glass text-slate-900 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white transition-all flex items-center justify-center border-slate-200"
              >
                지점 전문성 확인하기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                우리는 <span className="text-primary">자산관리의 본질</span>에 <br /> 집중합니다
              </h2>
              <p className="text-slate-500 text-lg">
                메타리치 서귀포지점은 고객의 현재와 미래를 잇는 가장 견고한 다리가 되어드립니다.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 rounded-full border border-slate-200 flex items-center justify-center animate-soft-bounce">
                <ArrowRight className="text-slate-300 rotate-45" size={32} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <ShieldCheck className="text-primary" size={32} />,
                title: "정밀 보장 분석",
                desc: "중복된 보험료는 줄이고, 부족한 보장은 채우는 과학적인 리모델링 서비스를 제공합니다."
              },
              {
                icon: <TrendingUp className="text-secondary" size={32} />,
                title: "종합 자산 관리",
                desc: "보험을 넘어 연금, 저축, 투자까지 고려한 생애 주기별 맞춤 포트폴리오를 제안합니다."
              },
              {
                icon: <HeartHandshake className="text-primary" size={32} />,
                title: "지속 가능한 케어",
                desc: "가입이 끝이 아닙니다. 제주 서귀포 지역 밀착형 서비스로 평생의 파트너가 되어 드립니다."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 card-hover"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Point & Solution */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative rounded-[3rem] mx-4 md:mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-[1.2]">
                매달 나가는 보험료, <br />
                <span className="text-secondary">제대로 보장</span>받고 <br /> 계신가요?
              </h2>
              <div className="space-y-8">
                {[
                  "나도 모르게 중복 가입된 보험료 낭비",
                  "정작 큰 병에 걸렸을 때 부족한 진단비",
                  "시대에 뒤떨어진 옛날 보험의 한계",
                  "복잡해서 포기하게 되는 보험금 청구"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                      <CheckCircle2 className="text-white" size={20} />
                    </div>
                    <span className="text-xl text-slate-300 font-medium">{text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-16">
                <Link
                  to="/apply"
                  className="inline-flex items-center gap-3 gradient-secondary text-white px-10 py-5 rounded-2xl text-lg font-bold hover:shadow-[0_20px_40px_-10px_rgba(244,129,31,0.4)] hover:-translate-y-1 transition-all"
                >
                  내 보험 정밀 분석 시작하기 <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="glass-dark p-10 rounded-[3rem] border-white/10 shadow-2xl">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex flex-col">
                    <h4 className="font-bold text-2xl mb-1">보장 분석 리포트</h4>
                    <span className="text-slate-400 text-sm">AI 정밀 분석 시스템 v2.0</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-secondary animate-ping"></div>
                  </div>
                </div>
                
                <div className="space-y-10">
                  {[
                    { label: "암 보장", value: 85, color: "bg-secondary" },
                    { label: "뇌/심장 질환", value: 40, color: "bg-red-500" },
                    { label: "실손 의료비", value: 95, color: "bg-blue-500" }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-3">
                        <span className="font-bold text-slate-300">{stat.label}</span>
                        <span className={cn("font-bold", stat.value < 50 ? "text-red-400" : "text-white")}>
                          {stat.value}% {stat.value < 50 ? "부족" : "충족"}
                        </span>
                      </div>
                      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }} 
                          whileInView={{ width: `${stat.value}%` }} 
                          transition={{ duration: 1.5, delay: i * 0.2, ease: "circOut" }} 
                          className={cn("h-full rounded-full", stat.color)}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-sm text-slate-400 italic leading-relaxed">
                    "고객님의 경우 뇌혈관 질환 보장이 타 보장에 비해 현저히 낮게 분석되었습니다. 
                    기존 보험의 해지 없이 특약 추가만으로 보완이 가능합니다."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">고객님들이 증명하는 <br /> <span className="text-primary">서귀포지점의 가치</span></h2>
            <p className="text-slate-500 text-lg">실제 상담을 받으신 고객님들의 생생한 후기입니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] relative group hover:shadow-xl transition-all"
              >
                <div className="absolute -top-6 left-10 w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <Quote className="text-white" size={24} />
                </div>
                
                <div className="flex mb-6 mt-4">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} size={18} className="text-secondary fill-secondary" />
                  ))}
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-8 font-medium">
                  "{t.content}"
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-xs text-slate-400">{t.age}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick CTA Banner */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="gradient-primary rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden text-center"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100" stroke="white" fill="transparent" strokeWidth="0.5" />
                <path d="M0 80 C 30 20 60 20 100 80" stroke="white" fill="transparent" strokeWidth="0.5" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                당신의 보험, <br className="md:hidden" /> 전문가의 시선으로 <br className="hidden md:block" /> 다시 보세요
              </h3>
              <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
                단순한 가입 권유가 아닌, 데이터 기반의 정밀 분석 서비스를 제공합니다. 
                지금 바로 전문가 상담을 예약하세요.
              </p>
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 bg-white text-primary px-12 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                전문가 상담 예약하기 <ArrowRight size={24} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
