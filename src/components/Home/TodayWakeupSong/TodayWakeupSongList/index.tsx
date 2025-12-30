import { useGetTodayAllowedWakeupSongQuery } from "queries/WakeupSong/wakeupSong.query";
import dataCheck from "utils/Check/dataCheck";
import dateTransform from "utils/Transform/dateTransform";
import TodayWakeupSongItem from "../TodayWakeupSongItem";
import {
  TodayWakeupSongListContainer,
  TodayWakeupSongListVoidText,
} from "./style";

const TodayWakeupSongList = () => {
  const todayDate = dateTransform.hyphen().split("-");

  const { data: serverTodayAllowWakeupSongsData } =
    useGetTodayAllowedWakeupSongQuery(
      {
        year: todayDate[0],
        month: todayDate[1],
        day: todayDate[2],
      },
      true
    );

  return (
    <>
      {serverTodayAllowWakeupSongsData &&
      dataCheck.voidCheck(serverTodayAllowWakeupSongsData?.data) ? (
        <TodayWakeupSongListVoidText>
          승인된 기상송이 없습니다.
        </TodayWakeupSongListVoidText>
      ) : (
        <TodayWakeupSongListContainer>
          {serverTodayAllowWakeupSongsData?.data
            .slice(0, 2)
            .map((wakeupSong) => (
              <TodayWakeupSongItem
                wakeupSongData={wakeupSong}
                key={wakeupSong.id}
              />
            ))}
        </TodayWakeupSongListContainer>
      )}
    </>
  );
};

export default TodayWakeupSongList;
