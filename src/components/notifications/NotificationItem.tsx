import clsx from 'clsx'
import React, { FC } from 'react'
import { NotificationData } from './types'
import { InformationCircleIcon, XCircleIcon } from '@heroicons/react/outline'

interface NotificationItemProps extends NotificationData {
  className?: string
}

export const NotificationItem: FC<NotificationItemProps> = React.memo(
  ({ className, type, title, content }) => {
    const rootClass =
      'bg-fff rounded px-24 py-16 shadow-md min-w-[360px] rounded mb-24 flex'

    return (
      <div className={clsx(rootClass, className)}>
        <div className="mr-16 flex items-center justify-center">
          {type === 'failed' ? (
            <XCircleIcon width={32} stroke="#B00020" />
          ) : (
            <InformationCircleIcon width={32} stroke="#2e2e2e" />
          )}
        </div>
        <div>
          {title ? (
            <div className="text-20 text-2e2e2e font-bold leading-24">
              {title}
            </div>
          ) : null}
          {content ? <div className="text-18 mt-4">{content}</div> : null}
        </div>
      </div>
    )
  }
)
