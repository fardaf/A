"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { LogOut, LayoutDashboard, Settings, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js"

const stats = [
  { label: "Active Projects", value: "12", change: "+2 this week" },
  { label: "Team Members", value: "8", change: "+1 this month" },
  { label: "Tasks Completed", value: "94", change: "+18 today" },
  { label: "Uptime", value: "99.9%", change: "Last 30 days" },
]

export function DashboardClient({ user }: { user: User }) {
  const router = useRouter()

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  const displayName = user.email?.split("@")[0] ?? "there"

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-60 bg-zinc-900/60 backdrop-blur-sm border-r border-zinc-800 flex flex-col z-40">
        {/* Logo */}
        <div className="flex items-center gap-2 px-5 py-5 border-b border-zinc-800">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
            <span className="text-zinc-950 font-bold text-sm">B</span>
          </div>
          <span className="font-semibold text-white">BundledWS</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
          <NavItem icon={<LayoutDashboard size={16} />} label="Overview" active />
          <NavItem icon={<Bell size={16} />} label="Notifications" />
          <NavItem icon={<Settings size={16} />} label="Settings" />
        </nav>

        {/* User */}
        <div className="p-3 border-t border-zinc-800">
          <div className="flex items-center gap-3 px-2 py-2 rounded-xl mb-1">
            <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center flex-shrink-0">
              <User size={14} className="text-zinc-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white font-medium truncate">{displayName}</p>
              <p className="text-xs text-zinc-500 truncate">{user.email}</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-2 px-2 py-2 text-sm text-zinc-500 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
          >
            <LogOut size={14} />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="pl-60">
        <div className="max-w-5xl mx-auto px-8 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <p className="text-sm text-zinc-500 mb-1">Welcome back</p>
            <h1 className="text-2xl font-semibold text-white capitalize">{displayName}</h1>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5"
              >
                <p className="text-xs text-zinc-500 mb-2">{stat.label}</p>
                <p className="text-2xl font-semibold text-white mb-1">{stat.value}</p>
                <p className="text-xs text-zinc-600">{stat.change}</p>
              </motion.div>
            ))}
          </div>

          {/* Placeholder content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mx-auto mb-4">
              <LayoutDashboard size={20} className="text-zinc-500" />
            </div>
            <h3 className="text-sm font-medium text-white mb-1">Your workspace is ready</h3>
            <p className="text-sm text-zinc-500 max-w-sm mx-auto mb-6">
              Start creating projects, inviting teammates, and shipping faster with BundledWS.
            </p>
            <Button className="bg-white text-zinc-950 hover:bg-zinc-200 rounded-xl h-9 text-sm px-5">
              Create first project
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
}) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-xl transition-colors ${
        active
          ? "bg-zinc-800 text-white"
          : "text-zinc-500 hover:text-white hover:bg-zinc-800/60"
      }`}
    >
      {icon}
      {label}
    </button>
  )
}
