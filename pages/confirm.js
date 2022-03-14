import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';

const confirm = () => {
  const [pickupCordinates, setPickupCoordinates] = useState();
  const [dropoffCordinates, setDropoffCoordinates] = useState();

  const getPickupCoordinates = () => {
    const pickup = 'Osaka';
    //JS fetch method
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1Ijoic2FkZXNod2FyIiwiYSI6ImNpeTUwcnNuMzAwNDQzM3FoMnRsdG94dWUifQ.aK-Xih6Lfrglfqwa9n6Z1A',
          limit: 3,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.features[0].center);
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = () => {
    const dropoff = 'Osaka Suita';
    //JS fetch method
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1Ijoic2FkZXNod2FyIiwiYSI6ImNpeTUwcnNuMzAwNDQzM3FoMnRsdG94dWUifQ.aK-Xih6Lfrglfqwa9n6Z1A',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log('Dropoff');
        console.log(data.features[0].center);
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates();
    getDropoffCoordinates();
  }, []);

  return (
    <Wrapper>
      <Map
        pickupCordinates={pickupCordinates}
        dropoffCordinates={dropoffCordinates}
      />
      <RideContainer>
        Ride Selector Confirm Button
        {/* {pickupCordinates} */}
        {/* {dropoffCordinates} */}
      </RideContainer>
    </Wrapper>
  );
};

export default confirm;

const RideContainer = tw.div`
flex-1`;

const Wrapper = tw.div`
flex h-screen flex-col 
`;
