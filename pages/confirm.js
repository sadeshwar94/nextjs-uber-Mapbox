import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import { useRouter } from 'next/router'


const confirm = () => {

        const router = useRouter()
        const { pickup, dropoff } = router.query

        /* console.log("Pickup", pickup);
        console.log("Dropoff", dropoff); */

        const [pickupCordinates, setPickupCoordinates] = useState();
        const [dropoffCordinates, setDropoffCoordinates] = useState();

        const getPickupCoordinates = (pickup) => {
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

  const getDropoffCoordinates = (dropoff) => {
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
        // console.log(data.features[0].center);
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup,dropoff]);

  return (
    <Wrapper>
      <Map
        pickupCordinates={pickupCordinates}
        dropoffCordinates={dropoffCordinates}
      />
      <RideContainer>
        <RideSelector>
          Ride Selector
        </RideSelector>
        <ConfirmButtonContainer>
          Confirm UberX
        </ConfirmButtonContainer>
        
      </RideContainer>
    </Wrapper>
  );
};

export default confirm;

const ConfirmButtonContainer = tw.div`
`

const RideSelector = tw.div`
`

const RideContainer = tw.div`
flex-1`;

const Wrapper = tw.div`
flex h-screen flex-col 
`;
