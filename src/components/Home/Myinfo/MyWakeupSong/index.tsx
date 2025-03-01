import * as S from "./style";
import { Suspense } from "react";
import WakeupSongListFallback from "src/components/Common/Skeleton/WakeupSongList";
import MyInfoWakeupSongList from "./MyWakeupSongList";

const MyWakeupSong = () => {
    return(
        <S.MyWakeupSongBox>
         <Suspense fallback={<WakeupSongListFallback length={3}/>}>
          <MyInfoWakeupSongList />
        </Suspense>
        </S.MyWakeupSongBox>
    )
}

export default MyWakeupSong;