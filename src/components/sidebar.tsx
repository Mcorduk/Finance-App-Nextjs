interface SidebarContainerProps {
  children: React.ReactNode;
}

const SidebarContainer = ({ children }: SidebarContainerProps) => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700 flex flex-col justify-between">
      <div className="mt-20 flex justify-center items-center"> 
            <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="#333" strokeWidth="2" fill="none"/>
                
                <polyline points="20,70 40,50 60,60 80,30" fill="none" stroke="#333" strokeWidth="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
      </div>
      <div className="flex flex-col p-4 space-y-4">
        {children}
      </div>
      <div className="p-4">
        <footer className="text-gray-600 dark:text-gray-400 text-sm">
          2024 &copy; Muhammet Corduk 
        </footer>
      </div>
    </aside>
  );
};

export default SidebarContainer;
