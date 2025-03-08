import { useGetScheduleQuery } from "src/queries/Schedule/schedule.query";
import dataCheck from "src/utils/Check/dataCheck";
import ScheduleItem from "../ScheduleItem";
import * as S from "./style";

const ScheduleList = () => {
  const { data: serverTodayScheduleData } = useGetScheduleQuery();

  return (
    <>
      {serverTodayScheduleData &&
      dataCheck.voidCheck(serverTodayScheduleData.data) ? (
        <S.ScheduleListVoidText>
          일정이 없습니다.
        </S.ScheduleListVoidText>
      ) : (
        <S.ScheduleListContainer>
          {serverTodayScheduleData?.data.map((schedule) => (
            <ScheduleItem data={schedule} key={schedule.id} />
          ))}
        </S.ScheduleListContainer>
      )}
    </>
  );
};
export default ScheduleList;
