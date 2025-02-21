import { Schedule } from "@src/types/Schedule/schedule.type";
import * as S from "./style";
import dataTransform from "@src/utils/Transform/dataTransform";

interface Props {
  data: Schedule;
}

const TodayScheduleItem = ({ data }: Props) => {
  return (
    <S.TodayScheduleItemContainer>
      <S.TodayScheduleItemTitle>{data.name}</S.TodayScheduleItemTitle>
      <S.TodayScheduleItemTargetWrap>
        <S.TodayScheduleItemTargetCategory>
          대상 :
        </S.TodayScheduleItemTargetCategory>
        <S.TodayScheduleItemTargetText>
          {data.targetGrades.map((grade, idx) => (
            <>
              {dataTransform.scheduleTargetGradesTransform(grade)}
              {idx !== data.targetGrades.length - 1 && ", "}
            </>
          ))}
        </S.TodayScheduleItemTargetText>
      </S.TodayScheduleItemTargetWrap>
    </S.TodayScheduleItemContainer>
  );
};

export default TodayScheduleItem;
