import * as S from "./style";
import { Suspense } from "react";
import ScheduleList from "./ScheduleList";
import ScheduleListFallbackLoader from "components/Common/Skeleton/ScheduleList";
import CardTitle from "components/Common/CardTitle";
import { DodamErrorBoundary } from "@b1nd/dds-web";

const Schedule = () => {
  return (
    <S.ScheduleContainer>
      <CardTitle
      title="일정"
      titleIcon="Schedule"
      redirectURL={"http://dodam.b1nd.com/schedule"}
      />
      <DodamErrorBoundary text="오류가 발생했습니다." showButton={true}>
        <Suspense fallback={<ScheduleListFallbackLoader />}>
          <ScheduleList />
        </Suspense>
      </DodamErrorBoundary>
    </S.ScheduleContainer>
  );
};

export default Schedule;
