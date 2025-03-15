import { Suspense } from "react";
import ApplyBusForm from "./ApplyBusForm";
import ApplyBusListFallbackLoader from "components/Common/Skeleton/ApplyBusList";
import * as S from "./style";
import { DodamErrorBoundary } from "@b1nd/dds-web";
import { Props } from "..";

const ApplyBus = ({setSection}:Props) => {
  setSection("버스");
  return (
    <S.ApplyBusContainer>
      <DodamErrorBoundary text="에러발생" showButton={true}>
        <Suspense fallback={<ApplyBusListFallbackLoader/>}>
          <ApplyBusForm />
        </Suspense>
      </DodamErrorBoundary>
    </S.ApplyBusContainer>
  );
};

export default ApplyBus;
