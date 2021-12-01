import { useContext } from "react"
import styled from "styled-components"

import ListItem from "./ListItem"
import { MapContext } from "../contexts/Map"

const Container = styled.div`
  width: 33.34%;
  height: 100%;
  overflow-y: scroll;
  padding: 10px;
`

const List = () => {
  const { bars } = useContext(MapContext)

  return (
    <Container>
      {bars.map(bar => (
        <ListItem key={bar.id} bar={bar} />
      ))}
    </Container>
  )
}

export default List