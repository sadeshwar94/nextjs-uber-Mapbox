import { useEffect } from 'react';
//import { React } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2FkZXNod2FyIiwiYSI6ImNpeTUwcnNuMzAwNDQzM3FoMnRsdG94dWUifQ.aK-Xih6Lfrglfqwa9n6Z1A';

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      //style: 'mapbox://styles/mapbox/streets-v11',
      style: 'mapbox://styles/sadeshwar/cl0q9hxxb002214p2jss20mbz',
      center: [135.513, 34.7662],
      zoom: 10.1,
    });
    // addToMap(map);
    //get two cordinates in the map
    if (props.pickUpCoordinates) {
      addToMap(map, props.pickUpCoordinates);
    }

    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates);
    }

    if (props.pickUpCoordinates && props.dropoffCoordinates) {
      // auto zoom only for markers
      map.fitBounds([props.dropoffCoordinates, props.pickUpCoordinates], {
        padding: 60,
      });
    }
  }, [props.pickUpCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1 h-1/2
`;
