import React from 'react'
import { useSnapshot } from 'valtio';

import state from '../store';
import { getContrastingColor } from '../config/helpers';
import { AiOutlineArrowLeft, AiOutlineHighlight } from 'react-icons/ai';

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if(type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    } else if(type === "outline") {
      return {
        borderWidth: '1px',
        borderColor: getContrastingColor(snap.color),
        color: getContrastingColor(snap.color)
      }
    }
  }

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
      { title === "Go Back" ?
        <AiOutlineArrowLeft size="1.3em" /> 
        : ( title === "Customize It" ? <AiOutlineHighlight size="1.3em" /> : <></>)
        }
    </button>
  )
}

export default CustomButton