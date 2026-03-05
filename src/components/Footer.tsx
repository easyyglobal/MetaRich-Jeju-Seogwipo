import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-white font-bold text-xl">메타리치 서귀포</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              제주 서귀포 지역 고객님들의 든든한 자산관리 파트너. 
              보험을 넘어 당신의 인생을 함께 설계합니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">빠른 링크</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">지점 소개</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">서비스 안내</Link></li>
              <li><Link to="/process" className="hover:text-white transition-colors">상담 프로세스</Link></li>
              <li><Link to="/apply" className="hover:text-white transition-colors">상담 신청</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">고객 지원</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/process" className="hover:text-white transition-colors">자주 묻는 질문</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">연락처</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
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

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2024 메타리치 제주 서귀포지점. All rights reserved.
          </p>
          <p className="text-gray-500 text-[10px] text-center md:text-right">
            본 사이트는 메타리치 서귀포지점의 개별 홍보 페이지이며, 보험계약 체결 전 상품설명서 및 약관을 반드시 확인하시기 바랍니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
