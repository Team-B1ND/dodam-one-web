import styled,{css} from "styled-components";

export const NullAccountModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 5;
    background: rgba(0, 0, 0, 0.20);
`
export const AlertText = css`
    cursor: pointer;
    padding: 8px 12px;
    color: ${({ theme }) => theme.primaryNormal};
`;
