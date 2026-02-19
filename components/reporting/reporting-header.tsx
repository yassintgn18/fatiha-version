'use client'

import { Button } from "@/components/ui/button"
import { Download, Calendar } from "lucide-react"

export function ReportingHeader() {
  return (
    <div className="px-8 py-6 border-b border-border bg-white">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-[#1A3353]">Reporting & KPIs</h1>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar className="w-4 h-4" />
            Période: Année 2026 ▼
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Exporter
          </Button>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        Tableau de bord stratégique - Indicateurs de performance
      </p>
    </div>
  )
}