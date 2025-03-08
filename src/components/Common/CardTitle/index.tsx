import * as S from "./style";
import { Schedule, ChevronRight, CookedRice, MusicalNote } from "@b1nd/dds-web";
import { ReactNode } from "react";

type Icon = "Schedule" | "WakeupSong" | "Meal"

interface Props {
  title: string;
  titleIcon: Icon;
  redirectURL?: string;
  children?: ReactNode;
};

const CardTitle = ({ title, titleIcon, redirectURL, children }: Props) => {
  const redirect = () => {
    window.location.href = redirectURL ? redirectURL! : "";
  };

  return (
    <S.CardTitleContainer>
      {titleIcon=="Schedule" 
      ? <Schedule/> : titleIcon=="WakeupSong" 
      ? <MusicalNote/>: titleIcon=="Meal" 
      ? <CookedRice/> : ""} 
      <S.CardTitleText onClick={redirect}>{title}</S.CardTitleText>
      {children}
        <S.CardTitleRedirectIcon onClick={redirect}>
          <ChevronRight size={16} color="labelAssistive"/>
        </S.CardTitleRedirectIcon>
    
    </S.CardTitleContainer>
  );
};

export default CardTitle;
