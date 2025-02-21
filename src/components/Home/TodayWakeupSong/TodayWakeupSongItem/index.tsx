import { WakeupSong } from "src/types/WakeupSong/wakeupSong.type";
import * as S from "./style";

interface Props {
  wakeupSongData: WakeupSong;
}

const TodayWakeupSongItem = ({ wakeupSongData }: Props) => (
  <S.TodayWakeupSongItemContainer>
    <S.TodayWakeupSongItemBackgroundWrap onClick={()=> window.open(wakeupSongData.videoUrl)}>
      <S.TodayWakeupSongItemBackground src={wakeupSongData.thumbnail} />
      <S.TodayWakeupSongItemTextWrap>
        <S.TodayWakeupSongItemText>
          {wakeupSongData.videoTitle}
        </S.TodayWakeupSongItemText>
      </S.TodayWakeupSongItemTextWrap>
    </S.TodayWakeupSongItemBackgroundWrap>
  </S.TodayWakeupSongItemContainer>
);

export default TodayWakeupSongItem;
