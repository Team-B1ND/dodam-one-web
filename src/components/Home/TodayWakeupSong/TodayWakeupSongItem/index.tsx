import { WakeupSong } from "types/WakeupSong/wakeupSong.type";
import * as S from "./style";

interface Props {
  wakeupSongData: WakeupSong;
}

const TodayWakeupSongItem = ({ wakeupSongData }: Props) => {
  const [title, singer] = wakeupSongData.videoTitle.split(" - ");
return(
  <S.TodayWakeupSongItemContainer onClick={()=> window.open(wakeupSongData.videoUrl)}>
    <S.TodayWakeupSongItemBackgroundWrap>
      <S.TodayWakeupSongItemBackground src={wakeupSongData.thumbnail} />
    </S.TodayWakeupSongItemBackgroundWrap>
    <S.TodayWakeupSongItemTextWrap>
        <span>
          {title}
        </span>
        <span>
          {singer}
        </span>
      </S.TodayWakeupSongItemTextWrap>
  </S.TodayWakeupSongItemContainer>
)
}

export default TodayWakeupSongItem;
