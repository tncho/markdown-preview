import styled from 'styled-components';

const HeaderStyled = styled.header`
    color: #d5d7db;
    background-color: #333c4f;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 20px;
    width: 100%;

    span {
        cursor: pointer;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 1px;
        transition: color .2s ease-out;

        &:hover {
            color: #35d7bb;
        }
    }
`;

export default HeaderStyled;
