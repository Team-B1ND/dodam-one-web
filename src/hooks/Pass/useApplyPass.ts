import React, { useCallback, useEffect, useState } from "react";
import {
  useDeleteMyPassMutation,
  useGetMyPassesQuery,
  usePostApplyPassMutation,
  usePutApplyPassMutation,
} from "src/queries/Pass/pass.query";
import { AppliedPass, ApplyPass } from "src/types/Pass/pass.type";
import dateTransform from "src/utils/Transform/dateTransform";
import dayjs from "dayjs";
import dataCheck from "src/utils/Check/dataCheck";
import { useQueryClient } from "react-query";
import {B1ndToast} from "@b1nd/b1nd-toastify";
// import { captureException, withScope } from "sentry/react";

const useApplyPass = () => {
  const queryClient = useQueryClient();

  const appliedPasses = useGetMyPassesQuery({
    suspense: true,
    staleTime: 1000 * 30,
    cacheTime: 1000 * 60,
  }).data?.data;

  const [passData, setPassData] = useState<ApplyPass>({
    startTimeHour: "",
    startTimeMinute: "",
    endTimeHour: "",
    endTimeMinute: "",
    reason: "",
    dinnerOrNot:false,
    idx: 0,
  });

  const postApplyPassMutation = usePostApplyPassMutation();
  const putApplyPassMutation = usePutApplyPassMutation();
  const deleteMyPassMutation = useDeleteMyPassMutation();

  const [isFold, setIsFold] = useState(true);

  const [passDataDate, setPassDataDate] = useState<string>(
    dateTransform.hyphen()
  );

  const [notApprovedPasses, setNotApprovedPasses] = useState<AppliedPass[]>([]);
  
  //승인되지 않은 외출들을 담아주는 부분
  useEffect(() => {
    if (appliedPasses) {
      const validNotApprovedPasses = appliedPasses?.filter(
        (pass) => pass.status === "PENDING"
      );
      setNotApprovedPasses(validNotApprovedPasses);
    }
  }, [appliedPasses]);

  const transformNotApprovedPass = (
    notApprovedPass: AppliedPass
  ): ApplyPass => {
    const { endAt, startAt, id } = notApprovedPass;

    //시간은 05:30 이 형식일텐데 여기서 ':'기준으로 구분하여 시간과 분을 추출
    const validStartTime = dateTransform.fullDate(startAt).slice(10).split(":");

    const validEndTime = dateTransform.fullDate(endAt).slice(10).split(":");

    return {
      idx: id,
      startTimeHour: validStartTime[0],
      startTimeMinute: validStartTime[1],
      endTimeHour: validEndTime[0],
      endTimeMinute: validEndTime[1],
      dinnerOrNot:false,
      ...notApprovedPass,
    };
  };

  //외출 리스트를 켯을 때 첫번째 외출 정보가 input에 담기는 부분
  useEffect(() => {
    if (isFold) {
      setPassData({
        endTimeHour: "",
        endTimeMinute: "",
        reason: "",
        startTimeHour: "",
        startTimeMinute: "",
        dinnerOrNot:false,
        idx: 0,
      });
      setPassDataDate(dateTransform.hyphen());
    } else {
      if (notApprovedPasses?.length !== 0) {
        const { startAt } = notApprovedPasses![0];

        const passDate = dateTransform.fullDate(startAt).slice(0, 10);

        setPassData({
          ...transformNotApprovedPass(notApprovedPasses![0]),
          ...notApprovedPasses![0],
        });

        setPassDataDate(passDate);
      }
    }
  }, [isFold, notApprovedPasses]);

  //외출 리스트에서 외출을 눌렀을때 인풋에 담기는 함수
  const loadNotApprovedPass = useCallback(
    (idx: number) => {
      const notApprovePass: AppliedPass = appliedPasses?.find(
        (pass) => pass.id === idx
      )!;

      const { startAt } = notApprovePass;
      const passDate = dateTransform.fullDate(startAt).slice(0, 10);
      setPassData({
        ...transformNotApprovedPass(notApprovePass),
        ...notApprovePass,
      });
      setPassDataDate(passDate);
    },
    [appliedPasses]
  );

  //외출 리스트에서 외출 삭제하는 함수
  const deleteNotApprovedPass = useCallback(
    async (idx: number) => {
      deleteMyPassMutation.mutateAsync(
        { id: idx + "" },
        {
          onSuccess: () => {
            queryClient.invalidateQueries("pass/getMyPasses");
            B1ndToast.showSuccess("외출 삭제 성공");
          },
          onError: () => {
            B1ndToast.showError("외출 삭제 실패");
            // withScope((scope) => {
            //   scope.setContext("query", { queryHash: query.id });
            //   captureException(`${query.id}번이 ${err}이유로 외출 삭제 실패`);
            // });
          },
        }
      );
    },
    [deleteMyPassMutation, queryClient]
  );

  // datePicker 핸들링 함수
  const handlePassDataDate = useCallback((e: Date) => {
    setPassDataDate(dayjs(e).format("YYYY-MM-DD"));
  }, []);

  // 외출 데이터 핸들링 함수
  const handlePassData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setPassData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );
  //모달 닫기
  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  // 외출 데이터 사유 핸들링 함수
  const handlePassDataReason = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = e.target;

      setPassData((prev) => ({ ...prev, reason: value }));
    },
    []
  );

  
  const [isOpen, setOpen] = useState(false);
  const submitPassData = useCallback(async () => {
    const {
      startTimeHour,
      startTimeMinute,
      endTimeHour,
      endTimeMinute,
      reason,
    } = passData;

    const validApplyPass = {
      reason,
      startAt: dayjs(
        `${passDataDate} ${startTimeHour}:${startTimeMinute}`
      ).format("YYYY-MM-DDTHH:mm:ss"),
      endAt: dayjs(`${passDataDate} ${endTimeHour}:${endTimeMinute}`).format(
        "YYYY-MM-DDTHH:mm:ss"
      ),
      dinnerOrNot:true
    };

    if (validApplyPass.reason.trim() === "") {
      B1ndToast.showInfo("외출사유를 작성해주세요!");
      return;
    }

    const startTimeIsAfter = dayjs(validApplyPass.startAt).isAfter(
      dateTransform.fullDate()
    );

    const endTimeIsAfter = dayjs(validApplyPass.endAt).isAfter(
      dateTransform.fullDate()
    );

    if (postApplyPassMutation.isLoading) {
      return;
    }

    if (notApprovedPasses?.length > 4) {
      B1ndToast.showInfo("외출신청은 최대 4개까지 가능해요!");
      return;
    }

    if (
      !dataCheck.timeFormatCheck(startTimeHour, startTimeMinute) ||
      !dataCheck.timeFormatCheck(endTimeHour, endTimeMinute)
    ) {
      B1ndToast.showInfo("올바른 양식을 입력해주세요!");
      return;
    }

    if (!startTimeIsAfter || !endTimeIsAfter) {
      B1ndToast.showInfo("현재 시간 이후로 입력해주세요!");
      return;
    }

    if (!dayjs(validApplyPass.endAt).isAfter(validApplyPass.startAt)) {
      B1ndToast.showInfo("복귀시간이 출발시간보다 빨라요!");
      return;
    }
    
    if (!reason || reason.replace(/\s+/g, "").length <= 5) {
      B1ndToast.showInfo("사유의 길이를 5자 이상로 적어주세요!");
      return;
    }
    if (reason?.length > 50) {
      B1ndToast.showInfo("사유의 길이를 50자 이내로 적어주세요!");
      return;
    }
    
    //외출 수정인지 외출 신청인지 구분하는 함수

    //수요일인지 아닌지 확인하는 코드
    const Now = new Date()
    const { startAt}=validApplyPass
    const startAtDay = new Date(startAt).getDay();
    
    if (isFold) {
      transformNotApprovedPass
    if(Now.getDay() && startAtDay === 3){
      setOpen(true);
    }else{
      postApplyPassMutation.mutateAsync(validApplyPass, {
        onSuccess: () => {
          queryClient.invalidateQueries("pass/getMyPasses");
          B1ndToast.showSuccess("외출 신청 성공");
          for (let key in passData) {
            setPassData((prev) => ({ ...prev, [key]: "" }));
          }
        },
        onError: () => {
          B1ndToast.showError("외출 신청 실패");
        },
      });

    }
    } else {
      const passIdx = notApprovedPasses.find(
        (notApprovePass) => notApprovePass.id === passData.idx
      )?.id;
      putApplyPassMutation.mutateAsync(
        {
          ...validApplyPass,
          outId: passIdx!,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries("pass/getMyPasses");
            B1ndToast.showSuccess("외출 수정 성공");
          },
          onError: () => {
            B1ndToast.showError("외출 수정 실패");
          },
        }
      );
    }
  }, [
    isFold,
    notApprovedPasses,
    passData,
    passDataDate,
    postApplyPassMutation,
    putApplyPassMutation,
    queryClient,
  ]);

  return {
    isFold,
    setIsFold,
    notApprovedPasses,
    appliedPasses,
    loadNotApprovedPass,
    deleteNotApprovedPass,
    passData,
    handlePassData,
    handlePassDataReason,
    passDataDate,
    handlePassDataDate,
    submitPassData,
    isOpen,
    closeModal,
  };
};

export default useApplyPass;
