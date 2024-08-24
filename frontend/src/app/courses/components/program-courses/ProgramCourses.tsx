'use client'
import IconUI from '@/components/ui/icon/Icon'
import { useState } from 'react'
import styles from './ProgramCourses.module.scss'

const data = [
  {
    title: 'БЛОК 1. Погружение в профессию',
    bonus: false
  },
  {
    title: 'БЛОК 2. IT профессии',
    bonus: false
  },
  {
    title: 'БОНУСНЫЕ УРОКИ:',
    bonus: true
  },
  {
    title: 'ВОЗМОЖНОСТЬ ТРУДОУСТРОИТЬСЯ ПОСЛЕ КУРСА:',
    bonus: true
  }
]

const ProgramCourses = () => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  return (
    <div className={styles.ProgramCourses}>
      <h2 className={styles.title}>Программа курса</h2>
      <div className={styles.modules}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`${styles.module} ${item.bonus ? styles.bgRed : ''}`}
          >
            <div 
              onClick={() => setOpenedIndex(openedIndex === index ? null : index)} 
              className={styles.box}
            >
              <div
                className={`${
                  openedIndex === index
                    ? `${styles.boxTitleOpened} ${styles.boxTitle}`
                    : styles.boxTitle
                }`}
              >
                {item.title}
              </div>
              <div className={`${openedIndex === index ? styles.close : styles.plus}`}>
                <IconUI icon='plus' />
              </div>
            </div>
            {openedIndex === index && (
              <ul className={styles.moduleList}>
                <li className={styles.moduleListItem}>
                  Урок 1. Основные правила коммуникации с заказчиком
                </li>
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgramCourses
