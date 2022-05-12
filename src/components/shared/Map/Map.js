import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from 'react-google-maps';

import mapStyles from './mapStyles';

const Map = withScriptjs(withGoogleMap(() => {
    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: 49.28823054546794, lng: 23.429325546713372 }}
            defaultOptions={{ styles: mapStyles }}
        >
            <Marker
                position={{
                    lat: 49.28823054546794,
                    lng: 23.429325546713372
                }}
                icon={{
                    url: '/logoWithoutText.svg',
                    scaledSize: new window.google.maps.Size(36, 36)
                }}
            />
        </GoogleMap>
    );
}))

export default Map;
