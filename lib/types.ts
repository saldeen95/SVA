export interface Child {
  id: string
  name: string
  birthDate: string
  vaccines: VaccineRecord[]
}

export interface VaccineRecord {
  id: string
  vaccineId: string
  dateGiven?: string
  nextDueDate: string
  status: 'completed' | 'upcoming' | 'overdue'
}

export interface VaccineSchedule {
  id: string
  name: string
  nameAr: string
  ageInMonths: number
  ageLabel: string
  ageLabelAr: string
  vaccines: string[]
  vaccinesAr: string[]
  vaccinesFull: ScheduleVaccine[]
}

export interface ScheduleVaccine {
  id: string
  name: string
  nameAr: string
  sideEffects: SideEffect[]
}

export interface SideEffect {
  nameAr: string
  name: string
  treatment: string
  treatmentAr: string
  severity: 'mild' | 'moderate' | 'severe'
}

export interface HealthCenter {
  id: string
  name: string
  nameAr: string
  address: string
  addressAr: string
  phone: string
  vaccinesAvailable: string[]
  isOpen: boolean
  status: 'متوفر' | 'غير متوفر حالياً'
  latitude: number
  longitude: number
}

export interface Notification {
  id: string
  childId: string
  vaccineId: string
  dueDate: string
  message: string
  messageAr: string
  read: boolean
}
