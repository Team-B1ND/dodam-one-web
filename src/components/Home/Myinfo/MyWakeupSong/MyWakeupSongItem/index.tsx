import React from "react";
import { WakeupSong } from "types/WakeupSong/wakeupSong.type";
import dateTransform from "utils/Transform/dateTransform";
import * as S from "./style";
import { DodamTag } from "@b1nd/dds-web";

interface Props {
  wakeupSongData: WakeupSong;
}

const myInfoWakeupSongItem = ({ wakeupSongData }: Props) => {

  return (
    <S.MyInfoWakeupSongItemContainer
      onClick={() => window.open(wakeupSongData.videoUrl)}
    >
    <div style={{display:"flex",gap:"4px"}}>
      <S.MyInfoWakeupSongItemImg
        src={wakeupSongData.thumbnail}
        alt={"myInfoWakeupSongItem/myInfoWakeupSongItemImg"}
      />
      <S.MyInfoWakeupSongItemInfoWrap>
        <S.MyInfoWakeupSongItemTitle>
          {wakeupSongData.videoTitle}
        </S.MyInfoWakeupSongItemTitle>
        <S.MyInfoWakeupSongItemSubInfoWrap>
          <S.MyInfoWakeupSongItemSubTitle>
            신청일 {dateTransform.hyphen(wakeupSongData.createdAt)}
          </S.MyInfoWakeupSongItemSubTitle>
        </S.MyInfoWakeupSongItemSubInfoWrap>
      </S.MyInfoWakeupSongItemInfoWrap>
      </div>
      <DodamTag 
       text="대기"
       color="default"
       customStyle={{minWidth:"50px"}}
       />
    </S.MyInfoWakeupSongItemContainer>
  );
};

export default React.memo(myInfoWakeupSongItem);
