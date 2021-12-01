import { createContext, useState, useEffect } from "react"

import barsArray from '../bars.json'

const MapContext = createContext({})

const MapContextProvider = ({ children }) => {
  const [bars, setBars] = useState(barsArray)
  const [position, setPosition] = useState(null)
  const [selectedBar, setSelectedBar] = useState({ id: null })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location => {
      setPosition({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      })
    }, 
    error => {
      console.log(error)
    })
  }, [])

  const value = {
    bars,
    position,
    selectedBar,
    setSelectedBar,
    setPosition
  }

  return (
    <MapContext.Provider value={value}>
      {children}
    </MapContext.Provider>
  )
}

export {
  MapContext,
  MapContextProvider
}