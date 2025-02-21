import * as S from "./style";
import { Suspense } from "react";
import TodayScheduleList from "./TodayScheduleList";
import TodayScheduleListFallbackLoader from "src/components/Common/Skeleton/TodayScheduleList";
import CardTitle from "src/components/Common/CardTitle";
import { DodamErrorBoundary } from "@b1nd/dds-web";

const TodaySchedule = () => {
  return (
    <S.TodayScheduleContainer>
      <CardTitle
      title="일정"
      titleIcon="Schedule"
      redirectURL={"http://dodam.b1nd.com/wakesong"}
      />
      <DodamErrorBoundary text="오류가 발생했습니다." showButton={true}>
        <Suspense fallback={<TodayScheduleListFallbackLoader />}>
          <TodayScheduleList />
        </Suspense>
      </DodamErrorBoundary>
    </S.TodayScheduleContainer>
  );
};

export default TodaySchedule;
