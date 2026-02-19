"use client"

import { useParams, useRouter } from "next/navigation"
import { Building2, MapPin, Calendar, User, Briefcase, ArrowLeft, Edit, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Mock data for the residence (replace with real data later)
const residenceData = {
  id: "1",
  nom: "Les Jardins de Carthage",
  adresse: "15 Rue des Oliviers, Tunis",
  dateCreation: "15/03/2020",
  referent: "Mohamed Ali (Responsable site)",
  promoteur: "Société Immobilière Carthage",
  batiments: 4,
  lots: 248,
  tantiemes: 10000,
  budgetAnnuel: "2.5M MAD",
  modeCotisation: "Tantièmes",
  rib: "1234567890",
  banque: "BIAT",
  compte: "SCI Carthage",
  prestataires: [
    { nom: "Élévateur Plus", service: "Ascenseurs" },
    { nom: "Nettoyage Pro", service: "Entretien" },
    { nom: "Sécurité 24/7", service: "Surveillance" },
  ],
}

export default function ResidenceDetailPage() {
  const router = useRouter()
  const params = useParams()
  const residenceId = params.id

  return (
    <div className="min-h-screen bg-[#F4F6F9] p-6">
      {/* Back button */}
      <button 
        onClick={() => router.back()}
        className="flex items-center gap-2 text-[#1A3353] mb-4 hover:underline"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour aux résidences
      </button>

      {/* Main card */}
      <Card className="border border-border shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-[#1A3353]">{residenceData.nom}</h1>
          </div>
          <Button variant="outline" className="gap-2">
            <Edit className="w-4 h-4" />
            Modifier
          </Button>
        </div>

        {/* Content */}
        <CardContent className="p-6">
          {/* Basic info row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Adresse</p>
                <p className="font-medium">{residenceData.adresse}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Création</p>
                <p className="font-medium">{residenceData.dateCreation}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Référent</p>
                <p className="font-medium">{residenceData.referent}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Promoteur</p>
                <p className="font-medium">{residenceData.promoteur}</p>
              </div>
            </div>
          </div>

          {/* Two column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Technical info */}
            <Card className="border border-border">
              <div className="p-4 bg-gray-50 border-b border-border">
                <h2 className="font-semibold text-[#1A3353]">INFORMATIONS TECHNIQUES</h2>
              </div>
              <CardContent className="p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Bâtiments:</span>
                  <span className="font-medium">{residenceData.batiments}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lots:</span>
                  <span className="font-medium">{residenceData.lots}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tantièmes:</span>
                  <span className="font-medium">{residenceData.tantiemes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Budget annuel:</span>
                  <span className="font-medium">{residenceData.budgetAnnuel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mode:</span>
                  <span className="font-medium">{residenceData.modeCotisation}</span>
                </div>
              </CardContent>
            </Card>

            {/* Banking info */}
            <Card className="border border-border">
              <div className="p-4 bg-gray-50 border-b border-border">
                <h2 className="font-semibold text-[#1A3353]">BANCAIRE</h2>
              </div>
              <CardContent className="p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">RIB:</span>
                  <span className="font-medium">{residenceData.rib}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Banque:</span>
                  <span className="font-medium">{residenceData.banque}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Compte:</span>
                  <span className="font-medium">{residenceData.compte}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Prestataires */}
            <Card className="border border-border">
              <div className="p-4 bg-gray-50 border-b border-border">
                <h2 className="font-semibold text-[#1A3353]">PRESTATAIRES ASSIGNÉS</h2>
              </div>
              <CardContent className="p-4">
                <ul className="space-y-2">
                  {residenceData.prestataires.map((p, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <span className="font-medium">{p.nom}</span>
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        {p.service}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Quick actions */}
            <Card className="border border-border">
              <div className="p-4 bg-gray-50 border-b border-border">
                <h2 className="font-semibold text-[#1A3353]">ACTIONS RAPIDES</h2>
              </div>
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-2">
                  {["Voir lots", "Copropriétaires", "Réclamations", "Finances"].map((action) => (
                    <button
                      key={action}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-sm">{action}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}