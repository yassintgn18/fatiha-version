import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { ResidencesHeader } from "@/components/residences/residences-header"
import { ResidencesStats } from "@/components/residences/residences-stats"
import { ResidencesTable } from "@/components/residences/residences-table"

export const metadata = {
  title: "Gestion des Résidences",
  description: "Gestion et suivi des résidences",
}

export default function ResidencesPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <SidebarNav />

      {/* Main content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <ResidencesHeader />
        <ResidencesStats />
        <div className="flex-1 overflow-y-auto">
          <ResidencesTable />
        </div>
      </div>
    </div>
  )
}
