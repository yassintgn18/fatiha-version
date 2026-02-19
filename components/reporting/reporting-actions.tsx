'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Calendar, LayoutDashboard, Eye, Settings } from "lucide-react"

export function ReportingActions() {
  return (
    <div className="px-8 py-6">
      <h2 className="text-sm font-semibold text-[#1A3353] mb-4">ACTIONS RAPIDES</h2>
      <Card className="border-0 shadow-sm p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <Button variant="outline" className="flex flex-col h-auto py-4 gap-2">
            <Download className="w-5 h-5" />
            <span className="text-xs">Exporter PDF</span>
          </Button>
          <Button variant="outline" className="flex flex-col h-auto py-4 gap-2">
            <FileText className="w-5 h-5" />
            <span className="text-xs">Exporter Excel</span>
          </Button>
          <Button variant="outline" className="flex flex-col h-auto py-4 gap-2">
            <Calendar className="w-5 h-5" />
            <span className="text-xs">Programmer</span>
          </Button>
          <Button variant="outline" className="flex flex-col h-auto py-4 gap-2">
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-xs">Tableau DG</span>
          </Button>
          <Button variant="outline" className="flex flex-col h-auto py-4 gap-2">
            <Eye className="w-5 h-5" />
            <span className="text-xs">Voir détails</span>
          </Button>
          <Button variant="outline" className="flex flex-col h-auto py-4 gap-2">
            <Settings className="w-5 h-5" />
            <span className="text-xs">Paramètres</span>
          </Button>
        </div>
      </Card>
    </div>
  )
}