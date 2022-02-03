import React from 'react';
import RocketArr from '../redux/rocket/Rockects/rockectArray';
import '../App.css';

const NavRocket = () => {
  const rockets = [
    {
      id: 0,
      name: 'Falcon 1',
      image: 'https://imgur.com/DaCfMsj.jpg',
      description: 'The Falcon 1 was an expendable launch system privately developed and manufatured by SpaceX during 2006-200. On 28 September 2008, Falcon 1 become the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    },
    {
      id: 1,
      name: 'Falcon 9',
      image: 'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
      description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
    },
    {
      id: 2,
      name: 'Falcon Heavy',
      image: 'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
      description: 'With the ability to lift into orbit over 54 metric tons (119,000 Ib)--a mass equivalent to a 737 jetliner loaded wih passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.',
    },
    {
      id: 3,
      name: 'Starship',
      image: 'https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg',
      description: 'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needsas well as the Moon and Mars. This two-stage vehicle - composed of the Super Heavy rocket (booster) and Starship (ship) - will eventually replace Falcon 9, Falcon Heavy and Dragon.',
    },
  ];
  return (
    <main>
      {
      rockets.map((rocket) => (
        <RocketArr key={rocket.id} rocket={rocket} />
      ))
    }
    </main>
  );
};

export default NavRocket;
