import clsx from 'clsx'
import React, { FC } from 'react'
import { NotificationData, NotificationType } from './types'
import { InformationCircleIcon, XCircleIcon } from '@heroicons/react/outline'
import { Loading } from '@components/Loading'

interface NotificationItemProps extends NotificationData {
  className?: string
}

const NotificationIcon = React.memo<{ type: NotificationType }>(({ type }) => {
  console.log(type)

  if (type === 'loading') {
    return <Loading />
  }

  if (type === 'error') {
    return <XCircleIcon className="text-ea4e34 w-32 h-32" />
  }

  return <InformationCircleIcon className="w-32 h-32 text-2539f4" />
})

export const NotificationItem: FC<NotificationItemProps> = React.memo(
  ({ className, type, title, content }) => {
    const rootClass =
      'bg-fff rounded px-24 py-16 shadow-md w-[360px] rounded mb-24 flex'

    return (
      <div className={clsx(rootClass, className)}>
        <div className="mr-16 flex items-center justify-center">
          <NotificationIcon type={type} />
        </div>
        <div>
          {title ? (
            <div className="text-20 text-2e2e2e font-bold leading-24 break-all">
              {title}
            </div>
          ) : null}
          {content ? (
            <div className="text-16 mt-4 break-all">{content}</div>
          ) : null}
        </div>
      </div>
    )
  }
)
