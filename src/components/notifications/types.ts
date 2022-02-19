import React, { ReactNode } from 'react'

export type NotificationType = 'info' | 'success' | 'failed' | 'loading'

export interface NotificationData {
  // uuid for notification
  id: string
  // notification type
  type: NotificationType
  title: ReactNode
  content: ReactNode
  // display duration time
  duration?: number
}

export interface NotificationState {
  items: NotificationData[]
}

export type NotificationAction =
  | {
      type: 'add-notification'
      data: NotificationData
    }
  | {
      type: 'remove-notification'
      data: string
    }
  | {
      type: 'update-notification'
      data: Partial<NotificationData> & Pick<NotificationData, 'id'>
    }

export interface NotificationContext {
  state: NotificationState
  dispatch: React.Dispatch<NotificationAction>
}
