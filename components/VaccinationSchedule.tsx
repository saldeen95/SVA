'use client'

import { VaccineSchedule } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface VaccinationScheduleProps {
  schedules: VaccineSchedule[]
  onVaccineComplete: (scheduleId: string) => void
  childAge: number
}

export function VaccinationScheduleComponent({
  schedules,
  onVaccineComplete,
  childAge,
}: VaccinationScheduleProps) {
  const [expandedSchedule, setExpandedSchedule] = useState<string | null>(null)

  const getStatusColor = (scheduleAge: number, childAge: number) => {
    if (childAge >= scheduleAge + 1) return 'bg-primary/10 border-primary/30'
    if (childAge >= scheduleAge) return 'bg-yellow-50 border-yellow-200'
    return 'bg-gray-50 border-gray-200'
  }

  const getStatusLabel = (scheduleAge: number, childAge: number) => {
    if (childAge >= scheduleAge + 1) return 'مكتمل'
    if (childAge >= scheduleAge) return 'قادم قريباً'
    return 'قريباً'
  }

  return (
    <div className="space-y-4">
      <div className="text-right">
        <h2 className="text-2xl font-bold text-primary mb-4">
          جدول التطعيمات السوداني
        </h2>
        <p className="text-sm text-muted-foreground">
          جدول معتمد من وزارة الصحة الاتحادية السودانية
        </p>
      </div>

      <div className="space-y-3">
        {schedules.map((schedule) => (
          <Card
            key={schedule.id}
            className={`cursor-pointer border-2 transition-all ${getStatusColor(
              schedule.ageInMonths,
              childAge
            )}`}
            onClick={() =>
              setExpandedSchedule(
                expandedSchedule === schedule.id ? null : schedule.id
              )
            }
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex-1 text-right">
                  <CardTitle className="text-lg text-primary">
                    {schedule.ageLabelAr}
                  </CardTitle>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {schedule.ageLabel}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      childAge >= schedule.ageInMonths + 1
                        ? 'bg-primary text-white'
                        : childAge >= schedule.ageInMonths
                          ? 'bg-yellow-400 text-white'
                          : 'bg-gray-300 text-white'
                    }`}
                  >
                    {getStatusLabel(schedule.ageInMonths, childAge)}
                  </span>
                </div>
              </div>
            </CardHeader>

            {expandedSchedule === schedule.id && (
              <CardContent className="space-y-4 border-t pt-4">
                <div className="space-y-2 text-right">
                  {schedule.vaccinesFull.map((vaccine) => (
                    <div
                      key={vaccine.id}
                      className="rounded-lg bg-white p-3 border border-primary/10"
                    >
                      <h4 className="font-semibold text-primary">
                        {vaccine.nameAr}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {vaccine.name}
                      </p>

                      {vaccine.sideEffects.length > 0 && (
                        <details className="mt-2 cursor-pointer">
                          <summary className="text-sm font-medium text-primary hover:underline">
                            الآثار الجانبية المتوقعة
                          </summary>
                          <div className="mt-2 space-y-2 bg-primary/5 p-2 rounded text-xs text-right">
                            {vaccine.sideEffects.map((effect, idx) => (
                              <div key={idx} className="border-r-2 border-primary pr-2">
                                <p className="font-medium">{effect.nameAr}</p>
                                <p className="text-muted-foreground text-xs mt-1">
                                  كيفية التعامل: {effect.treatmentAr}
                                </p>
                              </div>
                            ))}
                          </div>
                        </details>
                      )}
                    </div>
                  ))}
                </div>

                {childAge >= schedule.ageInMonths && childAge < schedule.ageInMonths + 1 && (
                  <Button
                    onClick={() => onVaccineComplete(schedule.id)}
                    className="w-full bg-primary text-white"
                  >
                    تسجيل اكتمال الجرعات
                  </Button>
                )}
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
