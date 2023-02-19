import React from 'react'
import * as icon from 'bobi-icon-svgr'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { listIcon } from './data'
import styles from './Home.module.css'
import 'react-notifications/lib/notifications.css';

export default function Home() {
  const handleClick = (value) => {
    navigator.clipboard.writeText(value)
    NotificationManager.success('Copied!')
  }

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.title}>Library Icon SVGR</div>
      </div>
      <div className={styles.listIcon}>
        {listIcon.map((i, idx) => {
          const Icon = icon[i]
          return (
            <div className={styles.icons} key={idx} onClick={() => handleClick(i)}>
              <Icon className={styles.icon} />
              <div className={styles.iconName}>{i}</div>
            </div>
          )
        })}
      </div>
      <NotificationContainer/>
    </div>
  )
}

