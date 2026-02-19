'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Download, FileText, MoreVertical, CheckCircle2 } from "lucide-react"
import { ReclamationPopup } from "./reclamation-popup"

const reclamationsData = [
  {
    id: 1,
    ref: "REC-001",
    date: "15/02",
    residence: "Jardins Carthage",
    copropietaire: "Ahmed Ben Salah",
    type: "Technique",
    priority: "Haute",
    status: "En cours",
    description: "Fuite d'eau importante dans la salle de bain. L'eau s'infiltre chez le voisin du dessous.",
    lot: "A12",
    service: "Maintenance",
    delai: "3 jours"
  },
  {
    id: 2,
    ref: "REC-002",
    date: "15/02",
    residence: "El Menzah",
    copropietaire: "Fatma Khaled",
    type: "Technique",
    priority: "Urgent",
    status: "Ouvert",
    description: "Ascenseur bloqué au 3ème étage depuis ce matin.",
    lot: "B45",
    service: "Ascenseurs",
    delai: "2 jours"
  },
  {
    id: 3,
    ref: "REC-003",
    date: "14/02",
    residence: "Parc du Lac",
    copropietaire: "Mohamed Trabelsi",
    type: "Admin",
    priority: "Basse",
    status: "Résolu",
    description: "Problème d'éclairage dans les parties communes.",
    lot: "C23",
    service: "Électricité",
    delai: "4 jours"
  },
  {
    id: 4,
    ref: "REC-004",
    date: "13/02",
    residence: "Jardins Carthage",
    copropietaire: "Mariam Souissi",
    type: "Financière",
    priority: "Haute",
    status: "En cours",
    description: "Erreur sur la facture du mois dernier.",
    lot: "A15",
    service: "Comptabilité",
    delai: "5 jours"
  },
  {
    id: 5,
    ref: "REC-005",
    date: "12/02",
    residence: "El Menzah",
    copropietaire: "Salim Boutheina",
    type: "Autre",
    priority: "Basse",
    status: "Résolu",
    description: "Demande d'information sur le règlement intérieur.",
    lot: "B12",
    service: "Administration",
    delai: "1 jour"
  }
]

const priorityConfig = {
  "Urgent": { bg: "bg-destructive/10", text: "text-destructive", label: "Urgent" },
  "Haute": { bg: "bg-yellow-100", text: "text-yellow-700", label: "Haute" },
  "Basse": { bg: "bg-blue-100", text: "text-blue-700", label: "Basse" }
}

const statusConfig = {
  "Ouvert": { bg: "bg-yellow-100", text: "text-yellow-700", label: "Ouvert" },
  "En cours": { bg: "bg-primary/10", text: "text-primary", label: "En cours" },
  "Résolu": { bg: "bg-accent/10", text: "text-accent", label: "Résolu" }
}

export function ReclamationsTable() {
  const router = useRouter()
  const [itemsPerPage, setItemsPerPage] = useState("10")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const [selectedReclamation, setSelectedReclamation] = useState<typeof reclamationsData[0] | null>(null)

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(reclamationsData.map(r => r.id))
    } else {
      setSelectedIds([])
    }
  }

  const handleSelectRow = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedIds([...selectedIds, id])
    } else {
      setSelectedIds(selectedIds.filter(i => i !== id))
    }
  }

  const handleRowClick = (reclamation: typeof reclamationsData[0]) => {
    setSelectedReclamation(reclamation)
  }

  const handleClosePopup = () => {
    setSelectedReclamation(null)
  }

  const handleMenuClick = (e: React.MouseEvent, reclamation: typeof reclamationsData[0]) => {
    e.stopPropagation()
    console.log("Menu clicked for:", reclamation.ref)
  }

  return (
    <div className="px-8 py-6 space-y-6">
      {/* Quick Action Bar */}
      {selectedIds.length > 0 && (
        <div className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 flex items-center justify-between">
          <p className="text-sm font-medium text-foreground">
            {selectedIds.length} réclamation{selectedIds.length > 1 ? 's' : ''} sélectionnée{selectedIds.length > 1 ? 's' : ''}
          </p>
          <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
            <CheckCircle2 className="w-4 h-4" />
            Marquer comme traité
          </Button>
        </div>
      )}

      {/* Table Card */}
      <Card className="border-0 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/30 hover:bg-secondary/30">
                <TableHead className="w-12">
                  <input
                    type="checkbox"
                    className="rounded"
                    checked={selectedIds.length === reclamationsData.length && reclamationsData.length > 0}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                  />
                </TableHead>
                <TableHead className="font-semibold text-foreground">Réf.</TableHead>
                <TableHead className="font-semibold text-foreground">Date</TableHead>
                <TableHead className="font-semibold text-foreground">Résidence</TableHead>
                <TableHead className="font-semibold text-foreground">Copropriétaire</TableHead>
                <TableHead className="font-semibold text-foreground">Type</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Priorité</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Statut</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reclamationsData.map((reclamation) => {
                const priorityInfo = priorityConfig[reclamation.priority as keyof typeof priorityConfig]
                const statusInfo = statusConfig[reclamation.status as keyof typeof statusConfig]
                return (
                  <TableRow
                    key={reclamation.id}
                    className="hover:bg-muted/40 cursor-pointer transition-colors"
                    onClick={() => handleRowClick(reclamation)}
                  >
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        className="rounded"
                        checked={selectedIds.includes(reclamation.id)}
                        onChange={(e) => handleSelectRow(reclamation.id, e.target.checked)}
                      />
                    </TableCell>
                    <TableCell className="font-medium text-primary">{reclamation.ref}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{reclamation.date}</TableCell>
                    <TableCell className="text-foreground text-sm">{reclamation.residence}</TableCell>
                    <TableCell className="text-foreground text-sm">{reclamation.copropietaire}</TableCell>
                    <TableCell className="text-foreground text-sm">{reclamation.type}</TableCell>
                    <TableCell className="text-center">
                      <Badge
                        className={`${priorityInfo.bg} ${priorityInfo.text} border-0 font-medium`}
                        variant="outline"
                      >
                        {priorityInfo.label}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge
                        className={`${statusInfo.bg} ${statusInfo.text} border-0 font-medium`}
                        variant="outline"
                      >
                        {statusInfo.label}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center" onClick={(e) => e.stopPropagation()}>
                      <button
                        className="inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                        aria-label="Menu actions"
                        onClick={(e) => handleMenuClick(e, reclamation)}
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Bottom Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Afficher</span>
          <Select value={itemsPerPage} onValueChange={setItemsPerPage}>
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">éléments par page</span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <FileText className="w-4 h-4" />
            PDF
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Excel
          </Button>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      {/* Popup */}
      {selectedReclamation && (
        <ReclamationPopup
          reclamation={selectedReclamation}
          onClose={handleClosePopup}
        />
      )}
    </div>
  )
}