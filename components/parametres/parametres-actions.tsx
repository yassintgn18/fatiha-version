'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Save, RotateCcw, AlertTriangle } from "lucide-react"

export function ParametresActions() {
  return (
    <div className="px-8 py-6">
      <Card className="border border-border shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <Save className="w-4 h-4" />
              Sauvegarder
            </Button>
            <Button variant="outline" className="gap-2">
              <RotateCcw className="w-4 h-4" />
              Annuler
            </Button>
          </div>
          <Button variant="ghost" className="text-destructive hover:text-destructive hover:bg-destructive/10 gap-2">
            <AlertTriangle className="w-4 h-4" />
            Réinitialiser
          </Button>
        </div>
      </Card>
    </div>
  )
}