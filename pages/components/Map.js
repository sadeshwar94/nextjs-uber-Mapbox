//import { React } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';
import { useEffect } from 'react';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2FkZXNod2FyIiwiYSI6ImNpeTUwcnNuMzAwNDQzM3FoMnRsdG94dWUifQ.aK-Xih6Lfrglfqwa9n6Z1A';

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.29011, 39.39172],
      zoom: 3.1,
    });
    // addToMap(map);
    if (props.pickupCordinates) {
      addToMap(map, props.pickupCordinates);
    }
  }, [props.pickupCordinates, props.dropoffCordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  // useEffect(() => {

  //   if(pickupCordinates){
  //     addToMap()
  //   }

  // }, [props.pickupCordinates, props.dropoffCordinates]);

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1
`;
