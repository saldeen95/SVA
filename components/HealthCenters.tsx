'use client'

import { HealthCenter } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface HealthCentersProps {
  centers: HealthCenter[]
}

export function HealthCentersComponent({ centers }: HealthCentersProps) {
  const [selectedCenter, setSelectedCenter] = useState<string | null>(null)

  return (
    <div className="space-y-4">
      <div className="text-right">
        <h2 className="text-2xl font-bold text-primary mb-2">
          المراكز الصحية القريبة
        </h2>
        <p className="text-sm text-muted-foreground">
          المراكز الصحية المتخصصة في تطعيم الأطفال
        </p>
      </div>

      <div className="space-y-3">
        {centers.map((center) => (
          <Card
            key={center.id}
            className={`border-2 cursor-pointer transition-all ${
              center.isOpen
                ? 'border-primary/30 hover:border-primary/60'
                : 'border-gray-300 opacity-75'
            }`}
            onClick={() =>
              setSelectedCenter(selectedCenter === center.id ? null : center.id)
            }
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 text-right">
                  <CardTitle className="text-lg text-primary">
                    {center.nameAr}
                  </CardTitle>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {center.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    📍 {center.addressAr}
                  </p>
                </div>
                <div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap ${
                      center.isOpen
                        ? 'bg-primary text-white'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {center.status}
                  </span>
                </div>
              </div>
            </CardHeader>

            {selectedCenter === center.id && (
              <CardContent className="space-y-4 border-t pt-4">
                <div className="text-right space-y-2">
                  <p className="font-semibold text-primary">جهات الاتصال:</p>
                  <p className="text-sm">☎️ {center.phone}</p>

                  <div className="mt-4">
                    <p className="font-semibold text-primary mb-2">
                      اللقاحات المتوفرة:
                    </p>
                    <div className="flex flex-wrap gap-2 justify-end">
                      {center.vaccinesAvailable.map((vaccine) => (
                        <span
                          key={vaccine}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {vaccine}
                        </span>
                      ))}
                    </div>
                  </div>

                  {center.isOpen && (
                    <Button
                      onClick={() => {
                        // Phone call or map navigation
                        window.location.href = `tel:${center.phone}`
                      }}
                      className="mt-4 w-full bg-primary text-white"
                    >
                      اتصل الآن
                    </Button>
                  )}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
