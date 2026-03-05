import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { cn } from '@/src/utils/cn';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: '홈', path: '/' },
  { name: '지점 소개', path: '/about' },
  { name: '서비스 안내', path: '/services' },
  { name: '상담 프로세스', path: '/process' },
];

const specialProjects = [
  { name: '기업/단체 보험', path: '/projects/corporate' },
  { name: '금융 교육 세미나', path: '/projects/education' },
  { name: '제주 특화 사업', path: '/projects/jeju' },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();
  const darkHeroPages = ['/', '/about', '/projects/corporate', '/projects/education', '/projects/jeju'];
  const isDarkHeroPage = darkHeroPages.includes(location.pathname);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "py-3" : "pt-8 pb-16"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "flex justify-between items-center h-16 px-6 rounded-2xl transition-all duration-500",
          scrolled ? "glass shadow-lg" : "bg-transparent"
        )}>
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className={cn("font-bold text-lg leading-tight transition-colors", (scrolled || !isDarkHeroPage) ? "text-slate-900" : "text-white")}>메타리치</span>
              <span className={cn("text-xs font-medium transition-colors", (scrolled || !isDarkHeroPage) ? "text-slate-500" : "text-slate-200")}>제주 서귀포지점</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-semibold transition-all relative group",
                  location.pathname === item.path 
                    ? ((scrolled || !isDarkHeroPage) ? "text-primary" : "text-white") 
                    : ((scrolled || !isDarkHeroPage) ? "text-slate-600 hover:text-primary" : "text-white")
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 transition-all duration-300",
                  location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full",
                  (scrolled || !isDarkHeroPage) ? "bg-primary" : "bg-secondary"
                )} />
              </Link>
            ))}
            
            {/* Special Projects Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className={cn(
                "flex items-center gap-1 text-sm font-semibold transition-colors",
                (scrolled || !isDarkHeroPage) ? "text-slate-600 hover:text-primary" : "text-white"
              )}>
                지점 특별 사업
                <ChevronDown size={14} className={cn("transition-transform duration-300", isDropdownOpen && "rotate-180")} />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 mt-2 w-52 glass rounded-2xl shadow-2xl border border-white/20 py-3 overflow-hidden"
                  >
                    {specialProjects.map((project) => (
                      <Link
                        key={project.path}
                        to={project.path}
                        className="block px-5 py-3 text-sm font-medium text-slate-600 hover:bg-primary/5 hover:text-primary transition-colors"
                      >
                        {project.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/apply"
              className="gradient-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Phone size={16} />
              정밀 분석 신청
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn("transition-colors", (scrolled || !isDarkHeroPage) ? "text-slate-600" : "text-white")}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 bg-white md:hidden"
          >
            <div className="flex flex-col h-full p-8">
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">M</span>
                  </div>
                  <span className="font-bold text-xl">메타리치</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-slate-900">
                  <X size={32} />
                </button>
              </div>

              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl font-bold transition-colors",
                      location.pathname === item.path ? "text-primary" : "text-slate-900"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-6 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">지점 특별 사업</p>
                  <div className="grid grid-cols-1 gap-4">
                    {specialProjects.map((project) => (
                      <Link
                        key={project.path}
                        to={project.path}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-semibold text-slate-600"
                      >
                        {project.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <Link
                  to="/apply"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center gradient-primary text-white py-5 rounded-2xl text-lg font-bold shadow-lg"
                >
                  정밀 보장분석 신청하기
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
