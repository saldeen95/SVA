'use client'

import { useState } from 'react'
import { Child } from '@/lib/types'
import { sudaneseVaccinationSchedule } from '@/lib/vaccinationSchedule'
import { healthCentersSudan } from '@/lib/healthCenters'
import { ChildProfile } from '@/components/ChildProfile'
import { VaccinationScheduleComponent } from '@/components/VaccinationSchedule'
import { HealthCentersComponent } from '@/components/HealthCenters'
import { SideEffectsGuide } from '@/components/SideEffectsGuide'
import { NotificationsComponent } from '@/components/Notifications'
import { Button } from '@/components/ui/button'

type TabType =
  | 'dashboard'
  | 'profile'
  | 'schedule'
  | 'centers'
  | 'guide'
  | 'notifications'

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard')
  const [child, setChild] = useState<Child | null>(null)

  const handleAddChild = (newChild: Child) => {
    setChild(newChild)
  }

  const handleEditChild = (updatedChild: Child) => {
    setChild(updatedChild)
  }

  const handleVaccineComplete = (scheduleId: string) => {
    if (!child) return

    const schedule = sudaneseVaccinationSchedule.find(
      (s) => s.id === scheduleId
    )
    if (!schedule) return

    const newVaccines = [...child.vaccines]
    schedule.vaccinesFull.forEach((vaccine) => {
      if (!newVaccines.find((v) => v.vaccineId === vaccine.id)) {
        newVaccines.push({
          id: `${vaccine.id}-${Date.now()}`,
          vaccineId: vaccine.id,
          dateGiven: new Date().toISOString().split('T')[0],
          nextDueDate: '',
          status: 'completed',
        })
      }
    })

    setChild({ ...child, vaccines: newVaccines })
  }

  const calculateChildAge = (birthDate: string) => {
    const today = new Date()
    const birth = new Date(birthDate)
    let months = (today.getFullYear() - birth.getFullYear()) * 12
    months += today.getMonth() - birth.getMonth()
    return months
  }

  const childAge = child ? calculateChildAge(child.birthDate) : 0

  const tabs: Array<{ id: TabType; label: string; labelAr: string }> = [
    { id: 'dashboard', label: 'Dashboard', labelAr: 'لوحة التحكم' },
    { id: 'profile', label: 'Profile', labelAr: 'ملف الطفل' },
    { id: 'notifications', label: 'Notifications', labelAr: 'التنبيهات' },
    { id: 'schedule', label: 'Schedule', labelAr: 'جدول التطعيمات' },
    { id: 'centers', label: 'Health Centers', labelAr: 'المراكز الصحية' },
    { id: 'guide', label: 'Side Effects', labelAr: 'الآثار الجانبية' },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-primary/20 bg-white shadow-sm">
        <div className="mx-auto max-w-4xl px-4 py-4">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold text-primary">
              🩹 تطبيق تتبع التطعيمات
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              تطبيق شامل لتتبع جدول تطعيمات الأطفال السوداني
            </p>
          </div>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="sticky top-16 z-40 border-b border-primary/20 bg-white">
        <div className="mx-auto max-w-4xl px-2 overflow-x-auto">
          <div className="flex justify-center gap-1 py-2">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant={activeTab === tab.id ? 'default' : 'outline'}
                className={`whitespace-nowrap text-xs sm:text-sm ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'text-primary hover:bg-primary/10'
                }`}
              >
                <span className="hidden sm:inline">{tab.labelAr}</span>
                <span className="sm:hidden">{tab.label.substring(0, 3)}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="text-right">
              <h2 className="text-2xl font-bold text-primary mb-4">
                لوحة التحكم الرئيسية
              </h2>
            </div>

            {child ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-4">
                  <p className="text-right text-sm text-muted-foreground">
                    اسم الطفل
                  </p>
                  <p className="text-right text-2xl font-bold text-primary mt-2">
                    {child.name}
                  </p>
                </div>

                <div className="rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-4">
                  <p className="text-right text-sm text-muted-foreground">
                    العمر
                  </p>
                  <p className="text-right text-2xl font-bold text-primary mt-2">
                    {childAge} شهر
                  </p>
                </div>

                <div className="rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-4">
                  <p className="text-right text-sm text-muted-foreground">
                    تاريخ الميلاد
                  </p>
                  <p className="text-right text-lg font-bold text-primary mt-2">
                    {new Date(child.birthDate).toLocaleDateString('ar-SA')}
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 p-8 text-center">
                <p className="text-primary font-semibold">
                  🎯 مرحباً بك في تطبيق تتبع التطعيمات
                </p>
                <p className="text-sm text-muted-foreground mt-2 mb-4">
                  يرجى إضافة ملف طفل لبدء متابعة جدول التطعيمات
                </p>
                <Button
                  onClick={() => setActiveTab('profile')}
                  className="bg-primary text-white"
                >
                  إضافة طفل جديد
                </Button>
              </div>
            )}

            <div className="mt-8 space-y-4">
              <h3 className="text-right text-xl font-bold text-primary">
                المميزات الرئيسية
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-primary/5 p-4 border border-primary/20 text-right">
                  <p className="font-semibold text-primary">📋 ملف الطفل</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    إدارة معلومات الطفل الأساسية وتتبع التطعيمات
                  </p>
                </div>
                <div className="rounded-lg bg-primary/5 p-4 border border-primary/20 text-right">
                  <p className="font-semibold text-primary">🔔 التنبيهات الذكية</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    تذكيرات تلقائية لمواعيد التطعيمات القادمة
                  </p>
                </div>
                <div className="rounded-lg bg-primary/5 p-4 border border-primary/20 text-right">
                  <p className="font-semibold text-primary">📅 الجدول السوداني</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    جدول معتمد من وزارة الصحة الاتحادية
                  </p>
                </div>
                <div className="rounded-lg bg-primary/5 p-4 border border-primary/20 text-right">
                  <p className="font-semibold text-primary">🏥 المراكز الصحية</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    قائمة بالمراكز الصحية القريبة والمتخصصة
                  </p>
                </div>
                <div className="rounded-lg bg-primary/5 p-4 border border-primary/20 text-right">
                  <p className="font-semibold text-primary">⚕️ الآثار الجانبية</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    دليل شامل للآثار الجانبية وطرق التعامل
                  </p>
                </div>
                <div className="rounded-lg bg-primary/5 p-4 border border-primary/20 text-right">
                  <p className="font-semibold text-primary">🌍 دعم RTL</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    واجهة عربية كاملة وموثوقة وآمنة
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <ChildProfile
            child={child}
            onAdd={handleAddChild}
            onEdit={handleEditChild}
          />
        )}

        {activeTab === 'notifications' && (
          <NotificationsComponent
            child={child}
            schedules={sudaneseVaccinationSchedule}
          />
        )}

        {activeTab === 'schedule' && (
          <VaccinationScheduleComponent
            schedules={sudaneseVaccinationSchedule}
            childAge={childAge}
            onVaccineComplete={handleVaccineComplete}
          />
        )}

        {activeTab === 'centers' && (
          <HealthCentersComponent centers={healthCentersSudan} />
        )}

        {activeTab === 'guide' && (
          <SideEffectsGuide schedules={sudaneseVaccinationSchedule} />
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-primary/20 bg-primary/5 py-6 mt-12">
        <div className="mx-auto max-w-4xl px-4 text-center text-sm text-muted-foreground">
          <p>
            تم تطوير هذا التطبيق لدعم الأمهات السودانيات في متابعة تطعيمات أطفالهن
          </p>
          <p className="mt-2 text-xs">
            جدول التطعيمات معتمد من وزارة الصحة الاتحادية السودانية
          </p>
          <p className="mt-2">© 2024 تطبيق تتبع التطعيمات - Sudan Vaccination Tracker</p>
        </div>
      </footer>
    </main>
  )
}
