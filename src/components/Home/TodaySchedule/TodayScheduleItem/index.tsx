import { Schedule } from "src/types/Schedule/schedule.type";
import * as S from "./style";


interface Props {
  data: Schedule;
}

const TodayScheduleItem = ({ data }: Props) => {
  return (
    <S.TodayScheduleItemContainer>
      <S.TodayScheduleItemTitle>{data.date}</S.TodayScheduleItemTitle>
      <S.TodayScheduleItemTargetWrap>
        <S.TodayScheduleItemTargetCategory/>
        <S.TodayScheduleItemTargetText>
          {data.name}
        </S.TodayScheduleItemTargetText>
      </S.TodayScheduleItemTargetWrap>
    </S.TodayScheduleItemContainer>
  );
};

export default TodayScheduleItem;
