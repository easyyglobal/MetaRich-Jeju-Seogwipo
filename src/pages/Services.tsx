import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, PieChart, FileText, Building2, Briefcase, GraduationCap } from 'lucide-react';
import { cn } from '@/src/utils/cn';
import { useLocation } from 'react-router-dom';

const services = [
// ... (rest of the file remains same, just need to update the component logic)
  {
    id: 'analysis',
    icon: <Search className="text-primary" />,
    title: '보장 분석 및 리모델링',
    desc: '현재 가입된 보험의 보장 내용을 정밀 분석하여 불필요한 지출은 줄이고 부족한 보장은 보완합니다.',
    details: [
      '가입 보험 증권 전수 조사',
      '중복 보장 및 과잉 보험료 필터링',
      '가족력 및 라이프스타일 기반 보장 설계',
      '최적의 보험료 다이어트 제안'
    ]
  },
  {
    id: 'asset',
    icon: <PieChart className="text-secondary" />,
    title: '종합 자산 관리',
    desc: '단순 보험을 넘어 저축, 연금, 투자 등 고객의 재무 목표에 맞는 종합적인 포트폴리오를 구성합니다.',
    details: [
      '생애 주기별 재무 목표 설정',
      '은퇴 설계 및 노후 자금 준비',
      '자녀 교육 자금 및 목적 자금 마련',
      '세금 절감 전략 및 상속/증여 상담'
    ]
  },
  {
    id: 'claim',
    icon: <FileText className="text-primary" />,
    title: '보험금 청구 대행',
    desc: '복잡하고 까다로운 보험금 청구 절차를 전문가가 직접 도와드려 고객님의 권리를 찾아드립니다.',
    details: [
      '청구 서류 안내 및 검토',
      '보험사별 청구 프로세스 대행',
      '미지급 보험금 확인 및 재청구',
      '분쟁 발생 시 전문가 자문 지원'
    ]
  }
];

const specialProjects = [
  {
    id: 'b2b',
    title: '기업/단체 단체보험',
    content: '서귀포 지역 내 중소기업 및 단체를 위한 맞춤형 복지 보험 솔루션을 제공합니다. 임직원의 안전과 기업의 리스크 관리를 동시에 해결하세요.'
  },
  {
    id: 'edu',
    title: '금융 교육 세미나',
    content: '지역 주민들을 위한 찾아가는 금융 교실을 운영합니다. 기초 경제 상식부터 똑똑한 보험 가입 요령까지, 유익한 정보를 공유합니다.'
  },
  {
    id: 'local',
    title: '제주 특화 상품 안내',
    content: '제주도민의 생활 특성을 고려한 특화 담보 및 지역 밀착형 상품 정보를 가장 빠르게 안내해 드립니다.'
  }
];

export default function Services() {
  const location = useLocation();
  const [activeTab, setActiveTab] = React.useState('b2b');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab && specialProjects.some(p => p.id === tab)) {
      setActiveTab(tab);
    }
  }, [location]);

  return (
    <div >
      {/* Header */}
      <section className="bg-light-gray pt-[140px] md:pt-[180px] pb-[50px] md:pb-[100px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">서비스 안내</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            메타리치 서귀포지점은 고객님의 더 나은 내일을 위해 <br className="hidden md:block" />
            다양하고 전문적인 금융 서비스를 제공합니다.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="pt-[65px] md:py-24 pb-[65px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col p-8 md:p-10 pb-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 card-hover">
                <div className="w-12 md:w-16 h-12 md:h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 md:mb-8">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-500 mb-4 md:mb-8 md:leading-relaxed">{service.desc}</p>
                <ul className="space-y-3 mt-auto">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
