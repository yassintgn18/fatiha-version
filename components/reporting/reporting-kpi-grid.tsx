'use client'

import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle, Clock, Star } from "lucide-react"

const kpis = [
  {
    label: "RECOUVREMENT GLOBAL",
    value: "87.3%",
    trend: "+2.1%",
    trendUp: true,
    icon: TrendingUp,
    color: "text-accent"
  },
  {
    label: "TAUX D'IMPACT",
    value: "12.7%",
    trend: "-0.8%",
    trendUp: false,
    icon: AlertCircle,
    color: "text-destructive"
  },
  {
    label: "BUDGET RESPECTÉ",
    value: "94.2%",
    trend: "Stable",
    trendUp: null,
    icon: CheckCircle,
    color: "text-primary"
  },
  {
    label: "DÉLAI TRAITEMENT",
    value: "3.2 jours",
    trend: "-0.5j",
    trendUp: true,
    icon: Clock,
    color: "text-accent"
  },
  {
    label: "SATISFACTION",
    value: "4.2/5",
    trend: "+0.1",
    trendUp: true,
    icon: Star,
    color: "text-yellow-500"
  },
  {
    label: "RÉACTIVITÉ",
    value: "94%",
    trend: "+2%",
    trendUp: true,
    icon: TrendingUp,
    color: "text-accent"
  },
  {
    label: "PROACTIVITÉ",
    value: "78%",
    trend: "+5%",
    trendUp: true,
    icon: TrendingUp,
    color: "text-accent"
  },
  {
    label: "RÉCLAMATIONS",
    value: "156/mois",
    trend: "-12%",
    trendUp: true,
    icon: AlertCircle,
    color: "text-orange-500"
  }
]

export function ReportingKpiGrid() {
  return (
    <div className="px-8 py-6">
      <h2 className="text-sm font-semibold text-[#1A3353] mb-4">KPIs PRINCIPAUX</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon
          return (
            <Card key={index} className="p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2 rounded-lg bg-secondary/30`}>
                  <Icon className={`w-5 h-5 ${kpi.color}`} />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{kpi.label}</p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-[#1A3353]">{kpi.value}</p>
                {kpi.trend && (
                  <span className={`text-sm font-medium ${
                    kpi.trendUp === true ? "text-accent" : 
                    kpi.trendUp === false ? "text-destructive" : 
                    "text-muted-foreground"
                  }`}>
                    {kpi.trend}
                  </span>
                )}
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}