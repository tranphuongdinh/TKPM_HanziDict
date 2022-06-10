import styled from "styled-components";
import { Container } from "../../components/Commons/Commons.style";
import { PRIMARY_COLOR } from "../../constants/style";
import { ButtonGroup } from "../Banner/Banner.style";
import { Button } from "../Header/Header.style";

export const UserProfileContainer = styled(Container)`
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 50px;
`;

export const ProfileInfo = styled.div`
    margin: 20px 0;
    width: 100%;
    h2 {
        width: 100%;
        text-align: left;
        margin: 30px 0;
        font-size: 1.6rem;
        max-width: 400px;

        @media (max-width: 678px) {
            font-size: 1.4rem;
        }
    }

    padding: 10px 50px 40px 50px;
    border-radius: 5px;
    background: #ffffff;
    box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;

    @media (max-width: 768px) {
        padding: 0px 25px 30px 25px;
    }

    @media (max-width: 576px) {
        padding: 0px 15px 20px 15px;
    }
`;

export const ProfileInfoHeader = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

export const Filter = styled.div`
    margin-left: auto;
    position: relative;
    width: 300px;

    input {
        width: 100%;
        padding: 10px 30px 10px 10px;
        outline: none;
        border-radius: 0px;
        border: 2px solid #f0f0f0;

        &:focus {
            border: 2px solid ${PRIMARY_COLOR};
        }
    }

    i {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
`;

export const ProfileDetail = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 40%));
    grid-column-gap: 40px;
    grid-row-gap: 20px;

    @media (max-width: 678px) {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }

    ${Button} {
        border-radius: 5px;
        padding: 15px 10px;
        font-size: 1.1rem;
        max-width: 300px;
    }

    ${ButtonGroup} {
        width: 100%;
        ${Button} {
            width: 45%;
        }
    }
`;

export const ProfileInputGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 20px;

    span {
        font-size: 1.1rem;
        color: #000;
        margin-bottom: 5px;
        font-weight: bolder;
        display: inline-block;
        margin-bottom: 10px;

        &.changePasswordTitle {
            text-decoration: underline;
            cursor: pointer;
            &:hover {
                color: ${PRIMARY_COLOR};
            }
        }
    }

    input {
        border: 2px solid transparent;
        outline: none;
        border-radius: 5px;
        padding: 10px;
        font-size: 1rem;
        background-color: #f3f3f3;
        box-shadow: none;
        transition: all 0.2s ease-in-out;

        &.disabled {
            pointer-events: none;
            opacity: 0.6;
        }

        &:hover,
        &:focus {
            border: 2px solid ${PRIMARY_COLOR};
            box-shadow: 5px 5px 5px 1px #ccc;
        }
    }

    p {
        color: red;
        font-size: 0.9rem;
        margin: 0;
        width: 100%;
        text-align: left;
        margin-top: 10px;
    }
`;

export const ChangePasswordWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 100;

    form {
        background: #fff;
        padding: 30px;
        border-radius: 10px;
        width: calc(100% - 40px);
        max-width: 600px;

        input[type="password"] {
            font-family: Verdana;
            letter-spacing: 0.1em;
        }
    }
`;
