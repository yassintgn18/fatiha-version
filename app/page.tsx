import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { DGHeader } from "@/components/dashboard/dg-header"
import { KPICardsV2 } from "@/components/dashboard/kpi-cards-v2"
import { FinancialChart } from "@/components/dashboard/financial-chart"
import { ComplaintsChart } from "@/components/dashboard/complaints-chart"
import { TopResidences } from "@/components/dashboard/top-residences"
import { CriticalAlerts } from "@/components/dashboard/critical-alerts"
import { RecentComplaintsV2 } from "@/components/dashboard/recent-complaints-v2"

export default function Page() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <SidebarNav />

      {/* Main content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Section 1: DG Header */}
        <DGHeader />

        <main className="flex-1 overflow-y-auto">
          <div className="p-8 space-y-8">
            {/* Section 2: KPI Cards */}
            <section aria-label="Indicateurs cl\u00e9s">
              <KPICardsV2 />
            </section>

            {/* Section 3: Charts Row */}
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
              <div className="xl:col-span-3">
                <FinancialChart />
              </div>
              <div className="xl:col-span-2">
                <ComplaintsChart />
              </div>
            </div>

            {/* Section 4: Action Layer */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
              <div className="xl:col-span-3">
                <TopResidences />
              </div>
              <div>
                <CriticalAlerts />
              </div>
            </div>

            {/* Section 5: Recent Complaints */}
            <section aria-label="R\u00e9clamations r\u00e9centes">
              <RecentComplaintsV2 />
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
