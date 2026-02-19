"use client"

import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Mail, Phone, Calendar, Home, AlertCircle, Clock, CheckCircle, User, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Mock data - replace with real data later
const reclamationsData = [
  {
    ref: "REC-001",
    date: "15/02/2026",
    residence: "Les Jardins Carthage",
    coproprietaire: "Ahmed Ben Salah",
    lot: "A12",
    type: "Technique",
    sousType: "Fuite d'eau",
    priorite: "Haute",
    statut: "En cours",
    delai: "3 jours",
    service: "Maintenance",
    description: "Fuite d'eau importante dans la salle de bain. L'eau s'infiltre chez le voisin du dessous.",
    historique: [
      { date: "15/02/2026 09:30", action: "Réclamation créée", user: "Ahmed Ben Salah" },
      { date: "15/02/2026 10:15", action: "Assignée à Maintenance", user: "Service Exploitation" }
    ]
  },
  {
    ref: "REC-002",
    date: "15/02/2026",
    residence: "Résidence El Menzah",
    coproprietaire: "Fatma Khaled",
    lot: "B45",
    type: "Technique",
    sousType: "Ascenseur en panne",
    priorite: "Urgent",
    statut: "Ouvert",
    delai: "2 jours",
    service: "Ascenseurs",
    description: "Ascenseur bloqué au 3ème étage depuis ce matin.",
    historique: [
      { date: "15/02/2026 08:45", action: "Réclamation créée", user: "Fatma Khaled" }
    ]
  },
  {
    ref: "REC-003",
    date: "14/02/2026",
    residence: "Parc du Lac",
    coproprietaire: "Mohamed Trabelsi",
    lot: "C23",
    type: "Administrative",
    sousType: "Problème éclairage",
    priorite: "Basse",
    statut: "Résolu",
    delai: "4 jours",
    service: "Électricité",
    description: "Éclairage des parties communes ne fonctionne pas la nuit.",
    historique: [
      { date: "14/02/2026 18:30", action: "Réclamation créée", user: "Mohamed Trabelsi" },
      { date: "15/02/2026 09:00", action: "Assignée à Électricité", user: "Service Exploitation" },
      { date: "18/02/2026 14:30", action: "Réclamation résolue", user: "Service Électricité" }
    ]
  }
]

const priorityConfig = {
  "Urgent": { bg: "bg-destructive/10", text: "text-destructive", icon: AlertCircle },
  "Haute": { bg: "bg-yellow-100", text: "text-yellow-700", icon: AlertCircle },
  "Moyenne": { bg: "bg-yellow-100", text: "text-yellow-700", icon: Clock },
  "Basse": { bg: "bg-blue-100", text: "text-blue-700", icon: CheckCircle }
}

const statusConfig = {
  "Ouvert": { bg: "bg-yellow-100", text: "text-yellow-700" },
  "En cours": { bg: "bg-primary/10", text: "text-primary" },
  "Résolu": { bg: "bg-accent/10", text: "text-accent" }
}

export default function ReclamationDetailPage() {
  const router = useRouter()
  const params = useParams()
  const ref = params.id as string
  
  const reclamation = reclamationsData.find(r => r.ref === ref)

  if (!reclamation) {
    return (
      <div className="min-h-screen bg-[#F4F6F9] p-6 flex items-center justify-center">
        <Card className="p-8 text-center">
          <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Réclamation non trouvée</h2>
          <p className="text-muted-foreground mb-4">La réclamation {ref} n'existe pas.</p>
          <Button onClick={() => router.back()}>Retour</Button>
        </Card>
      </div>
    )
  }

  const priority = priorityConfig[reclamation.priorite as keyof typeof priorityConfig] || priorityConfig["Basse"]
  const status = statusConfig[reclamation.statut as keyof typeof statusConfig] || statusConfig["Ouvert"]

  return (
    <div className="min-h-screen bg-[#F4F6F9] p-6">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-[#1A3353] mb-4 hover:underline"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour à la liste
      </button>

      {/* Main card */}
      <Card className="border border-border shadow-sm max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-border">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-[#1A3353]">Réclamation {reclamation.ref}</h1>
              <Badge className={`${priority.bg} ${priority.text} border-0 flex items-center gap-1`}>
                <priority.icon className="w-3 h-3" />
                {reclamation.priorite}
              </Badge>
              <Badge className={`${status.bg} ${status.text} border-0`}>
                {reclamation.statut}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">Créée le {reclamation.date}</p>
          </div>
          <Button variant="outline" onClick={() => router.back()}>
            Fermer
          </Button>
        </div>

        {/* Content */}
        <CardContent className="p-6">
          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase mb-1">Résidence</p>
                  <p className="text-foreground">{reclamation.residence}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase mb-1">Copropriétaire</p>
                  <p className="text-foreground">{reclamation.coproprietaire}</p>
                  <p className="text-sm text-muted-foreground">Lot {reclamation.lot}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase mb-1">Type</p>
                  <p className="text-foreground">{reclamation.type} - {reclamation.sousType}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase mb-1">Service affecté</p>
                  <p className="text-foreground">{reclamation.service}</p>
                  <p className="text-sm text-muted-foreground">Délai: {reclamation.delai}</p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[#1A3353] mb-3">Description</h2>
            <p className="text-gray-700 bg-secondary/30 p-4 rounded-lg">{reclamation.description}</p>
          </div>

          {/* Historique */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[#1A3353] mb-3">Historique</h2>
            <div className="space-y-3">
              {reclamation.historique.map((item, index) => (
                <div key={index} className="flex gap-3 text-sm">
                  <span className="text-muted-foreground w-32">{item.date}</span>
                  <span className="font-medium w-32">{item.user}</span>
                  <span className="text-gray-700">{item.action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-8">
            <Button className="bg-primary hover:bg-primary/90">
              Prendre en charge
            </Button>
            <Button variant="outline">
              Assigner
            </Button>
            <Button variant="outline">
              Ajouter commentaire
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}