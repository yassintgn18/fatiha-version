'use client'

import { AlertCircle, AlertTriangle, Bell, Calendar, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

const alertsData = [
  {
    type: "retard",
    icon: AlertCircle,
    iconColor: "text-destructive",
    bgColor: "bg-destructive/10",
    message: "TechClean - Intervention prévue le 15/02 non effectuée"
  },
  {
    type: "renouvellement",
    icon: AlertTriangle,
    iconColor: "text-yellow-600",
    bgColor: "bg-yellow-100",
    message: "Jardinier Plus - Contrat expire le 28/02"
  },
  {
    type: "intervention",
    icon: Calendar,
    iconColor: "text-accent",
    bgColor: "bg-accent/10",
    message: "Nettoyage Pro - Résidence El Menzah"
  },
  {
    type: "reclamation",
    icon: Bell,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
    message: "Élévateur Plus - 3 réclamations ce mois"
  }
]

const alertConfig = {
  retard: { label: "RETARD", iconColor: "text-destructive" },
  renouvellement: { label: "RENOUVELLEMENT", iconColor: "text-yellow-600" },
  intervention: { label: "INTERVENTION AUJOURD'HUI", iconColor: "text-accent" },
  reclamation: { label: "RÉCLAMATIONS", iconColor: "text-orange-600" }
}

export function PrestatairesAlerts() {
  return (
    <div className="px-8 py-4">
      <Card className="border-0 shadow-sm overflow-hidden">
        <div className="p-4 bg-gradient-to-r from-primary/5 to-transparent border-b border-border">
          <h2 className="text-sm font-semibold text-[#1A3353] flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            ALERTES & PROCHAINES ÉCHÉANCES
          </h2>
        </div>
        <div className="divide-y divide-border">
          {alertsData.map((alert, index) => {
            const Icon = alert.icon
            const config = alertConfig[alert.type as keyof typeof alertConfig]
            return (
              <div key={index} className="p-4 flex items-start gap-3 hover:bg-secondary/20 transition-colors">
                <div className={`p-2 rounded-full ${alert.bgColor}`}>
                  <Icon className={`w-4 h-4 ${alert.iconColor}`} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-muted-foreground mb-1">
                    {config.label}
                  </p>
                  <p className="text-sm text-foreground">{alert.message}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}