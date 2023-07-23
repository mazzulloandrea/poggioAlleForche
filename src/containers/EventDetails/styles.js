import tw from 'tailwind-styled-components';

export const ImageContainer = tw.div`
    relative
    bg-cover
    h-[30vh]
`;

export const DateContainer = tw.div`
    absolute
    mr-3
    mt-3
    p-2
    bg-xorange
    w-[60px]
    h-[60px]
    uppercase
     text-xwhite
    text-center
    right-0
    top-0
`;

export const Title = tw.div`
    absolute
    w-full
    bottom-0
    text-3xl
    text-xwhite
    font-bold
    px-3
    pb-3
`;

export const InformationContainer = tw.div`
    px-3
    text-xwhite
`;

export const LocationAndTimeContainer = tw.div`
    items-center
    flex
    justify-between
    pt-3
`;

export const Location = tw.div`
    underline
`;

export const Time = tw.div`
    font-light
`;

export const About = tw.div`
`;

export const Label = tw.div`
    text-2xl
    font-bold
    mb-2
`;

export const Description = tw.div`
`;
export const Button = tw.button`
    
`;
