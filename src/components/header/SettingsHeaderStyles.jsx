import { styled } from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    margin: 0 auto;
    width: 393px;
    height: 80px;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    background-color: #91c0f2;
    z-index: 10;
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
    min-width: 0;
`;

export const Logo = styled.div`
    img {
        width: 65px;
        height: 65px;
    }
    margin-left: 10%;
`;

export const Title = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 300px;
    height: 40px;
    flex-shrink: 0;
`;

export const Rectangle = styled.div`
    position: absolute;
    left: 0;
    top: 5;
    img {
        width: 210px;
        height: 90px;
    }
`;

export const TitleText = styled.div`
    font-size: 13px;
    font-weight: bold;
    color: #4e4e4e;
    font-weight: bold;
    white-space: nowrap;
    margin-left: -90px;
    z-index: 1;
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
`;

export const Setting = styled.div`
    img {
        width: 45px;
        height: 45px;
    }
`;
