import { Dispatch, SetStateAction } from "react";
import dataCheck from "utils/Check/dataCheck";
import ApplyNotApproveListItem from "./ApplyNotApproveListItem";
import * as S from "./style";
import React from "react";
import { useGetMyLeavesQuery } from "queries/Leave/leave.query";
import ApplyNotApproveListFallbackLoader from "components/Common/Skeleton/ApplyNotList";

interface Props {
  fold: boolean;
  setFold: Dispatch<SetStateAction<boolean>>;
  deleteNotApprovedItem: (idx: number) => void;
}

const ApplyNotApproveList = ({
  deleteNotApprovedItem,
}: Props) => {
  const {data:appliedLeaves, isPending: isLoading } = useGetMyLeavesQuery();

    if(isLoading){
      return <ApplyNotApproveListFallbackLoader/>
    }

  return (
    <S.ApplyNotApproveListContainer>
      {appliedLeaves && appliedLeaves.data.length === 0 ? (
        <>수정할 외박 정보가 없습니다.</>
      ) : (
        <S.ApplyNotApproveListWrap>
          {dataCheck.undefinedCheck(appliedLeaves?.data!) ||
          dataCheck.voidCheck(appliedLeaves?.data!) ? (
            <S.ApplyNotApproveListVoidWrap>
              <S.ApplyNotApproveListVoidIcon />
            </S.ApplyNotApproveListVoidWrap>
          ) : (
            <>
              {appliedLeaves?.data.map((notApproveItem) => (
                <ApplyNotApproveListItem
                  notApproveItemData={notApproveItem}
                  deleteNotApprovedItem={deleteNotApprovedItem}
                  key={notApproveItem.id}
                />
              ))}
            </>
          )}
        </S.ApplyNotApproveListWrap>
      )}
    </S.ApplyNotApproveListContainer>
  );
};

export default React.memo(ApplyNotApproveList);