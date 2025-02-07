import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface MenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  path: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    key: 'dashboard',
    label: '仪表盘',
    path: '/',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    key: 'components',
    label: '组件管理',
    path: '/components',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    key: 'pages',
    label: '页面管理',
    path: '/pages',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    key: 'templates',
    label: '模板管理',
    path: '/templates',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    key: 'settings',
    label: '系统设置',
    path: '/settings',
    children: [
      {
        key: 'users',
        label: '用户管理',
        path: '/settings/users',
      },
      {
        key: 'roles',
        label: '角色管理',
        path: '/settings/roles',
      }
    ]
  }
];

export const Sidebar = () => {
  const router = useRouter();
  const [expandedKeys, setExpandedKeys] = useState<string[]>(['settings']);

  const toggleExpand = (key: string) => {
    setExpandedKeys(prev => 
      prev.includes(key) 
        ? prev.filter(k => k !== key)
        : [...prev, key]
    );
  };

  const isActive = (path: string) => router.pathname === path;

  const renderMenuItem = (item: MenuItem) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedKeys.includes(item.key);

    return (
      <div key={item.key} className="mb-1">
        <div
          className={`
            flex items-center px-4 py-2 text-sm rounded-md cursor-pointer
            ${isActive(item.path) ? 'bg-sky-500 text-white' : 'text-gray-700 hover:bg-gray-100'}
          `}
          onClick={() => hasChildren ? toggleExpand(item.key) : router.push(item.path)}
        >
          {item.icon && <span className="mr-3">{item.icon}</span>}
          <span className="flex-1">{item.label}</span>
          {hasChildren && (
            <svg
              className={`w-4 h-4 transition-transform ${isExpanded ? 'transform rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div className="ml-4 mt-1">
            {item.children.map(child => (
              <div
                key={child.key}
                className={`
                  px-4 py-2 text-sm rounded-md cursor-pointer
                  ${isActive(child.path) ? 'bg-sky-500 text-white' : 'text-gray-700 hover:bg-gray-100'}
                `}
                onClick={() => router.push(child.path)}
              >
                {child.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 bg-white h-full shadow-sm">
      <div className="p-4">
        {menuItems.map(renderMenuItem)}
      </div>
    </div>
  );
}; 