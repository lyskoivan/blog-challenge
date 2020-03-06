import styled from 'styled-components';

export const Form = styled.form`
    margin: 0 auto;
    margin-top: 30px;
    font-family: sans-serif;
    width: 60%;
    display: flex;
    flex-direction: column;
    padding: 40px 0px 40px 40px;
    border: 1px solid rgba(161, 161, 161, 0.2);
    border-radius: 6px;
    box-shadow: 13px 11px 5px -6px rgba(0, 0, 0, 0.47);
`;

export const FormLabel = styled.label`
    padding-bottom: 15px;
`;

interface FormInputProps {
    value: string;
}

export const FormInput = styled.input<FormInputProps>`
    margin-top: 5px;
    display: block;
    padding: 6px;
    border: ${(props): string => (props.value ? '1px solid rgb(0, 255, 0)' : '1px solid rgb(255, 7, 0)')};
    outline: none;
    width: 80%;

    :active,
    :focus {
        border: 1px solid rgb(36, 163, 248);
    }
`;

export const FormButton = styled.button`
    margin-top: 10px;
    width: 82%;
    padding: 10px 40px 10px 40px;
    outline: none;
    cursor: pointer;
    color: #fff;
    background-color: rgba(25, 83, 192, 0.87);
    opacity: 1;
    border: none;
    border-radius: 4px;
    transition: cubic-bezier(0.39, 0.575, 0.565, 1) 0.6s;

    :hover {
        opacity: 0.7;
    }
`;
