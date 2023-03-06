import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Map = ({ apiKey }) => {
  const mapOptions = {
    center: {lat: 61.204483, lng: 92.723923},
    zoom : 1,
    gestureHandling: "greedy",
    styles: [
              {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.landcover",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": -2
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "lightness": -78
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
    ]
  };
  
  
  return (
    <div style={{ height: '95vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={mapOptions.center}
        defaultZoom={mapOptions.zoom}
        options={mapOptions}
      >
        <Marker
          lat={59.955413}
          lng={30.337844}
          name="St.Petersburg"
          color="blue"
          url="https://en.wikipedia.org/wiki/Saint_Petersburg"
        />
        <Marker
          lat={55.7558}
          lng={37.6173}
          name="Moscow"
          color="blue"
          url="http://en.kremlin.ru/"
        />
        <Marker
          lat={53.192062}
          lng={107.345824}
          name="Baikal"
          color="blue"
          url="https://en.wikipedia.org/wiki/Lake_Baikal"
        />
        <Marker
          lat={43.115266}
          lng={131.885301}
          name="Vladivostok"
          color="blue"
          url="https://en.wikipedia.org/wiki/Vladivostok"
        />
        <Marker
          lat={54.007122}
          lng={86.637275}
          name="Kiselyovsk"
          color="blue"
          url="https://en.wikipedia.org/wiki/Kiselyovsk"
        />
        <Marker
          lat={52.927253}
          lng={78.571771}
          name="Yarovoye"
          color="blue"
          url="https://en.wikipedia.org/wiki/Yarovoye,_Altai_Krai"
        />
        <Marker
          lat={43.582697}
          lng={39.721771}
          name="Sochi"
          color="blue"
          url="https://en.wikipedia.org/wiki/Sochi"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;