import { latLng, LatLngExpression, Icon } from 'leaflet';
import { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { useAppSelector } from '../Redux/store';
import { GeoAPIType } from '../Types/GeoAPIType';
import ArrowSVG  from '../assets/icon-location.svg'
import './Map.css'

type MapProps = {
    position: LatLngExpression | undefined,
    isError: boolean
}

const icon = new Icon({
    iconUrl: ArrowSVG,
    iconRetinaUrl: ArrowSVG,
    popupAnchor: [-0, -0]
})


function LocationMarker({ position }: any) {
    const flyToPos = latLng(position[0], position[1]);
    const map = useMap();
    
    useEffect(() => {
        map.locate().on("locationfound", function (e) {
            map.flyTo(flyToPos, map.getZoom());
        });
    })
  
    return position === null ? null : (
      <Marker position={position} icon={icon}>
        <Popup>You are here</Popup>
      </Marker>
    )
}

function Map({ position, isError }: MapProps) {
    const searchValue: GeoAPIType = useAppSelector(state => state.searchValue);
    const render = isError ? <p>There is an Error Please Try again</p> : 
        <MapContainer center={position} zoom={12} scrollWheelZoom={true}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker position={position} />
        </MapContainer>
    
    return (
        <div className='map'>
            {render}
        </div>
    )
}


export default Map
