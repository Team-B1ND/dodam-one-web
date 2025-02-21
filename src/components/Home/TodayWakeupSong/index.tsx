import * as S from "./style";
import { Suspense } from "react";
import TodayWakeupSongList from "./TodayWakeupSongList";
import TodayWakeupSongListFallback from "../../Common/Skeleton/TodayWakeupSongList";
import CardTitle from "../../Common/CardTitle";;
import { DodamErrorBoundary } from "@b1nd/dds-web";

const TodayWakeupSong = () => {
  return (
    <S.TodayWakeupSongContainer>
      <CardTitle
        title={"오늘의 기상송"}
        titleIcon="WakeupSong"
        redirectURL={"http://dodam.b1nd.com/wakesong"}
      />
      <DodamErrorBoundary text="오류가 발생했습니다." showButton={true}>
        <Suspense fallback={<TodayWakeupSongListFallback />}>
          <TodayWakeupSongList />
        </Suspense>
      </DodamErrorBoundary>
    </S.TodayWakeupSongContainer>
  );
};

export default TodayWakeupSong;
