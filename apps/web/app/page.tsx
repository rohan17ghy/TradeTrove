'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Dashboard from '@/components/Dashboard'

export default function TradingDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)

  return (
    <div className="flex flex-col h-screen bg-[#181818] text-zinc-100 ml-4">
      <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <Dashboard />
      </div>
    </div>
  )
}