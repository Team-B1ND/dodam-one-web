import { useGetMyWakeupSongsQuery } from "queries/WakeupSong/wakeupSong.query";
import dataCheck from "utils/Check/dataCheck";
import MyWakeupSongItem from "../MyWakeupSongItem";
import { SongNullBox } from "../style";

const MyInfoWakeupSongList = () => {
  const { data: serverMyWakeupSongData } = useGetMyWakeupSongsQuery({
    suspense: true,
    staleTime: 1000 * 60,
    cacheTime: 1000 * 60 * 10,
  });

  return (
    <>
      {serverMyWakeupSongData &&
      dataCheck.voidCheck(serverMyWakeupSongData.data) ? (
        <SongNullBox>
          <span>기상송 신청내역이 없습니다.</span>
          <span>신청하시면 생활이 윤택해질 거에요!</span>
          </SongNullBox>
      ) : (
        <>
          {serverMyWakeupSongData?.data
            .filter((wakeupSong) => wakeupSong.status === "PENDING")
            .map((wakeupSong) => (
              <MyWakeupSongItem
                wakeupSongData={wakeupSong}
                key={wakeupSong.id}
              />
            ))}
        </>
      )}
    </>
  );
};

export default MyInfoWakeupSongList;
