import styled from 'styled-components';

export const HeaderList = styled.ul`
    margin: 0;
    list-style-type: none;
    box-shadow: 0px 7px 12px 1px rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
`;

export const HeaderListItem = styled.li`
    padding: 20px;
    color: rgb(0, 0, 0);
    font-size: 18px;
    font-weight: 700;
`;

export const HeaderLink = styled.a`
    text-decoration: none;
    color: rgb(0, 0, 0);
    transition: color ease-in-out 0.3s;
    :hover {
        color: palevioletred;
    }
    :active {
        color: palevioletred;
    }
`;
