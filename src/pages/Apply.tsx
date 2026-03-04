import React from 'react';
import { motion } from 'motion/react';
import { useGoogleSheet } from '@/src/hooks/useGoogleSheet';
import { CheckCircle, Loader2, Shield } from 'lucide-react';
import { cn } from '@/src/utils/cn';

export default function Apply() {
  const { submitForm, loading, success, error } = useGoogleSheet();
  const [formData, setFormData] = React.useState({
    name: '',
    birth: '',
    phone: '',
    region: '',
    path: '인스타그램',
    recommender: '',
    agree: false
  });

  const recentApplications = [
    { name: '김*수', region: '서귀포시 대정읍', time: '3분 전', type: '보장분석' },
    { name: '이*영', region: '서귀포시 남원읍', time: '12분 전', type: '재무설계' },
    { name: '박*지', region: '제주시 노형동', time: '28분 전', type: '보장분석' },
    { name: '최*우', region: '서귀포시 성산읍', time: '1시간 전', type: '기업보험' },
    { name: '정*희', region: '서귀포시 서홍동', time: '2시간 전', type: '보장분석' },
    { name: '강*훈', region: '제주시 아라동', time: '3시간 전', type: '교육세미나' },
    { name: '윤*자', region: '서귀포시 중문동', time: '5시간 전', type: '보장분석' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      alert('개인정보 수집 및 이용에 동의해 주세요.');
      return;
    }
    submitForm(formData);
  };

  if (success) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-2xl font-bold mb-4">상담 신청 완료!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            신청해 주셔서 감사합니다. <br />
            영업일 기준 1~2일 내에 담당 전문가가 <br />
            순차적으로 연락드릴 예정입니다.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="w-full gradient-primary text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all"
          >
            홈으로 돌아가기
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">정밀 보장분석 및 진단 신청</h1>
          <p className="text-slate-500 text-lg">
            전문가의 정밀 분석을 통해 내 보험의 건강 상태를 확인해 보세요. <br className="hidden md:block" />
            데이터 기반의 객관적인 진단 리포트를 제공해 드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">성함</label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">생년월일</label>
                  <input
                    type="text"
                    required
                    placeholder="ex) 1900.00.00"
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                    value={formData.birth}
                    onChange={(e) => setFormData({ ...formData, birth: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">연락처</label>
                <input
                  type="tel"
                  required
                  placeholder="ex) 010-0000-0000"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">거주 지역</label>
                <input
                  type="text"
                  required
                  placeholder="ex) 00시 00구 00동"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">신청 경로</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['인스타그램', '블로그', '지인추천', '기타'].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setFormData({ ...formData, path: p })}
                        className={cn(
                          "py-3 rounded-xl text-sm font-bold transition-all border",
                          formData.path === p 
                            ? "bg-secondary text-white border-secondary shadow-md" 
                            : "bg-white text-slate-500 border-slate-200 hover:border-secondary/30"
                        )}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">추천자 (선택)</label>
                  <input
                    type="text"
                    placeholder="추천인이 있다면 성함을 적어주세요"
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                    value={formData.recommender}
                    onChange={(e) => setFormData({ ...formData, recommender: e.target.value })}
                  />
                </div>
              </div>

              <div className="pt-4">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield size={18} className="text-primary" />
                    <span className="text-sm font-bold text-slate-700">개인정보 수집 및 이용 동의 (필수)</span>
                  </div>
                  <div className="h-40 overflow-y-auto text-xs text-slate-500 leading-relaxed space-y-4 pr-2 custom-scrollbar">
                    <div>
                      <p className="font-bold text-slate-700 mb-1">1. 수집 및 이용 목적</p>
                      <p>• 서비스 신청 후 개별 연락 (서비스 안내, 관련 정보 전달)</p>
                      <p>• 서비스 관련 문의 응대 및 개선</p>
                      <p>• 고객님의 거주 지역 확인을 통한 지역별 통계 자료 활용</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 mb-1">2. 수집하는 개인정보 항목</p>
                      <p>• 필수 항목: 이름, 연락처(휴대폰), 생년월일, 거주 지역(시/도, 시/군/구)</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 mb-1">3. 개인정보의 처리 및 전달</p>
                      <p>수집된 개인정보는 메타리치 제주 서귀포지점에서 직접 관리하며, 운영 및 원활한 지원을 위해 메타리치 제주 서귀포지점 담당 부서로 안전하게 내부 전달됩니다. 「개인정보 보호법」상 제3자 제공에 해당하지 않습니다.</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 mb-1">4. 개인정보 보유 및 이용 기간</p>
                      <p>수집된 개인정보는 서비스 종료 후 1개월 이내 파기됩니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보존합니다.</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 mb-1">5. 동의 거부권 및 불이익 안내</p>
                      <p>위 개인정보 수집 및 이용에 동의하지 않으실 권리가 있습니다. 다만, 필수 항목에 동의하지 않으실 경우, 서비스 신청이 제한될 수 있음을 알려드립니다.</p>
                    </div>
                    <div className="pt-2 border-t border-slate-200">
                      <p className="font-bold text-slate-700 mb-1">(필수) 보험 상담 안내를 위한 개인정보 수집 이용 동의서</p>
                      <p>본 동의는 보험 상품 관련 정보 제공 및 보험 상담 안내(전화, 문자 등)를 목적으로 하여 이름, 연락처(휴대폰)를 수집·이용하는 것에 관한 사항으로, 해당 개인정보는 보험 상담 목적 달성 시 또는 동의 철회 시까지 보유 및 이용됩니다.</p>
                    </div>
                  </div>
                </div>
                <label className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      required
                      className="peer sr-only"
                      checked={formData.agree}
                      onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                    />
                    <div className="w-6 h-6 rounded-lg border-2 border-slate-200 peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center">
                      <CheckCircle size={16} className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <span className="text-sm font-bold text-slate-600 group-hover:text-primary transition-colors">
                    위 개인정보 수집 및 이용에 동의합니다.
                  </span>
                </label>
              </div>

              {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full gradient-primary text-white py-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:-translate-y-1 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    신청 처리 중...
                  </>
                ) : (
                  '보장분석 상담 신청하기'
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12"></div>
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2 relative z-10">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                실시간 신청 현황
              </h4>
              <div className="space-y-4 relative z-10">
                {recentApplications.map((app, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between group hover:bg-white hover:shadow-md transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-slate-900">{app.name}</span>
                        <span className="text-[10px] px-1.5 py-0.5 bg-primary/10 text-primary rounded-md font-bold">{app.type}</span>
                      </div>
                      <p className="text-xs text-slate-400">{app.region}</p>
                    </div>
                    <span className="text-[10px] font-bold text-slate-300">{app.time}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-50 text-center">
                <p className="text-xs text-slate-400">오늘 총 <span className="text-primary font-bold">24명</span>이 상담을 신청했습니다.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <h4 className="font-bold text-lg mb-4">상담 안내</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5">1</div>
                  <span>신청 즉시 담당 전문가가 배정됩니다.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5">2</div>
                  <span>전화 또는 문자로 사전 안내를 드립니다.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5">3</div>
                  <span>고객님이 원하시는 시간에 상담이 진행됩니다.</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 p-8 rounded-3xl border border-secondary/20">
              <h4 className="font-bold text-secondary text-lg mb-2">안심하세요!</h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                메타리치 서귀포지점은 불필요한 보험 가입을 강요하지 않습니다. 
                오직 고객님의 이익을 위한 정직한 분석만을 약속드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
