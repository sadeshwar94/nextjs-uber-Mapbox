import { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';

const confirm = () => {
  const getCoordinates = () => {
    const location = 'Suita Osaka';
    //JS fetch method
    fetch(
      'https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?' +
        new URLSearchParams({
          access_token:
            'pk.eyJ1Ijoic2FkZXNod2FyIiwiYSI6ImNpeTUwcnNuMzAwNDQzM3FoMnRsdG94dWUifQ.aK-Xih6Lfrglfqwa9n6Z1A',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    getCoordinates();
  }, []);

  return (
    <Wrapper>
      <Map />
      <RideContainer>Ride Selector Confirm Button</RideContainer>
    </Wrapper>
  );
};

export default confirm;

const RideContainer = tw.div`
flex-1`;

const Wrapper = tw.div`
flex h-screen flex-col 
`;
