import styled from 'styled-components';

export const Container = styled.div`
    label: {
        position: fixed;
        font-size: 25px;
        font-weight: bold;
        padding: 5px;
        width: 40px;
        height: 40px;
        text-align: center;
        background-color: #0f0ee8;
        color: #fff;
        left: 300px;
        transition: all .4s;
        top: 0
        hover {
            color: #000;
        }
    }

    input {
        position: absolute;
    }

    nav {
        height: 100%;
        position: fixed;
        background-color: #222;
        top: 0;
        overflow: hidden;
        transition: all .2s;
    }
`;