import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 flex items-center justify-center group-hover:rotate-12 transition-transform">
              <img 
                src="/images/logo.png" // 이 부분을 실제 파일 경로로 수정하세요!
                alt="메타리치 로고" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
              <span className="text-white font-bold text-xl tracking-tight">메타리치 서귀포</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              제주 서귀포 지역 고객님들의 든든한 자산관리 파트너. 
              보험을 넘어 당신의 인생을 함께 설계합니다.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/metarich_jeju?igsh=MXZkeWp1MThxZHc5OA==" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">빠른 링크</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">지점 소개</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">서비스 안내</Link></li>
              <li><Link to="/process" className="hover:text-white transition-colors">상담 프로세스</Link></li>
              <li><Link to="/apply" className="hover:text-white transition-colors">상담 신청</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">금융소비자보호</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/protection/regulations" className="hover:text-white transition-colors">금융소비자보호규정</Link></li>
              <li><Link to="/protection/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link></li>
              <li><Link to="/protection/certificate" className="hover:text-white transition-colors">보험대리점등록증</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">연락처</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>제주특별자치도 서귀포시 중앙로 (상세주소는 지점 정보에 따름)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>064-XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>contact@metarich-jeju.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 법적 고지 사항 (금소법 준수) */}
        <div className="border-t border-slate-800 pt-10 pb-8">
          <div className="bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-700/50">
            <div className="flex items-center gap-2 mb-4 text-slate-200">
              <ShieldCheck size={18} className="text-secondary" />
              <span className="font-bold text-sm">보험대리점 업무광고 필수 고지사항</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-[11px] md:text-xs text-slate-400 leading-relaxed">
              <div className="space-y-2">
                <p>• 보험대리점명: 메타리치 (대리점 등록번호: 제2024030000호)</p>
                <p>• 금융소비자는 해당 상품에 대하여 충분한 설명을 받을 권리가 있으며, 그 설명을 이해한 후 거래하시기 바랍니다.</p>
                <p>• 보험계약 체결 전 상품설명서 및 약관을 반드시 읽어보시기 바랍니다.</p>
              </div>
              <div className="space-y-2">
                <p>• 기존 보험계약을 해지하고 새로운 보험계약을 체결하는 경우 보험인수가 거절되거나 보험료가 인상될 수 있으며, 보장내용이 달라질 수 있습니다.</p>
                <p>• 본 광고는 광고심의기준을 준수하였으며, 유효기간은 심의일로부터 1년입니다.</p>
                <p className="text-slate-500 mt-2">준법감시인 심의필 제2026-0000호 (2026.03.01 ~ 2027.02.28)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[11px]">
          <p> </p>
          <p>© 2026 메타리치 제주 서귀포지점. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}