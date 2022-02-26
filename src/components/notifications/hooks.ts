import { uniqueId } from 'lodash'
import { useCallback, useContext, useMemo, useReducer } from 'react'
import { NotificationData } from './types'
import { NotificationContextRoot } from './NotificationProvider'
import { NotificationAction, NotificationState } from './types'

const INIT_STATE: NotificationState = { items: [] }

const reducer = (
  state: NotificationState,
  action: NotificationAction
): NotificationState => {
  switch (action.type) {
    case 'add-notification': {
      return {
        items: [...state.items, action.data],
      }
    }
    case 'remove-notification': {
      const position = state.items.findIndex((item) => item.id === action.data)

      if (position === -1) return state

      state.items.splice(position, 1)
      return {
        items: [...state.items],
      }
    }

    case 'update-notification': {
      const id = action.data.id
      const position = state.items.findIndex((item) => item.id === id)

      // can't find notification record
      if (position === -1) return state

      state.items[position] = {
        ...state.items[position],
        ...action.data,
      }

      // update old notification
      return {
        items: [...state.items],
      }
    }
    default: {
      return state
    }
  }
}

export function useNotificationEnv() {
  const [state, dispatch] = useReducer(reducer, INIT_STATE)

  return [state, dispatch] as const
}

type NotificationConfig = Partial<NotificationData>
const DEFAULT_DURATION = 4000

export function useNotification() {
  const { dispatch } = useContext(NotificationContextRoot)

  const show = useCallback(
    (data: NotificationConfig) => {
      if (!dispatch) return

      const id = uniqueId('notification-')

      dispatch({
        type: 'add-notification',
        data: {
          id,
          type: data.type || 'info',
          title: data.title,
          content: data.content,
          duration: data.duration || DEFAULT_DURATION,
        },
      })

      if (data.duration !== null) {
        setTimeout(() => {
          dispatch({ type: 'remove-notification', data: id })
        }, data.duration || DEFAULT_DURATION)
      }
    },
    [dispatch]
  )

  const remove = useCallback(
    (id: string) => {
      dispatch({ type: 'remove-notification', data: id })
    },
    [dispatch]
  )

  return useMemo(() => {
    return { show, remove }
  }, [show, remove])
}
