import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, PieChart, FileText, Building2, Briefcase, GraduationCap } from 'lucide-react';
import { cn } from '@/src/utils/cn';
import { useLocation } from 'react-router-dom';

const services = [
  {
    id: 'analysis',
    icon: <Search className="text-primary" />,
    title: '정밀 보장 분석 및 컨설팅',
    desc: '데이터 기반의 객관적인 지표를 통해 현재의 보장 자산을 정밀하게 분석하고, 미래의 리스크를 전략적으로 재구성합니다.',
    details: [
      '전 제휴 보험사 통합 증권 분석',
      '중복 보장 필터링 및 비용 효율화',
      '생애 주기별 맞춤형 리스크 모델링',
      '합리적인 보험료 구조 재설계'
    ]
  },
  {
    id: 'asset',
    icon: <PieChart className="text-secondary" />,
    title: '홀리스틱 자산 관리 솔루션',
    desc: '단순한 보험 설계를 넘어 은퇴, 세무, 투자 등 고객의 전 생애를 아우르는 통합적인 재무 포트폴리오를 제안합니다.',
    details: [
      '목적 자금 마련을 위한 전략적 자산 배분',
      '안정적인 노후를 위한 은퇴 소득 설계',
      '상속 및 증여를 고려한 자산 이전 상담',
      '절세 전략을 포함한 종합 재무 플랜'
    ]
  },
  {
    id: 'claim',
    icon: <FileText className="text-primary" />,
    title: '고객 권익 보호 및 청구 지원',
    desc: '복잡한 보험금 청구 과정에서 고객의 정당한 권리를 지키기 위해 전문가의 세심한 가이드와 행정 지원을 제공합니다.',
    details: [
      '청구 누락 방지를 위한 보장 내역 검토',
      '보험사별 복잡한 행정 절차 가이드',
      '미지급 사례 분석 및 재청구 지원',
      '전문가 네트워크를 통한 자문 서비스'
    ]
  }
];

const specialProjects = [
  {
    id: 'b2b',
    title: '기업 리스크 매니지먼트',
    content: '임직원의 복지를 넘어 기업의 지속 가능성을 위한 전략적 보험 솔루션을 제공합니다. 서귀포 지역 기업 환경에 최적화된 리스크 관리 시스템을 구축해 드립니다.'
  },
  {
    id: 'edu',
    title: '프라이빗 금융 에듀케이션',
    content: '지역 사회의 금융 문해력 향상을 위해 깊이 있는 경제 지식과 올바른 금융 가치관을 공유합니다. 기초 상식부터 전문 투자 전략까지 맞춤형 세미나를 운영합니다.'
  },
  {
    id: 'local',
    title: '제주 로컬 인사이트',
    content: '제주도민의 라이프스타일과 환경적 특성을 반영한 지역 밀착형 금융 정보를 가장 빠르게 전달합니다. 섬 지역 특화 담보 및 혜택을 정밀하게 안내합니다.'
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
    <div className="py-32">
      {/* Header */}
      <section className="bg-light-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">서비스 안내</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            메타리치 서귀포지점은 고객님의 더 나은 내일을 위해 <br className="hidden md:block" />
            다양하고 전문적인 금융 서비스를 제공합니다.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 card-hover">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">{service.desc}</p>
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
