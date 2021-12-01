import React from 'react'
import styled from 'styled-components'

import { MapContextProvider } from './contexts/Map'
import List from './components/List'
import Map from './components/Map'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`

const App = () => {
  return (
    <MapContextProvider>
      <Container>
        <List />
        <Map />
      </Container>
    </MapContextProvider>
  );
};

export default App;