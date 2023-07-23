import tw from 'tailwind-styled-components';
import { BsPlus } from 'react-icons/bs';

export const Button = tw(BsPlus)`
  p-0 
  w-10 
  h-10 
  bg-xorange
  hover:bg-red-700 
  cursor-pointer
  rounded-full 
  mouse 
  shadow
  shadow-black/100
  transition 
  ease-in 
  duration-200 
  focus:outline-none
  absolute
  bottom-[72px]
  right-[1rem]
`;
