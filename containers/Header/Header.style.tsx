import styled from "styled-components";
import { Container } from "../../components/Commons/Commons.style";
import {
    PRIMARY_BACKGROUND_COLOR,
    PRIMARY_COLOR,
    PRIMARY_COLOR_HOVER,
} from "../../constants/style";

export const HeaderBrand = styled.a`
    height: 50px;
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(0.9);

        @media (max-width: 400px) {
            width: 60px;
            height: 60px;
            transform: scale(0.75);
            content: url("./images/icon.png");
        }
    }
`;

export const HeaderWrapper = styled.div`
    background: #fff;
    position: fixed;
    width: 100%;
    z-index: 99;
    box-shadow: 0px 0px 10px #d2d2d2;
    transition: all 0.2s ease-in-out;
    padding: 0;
    border-bottom: 3px solid transparent;

    &.scroll {
        box-shadow: none;
        border-bottom: 3px solid ${PRIMARY_COLOR};
    }

    @media (max-width: 1199px) {
        display: none;
    }
`;

export const HeaderContainer = styled(Container)`
    justify-content: space-between;
    margin: 0 20px;

    @media (max-width: 400px) {
        margin: 0 10px;
    }
`;

export const CategotyButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
        margin-left: 5px;
        line-height: 0;
    }
    padding: 0 20px;
    background: ${PRIMARY_COLOR};
    color: #fff;
    border: none;
    outline: none;
    margin: 10px 10px 10px 40px;
    height: 40px;
    border-radius: 3px;
`;

export const SearchBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: calc(100% - 40px);
    max-width: 800px;
    height: 50px;
    margin: 10px;
    margin: 0 auto;

    input {
        width: 100%;
        height: 100%;
        padding: 5px 10px;
        outline: none;
        border: 1px solid #000;
        border-right: none;
        border-radius: 30px 0 0 30px;
    }

    button {
        border: 1px solid #000;
        outline: none;
        background: ${PRIMARY_COLOR};
        height: 100%;
        width: 100px;
        border-radius: 0 30px 30px 0;
        cursor: pointer;
        i {
            color: #fff;
        }
        &:hover {
            background: ${PRIMARY_COLOR_HOVER};
        }
    }
`;

export const PageInfo = styled.div`
    display: flex;
    height: 100%;
    align-items: center;

    @media (max-width: 692px) {
        ${SearchBar} {
            display: none;
        }
    }

    .Dropdown-root {
        width: 220px;
    }

    .Dropdown-control {
        background: ${PRIMARY_COLOR};
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 10px 10px;
    }

    .Dropdown-option {
        &:hover {
            background: ${PRIMARY_COLOR};
            color: #fff;
        }
    }
`;

export const Button = styled.button`
    background: ${PRIMARY_COLOR};
    border: 2px solid transparent;
    padding: 10px 20px;
    color: #fff;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        background: ${PRIMARY_COLOR_HOVER};
    }

    &.no-outline {
        background: none;
        border: 2px solid ${PRIMARY_COLOR};
        color: ${PRIMARY_COLOR};

        &:hover {
            background: ${PRIMARY_COLOR};
            color: #fff !important;
        }
    }

    &.disabled {
        opacity: 0.5;
        pointer-events: none;
    }
`;

export const NavLink = styled.nav`
    ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;

        li {
            display: inline-block;
            margin-right: 20px;
            cursor: pointer;
            position: relative;
            padding: 5px 0;

            &:after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 2px;
                background: ${PRIMARY_COLOR};
                transition: all 0.2s ease-in-out;
            }

            &:hover,
            &.active {
                color: ${PRIMARY_COLOR};

                &:after {
                    width: 100%;
                }
            }
        }
    }
`;

export const PageNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
    border-left: 2px solid ${PRIMARY_COLOR};
    position: relative;
    i {
        font-size: 30px;
        margin-right: 10px;

        &.fa-circle-user {
            cursor: pointer;
            display: inline-block;
        }
        &.active {
            color: ${PRIMARY_COLOR};
        }
    }

    .username {
        font-weight: bold;
        &:hover {
            text-decoration: underline;
        }
    }

    ${Button} {
        margin-left: 5px;
    }

    p {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width: 200px;
    }
`;
export const UserMenu = styled.ul`
    position: absolute;
    bottom: -120px;
    left: 20px;
    width: 160px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${PRIMARY_BACKGROUND_COLOR};
    color: #fff;
    border-radius: 0 5px 5px 5px;
    padding: 0;

    &:before {
        content: "";
        position: absolute;
        top: -10px;
        left: 10px;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid ${PRIMARY_BACKGROUND_COLOR};
        border-left: 10px solid ${PRIMARY_BACKGROUND_COLOR};
    }

    li {
        display: inline-block;
        width: 100%;
        padding: 15px 10px 15px 20px;
        cursor: pointer;
        &:hover {
            color: ${PRIMARY_COLOR};
        }

        i {
            font-size: 18px;
        }
    }
`;
