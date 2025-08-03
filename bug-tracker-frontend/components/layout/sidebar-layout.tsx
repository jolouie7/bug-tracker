"use client"

import React from "react"
import Link from "next/link"
import {
  Home,
  TrendingUp,
  Compass,
  Star,
  Settings,
  Menu,
  Bell,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface LinkItem {
  name: string
  icon: React.ElementType
  href: string
}

const linkItems: LinkItem[] = [
  { name: "Home", icon: Home, href: "/dashboard" },
  { name: "Trending", icon: TrendingUp, href: "/trending" },
  { name: "Explore", icon: Compass, href: "/explore" },
  { name: "Favourites", icon: Star, href: "/favourites" },
  { name: "Settings", icon: Settings, href: "/settings" },
]

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:fixed md:inset-y-0 md:w-60 md:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r">
          <div className="flex items-center justify-between h-20 px-8">
            <span className="text-2xl font-bold font-mono">Logo</span>
          </div>
          <nav className="flex-1 space-y-1 px-4">
            {linkItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-4 text-sm font-medium rounded-lg",
                  "hover:bg-blue-500 hover:text-white",
                  "transition-colors duration-150 ease-in-out"
                )}
              >
                <item.icon className="w-4 h-4 mr-4" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetContent side="left" className="p-0 w-60">
          <div className="flex flex-col h-full bg-white">
            <div className="flex items-center justify-between h-20 px-8">
              <span className="text-2xl font-bold font-mono">Logo</span>
            </div>
            <nav className="flex-1 space-y-1 px-4">
              {linkItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "flex items-center px-4 py-4 text-sm font-medium rounded-lg",
                    "hover:bg-blue-500 hover:text-white",
                    "transition-colors duration-150 ease-in-out"
                  )}
                >
                  <item.icon className="w-4 h-4 mr-4" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content Area */}
      <div className="md:pl-60">
        {/* Top Navigation */}
        <header className="bg-white border-b">
          <div className="flex items-center justify-between px-4 py-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>

            <div className="flex items-center space-x-4 ml-auto">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">User</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        user@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  )
}