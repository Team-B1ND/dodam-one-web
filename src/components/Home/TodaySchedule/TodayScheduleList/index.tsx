import { useGetTodayScheduleQuery } from "src/queries/Schedule/schedule.query";
import dataCheck from "src/utils/Check/dataCheck";
import TodayScheduleItem from "../TodayScheduleItem";
import * as S from "./style";
import { TodayScheduleListVoidText } from "./style";

const TodayScheduleList = () => {
  const { data: serverTodayScheduleData } = useGetTodayScheduleQuery();

  return (
    <>
      {serverTodayScheduleData &&
      dataCheck.voidCheck(serverTodayScheduleData.data) ? (
        <TodayScheduleListVoidText>
          일정이 없습니다.
        </TodayScheduleListVoidText>
      ) : (
        <S.TodayScheduleListContainer>
          {serverTodayScheduleData?.data.map((schedule) => (
            <TodayScheduleItem data={schedule} key={schedule.id} />
          ))}
        </S.TodayScheduleListContainer>
      )}
    </>
  );
};
export default TodayScheduleList;
