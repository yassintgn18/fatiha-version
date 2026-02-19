'use client'

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
import { Star } from "lucide-react"

const performanceData = [
  {
    name: "Élévateur Plus",
    interventions: 24,
    retards: 1,
    reclamations: 3,
    note: 4.2
  },
  {
    name: "Nettoyage Pro",
    interventions: 42,
    retards: 2,
    reclamations: 1,
    note: 4.5
  },
  {
    name: "Sécurité 24/7",
    interventions: 18,
    retards: 0,
    reclamations: 0,
    note: 4.8
  },
  {
    name: "Jardinier Plus",
    interventions: 12,
    retards: 3,
    reclamations: 4,
    note: 3.5
  },
  {
    name: "TechClean",
    interventions: 8,
    retards: 4,
    reclamations: 6,
    note: 2.8
  }
]

function getNoteColor(note: number) {
  if (note >= 4.5) return "text-accent"
  if (note >= 4) return "text-primary"
  if (note >= 3) return "text-yellow-600"
  return "text-destructive"
}

export function PrestatairesPerformance() {
  return (
    <div className="px-8 py-6">
      <Card className="border-0 shadow-sm overflow-hidden">
        <div className="p-4 bg-gradient-to-r from-primary/5 to-transparent border-b border-border">
          <h2 className="text-sm font-semibold text-[#1A3353] flex items-center gap-2">
            <Star className="w-4 h-4" />
            PERFORMANCE DES PRESTATAIRES (6 derniers mois)
          </h2>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/30 hover:bg-secondary/30">
                <TableHead className="font-semibold">PRESTATAIRE</TableHead>
                <TableHead className="font-semibold text-center">INTERVENTIONS</TableHead>
                <TableHead className="font-semibold text-center">RETARDS</TableHead>
                <TableHead className="font-semibold text-center">RÉCLAMATIONS</TableHead>
                <TableHead className="font-semibold text-center">NOTE</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {performanceData.map((row, index) => (
                <TableRow key={index} className="hover:bg-muted/40 transition-colors">
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell className="text-center">{row.interventions}</TableCell>
                  <TableCell className="text-center">
                    <span className={row.retards > 0 ? "text-destructive font-medium" : "text-accent"}>
                      {row.retards}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className={row.reclamations > 0 ? "text-yellow-600" : "text-accent"}>
                      {row.reclamations}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge 
                      variant="outline" 
                      className={`${getNoteColor(row.note)} border-current font-medium`}
                    >
                      {row.note}/5
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  )
}