import styled from "styled-components";
import { DodamColor } from "@b1nd/dds-web";
export const BannerContainer = styled.div`
  width: 100%;
  position: fixed;
  height: 110px;
  position: relative;
  overflow: hidden;
  display: flex;
  border-radius: 18px;
  
 

  .slick-initialized {
    width: 100%;
  }

  .slick-track {
    display: flex;
  }

  .slick-dots {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 15px;

    .slick-active {
      opacity: 100%;
    }

    li {
      list-style: none;
      width: 13px;
      height: 13px;
      border-radius: 100%;
      border: 0px;
      opacity: 50%;
      background-color: black;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        opacity: 100%;
      }

      button {
        width: 100%;
        height: 100%;
        background: transparent;
        color: transparent;
        border: 0px;
        border-radius: 100%;
        cursor: pointer;
      }
    }
  }

  .slick-active {
    text-decoration: none;
  }
`;

export const BannerManageButton = styled.button`
  width: 28px;
  height: 28px;
  position: absolute;
  left: 0px;
  top: 20px;
  display: none;
  border: 0px;
  background-color: white;
  border-radius: 0px 5px 5px 0px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;
  font-size: 17px;
  color: ${DodamColor.blue45};
  cursor: pointer;

  ${BannerContainer}:hover & {
    display: flex;
  }
`;
