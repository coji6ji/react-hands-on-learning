import React from 'react'
import Color from './Color'
import { useColors } from './ColorProvider'

export default function ColorList() {
  const { colors } = useColors()
  if (!colors.length) return <div>No Colors Listed. （Add a color）</div>
  return (
    <div>
      {colors.map(color => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  )
}
