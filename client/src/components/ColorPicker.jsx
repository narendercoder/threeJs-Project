
import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);


  return (
    <>
       <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={[
        "#cccccc",
        "#efbd4e",
        "#80c670",
        "#726de8",
        "#ef674e",
        "#353934",
      ]}
        onChange={(color) => state.color = color.hex}
      />
      
    </>
  )
}

export default ColorPicker