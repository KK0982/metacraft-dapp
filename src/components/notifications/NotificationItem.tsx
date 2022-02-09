import clsx from 'clsx'
import React, { FC } from 'react'
import { NotificationType } from '.'
import { NotificationData } from './types'
import InformationCircleIcon from '@heroicons/react/outline/InformationCircleIcon';

interface NotificationItemProps extends NotificationData {
  className?: string
}

export const NotificationItem: FC<NotificationItemProps> = React.memo(
  ({ className, type, title, content }) => {
    const rootClass =
      'bg-fff rounded px-24 py-16 shadow-md min-w-[320px] rounded mb-24 flex'
    return (
      <div className={clsx(rootClass, className)}>
        <div className='mr-8'>
        <InformationCircleIcon width={32} stroke='#2e2e2e'/>
        </div>
        {title ? (
          <div className="text-18 text-2e2e2e font-medium">{title}</div>
        ) : null}
        {content ? <div>{content}</div> : null}
      </div>
    )
  }
)
