'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, ChevronDown } from "lucide-react"

const reports = [
  { name: "Rapport mensuel - Janvier 2026", date: "01/02/2026" },
  { name: "Rapport mensuel - Décembre 2025", date: "02/01/2026" },
  { name: "Rapport trimestriel - Q4 2025", date: "05/01/2026" },
  { name: "Analyse comparative - 2025", date: "15/12/2025" },
  { name: "Suivi des réclamations - Annuel", date: "20/12/2025" }
]

export function ReportingReportsList() {
  return (
    <div className="px-8 py-6">
      <h2 className="text-sm font-semibold text-[#1A3353] mb-4">RAPPORTS DISPONIBLES</h2>
      <Card className="border-0 shadow-sm overflow-hidden">
        <div className="divide-y divide-border">
          {reports.map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 hover:bg-secondary/20 transition-colors">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">{report.name}</p>
                  <p className="text-xs text-muted-foreground">Généré le {report.date}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Télécharger
              </Button>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-border bg-secondary/10">
          <Button variant="outline" className="w-full gap-2">
            Générer nouveau rapport
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    </div>
  )
}