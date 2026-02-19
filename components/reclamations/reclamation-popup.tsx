"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, ExternalLink, AlertCircle, Clock, CheckCircle } from "lucide-react"

interface ReclamationPopupProps {
  reclamation: {
    id: number
    ref: string
    date: string
    residence: string
    copropietaire: string
    type: string
    priority: string
    status: string
    description?: string
    lot?: string
    service?: string
    delai?: string
  }
  onClose: () => void
}

const priorityConfig = {
  "Urgent": { bg: "bg-destructive/10", text: "text-destructive", icon: AlertCircle, label: "Urgent" },
  "Haute": { bg: "bg-yellow-100", text: "text-yellow-700", icon: AlertCircle, label: "Haute" },
  "Basse": { bg: "bg-blue-100", text: "text-blue-700", icon: CheckCircle, label: "Basse" }
}

const statusConfig = {
  "Ouvert": { bg: "bg-yellow-100", text: "text-yellow-700", label: "Ouvert" },
  "En cours": { bg: "bg-primary/10", text: "text-primary", label: "En cours" },
  "Résolu": { bg: "bg-accent/10", text: "text-accent", label: "Résolu" }
}

export function ReclamationPopup({ reclamation, onClose }: ReclamationPopupProps) {
  const router = useRouter()
  const priority = priorityConfig[reclamation.priority as keyof typeof priorityConfig] || priorityConfig["Basse"]
  const status = statusConfig[reclamation.status as keyof typeof statusConfig] || statusConfig["Ouvert"]

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Popup */}
      <div className="fixed bottom-0 left-0 right-0 z-50 max-w-md mx-auto">
        <Card className="m-4 border-0 shadow-lg rounded-t-2xl">
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-border">
            <div>
              <h2 className="text-xl font-bold text-[#1A3353]">RÉCLAMATION {reclamation.ref}</h2>
              <p className="text-sm text-muted-foreground mt-1">Créée le {reclamation.date}</p>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-secondary rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Details Grid */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-sm font-medium w-24">Résidence:</span>
                <span className="text-sm">{reclamation.residence}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-sm font-medium w-24">Copropriétaire:</span>
                <span className="text-sm">{reclamation.copropietaire}</span>
              </div>
              {reclamation.lot && (
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium w-24">Lot:</span>
                  <span className="text-sm">{reclamation.lot}</span>
                </div>
              )}
              <div className="flex items-start gap-3">
                <span className="text-sm font-medium w-24">Type:</span>
                <span className="text-sm">{reclamation.type}</span>
              </div>
            </div>

            {/* Priority & Status */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase mb-2">Priorité</p>
                <Badge className={`${priority.bg} ${priority.text} border-0 flex items-center gap-1 w-fit`}>
                  <priority.icon className="w-3 h-3" />
                  {priority.label}
                </Badge>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase mb-2">Statut</p>
                <Badge className={`${status.bg} ${status.text} border-0`}>
                  {status.label}
                </Badge>
              </div>
            </div>

            {/* Service & Délai */}
            <div className="grid grid-cols-2 gap-4">
              {reclamation.service && (
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase mb-1">Affecté à</p>
                  <p className="text-sm">{reclamation.service}</p>
                </div>
              )}
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase mb-1">Délai</p>
                <p className="text-sm font-medium">{reclamation.delai || "Non défini"}</p>
              </div>
            </div>

            {/* Description */}
            {reclamation.description && (
              <div className="pt-2">
                <p className="text-xs text-muted-foreground font-medium uppercase mb-2">Description</p>
                <p className="text-sm bg-secondary/30 p-3 rounded-lg">{reclamation.description}</p>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <Button 
                className="flex-1 bg-primary hover:bg-primary/90"
                onClick={() => {
                  router.push(`/reclamations/${reclamation.ref}`)
                  onClose()
                }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Voir détail
              </Button>
              <Button variant="outline" className="flex-1">
                Traiter
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}