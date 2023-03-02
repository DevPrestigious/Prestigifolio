import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="St.Petersburg"
        />
        <AnyReactComponent
          lat={55.7558}
          lng={37.6173}
          text="Moscow"
        />
        <AnyReactComponent
          lat={53.192062}
          lng={107.345824}
          text="Baikal"
        />
        <AnyReactComponent
          lat={43.115266}
          lng={131.885301}
          text="Vladivostok"
        />
        <AnyReactComponent
          lat={54.007122}
          lng={86.637275}
          text="Kiselovsk"
        />
        <AnyReactComponent
          lat={52.927253}
          lng={78.571771}
          text="Yarovoye"
        />
        <AnyReactComponent
          lat={43.582697}
          lng={39.721771}
          text="Sochi"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;