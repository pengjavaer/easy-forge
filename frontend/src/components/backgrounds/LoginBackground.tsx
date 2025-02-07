export const LoginBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* 背景图片 */}
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ 
        backgroundImage: 'url("/images/backgrounds/background.jpg")',
        filter: 'brightness(0.4)'  // 调暗背景以提高可读性
      }}
    ></div>

    {/* 渐变叠加层 */}
    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/50 to-sky-600/50"></div>
    
    {/* 装饰性圆圈 */}
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-200 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
    <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-200 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
  </div>
); 