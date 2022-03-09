import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import tw from 'tailwind-styled-components';
import Map from './components/Map';

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
          <UberLogo src="https://d1a3f4spazzrp4.cloudfront.net/uberex/duc/images/logos/Uber_Logotype_Digital_black.png" />

          <Profile>
            <Name>Sadesh War </Name>
            <UserImage src="https://lh3.googleusercontent.com/ogw/ADea4I6R5ml8aXasbQmd64TJAhczxmASNE1OCjXj9EZ2=s32-c-mo" />
          </Profile>
        </Header>

        {/* ActionButtons */}
        {/* InputButtons */}
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col bg-red-300 h-screen

`;

const ActionItems = tw.div`
flex-1 
`;

const Header = tw.div`
flex justify-between items-center
`;

const UberLogo = tw.img`
h-28
`;

const Profile = tw.div`
flex items-center 
`;

const Name = tw.div`
mr-4 w-20 text-sm
`;

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`;
