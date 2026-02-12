'use client'

import { VaccineSchedule } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'

interface SideEffectsGuideProps {
  schedules: VaccineSchedule[]
}

export function SideEffectsGuide({ schedules }: SideEffectsGuideProps) {
  const [selectedVaccine, setSelectedVaccine] = useState<string | null>(null)

  // Flatten all vaccines from all schedules
  const allVaccines = schedules.flatMap((schedule) =>
    schedule.vaccinesFull.map((vaccine) => ({
      ...vaccine,
      scheduleAge: schedule.ageLabelAr,
    }))
  )

  return (
    <div className="space-y-4">
      <div className="text-right">
        <h2 className="text-2xl font-bold text-primary mb-2">
          دليل الآثار الجانبية
        </h2>
        <p className="text-sm text-muted-foreground">
          معلومات شاملة عن الآثار الجانبية المتوقعة لكل لقاح وكيفية التعامل معها
        </p>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {allVaccines.map((vaccine) => (
          <Card
            key={vaccine.id}
            className="border-primary/20 cursor-pointer hover:border-primary/50 transition-all"
            onClick={() =>
              setSelectedVaccine(
                selectedVaccine === vaccine.id ? null : vaccine.id
              )
            }
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 text-right">
                  <CardTitle className="text-base text-primary">
                    {vaccine.nameAr}
                  </CardTitle>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {vaccine.name} • {vaccine.scheduleAge}
                  </p>
                </div>
              </div>
            </CardHeader>

            {selectedVaccine === vaccine.id && (
              <CardContent className="space-y-4 border-t pt-4">
                <div className="space-y-4 text-right">
                  <div>
                    <h4 className="font-bold text-primary mb-3">
                      الآثار الجانبية المتوقعة:
                    </h4>
                    <div className="space-y-3">
                      {vaccine.sideEffects.map((effect, idx) => (
                        <div
                          key={idx}
                          className="rounded-lg bg-gradient-to-l from-primary/5 to-transparent border-r-4 border-primary p-4"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <p className="font-semibold text-primary">
                                {effect.nameAr}
                              </p>
                              <p className="mt-1 text-sm text-muted-foreground">
                                {effect.name}
                              </p>

                              <div className="mt-3 rounded-lg bg-white p-3 border border-primary/10">
                                <p className="text-xs font-bold text-primary mb-2">
                                  كيفية التعامل الصحيح:
                                </p>
                                <p className="text-sm leading-relaxed">
                                  {effect.treatmentAr}
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">
                                  {effect.treatment}
                                </p>
                              </div>
                            </div>
                            <div>
                              <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap ${
                                  effect.severity === 'mild'
                                    ? 'bg-green-100 text-green-700'
                                    : effect.severity === 'moderate'
                                      ? 'bg-yellow-100 text-yellow-700'
                                      : 'bg-red-100 text-red-700'
                                }`}
                              >
                                {effect.severity === 'mild'
                                  ? 'طفيف'
                                  : effect.severity === 'moderate'
                                    ? 'متوسط'
                                    : 'حاد'}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 rounded-lg bg-primary/10 p-4 border border-primary/20 text-right">
                    <p className="text-sm font-semibold text-primary mb-2">
                      💡 نصيحة مهمة:
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      معظم الآثار الجانبية خفيفة وطبيعية وتدل على أن الجهاز المناعي
                      يعمل بشكل جيد. إذا استمرت الأعراض لأكثر من 3 أيام أو أصبحت
                      شديدة، يرجى التواصل مع الطبيب فوراً.
                    </p>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
