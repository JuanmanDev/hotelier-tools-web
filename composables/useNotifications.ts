import type { NotificationData } from '~/types'

export const useNotifications = () => {
  const notifications = ref<NotificationData[]>([])

  const addNotification = (notification: Omit<NotificationData, 'timestamp'>) => {
    const newNotification: NotificationData = {
      ...notification,
      timestamp: new Date()
    }
    
    notifications.value.push(newNotification)
    
    // Auto-remove after 5 seconds for non-error notifications
    if (notification.type !== 'error') {
      setTimeout(() => {
        removeNotification(newNotification.timestamp)
      }, 5000)
    }
  }

  const removeNotification = (timestamp: Date) => {
    const index = notifications.value.findIndex(n => n.timestamp === timestamp)
    if (index > -1) {
      notifications.value.splice(index, 1)
    }
  }

  const clearAll = () => {
    notifications.value = []
  }

  const showSuccess = (title: string, message: string) => {
    addNotification({ type: 'success', title, message })
  }

  const showError = (title: string, message: string) => {
    addNotification({ type: 'error', title, message })
  }

  const showWarning = (title: string, message: string) => {
    addNotification({ type: 'warning', title, message })
  }

  const showInfo = (title: string, message: string) => {
    addNotification({ type: 'info', title, message })
  }

  return {
    notifications: readonly(notifications),
    addNotification,
    removeNotification,
    clearAll,
    showSuccess,
    showError,
    showWarning,
    showInfo
  }
}
