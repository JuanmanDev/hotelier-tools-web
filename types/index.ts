// Types for Hotelier Tools application

export interface Tool {
  id: string
  name: string
  description: string
  category: 'chrome-extension' | 'automation'
  features: string[]
  icon: string
  status: 'available' | 'coming-soon' | 'beta'
  documentation?: string
  linkTo?: string
}

export interface Feature {
  title: string
  description: string
  icon: string
  benefits: string[]
}

export interface AnimationStep {
  id: string
  title: string
  description: string
  icon: string
  status: 'pending' | 'in-progress' | 'completed' | 'error'
  duration: number
}

export interface HotelData {
  reservations: Reservation[]
  invoices: Invoice[]
  rooms: Room[]
}

export interface Reservation {
  id: string
  guestName: string
  checkIn: Date
  checkOut: Date
  roomNumber: string
  status: 'confirmed' | 'pending' | 'cancelled' | 'checked-in' | 'checked-out'
  paymentStatus: 'paid' | 'pending' | 'partial' | 'failed'
  source: 'website' | 'booking' | 'direct' | 'other'
  amount: number
  commission?: number
}

export interface Invoice {
  id: string
  reservationId: string
  amount: number
  date: Date
  status: 'draft' | 'sent' | 'paid' | 'overdue'
  customerInfo: CustomerInfo
  missingFields: string[]
}

export interface CustomerInfo {
  name: string
  email: string
  phone?: string
  documentId?: string
  address?: string
}

export interface Room {
  number: string
  type: string
  capacity: number
  price: number
  availability: boolean
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface NotificationData {
  type: 'info' | 'success' | 'warning' | 'error'
  title: string
  message: string
  timestamp: Date
}
