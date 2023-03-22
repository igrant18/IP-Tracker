import { useAppSelector } from '../Redux/store';
import { GeoAPIType } from '../Types/GeoAPIType';
import './Display.css'

function Display() {
  const searchValue: GeoAPIType = useAppSelector(state => state.searchValue);
  return (
    <div className="Display">
      <div className='box'>
        <h1 className='DisplayHeader'>IP ADDRESS</h1>
        <p className='DisplayValue'>{!searchValue.messages ? searchValue.ip : ''}</p>
      </div>
      <div className='box'>
        <h1 className='DisplayHeader'>LOCATION</h1>
        <p className='DisplayValue'>{!searchValue.messages ? searchValue.location.city : ''}</p>
      </div>
      <div className='box'>
        <h1 className='DisplayHeader'>TIMEZONE</h1>
        <p className='DisplayValue'>{!searchValue.messages ? searchValue.location.timezone : ''}</p>
      </div>
      <div className='box'>
        <h1 className='DisplayHeader'>ISP</h1>
        <p className='DisplayValue'>{!searchValue.messages ? searchValue.isp : ''}</p>
      </div>
    </div>
  )
}

export default Display
