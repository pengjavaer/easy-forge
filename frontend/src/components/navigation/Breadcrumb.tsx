import { useRouter } from 'next/router';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  path: string;
}

export const Breadcrumb = () => {
  const router = useRouter();
  const pathSegments = router.pathname.split('/').filter(Boolean);

  const getBreadcrumbItems = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [
      { label: '首页', path: '/' }
    ];

    let currentPath = '';
    pathSegments.forEach(segment => {
      currentPath += `/${segment}`;
      const label = getBreadcrumbLabel(segment);
      items.push({ label, path: currentPath });
    });

    return items;
  };

  const getBreadcrumbLabel = (segment: string): string => {
    const labelMap: { [key: string]: string } = {
      components: '组件管理',
      pages: '页面管理',
      templates: '模板管理',
      settings: '系统设置',
      users: '用户管理',
      roles: '角色管理'
    };

    return labelMap[segment] || segment;
  };

  const items = getBreadcrumbItems();

  return (
    <nav className="flex mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={item.path} className="inline-flex items-center">
            {index > 0 && (
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <Link
              href={item.path}
              className={`
                ml-1 text-sm font-medium
                ${
                  index === items.length - 1
                    ? 'text-gray-500 cursor-default'
                    : 'text-blue-600 hover:text-blue-700'
                }
              `}
              onClick={e => {
                if (index === items.length - 1) {
                  e.preventDefault();
                }
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}; 