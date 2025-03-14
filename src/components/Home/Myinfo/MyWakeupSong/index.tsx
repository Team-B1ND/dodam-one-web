import * as S from "./style";
import { Suspense } from "react";
import WakeupSongListFallback from "components/Common/Skeleton/WakeupSongList";
import MyInfoWakeupSongList from "./MyWakeupSongList";
import { DodamErrorBoundary } from "@b1nd/dds-web";

const MyWakeupSong = () => {
    return(
        <S.MyWakeupSongBox>
        <DodamErrorBoundary text="에러발생"showButton={true}>
            <Suspense fallback={<WakeupSongListFallback length={3}/>}>
            <MyInfoWakeupSongList />
            </Suspense>
        </DodamErrorBoundary>
        </S.MyWakeupSongBox>
    )
}

export default MyWakeupSong;