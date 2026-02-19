'use client'

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Upload } from "lucide-react"

export function ParametresGeneral() {
  return (
    <div className="px-8 py-6 space-y-6">
      {/* Informations Société */}
      <Card className="border border-border shadow-sm">
        <div className="p-4 bg-gradient-to-r from-primary/5 to-transparent border-b border-border">
          <h2 className="text-sm font-semibold text-[#1A3353]">INFORMATIONS SOCIÉTÉ</h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Nom de la société</Label>
              <Input id="company" defaultValue="SyndicPro Management" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Adresse</Label>
              <Input id="address" defaultValue="15 Rue des Entrepreneurs, Tunis" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input id="phone" defaultValue="+216 71 123 456" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" defaultValue="contact@syndicpro.tn" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Logo</Label>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center border border-border">
                <span className="text-xs text-muted-foreground">Logo</span>
              </div>
              <Button variant="outline" className="gap-2">
                <Upload className="w-4 h-4" />
                Choisir un fichier
              </Button>
              <span className="text-sm text-muted-foreground">logo-actuel.png</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Préférences Générales */}
      <Card className="border border-border shadow-sm">
        <div className="p-4 bg-gradient-to-r from-primary/5 to-transparent border-b border-border">
          <h2 className="text-sm font-semibold text-[#1A3353]">PRÉFÉRENCES GÉNÉRALES</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Langue par défaut</Label>
              <Select defaultValue="fr">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="ar">العربية</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Fuseau horaire</Label>
              <Select defaultValue="tunis">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tunis">Africa/Tunis</SelectItem>
                  <SelectItem value="casablanca">Africa/Casablanca</SelectItem>
                  <SelectItem value="algiers">Africa/Algiers</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Devise</Label>
              <Select defaultValue="mad">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mad">MAD - Dirham marocain</SelectItem>
                  <SelectItem value="tnd">TND - Dinar tunisien</SelectItem>
                  <SelectItem value="eur">EUR - Euro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Format de date</Label>
              <Select defaultValue="dmy">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dmy">JJ/MM/AAAA</SelectItem>
                  <SelectItem value="mdy">MM/DD/AAAA</SelectItem>
                  <SelectItem value="ymd">AAAA-MM-JJ</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}