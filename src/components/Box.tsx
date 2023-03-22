import './Display.css'

type BoxProps = {
    displayText: string,
    headerText: string,
    messages: string | undefined
}

function Box({ displayText, messages, headerText }: BoxProps) {
  return (
      <div className='box'>
        <h1 className='DisplayHeader'>{headerText}</h1>
        <p className='DisplayValue'>{!messages ? displayText : ''}</p>
      </div>
  )
}

export default Box
