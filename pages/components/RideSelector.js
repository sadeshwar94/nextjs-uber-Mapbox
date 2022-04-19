import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { carList } from '../data/carList';

const RideSelector = (props) => {
  const [duration, setDuration] = useState(0);

  // get ride duration from MapBox API
  // 1. pickupCordinates
  // 2. dropoffCordinates

  const getDirections = (pickUpCoordinates, dropoffCoordinates) => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickUpCoordinates[0]},${pickUpCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1Ijoic2FkZXNod2FyIiwiYSI6ImNpeTUwcnNuMzAwNDQzM3FoMnRsdG94dWUifQ.aK-Xih6Lfrglfqwa9n6Z1A',
        })
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log
        setDuration(data.routes[0].duration);
      });
  };

  useEffect(() => {
    if (props.pickUpCoordinates && props.dropoffCoordinates) {
      getDirections(props.pickUpCoordinates, props.dropoffCoordinates);
    }
  }, [props.pickUpCoordinates, props.dropoffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetail>
              <ServiceName>{car.service}</ServiceName>
              <ServiceTime>{(duration / 100).toFixed(0)} Min Away</ServiceTime>
            </CarDetail>
            <Price>
              {((duration / 100) * 120 * car.multiplier).toLocaleString(
                'ja-JP',
                { style: 'currency', currency: 'JPY' }
              )}
            </Price>
            {/* <Price>{'$' + (rideDuration * car.multiplier).toFixed(2)}</Price> */}
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Price = tw.div`
text-sm
`;

const ServiceTime = tw.div`
text-xs text-blue-500
`;

const ServiceName = tw.div`
font-medium
`;

const CarDetail = tw.div`
flex-1
`;

const CarImage = tw.img`
h-14 mr-4
`;

const Car = tw.div`
flex p-4 items-center
`;

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`;

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`;

const CarList = tw.div`
overflow-y-scroll
`;
