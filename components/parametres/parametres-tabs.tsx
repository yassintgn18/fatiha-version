'use client'

import { Button } from "@/components/ui/button"
import { Save } from "lucide-react"

export function ParametresHeader() {
  return (
    <div className="px-8 py-6 border-b border-border bg-white">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-[#1A3353]">Paramètres</h1>
        <Button className="bg-primary hover:bg-primary/90 gap-2">
          <Save className="w-4 h-4" />
          Sauvegarder
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">
        Configuration du système - Préférences utilisateur
      </p>
    </div>
  )
}