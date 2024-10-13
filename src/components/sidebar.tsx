// src/components/sidebar.tsx
"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Sidebar() {
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto border-r bg-white p-4 dark:bg-gray-900",
        "hidden md:block" // Hide on small screens, show on medium and up
      )}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">My Dashboard</h2>
      </div>
      <nav className="mt-6">
        <NavigationMenu orientation="vertical">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="space-y-1 p-2">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/docs" className={navigationMenuTriggerStyle()}>
                  Documentation
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Add more NavigationMenuItems as needed */}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </aside>
  );
}

const components: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  // Add more components as needed
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { href: string; title: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} ref={ref} className={cn(
          "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
          className
        )} {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug text-gray-600 dark:text-gray-400">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
