/// <reference types="@types/google.maps" />
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api'
import { officeConfig } from '../../config/site'

const officeLocation = { lat: 34.042922302408485, lng: -118.46976876441772 }

function GoogleMapComponent() {
  const { address } = officeConfig
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAPS_API_KEY,
  })
console.log('import.meta.env.VITE_GOOGLEMAPS_API_KEY', import.meta.env.VITE_GOOGLEMAPS_API_KEY)
  return isLoaded ? (
    <>
      <div className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-12 text-center">
          <h1 className="gradient-header text-2xl md:text-3xl cinzel"><span className="text-lg whitespace-nowrap tracking-normal md:tracking-widest">Conveniently located in</span><br/> West Los Angeles</h1>
          <div className="pt-4 text-sky-900 font-light">
            { address.street1 }<br/>
            { address.city }, { address.state } { address.zip }
          </div>
        </div>
      </div>
      <GoogleMap
        mapContainerClassName="map-container"
        center={officeLocation}
        zoom={15}
        options={{
          styles: [
            {
              "featureType": "landscape",
              "elementType": "geometry.stroke",
              stylers: [
                {
                  "visibility": "on",
                  "color": "#000000"
                }
              ]
            },
            {
              "featureType": "poi",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#cccccc"
                },
                {
                  "visibility": "on"
                }
              ]
            },
        ]
      }}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <MarkerF 
          position={officeLocation} 
          title="Rangel Chao Dental"
          onClick={() => {
            window.open(officeConfig.address.href);
          }}
        />
      </GoogleMap>
    </>
  ) : (
    <></>
  )
}

export default GoogleMapComponent