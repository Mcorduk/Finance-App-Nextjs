// src/components/Navbar.tsx

import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react"
import { ModeToggle } from "@/components/ModeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 h-16 bg-white border-b border-gray-200 shadow-sm dark:bg-gray-900 dark:border-gray-700">
      <div className="flex items-center justify-between h-full px-6">
        {/* Left side - Title */}
        <div className="text-2xl font-semibold text-gray-800 dark:text-white">
          Financial <span className="font-normal">Dashboard</span>
        </div>

        {/* Middle - Search using shadcn Input component */}
        <div className="flex items-center">
          <Input
            type="text"
            placeholder="Search here"
            className="w-64 px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800"
          />
        </div>

        {/* Right side - Notification and User Profile */}
        <div className="flex items-center space-x-6">
          <ModeToggle />    
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="relative">
                <Bell className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                {/* Notification dot */}
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-2 h-2 text-xs text-white bg-red-500 rounded-full"></span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>New Notification</DropdownMenuItem>
              <DropdownMenuItem>Another Notification</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Profile using shadcn Avatar */}
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="https://via.placeholder.com/32" alt="User" />
              <AvatarFallback>D</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Dwayne Tatum
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                CEO Assistant
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
