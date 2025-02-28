import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import {
  useDeleteMyBusMutatuin,
  useGetBusesQuery,
  useGetMyBusQuery,
  usePatchMyBusMutation,
  usePostMyBusMutation,
} from "src/queries/Bus/bus.query";
import { Bus } from "@src/types/Bus/bus.type";
// import { captureException, withScope } from "@sentry/react";
import { AxiosError } from "axios";
import ErrorHandler from "src/utils/Error/ErrorHandler";

const useApplyBus = () => {
  const queryClient = useQueryClient();

  const { data: busesData, isLoading: busesDataIsLoading } = useGetBusesQuery();
  const { data: myBusData, isLoading: myBusDataIsLoading } = useGetMyBusQuery({
    suspense: true,
    staleTime: 1000 * 30,
    cacheTime: 1000 * 60,
  });

  const postMyBusMutation = usePostMyBusMutation();
  const patchMyBusMutation = usePatchMyBusMutation();
  const deleteMyBusMutatuin = useDeleteMyBusMutatuin();

  //버스 리스트를 담는 상태
  const [busList, setBusList] = useState<Bus[]>([]);
  const [busDate, setBusDate] = useState<string>("");
  //사용자가 버스를 눌렀을때 누른 버스 정보를 담는 상태
  const [selectBusIdx, setSelectBusIdx] = useState<number>(-1);
  //원래 신청했던걸 담는 상태
  const [wasCheckedIdx, setWasCheckedIdx] = useState<number>(-1);
  const [isChange, setIsChange] = useState<boolean>(false);

  useEffect(() => {
    if (!busesDataIsLoading) {
      if (busesData?.data.length! > 0) {
        const validBusesData = busesData?.data;
        setBusDate(validBusesData![0].leaveTime); // 모든 버스는 같은시각에 출발하기에 첫번째 인덱스 날짜를 써도 무방함.
        setBusList(validBusesData!);
      }
    }
  }, [busesData, busesDataIsLoading]);

  useEffect(() => {
    if (myBusData && !myBusDataIsLoading) {
      if (myBusData.data) {
        const recentMyBusData = myBusData?.data;

        setSelectBusIdx(recentMyBusData!.id);
        setWasCheckedIdx(recentMyBusData!.id);
      }
    }
  }, [myBusData, myBusDataIsLoading]);

  useEffect(() => {
    if (selectBusIdx !== wasCheckedIdx) {
      setIsChange(true);
      return;
    }
    setIsChange(false);
  }, [selectBusIdx, wasCheckedIdx]);

  const handleBusData = (idx: number) => {
    setSelectBusIdx((prev) => (prev === idx ? -1 : idx));
  };

  const submitMyBus = async () => {
    if (selectBusIdx === -1) {
      // 신청 취소 API 호출
      if (wasCheckedIdx !== -1) {
        deleteMyBusMutatuin.mutateAsync(
          { idx: String(selectBusIdx)  }, 
          {
            onSuccess: () => {
              queryClient.invalidateQueries("bus/getMyBus");
              queryClient.invalidateQueries("bus/getBuses");
              setWasCheckedIdx(-1);
              B1ndToast.showSuccess("버스 신청 취소 성공");
            },
            onError: (err) => {
              B1ndToast.showError(ErrorHandler.busError(err as AxiosError)!);
            },
          }
        );
      }
      return;
    }
  
    if (wasCheckedIdx !== -1 && isChange) {
      // 신청 수정
      patchMyBusMutation.mutateAsync(
        { idx: String(selectBusIdx) },
        {
          onSuccess: () => {
            queryClient.invalidateQueries("bus/getMyBus");
            queryClient.invalidateQueries("bus/getBuses");
            setWasCheckedIdx(selectBusIdx);
            B1ndToast.showSuccess("버스 신청 수정 성공");
          },
          onError: (err) => {
            B1ndToast.showError(ErrorHandler.busError(err as AxiosError)!);
          },
        }
      );
    } else {
      // 새로운 신청
      postMyBusMutation.mutateAsync(
        { idx: String(selectBusIdx) },
        {
          onSuccess: () => {
            queryClient.invalidateQueries("bus/getMyBus");
            queryClient.invalidateQueries("bus/getBuses");
            setWasCheckedIdx(selectBusIdx);
            B1ndToast.showSuccess("버스 신청 성공");
          },
          onError: (err) => {
            B1ndToast.showError(ErrorHandler.busError(err as AxiosError)!);
          },
        }
      );
    }
  };
  

  return {
    selectBusIdx,
    busDate,
    busList,
    wasCheckedIdx,
    handleBusData,
    submitMyBus,
    isChange,
  };
};

export default useApplyBus;
