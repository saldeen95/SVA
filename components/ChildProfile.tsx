'use client'

import React from "react"

import { useState } from 'react'
import { Child } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ChildProfileProps {
  child: Child | null
  onEdit: (child: Child) => void
  onAdd: (child: Child) => void
}

export function ChildProfile({
  child,
  onEdit,
  onAdd,
}: ChildProfileProps) {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState<Child>(
    child || {
      id: '',
      name: '',
      birthDate: '',
      vaccines: [],
    }
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.birthDate) {
      if (child?.id) {
        onEdit(formData)
      } else {
        onAdd({ ...formData, id: Date.now().toString() })
      }
      setShowForm(false)
    }
  }

  const calculateAge = (birthDate: string) => {
    const today = new Date()
    const birth = new Date(birthDate)
    let months = (today.getFullYear() - birth.getFullYear()) * 12
    months += today.getMonth() - birth.getMonth()
    return months
  }

  const completedVaccines = child?.vaccines.filter(
    (v) => v.status === 'completed'
  ).length || 0
  const upcomingVaccines = child?.vaccines.filter(
    (v) => v.status === 'upcoming'
  ).length || 0

  return (
    <div className="space-y-4">
      {!showForm && child ? (
        <Card className="border-primary/20 bg-gradient-to-br from-white to-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-right text-2xl text-primary">
              {child.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-right">
              <p className="text-sm text-muted-foreground">
                تاريخ الميلاد: {new Date(child.birthDate).toLocaleDateString('ar-SA')}
              </p>
              <p className="text-sm text-muted-foreground">
                العمر: {calculateAge(child.birthDate)} شهر
              </p>
              <div className="mt-4 flex flex-wrap gap-4 justify-end">
                <div className="rounded-lg bg-primary/10 p-3 text-center">
                  <p className="text-2xl font-bold text-primary">
                    {completedVaccines}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    الجرعات المكتملة
                  </p>
                </div>
                <div className="rounded-lg bg-yellow-100 p-3 text-center">
                  <p className="text-2xl font-bold text-yellow-700">
                    {upcomingVaccines}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    الجرعات القادمة
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : showForm ? (
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-right">
              {child ? 'تعديل ملف الطفل' : 'إضافة طفل جديد'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-right text-sm font-medium">
                  اسم الطفل
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1 w-full rounded-lg border border-input bg-white p-2 text-right text-sm"
                  placeholder="أدخل اسم الطفل"
                  required
                />
              </div>
              <div>
                <label className="block text-right text-sm font-medium">
                  تاريخ الميلاد
                </label>
                <input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) =>
                    setFormData({ ...formData, birthDate: e.target.value })
                  }
                  className="mt-1 w-full rounded-lg border border-input bg-white p-2 text-right text-sm"
                  required
                />
              </div>
              <div className="flex gap-2 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowForm(false)
                    setFormData(
                      child || {
                        id: '',
                        name: '',
                        birthDate: '',
                        vaccines: [],
                      }
                    )
                  }}
                >
                  إلغاء
                </Button>
                <Button type="submit" className="bg-primary text-white">
                  {child ? 'تحديث' : 'إضافة'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-2 border-dashed border-primary/30">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="mb-4 text-muted-foreground">لم يتم إضافة أي طفل بعد</p>
              <Button
                onClick={() => {
                  setShowForm(true)
                  setFormData({
                    id: '',
                    name: '',
                    birthDate: '',
                    vaccines: [],
                  })
                }}
                className="bg-primary text-white"
              >
                إضافة طفل جديد
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      {child && (
        <div className="flex gap-2 justify-end">
          <Button
            variant="outline"
            onClick={() => setShowForm(!showForm)}
            className="text-primary"
          >
            {showForm ? 'إلغاء' : 'تعديل'}
          </Button>
        </div>
      )}
    </div>
  )
}
