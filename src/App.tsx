import styled from 'styled-components'
import { useEffect } from 'react'

import GlobalStyle from './styles/GlobalStyle'
import TripleLogo from './components/TripleLogo'
import Descs from './components/Descs'
import Awards from './components/Awards'

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  min-width: 1200px;
  justify-content: center;
  align-items: center;
`

const DescWrapper = styled.div`
  margin-left: 220px;
`

function App() {
  useEffect(() => {
    document.title = '트리플: 여행의 모든 것, 트리플로 한 번에'
  }, [])

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <TripleLogo />
        <DescWrapper>
          <Descs />
          <Awards />
        </DescWrapper>
      </Wrapper>
    </>
  )
}

export default App
