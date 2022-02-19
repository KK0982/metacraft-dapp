import React from 'react'
import { useNotificationEnv } from './hooks'
import { NotificationItem } from './NotificationItem'
import { NotificationContext } from './types'

export const NotificationContextRoot = React.createContext<NotificationContext>(
  {
    // initialize state
    state: { items: [] },
  } as NotificationContext
)

export const NotificationProvider = React.memo(({ children }) => {
  const [state, dispatch] = useNotificationEnv()

  return (
    <NotificationContextRoot.Provider value={{ state, dispatch }}>
      {children}
      <div className="absolute top-24 right-24">
        {state.items.map((item) => (
          <NotificationItem {...item} key={item.id} />
        ))}
      </div>
    </NotificationContextRoot.Provider>
  )
})
