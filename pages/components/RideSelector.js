import React from 'react'
import tw from 'tailwind-styled-components';
import { carList } from '../data/carList';

const RideSelector = () => {
  return (
    <Wrapper>
        <Title>Choose a ride, or swipe up for more</Title>
        <CarList>
            { carList.map((car, index) =>(

                    <Car Key={index}>
                    <CarImage src={car.imgUrl} />
                    <CarDetail>
                        <ServiceName>
                            {car.service}
                        </ServiceName>
                        <ServiceTime>
                            5 Min Away
                        </ServiceTime>
                    </CarDetail>
                    <Price>$24.00</Price>
                    </Car>

            ))}

        </CarList>
        
    </Wrapper>
  )
}

export default RideSelector

const Price = tw.div`
text-sm
`

const ServiceTime = tw.div`
text-xs text-blue-500
`

const ServiceName = tw.div`
font-medium
`

const CarDetail = tw.div`
flex-1
`


const CarImage = tw.img`
h-14 mr-4
`

const Car = tw.div`
flex p-4 items-center
`

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`

const CarList = tw.div`
overflow-y-scroll
`