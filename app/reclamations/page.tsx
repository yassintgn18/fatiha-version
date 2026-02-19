import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { ReclamationsHeader } from "@/components/reclamations/reclamations-header"
import { ReclamationsKPI } from "@/components/reclamations/reclamations-kpi"
import { ComplaintsByTypeChart } from "@/components/reclamations/complaints-by-type-chart"
import { ComplaintsEvolutionChart } from "@/components/reclamations/complaints-evolution-chart"
import { ReclamationsTable } from "@/components/reclamations/reclamations-table"

export default function ReclamationsPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <SidebarNav />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <ReclamationsHeader />
        <main className="flex-1 overflow-y-auto">
          {/* KPI Cards */}
          <ReclamationsKPI />

          {/* Charts Section */}
          <div className="px-8 py-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <ComplaintsByTypeChart />
              <ComplaintsEvolutionChart />
            </div>
          </div>

          {/* Table Section */}
          <ReclamationsTable />
        </main>
      </div>
    </div>
  )
}
