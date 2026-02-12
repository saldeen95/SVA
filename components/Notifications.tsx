'use client'

import { useEffect, useState } from 'react'
import { Child, VaccineSchedule } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface NotificationsProps {
  child: Child | null
  schedules: VaccineSchedule[]
}

export function NotificationsComponent({
  child,
  schedules,
}: NotificationsProps) {
  const [upcomingVaccines, setUpcomingVaccines] = useState<
    Array<{
      scheduleId: string
      scheduleName: string
      daysUntilDue: number
      vaccines: string[]
    }>
  >([])

  useEffect(() => {
    if (!child) return

    const birthDate = new Date(child.birthDate)
    const today = new Date()

    const upcoming = schedules
      .map((schedule) => {
        const dueDate = new Date(birthDate)
        dueDate.setMonth(dueDate.getMonth() + schedule.ageInMonths)
        const daysUntil = Math.ceil(
          (dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
        )

        return {
          scheduleId: schedule.id,
          scheduleName: schedule.ageLabelAr,
          daysUntilDue: daysUntil,
          vaccines: schedule.vaccinesAr,
          dueDate,
        }
      })
      .filter((item) => item.daysUntilDue >= -30 && item.daysUntilDue <= 60)
      .sort((a, b) => a.daysUntilDue - b.daysUntilDue)

    setUpcomingVaccines(upcoming)
  }, [child, schedules])

  const getNotificationColor = (daysUntil: number) => {
    if (daysUntil < 0) return 'bg-red-50 border-red-200'
    if (daysUntil <= 7) return 'bg-yellow-50 border-yellow-200'
    if (daysUntil <= 30) return 'bg-blue-50 border-blue-200'
    return 'bg-green-50 border-green-200'
  }

  const getNotificationIcon = (daysUntil: number) => {
    if (daysUntil < 0) return '⚠️'
    if (daysUntil <= 7) return '🔔'
    if (daysUntil <= 30) return '📅'
    return '✅'
  }

  const getStatusText = (daysUntil: number) => {
    if (daysUntil < 0)
      return `متأخر بـ ${Math.abs(daysUntil)} يوم - يرجى المراجعة فوراً`
    if (daysUntil === 0) return 'حان موعد التطعيم اليوم!'
    if (daysUntil === 1) return 'غداً موعد التطعيم'
    if (daysUntil <= 7) return `يتبقى ${daysUntil} أيام فقط`
    if (daysUntil <= 30) return `يتبقى ${daysUntil} يوماً`
    return `يتبقى ${Math.ceil(daysUntil / 7)} أسابيع`
  }

  if (!child) {
    return (
      <Card className="border-primary/20">
        <CardContent className="pt-6">
          <p className="text-right text-muted-foreground">
            يرجى إضافة ملف طفل أولاً لمتابعة التطعيمات
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <div className="text-right">
        <h2 className="text-2xl font-bold text-primary mb-2">
          تنبيهات التطعيمات الذكية
        </h2>
        <p className="text-sm text-muted-foreground">
          مواعيد الجرعات القادمة والتذكيرات الهامة
        </p>
      </div>

      {upcomingVaccines.length === 0 ? (
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="pt-6 text-center">
            <p className="text-primary font-semibold">✅ جميع التطعيمات محدثة</p>
            <p className="text-sm text-muted-foreground mt-2">
              لا توجد جرعات قادمة في الوقت الراهن
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {upcomingVaccines.map((notification) => (
            <Card
              key={notification.scheduleId}
              className={`border-2 ${getNotificationColor(
                notification.daysUntilDue
              )}`}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4 text-right">
                  <div className="flex-1">
                    <p className="text-2xl font-bold">
                      {getNotificationIcon(notification.daysUntilDue)}
                    </p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary text-lg">
                      {notification.scheduleName}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {getStatusText(notification.daysUntilDue)}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1 justify-end">
                      {notification.vaccines.map((vaccine) => (
                        <span
                          key={vaccine}
                          className="rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-primary"
                        >
                          {vaccine}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Card className="border-primary/20 bg-primary/10">
        <CardHeader>
          <CardTitle className="text-right text-base">نصائح مهمة</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-right text-sm">
          <p>✓ قم بحفظ مواعيد التطعيمات في تقويمك</p>
          <p>✓ حضر بطاقة التطعيم عند زيارة المركز الصحي</p>
          <p>✓ تأكد من حصول الطفل على قسط كافٍ من الراحة قبل التطعيم</p>
          <p>✓ تواصل مع المركز الصحي إذا كان الطفل مريضاً</p>
        </CardContent>
      </Card>
    </div>
  )
}
