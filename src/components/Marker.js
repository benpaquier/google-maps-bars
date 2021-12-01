import React, { useContext, useEffect, useState } from 'react'

import { FaMapMarker } from 'react-icons/fa'
import styled from 'styled-components'
import { MapContext } from '../contexts/Map'

const Container = styled.div`
  position: relative;
`

const InfoWindow = styled.div`
  width: 200px;
  position: absolute;
  bottom: calc(100% + 10px);
  left: calc(50% - 100px);
  padding: 20px;
  background: white;
  border: solid 1px #aaa;
  border-radius: 5px;
  z-index: 2;
`

const Marker = ({ bar }) => {
  const { selectedBar, setSelectedBar } = useContext(MapContext)
  const [infoWindowVisible, setInfoWindowVisible] = useState(bar.id === selectedBar.id)

  useEffect(() => {
    setInfoWindowVisible(selectedBar.id === bar.id)
  }, [selectedBar])

  const handleMouseEnter = () => {
    setInfoWindowVisible(true)
    setSelectedBar({
      id: bar.id,
      from: "marker"
    })
  }

  const handleMouseLeave = () => {
    setInfoWindowVisible(false)
    setSelectedBar({ id: null })
  }

  return (
    <Container>
      {infoWindowVisible &&
        <InfoWindow>
          <h3>{bar.name}</h3>
          <address>{bar.address}</address>
          <p>La pinte à: {bar.price}€</p>
        </InfoWindow>
      }
      <FaMapMarker
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width: "30px", height: "30px"}}
      />
    </Container>
  )
}

export default Marker