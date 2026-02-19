"use client"

import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Mail, Phone, Calendar, Home, FileText, CreditCard, AlertCircle, CheckCircle, XCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Mock data - replace with real data later
const coproprietairesData = [
  {
    id: 1,
    name: "Ben Salah Ahmed",
    cin: "AB123456",
    email: "ahmed@email.com",
    phone: "+216 71 123 456",
    dateAcquisition: "15/03/2021",
    residence: "Jardins Carthage",
    lots: "A12, A14",
    status: "Actif",
    situationFinanciere: "À jour",
    profession: "Ingénieur",
    adresse: "15 Rue des Oliviers, Tunis",
    totalLots: 2,
    tantiemes: 83,
    surface: "157 m²"
  },
  {
    id: 2,
    name: "Khaled Fatma",
    cin: "CD789012",
    email: "fatma@email.com",
    phone: "+216 98 765 432",
    dateAcquisition: "20/06/2022",
    residence: "El Menzah",
    lots: "B45",
    status: "Actif",
    situationFinanciere: "À jour",
    profession: "Enseignante",
    adresse: "Avenue Y, Tunis",
    totalLots: 1,
    tantiemes: 45,
    surface: "85 m²"
  },
  {
    id: 3,
    name: "Trabelsi Mohamed",
    cin: "EF345678",
    email: "mohamed@email.com",
    phone: "+216 55 555 555",
    dateAcquisition: "10/01/2023",
    residence: "Parc du Lac",
    lots: "C23, C24, C25",
    status: "Inactif",
    situationFinanciere: "En retard",
    profession: "Avocat",
    adresse: "Rue Z, Tunis",
    totalLots: 3,
    tantiemes: 120,
    surface: "210 m²"
  },
  {
    id: 4,
    name: "Mejri Sonia",
    cin: "GH901234",
    email: "sonia@email.com",
    phone: "+216 22 333 444",
    dateAcquisition: "05/09/2022",
    residence: "Les Berges",
    lots: "D12",
    status: "Actif",
    situationFinanciere: "À jour",
    profession: "Médecin",
    adresse: "Les Berges du Lac, Tunis",
    totalLots: 1,
    tantiemes: 50,
    surface: "95 m²"
  },
  {
    id: 5,
    name: "Bouazizi Karim",
    cin: "IJ567890",
    email: "karim@email.com",
    phone: "+216 44 555 666",
    dateAcquisition: "12/12/2021",
    residence: "Ennasr",
    lots: "E34",
    status: "Actif",
    situationFinanciere: "À jour",
    profession: "Architecte",
    adresse: "Résidence Ennasr, Tunis",
    totalLots: 1,
    tantiemes: 48,
    surface: "90 m²"
  }
]

export default function CoproprietaireDetailPage() {
  const router = useRouter()
  const params = useParams()
  const id = Number(params.id)
  
  // Find the coproprietaire with matching id
  const coproprietaire = coproprietairesData.find(c => c.id === id)

  // If not found, show error
  if (!coproprietaire) {
    return (
      <div className="min-h-screen bg-[#F4F6F9] p-6 flex items-center justify-center">
        <Card className="p-8 text-center">
          <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Copropriétaire non trouvé</h2>
          <p className="text-muted-foreground mb-4">Le copropriétaire avec l'ID {id} n'existe pas.</p>
          <Button onClick={() => router.back()}>Retour</Button>
        </Card>
      </div>
    )
  }

  const statusColor = coproprietaire.status === "Actif" 
    ? "bg-accent/10 text-accent" 
    : "bg-muted/50 text-muted-foreground"

  const financialColor = coproprietaire.situationFinanciere === "À jour"
    ? "bg-accent/10 text-accent"
    : "bg-destructive/10 text-destructive"

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
              <h1 className="text-2xl font-bold text-[#1A3353]">{coproprietaire.name}</h1>
              <Badge className={`${statusColor} border-0`}>
                {coproprietaire.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">CIN: {coproprietaire.cin}</p>
          </div>
          <Button variant="outline" onClick={() => router.back()}>
            Fermer
          </Button>
        </div>

        {/* Content */}
        <CardContent className="p-6">
          {/* Status badges row */}
          <div className="flex gap-4 mb-6">
            <div>
              <p className="text-xs text-muted-foreground font-medium uppercase mb-1">Situation financière</p>
              <Badge className={`${financialColor} border-0`}>
                {coproprietaire.situationFinanciere}
              </Badge>
            </div>
          </div>

          {/* Contact & Personal Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Left column */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase mb-1">Email</p>
                  <p className="text-foreground">{coproprietaire.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase mb-1">Téléphone</p>
                  <p className="text-foreground">{coproprietaire.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase mb-1">Date acquisition</p>
                  <p className="text-foreground">{coproprietaire.dateAcquisition}</p>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Home className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase mb-1">Résidence(s)</p>
                  <p className="text-foreground">{coproprietaire.residence}</p>
                  <p className="text-sm text-muted-foreground mt-1">Lots: {coproprietaire.lots}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase mb-1">Profession</p>
                  <p className="text-foreground">{coproprietaire.profession}</p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Additional Details */}
          <h2 className="text-lg font-semibold text-[#1A3353] mb-4">Détails supplémentaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-secondary/20 border-0">
              <CardContent className="p-4">
                <p className="text-xs text-muted-foreground uppercase mb-1">Total lots</p>
                <p className="text-2xl font-bold text-[#1A3353]">{coproprietaire.totalLots}</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/20 border-0">
              <CardContent className="p-4">
                <p className="text-xs text-muted-foreground uppercase mb-1">Tantièmes</p>
                <p className="text-2xl font-bold text-[#1A3353]">{coproprietaire.tantiemes}</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/20 border-0">
              <CardContent className="p-4">
                <p className="text-xs text-muted-foreground uppercase mb-1">Surface totale</p>
                <p className="text-2xl font-bold text-[#1A3353]">{coproprietaire.surface}</p>
              </CardContent>
            </Card>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-8">
            <Button className="flex-1 bg-primary hover:bg-primary/90">
              <CreditCard className="w-4 h-4 mr-2" />
              Paiements
            </Button>
            <Button className="flex-1 bg-primary hover:bg-primary/90">
              <AlertCircle className="w-4 h-4 mr-2" />
              Réclamations
            </Button>
            <Button variant="outline" className="flex-1">
              Documents
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}