import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { ReportingHeader } from "@/components/reporting/reporting-header"
import { ReportingKpiGrid } from "@/components/reporting/reporting-kpi-grid"
import { ReportingComparisonTable } from "@/components/reporting/reporting-comparison-table"
import { ReportingChart } from "@/components/reporting/reporting-chart"
import { ReportingReportsList } from "@/components/reporting/reporting-reports-list"
import { ReportingActions } from "@/components/reporting/reporting-actions"

export const metadata = {
  title: "Reporting & KPIs",
  description: "Tableau de bord stratégique - Indicateurs de performance",
}

export default function ReportingPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <SidebarNav />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          <ReportingHeader />
          <ReportingKpiGrid />
          <ReportingComparisonTable />
          <ReportingChart />
          <ReportingReportsList />
          <ReportingActions />
        </main>
      </div>
    </div>
  )
}