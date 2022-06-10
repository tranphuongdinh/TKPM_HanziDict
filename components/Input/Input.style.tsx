import styled from "styled-components";
import { PRIMARY_COLOR } from "../../constants/style";

export const InputWrapper = styled.div`
    width: 100%;
`;

export const InputArea = styled.div`
    position: relative;
    input {
        width: 100%;
        height: 40px;
        padding: 5px 25px 5px 10px;
        margin-bottom: 10px;
    }
    i {
        position: absolute;
        right: 10px;
        top: 10px;
        color: ${PRIMARY_COLOR};
    }
`;

export const InputError = styled.span`
    color: red;
`;
