import { useAppSelector } from '../Redux/store';
import { GeoAPIType } from '../Types/GeoAPIType';
import Box from './Box';
import './Display.css'

function Display() {
  const searchValue: GeoAPIType = useAppSelector(state => state.searchValue);
  let ip: string = '', city: string = '', timezone: string = '', isp: string = '';

  if(!searchValue.messages) {
    ip = searchValue.ip;
    city = searchValue.location.city
    timezone = searchValue.location.timezone;
    isp = searchValue.isp;
  }

  return (
    <div className="Display">
      <Box displayText={ip} headerText='IP ADDRESS' messages={searchValue.messages}/>
      <Box displayText={city} headerText='LOCATION' messages={searchValue.messages}/>
      <Box displayText={timezone} headerText='TIMEZONE' messages={searchValue.messages}/>
      <Box displayText={isp} headerText='ISP' messages={searchValue.messages}/>
    </div>
  )
}

export default Display
