import styled from "styled-components";
import { Container } from "../../components/Commons/Commons.style";
import {
    COLOR_GREEN,
    PRIMARY_COLOR,
    PRIMARY_COLOR_HOVER,
} from "../../constants/style";

export const LoginWrapper = styled.div`
    padding: 100px 0;
    background: #ececec;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 992px) {
        padding: 50px 0;
    }

    @media (max-width: 576px) {
        padding: 20px 0;
    }

    #backgroundVideo {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const LoginContainer = styled(Container)`
    width: 100%;
    justify-content: space-between;
    border-radius: 5px;
    box-shadow: 20px 20px 60px #d9d9d9;
    background: rgba(255, 255, 255, 0.9);
    position: relative;
    z-index: 2;

    @media (max-width: 992px) {
        flex-direction: column;
        justify-content: space-around;
    }
`;

export const LoginContent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 40px;

    @media (max-width: 1200px) {
        &.auth {
            width: 60%;
        }
        width: 40%;
    }

    @media (max-width: 992px) {
        &.auth {
            width: 100%;
        }
        width: 100%;
    }

    @media (max-width: 768px) {
        padding: 20px;
    }

    @media (max-width: 576px) {
        padding: 20px 10px;
    }

    img {
        width: 100%;
        max-width: 250px;

        @media (max-width: 576px) {
            max-width: 200px;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
            width: 100%;
        }
    }

    h1 {
        text-transform: uppercase;
        color: ${PRIMARY_COLOR};

        @media (max-width: 676px) {
            font-size: 1.8rem;
        }
    }
`;

export const InputGroup = styled.div`
    width: 100%;
    position: relative;

    input {
        padding: 15px 20px;
        font-size: 1rem;
        outline: none;
        border: 2px solid #f0f0f0;
        box-shadow: 5px 5px 5px 2px #e7e7e7;
        margin: 10px 0;

        @media (max-width: 676px) {
            font-size: 1.1rem;
            padding: 12px 15px;
        }

        &:focus {
            border-color: ${PRIMARY_COLOR};
        }
    }

    input[type="password"] {
        font-family: Verdana;
        letter-spacing: 0.1em;
    }
`;

export const ToggleShowPassword = styled.div`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    &:hover {
        color: ${PRIMARY_COLOR};
    }
`;

export const ButtonSubmit = styled.button`
    width: 100%;
    padding: 15px 20px;
    font-size: 1rem;
    outline: none;
    border: 2px solid ${PRIMARY_COLOR};
    box-shadow: 5px 5px 5px 2px #e7e7e7;
    margin: 10px 0;
    background-color: ${PRIMARY_COLOR};
    color: #fff;
    cursor: pointer;
    @media (max-width: 676px) {
        font-size: 1.1rem;
        padding: 12px 15px;
    }
    &:hover {
        background-color: ${PRIMARY_COLOR_HOVER};
    }
`;

export const AuthForm = styled.form`
    width: 90%;
`;

export const RegisterText = styled.p`
    text-align: right;
    width: 100%;

    @media (max-width: 476px) {
        font-size: 0.9rem;
    }

    a {
        font-weight: bolder;
        &:hover {
            color: ${PRIMARY_COLOR};
            text-decoration: underline;
        }
    }
`;

export const InputLabel = styled.span`
    display: inline-block;
    text-transform: uppercase;
    font-weight: bolder;
    width: 100%;
    text-align: left;
    margin: 20px 0 5px 0;

    i {
        display: inline-block;
        margin-right: 10px;
    }
`;

export const Validator = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
export const ValidatorError = styled.span`
    display: inline-block;
    margin-top: 15px;
    color: ${COLOR_GREEN};
    &.error {
        color: red;
    }
    i {
        display: inline-block;
        height: 100%;
        width: 20px;
    }
`;
