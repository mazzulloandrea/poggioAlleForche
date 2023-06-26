import tw from 'tailwind-styled-components';
import { BiArrowBack } from 'react-icons/bi';

export const GoBack = tw(BiArrowBack)`
    absolute
    top-[11px]
    left-0
    mt-3
    ml-3
    cursor-pointer
`;

export const Logo = tw.img`
  ${({ $isHomepage }) => (!$isHomepage ? 'cursor-pointer' : 'cursor-default')}
`;
