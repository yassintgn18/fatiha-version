import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { PrestatairesHeader } from "@/components/prestataires/prestataires-header"
import { PrestatairesStats } from "@/components/prestataires/prestataires-stats"
import { PrestatairesAlerts } from "@/components/prestataires/prestataires-alerts"
import { PrestatairesTable } from "@/components/prestataires/prestataires-table"
import { PrestatairesPerformance } from "@/components/prestataires/prestataires-performance"
import { PrestairesButtomSection } from "@/components/prestataires/prestataires-bottom"

export default function Page() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <SidebarNav />

      {/* Main content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          {/* Header */}
          <PrestatairesHeader />

          {/* Stats */}
          <PrestatairesStats />

          {/* Alerts Section - NEW */}
          <PrestatairesAlerts />

          {/* Table */}
          <PrestatairesTable />

          {/* Performance Section - NEW */}
          <PrestatairesPerformance />

          {/* Bottom Section */}
          <PrestairesButtomSection />
        </main>
      </div>
    </div>
  )
}