import { Schedule } from "src/types/Schedule/schedule.type";
import * as S from "./style";

interface Props {
  data: Schedule;
}

const ScheduleItem = ({ data }: Props) => {
  const getDayOfWeek = (dateStr: string) => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const date = new Date(dateStr);
    return days[date.getDay()];
  };

  // 오늘 날짜 구하기 (YYYY-MM-DD)
  const today = new Date().toISOString().split("T")[0];
  

  // 일정 시작일과 종료일
  const [startDate, endDate] = data.date;
  
  console.log(startDate, endDate, today);
  const isSingleDate = startDate === endDate;


  // 날짜 출력
  const displayDate = isSingleDate ? startDate :  endDate > today && today > startDate ? today : startDate;

  return (
    <S.ScheduleItemContainer>
      <S.ScheduleItemTitle>
        {displayDate.split("-")[2]}일 
        <span>{getDayOfWeek(displayDate)}요일</span>
      </S.ScheduleItemTitle>
      <S.ScheduleItemTargetWrap>
        <S.ScheduleItemTargetCategory />
        <S.ScheduleItemTargetText>
          {data.name}
        </S.ScheduleItemTargetText>
      </S.ScheduleItemTargetWrap>
    </S.ScheduleItemContainer>
  );
};

export default ScheduleItem;
