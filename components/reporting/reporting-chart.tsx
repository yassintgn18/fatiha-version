'use client'

import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

export function ReportingChart() {
  return (
    <div className="px-8 py-6">
      <h2 className="text-sm font-semibold text-[#1A3353] mb-4">TENDANCES ANNUELLES</h2>
      <Card className="border-0 shadow-sm p-6">
        <div className="h-64 flex items-center justify-center bg-secondary/10 rounded-lg">
          <div className="text-center">
            <p className="text-muted-foreground mb-2">Graphique d'évolution</p>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>Recouvrement</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span>Réclamations</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">(Graphique à implémenter avec Recharts)</p>
          </div>
        </div>
      </Card>
    </div>
  )
}