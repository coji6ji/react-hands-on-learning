import React, { useState } from 'react'
import colorData from './color-data.json'
import ColorList from './ColorList'
import AddColorForm from './AddColorForm'
import { v4 } from 'uuid'

export default function App() {
  const [colors, setColors] = useState(colorData)

  const removeColor = id => {
    const color = colors.filter(color => color.id !== id)
    setColors(color)
  }

  const rateColor = (id, rating) => {
    const color = colors.map(color =>
      color.id === id ? { ...color, rating } : color
    )
    setColors(color)
  }

  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color,
            },
          ]
          setColors(newColors)
        }}
      />
      <ColorList
        colors={colors}
        onRemoveColor={removeColor}
        onRateColor={rateColor}
      />
    </>
  )
}
