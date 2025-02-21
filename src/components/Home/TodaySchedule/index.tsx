import * as S from "./style";
import { Suspense } from "react";
import TodayScheduleList from "./TodayScheduleList";
import TodayScheduleListFallbackLoader from "src/components/Common/Skeleton/TodayScheduleList";

import { ErrorBoundary } from "react-error-boundary";
// import  from "@b1nd/dds-web";

const TodaySchedule = () => {
  return (
    <S.TodayScheduleContainer>
      {/* <CardTitle
        title="오늘의 일정"
        titleIcon={TodayScheduleCanlendarIcon}
        redirectURL={"http://dodam.b1nd.com/schedule"}
      /> */}
      <ErrorBoundary fallback>
        <Suspense fallback={<TodayScheduleListFallbackLoader />}>
          <TodayScheduleList />
        </Suspense>
      </ErrorBoundary>
    </S.TodayScheduleContainer>
  );
};

export default TodaySchedule;
