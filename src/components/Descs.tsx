import styled from 'styled-components'
import { useState } from 'react'

import useFadeIn from 'hooks/useFadeIn'
import useCountUp from 'hooks/useCountUp'
import FadeInInterface from 'types/FadeInInterface'

const DescNumberList = styled.ul<FadeInInterface>`
  margin-bottom: 50px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.translateY ? '0' : '10px')});
  transition: all 700ms ease-in-out 100ms;

  strong {
    font-weight: 700;
  }

  &::after {
    content: '';
    display: block;
  }
`

const DescNumber = styled.li`
  font-size: 31px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`

function Descs() {
  const [opacity, translateY] = useFadeIn()
  const [userCount, setUserCount] = useState(0)
  const [reviewCount, setReviewCount] = useState(0)
  const [storeCount, setStoreCount] = useState(0)

  useCountUp(750, (currentCount: number) =>
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setUserCount((_prevCount: number) => currentCount),
  )
  useCountUp(100, (currentCount: number) =>
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setReviewCount((_prevCount: number) => currentCount),
  )
  useCountUp(470, (currentCount: number) =>
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setStoreCount((_prevCount: number) => currentCount),
  )

  return (
    <DescNumberList isVisible={opacity} translateY={translateY}>
      <DescNumber>
        <strong>{userCount}만 명</strong>의 여행자
      </DescNumber>
      <DescNumber>
        <strong>{reviewCount}만 개</strong>의 여행 리뷰
      </DescNumber>
      <DescNumber>
        <strong>{storeCount}만 개</strong>의 여행 일정
      </DescNumber>
    </DescNumberList>
  )
}

export default Descs
