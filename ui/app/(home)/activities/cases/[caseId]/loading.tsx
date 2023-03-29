import styles from '@/styles/global.module.scss'

export default async function Loading() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return (
    <div>
      <svg
        className={styles.spinner}
        width="65px"
        height="65px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={styles.path}
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        ></circle>
      </svg>
    </div>
  )
}
