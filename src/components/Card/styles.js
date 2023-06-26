import tw from 'tailwind-styled-components';

export const CardContainer = tw.div`
  relative
  bg-cover
  w-full
  aspect-video
`;

export const DateContainer = tw.div`
  absolute
  mt-3 
  ml-3 
  p-2
  bg-xorange
  w-[60px]
  h-[60px]
  uppercase
  text-xwhite
  text-center
`;

export const GoogleButtonContainer = tw.div`
  absolute mt-3 ml-3 p-2 right-0 bg-xorange text-xs text-xwhite text-center
`;

export const BottomContainer = tw.div`
  absolute
  bottom-0
  left-0
  right-0
  w-full
  px-3
  pb-3
  bg-gradient-to-t
  from-black
`;

export const TitleContainer = tw.div`
  text-3xl
  text-xwhite
  mb-2
  font-bold
`;

export const LocationContainer = tw.div`
  flex
  items-center
  text-xwhite
  text-xs
`;
