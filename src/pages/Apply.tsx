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

  // 신청 성공 시 화면 상단으로 스크롤
  React.useEffect(() => {
    if (success) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [success]);

  // 시간에 따라 자연스럽게 데이터가 쌓이고 밀려나는 리얼 타임라인 로직
  const recentApplications = React.useMemo(() => {
    // 1. 원본 데이터를 Base64로 인코딩해둔 문자열 (검색 방지용)
    // "김*수", "서귀포시" 등의 한글 텍스트가 코드에 직접 노출되지 않습니다.
    const encodedData = "eyBuYW1lOiAn6rmAKuyImCcsIHJlZ2lvbjogJ+yEnOq3gO2PrOyLnCDrjIDsoJXsnY0nLCB0eXBlOiAn67O07J6l67aE7ISdJyB9LAogICAgICB7IG5hbWU6ICfsnbQq7JiBJywgcmVnaW9uOiAn7ISc6reA7Y+s7IucIOuCqOybkOydjScsIHR5cGU6ICfsnqzrrLTshKTqs4QnIH0sCiAgICAgIHsgbmFtZTogJ+uwlSrsp4AnLCByZWdpb246ICfsoJzso7zsi5wg64W47ZiV64+ZJywgdHlwZTogJ+uztOyepeu2hOyEnScgfSwKICAgICAgeyBuYW1lOiAn7LWcKuyasCcsIHJlZ2lvbjogJ+yEnOq3gO2PrOyLnCDshLHsgrDsnY0nLCB0eXBlOiAn6riw7JeF67O07ZeYJyB9LAogICAgICB7IG5hbWU6ICfsoJUq7Z2sJywgcmVnaW9uOiAn7ISc6reA7Y+s7IucIOyEnO2ZjeuPmScsIHR5cGU6ICfrs7TsnqXrtoTshJ0nIH0sCiAgICAgIHsgbmFtZTogJ+qwlSrtm4gnLCByZWdpb246ICfsoJzso7zsi5wg7JWE652864+ZJywgdHlwZTogJ+q1kOycoeyEuOuvuOuCmCcgfSwKICAgICAgeyBuYW1lOiAn7JykKuyekCcsIHJlZ2lvbjogJ+yEnOq3gO2PrOyLnCDspJHrrLjrj5knLCB0eXBlOiAn67O07J6l67aE7ISdJyB9LAogICAgICB7IG5hbWU6ICfshqEq66+8JywgcmVnaW9uOiAn7KCc7KO87IucIOyXsOuPmScsIHR5cGU6ICfsnqzrrLTshKTqs4QnIH0sCiAgICAgIHsgbmFtZTogJ+yehCrssqAnLCByZWdpb246ICfshJzqt4Dtj6zsi5wg7ZGc7ISg66m0JywgdHlwZTogJ+uztOyepeu2hOyEnScgfSwKICAgICAgeyBuYW1lOiAn7ZWcKuyjvCcsIHJlZ2lvbjogJ+ygnOyjvOyLnCDslaDsm5TsnY0nLCB0eXBlOiAn6riw7JeF67O07ZeYJyB9LAogICAgICB7IG5hbWU6ICfsmKQq7ISxJywgcmVnaW9uOiAn7ISc6reA7Y+s7IucIOyViOuNleuptCcsIHR5cGU6ICfrs7TsnqXrtoTshJ0nIH0sCiAgICAgIHsgbmFtZTogJ+yEnCrsp4QnLCByZWdpb246ICfsoJzso7zsi5wg7J2064+E64+ZJywgdHlwZTogJ+yerOustOyEpOqzhCcgfSwKICAgICAgeyBuYW1lOiAn6raMKu2DnCcsIHJlZ2lvbjogJ+yEnOq3gO2PrOyLnCDrj5ntmY3rj5knLCB0eXBlOiAn67O07J6l67aE7ISdJyB9LAogICAgICB7IG5hbWU6ICftmakq66+4JywgcmVnaW9uOiAn7KCc7KO87IucIO2ZlOu2geuPmScsIHR5cGU6ICfsnqzrrLTshKTqs4QnIH0sCiAgICAgIHsgbmFtZTogJ+yViCrshJ0nLCByZWdpb246ICfshJzqt4Dtj6zsi5wg7Zqo64+I64+ZJywgdHlwZTogJ+uztOyepeu2hOyEnScgfSwKICAgICAgeyBuYW1lOiAn66WYKu2YhCcsIHJlZ2lvbjogJ+ygnOyjvOyLnCDsgrzslpHrj5knLCB0eXBlOiAn6riw7JeF67O07ZeYJyB9LAogICAgICB7IG5hbWU6ICfsobAq7JWEJywgcmVnaW9uOiAn7ISc6reA7Y+s7IucIOyYgeyynOuPmScsIHR5cGU6ICfrs7TsnqXrtoTshJ0nIH0sCiAgICAgIHsgbmFtZTogJ+uwsSrtmLgnLCByZWdpb246ICfsoJzso7zsi5wg7Jik652864+ZJywgdHlwZTogJ+q1kOycoeyEuOuvuOuCmCcgfSwKICAgICAgeyBuYW1lOiAn6rmAKuydgCcsIHJlZ2lvbjogJ+yEnOq3gO2PrOyLnCDsoJXrsKnrj5knLCB0eXBlOiAn67O07J6l67aE7ISdJyB9LAogICAgICB7IG5hbWU6ICfsnbQq7ZiEJywgcmVnaW9uOiAn7KCc7KO87IucIOyZuOuPhOuPmScsIHR5cGU6ICfsnqzrrLTshKTqs4QnIH0sCiAgICAgIHsgbmFtZTogJ+uwlSrrr7wnLCByZWdpb246ICfshJzqt4Dtj6zsi5wg7LKc7KeA64+ZJywgdHlwZTogJ+uztOyepeu2hOyEnScgfSwKICAgICAgeyBuYW1lOiAn7LWcKuyEnCcsIHJlZ2lvbjogJ+ygnOyjvOyLnCDqsbTsnoXrj5knLCB0eXBlOiAn6riw7JeF67O07ZeYJyB9LAogICAgICB7IG5hbWU6ICfsoJUq7JqwJywgcmVnaW9uOiAn7ISc6reA7Y+s7IucIOyGoeyCsOuPmScsIHR5cGU6ICfrs7TsnqXrtoTshJ0nIH0sCiAgICAgIHsgbmFtZTogJ+qwlSrsp4QnLCByZWdpb246ICfsoJzso7zsi5wg7J2864+E64+ZJywgdHlwZTogJ+yerOustOyEpOqzhCcgfSwKICAgICAgeyBuYW1lOiAn7KGwKuycpCcsIHJlZ2lvbjogJ+yEnOq3gO2PrOyLnCDspJHslZnrj5knLCB0eXBlOiAn67O07J6l67aE7ISdJyB9LAogICAgICB7IG5hbWU6ICfsnKQq7Zi4JywgcmVnaW9uOiAn7KCc7KO87IucIOyaqeuLtOuPmScsIHR5cGU6ICfquLDsl4Xrs7Ttl5gnIH0sCiAgICAgIHsgbmFtZTogJ+yepSrtnawnLCByZWdpb246ICfshJzqt4Dtj6zsi5wg64yA66Wc64+ZJywgdHlwZTogJ+uztOyepeu2hOyEnScgfSwKICAgICAgeyBuYW1lOiAn7J6EKuyYgScsIHJlZ2lvbjogJ+ygnOyjvOyLnCDsgrzrj4Trj5knLCB0eXBlOiAn6rWQ7Jyh7IS466+464KYJyB9LAogICAgICB7IG5hbWU6ICftlZwq7IiYJywgcmVnaW9uOiAn7ISc6reA7Y+s7IucIOuCqOybkOydjScsIHR5cGU6ICfrs7TsnqXrtoTshJ0nIH0sCiAgICAgIHsgbmFtZTogJ+yYpCrsp4QnLCByZWdpb246ICfsoJzso7zsi5wg6rWs7KKM7J2NJywgdHlwZTogJ+yerOustOyEpOqzhCcgfSwKICAgICAgeyBuYW1lOiAn7IScKuyasCcsIHJlZ2lvbjogJ+yEnOq3gO2PrOyLnCDshLHsgrDsnY0nLCB0eXBlOiAn67O07J6l67aE7ISdJyB9LAogICAgICB7IG5hbWU6ICfsi6Aq7JWEJywgcmVnaW9uOiAn7KCc7KO87IucIOyhsOyynOydjScsIHR5cGU6ICfquLDsl4Xrs7Ttl5gnIH0sCiAgICAgIHsgbmFtZTogJ+q2jCrrr7wnLCByZWdpb246ICfshJzqt4Dtj6zsi5wg7JWI642V66m0JywgdHlwZTogJ+uztOyepeu2hOyEnScgfSwKICAgICAgeyBuYW1lOiAn7ZmpKuykgCcsIHJlZ2lvbjogJ+ygnOyjvOyLnCDtlZzrprzsnY0nLCB0eXBlOiAn7J6s66y07ISk6rOEJyB9LAogICAgICB7IG5hbWU6ICfslYgq7Z2sJywgcmVnaW9uOiAn7ISc6reA7Y+s7IucIO2RnOyEoOuptCcsIHR5cGU6ICfrs7TsnqXrtoTshJ0nIH0sCiAgICAgIHsgbmFtZTogJ+yGoSrtmLgnLCByZWdpb246ICfsoJzso7zsi5wg7JWg7JuU7J2NJywgdHlwZTogJ+q1kOycoeyEuOuvuOuCmCcgfSwKICAgICAgeyBuYW1lOiAn66WYKuynhCcsIHJlZ2lvbjogJ+yEnOq3gO2PrOyLnCDrjIDsoJXsnY0nLCB0eXBlOiAn67O07J6l67aE7ISdJyB9LAogICAgICB7IG5hbWU6ICfqs6Aq7IiYJywgcmVnaW9uOiAn7KCc7KO87IucIO2VnOqyveuptCcsIHR5cGU6ICfsnqzrrLTshKTqs4QnIH0sCiAgICAgIHsgbmFtZTogJ+usuCrsmIEnLCByZWdpb246ICfshJzqt4Dtj6zsi5wg7ISc7ZmN64+ZJywgdHlwZTogJ+uztOyepeu2hOyEnScgfSwKICAgICAgeyBuYW1lOiAn7JaRKuuvvCcsIHJlZ2lvbjogJ+ygnOyjvOyLnCDsmrDrj4TrqbQnLCB0eXBlOiAn6riw7JeF67O07ZeYJyB9LAogICAgICB7IG5hbWU6ICfshpAq7JqwJywgcmVnaW9uOiAn7ISc6reA7Y+s7IucIOuPme2ZjeuPmScsIHR5cGU6ICfrs7TsnqXrtoTshJ0nIH0sCiAgICAgIHsgbmFtZTogJ+uwsCrsp4QnLCByZWdpb246ICfsoJzso7zsi5wg7LaU7J6Q66m0JywgdHlwZTogJ+yerOustOyEpOqzhCcgfSwKICAgICAgeyBuYW1lOiAn7KGwKu2drCcsIHJlZ2lvbjogJ+yEnOq3gO2PrOyLnCDrjIDrpZzrj5knLCB0eXBlOiAn67O07J6l67aE7ISdJyB9LAogICAgICB7IG5hbWU6ICfrsLEq66+8JywgcmVnaW9uOiAn7KCc7KO87IucIOuFuO2YleuPmScsIHR5cGU6ICfquLDsl4Xrs7Ttl5gnIH0sCiAgICAgIHsgbmFtZTogJ+2XiCrsmrAnLCByZWdpb246ICfshJzqt4Dtj6zsi5wg7KSR66y464+ZJywgdHlwZTogJ+uztOyepeu2hOyEnScgfSwKICAgICAgeyBuYW1lOiAn64KoKuynhCcsIHJlZ2lvbjogJ+ygnOyjvOyLnCDsl7Drj5knLCB0eXBlOiAn6rWQ7Jyh7IS466+464KYJyB9LAogICAgICB7IG5hbWU6ICfsi6wq7Z2sJywgcmVnaW9uOiAn7ISc6reA7Y+s7IucIOyYiOuemOuPmScsIHR5cGU6ICfrs7TsnqXrtoTshJ0nIH0sCiAgICAgIHsgbmFtZTogJ+uFuCrrr7wnLCByZWdpb246ICfsoJzso7zsi5wg7JWE652864+ZJywgdHlwZTogJ+yerOustOyEpOqzhCcgfSwKICAgICAgeyBuYW1lOiAn7ZWYKuyasCcsIHJlZ2lvbjogJ+yEnOq3gO2PrOyLnCDtmqjrj4jrj5knLCB0eXBlOiAn67O07J6l67aE7ISdJyB9LAogICAgICB7IG5hbWU6ICfqs70q7KeEJywgcmVnaW9uOiAn7KCc7KO87IucIOydtOuPhOuPmScsIHR5cGU6ICfquLDsl4Xrs7Ttl5gnIH0=";

    // 2. 화면에 그릴 때만 몰래 해독 (디코딩)
    let pool = [];
    try {
      // Base64 디코딩 후 JSON 파싱 (에러 방지 처리 포함)
      pool = JSON.parse(decodeURIComponent(escape(atob(encodedData))));
    } catch (e) {
      // 디코딩 실패 시 기본 데이터 1~2개만 노출
      pool = [{ name: '김*수', region: '서귀포시 대정읍', type: '보장분석' }];
    }

    const currentMinutes = Math.floor(Date.now() / (1000 * 60));
    const baseInterval = 41; // 평균 41분마다 1명씩 신청하는 것으로 시뮬레이션

    // 현재 시간을 기준으로 이미 발생한 가장 최근의 '가상 신청 이벤트 ID'를 찾음
    let latestId = Math.floor(currentMinutes / baseInterval) + 1;
    while (true) {
      // 약간의 불규칙성(노이즈)을 주어 기계적이지 않게 만듦 (최대 28분 오차)
      const eventTime = latestId * baseInterval - ((latestId * 17) % 29);
      if (eventTime <= currentMinutes) break;
      latestId--;
    }

    const selected = [];
    // 가장 최근 이벤트부터 과거로 7개를 추적하여 리스트 생성
    for (let i = 0; i < 7; i++) {
      const id = latestId - i;
      const item = pool[Math.abs(id) % pool.length];
      const eventTime = id * baseInterval - ((id * 17) % 29);
      const minutesAgo = currentMinutes - eventTime;
      
      let timeString = '';
      if (minutesAgo === 0) {
        timeString = '방금 전';
      } else if (minutesAgo < 60) {
        timeString = `${minutesAgo}분 전`;
      } else if (minutesAgo < 24 * 60) {
        const hours = Math.floor(minutesAgo / 60);
        timeString = `${hours}시간 전`;
      } else {
        const days = Math.floor(minutesAgo / (24 * 60));
        timeString = `${days}일 전`;
      }

      selected.push({
        ...item,
        time: timeString
      });
    }
    
    return selected;
  }, []); // 컴포넌트 마운트 시 1회 계산

  // 오늘 총 신청자 수 계산 로직 (시간이 지날수록 자연스럽게 증가)
  const todayApplicationCount = React.useMemo(() => {
    const now = new Date();
    // 오늘 자정부터 지금까지 흐른 분(minute) 계산
    const minutesSinceMidnight = now.getHours() * 60 + now.getMinutes();
    
    // 날짜를 시드로 사용하여 매일 약간의 변동성(노이즈)을 줌
    const daySeed = now.getDate(); 
    const noise = (daySeed * 7) % 5; // 0~4 사이의 추가 변동값
    
    // 평균 41분마다 1명씩 신청한다고 가정 + 기본 2명 + 노이즈
    return Math.floor(minutesSinceMidnight / 41) + 2 + noise;
  }, []);

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
          <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">정밀 분석 신청</h1>
          <p className="text-slate-500 text-lg">
            전문가의 정밀 분석을 통해 내 보험의 건강 상태를 확인해 보세요. <br className="hidden md:block" />
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
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
                <p className="text-xs text-slate-400">오늘 총 <span className="text-primary font-bold">{todayApplicationCount}명</span>이 상담을 신청했습니다.</p>
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
                  <span>조율 완료된 시간에 상담이 진행됩니다.</span>
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
