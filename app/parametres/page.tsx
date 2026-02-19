import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { ParametresHeader } from "@/components/parametres/parametres-header"
import { ParametresGeneral } from "@/components/parametres/parametres-general"
import { ParametresActions } from "@/components/parametres/parametres-actions"

export const metadata = {
  title: "Paramètres",
  description: "Configuration du système - Préférences utilisateur",
}

export default function ParametresPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <SidebarNav />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          <ParametresHeader />
          <ParametresGeneral />
          <ParametresActions />
        </main>
      </div>
    </div>
  )
}