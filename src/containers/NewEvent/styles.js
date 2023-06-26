import tw from 'tailwind-styled-components';

export const Title = tw.h2`
    w-full
    text-xorange
    text-center
    text-2xl
    mb-4
`;

export const FormWrapper = tw.div`
    text-white
    w-full
`;

export const Form = tw.form`
    md:max-w-[80%]
    m-auto
`;

export const FieldContainer = tw.div`
    mb-4
`;

export const ErrorContainer = tw.div`
    mt-2
    text-normal
    text-red-500
`;

export const Label = tw.label`
    text-white
    font-medium
`;

export const Input = tw.input`
    border-solid
    border-gray-300
    border
    py-2
    px-4
    w-full
    rounded
    text-gray-700
    placeholder:text-gray-700
`;

export const TextArea = tw.textarea`
    border-solid
    border-gray-300
    border
    py-2
    px-4
    w-full
    rounded
    text-gray-700
    resize-none
`;

export const SubmitButton = tw.button`
    mt-4
    w-full
    bg-xorange
    hover:bg-red-700
    text-white
    py-3
    px-6
    font-semibold
    text-md
    rounded
    uppercase
`;
