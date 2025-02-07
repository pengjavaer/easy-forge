import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import { Sidebar } from './Sidebar';
import { Breadcrumb } from '../navigation/Breadcrumb';
import { Logo } from '../common/Logo';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {isAuthenticated && (
        <>
          <nav className="bg-gradient-to-r from-sky-500 to-sky-600 shadow-lg">
            <div className="w-full px-4">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <div className="flex items-center pl-3">
                    <div className="flex-shrink-0">
                      <Logo />
                    </div>
                    <span className="ml-3 text-xl font-bold text-white whitespace-nowrap">
                      低代码平台
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button className="text-sky-100 hover:text-white p-1 rounded-full hover:bg-sky-600">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
                      />
                    </svg>
                  </button>

                  <div className="h-6 w-px bg-sky-400"></div>

                  <div className="flex items-center space-x-3">
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-medium text-white">管理员</span>
                      <span className="text-xs text-sky-100">超级管理员</span>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-sky-400 flex items-center justify-center border-2 border-white">
                      <span className="text-sm font-medium text-white">A</span>
                    </div>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="ml-2 px-3 py-2 text-sm text-sky-100 hover:text-white hover:bg-sky-600 rounded-md transition-colors duration-200 flex items-center space-x-1"
                  >
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
                      />
                    </svg>
                    <span>退出</span>
                  </button>
                </div>
              </div>
            </div>
          </nav>

          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-8">
              <Breadcrumb />
              <div className="bg-white rounded-lg shadow p-6">
                {children}
              </div>
            </main>
          </div>
        </>
      )}
      {!isAuthenticated && children}
    </div>
  );
}; 