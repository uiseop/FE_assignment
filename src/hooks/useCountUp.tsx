import { useEffect, useRef } from 'react'

import EaseOutCubic from 'utils/EaseOutCubic'

const useCountUp = (
  target: number,
  setCount: (value: number) => void,
): void => {
  const requestRef = useRef<number>(0)
  const startTimeRef = useRef<number>(0)
  const duration = 2000
  const animate = (timeStamp: number): void => {
    if (!startTimeRef.current) {
      startTimeRef.current = timeStamp
    }
    const runTime = timeStamp - startTimeRef.current
    const relativeProgress = runTime / duration
    const easeProgress = EaseOutCubic(relativeProgress)
    const currentCount = Math.round(target * Math.min(easeProgress, 1))
    setCount(currentCount)
    if (runTime < duration) {
      requestRef.current = requestAnimationFrame(animate)
    }
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, [])
}

export default useCountUp
