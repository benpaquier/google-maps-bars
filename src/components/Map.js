import { useContext } from "react"
import styled from "styled-components"

import { MapContext } from "../contexts/Map"
import GoogleMapReact from 'google-map-react'
import Marker from "./Marker"

const Container = styled.div`
  width: 66.66%;
  height: 100%;
  background: teal;
`

const Map = () => {
  const { position, bars } = useContext(MapContext)

  if (!position) {
    return <p>Loading...</p>
  }

  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultZoom={12}
        center={position}
      >
        {bars.map(bar => (
          <Marker
            lat={bar.latitude}
            lng={bar.longitude}
            bar={bar}
          />
        ))}
      </GoogleMapReact>
    </Container>
  )
}

export default Map