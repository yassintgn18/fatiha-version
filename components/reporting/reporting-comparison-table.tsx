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
import { TrendingUp, TrendingDown } from "lucide-react"

const comparisonData = [
  {
    residence: "Jardins Carthage",
    recouvrement: "87%",
    impact: "18.5%",
    delai: "2.8j",
    satisfaction: "4.5/5",
    tendance: "up",
    valeur: "+5%"
  },
  {
    residence: "El Menzah",
    recouvrement: "92%",
    impact: "15.2%",
    delai: "2.1j",
    satisfaction: "4.3/5",
    tendance: "up",
    valeur: "+3%"
  },
  {
    residence: "Parc du Lac",
    recouvrement: "76%",
    impact: "12.8%",
    delai: "4.2j",
    satisfaction: "3.8/5",
    tendance: "down",
    valeur: "-2%"
  },
  {
    residence: "Les Berges",
    recouvrement: "89%",
    impact: "11.3%",
    delai: "3.1j",
    satisfaction: "4.1/5",
    tendance: "up",
    valeur: "+1%"
  },
  {
    residence: "Ennasr",
    recouvrement: "94%",
    impact: "9.7%",
    delai: "1.9j",
    satisfaction: "4.6/5",
    tendance: "up",
    valeur: "+4%"
  },
  {
    residence: "Oasis",
    recouvrement: "68%",
    impact: "22%",
    delai: "5.3j",
    satisfaction: "3.2/5",
    tendance: "down",
    valeur: "-8%"
  }
]

export function ReportingComparisonTable() {
  return (
    <div className="px-8 py-6">
      <h2 className="text-sm font-semibold text-[#1A3353] mb-4">ANALYSE COMPARATIVE ENTRE RÉSIDENCES</h2>
      <Card className="border-0 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/30 hover:bg-secondary/30">
                <TableHead className="font-semibold">RÉSIDENCE</TableHead>
                <TableHead className="font-semibold text-center">RECOUV.</TableHead>
                <TableHead className="font-semibold text-center">IMPACT</TableHead>
                <TableHead className="font-semibold text-center">DÉLAI</TableHead>
                <TableHead className="font-semibold text-center">SATISF.</TableHead>
                <TableHead className="font-semibold text-center">TENDANCE</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, index) => (
                <TableRow key={index} className="hover:bg-muted/40 transition-colors">
                  <TableCell className="font-medium">{row.residence}</TableCell>
                  <TableCell className="text-center">{row.recouvrement}</TableCell>
                  <TableCell className="text-center">{row.impact}</TableCell>
                  <TableCell className="text-center">{row.delai}</TableCell>
                  <TableCell className="text-center">{row.satisfaction}</TableCell>
                  <TableCell className="text-center">
                    <Badge 
                      variant="outline" 
                      className={`${
                        row.tendance === "up" 
                          ? "bg-accent/10 text-accent" 
                          : "bg-destructive/10 text-destructive"
                      } border-0 flex items-center gap-1 w-fit mx-auto`}
                    >
                      {row.tendance === "up" ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      {row.valeur}
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