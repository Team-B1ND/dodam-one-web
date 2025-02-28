import { Dispatch, SetStateAction } from "react";
import { AppliedLeave } from "src/types/Leave/leave.type";
import { AppliedPass } from "src/types/Pass/pass.type";
import dataCheck from "src/utils/Check/dataCheck";
import ApplyNotApproveListItem from "./ApplyNotApproveListItem";
import * as S from "./style";
import React from "react";

interface Props {
  fold: boolean;
  setFold: Dispatch<SetStateAction<boolean>>;
  notApproveItems: AppliedLeave[] | AppliedPass[] | undefined;
  loadNotApprovedItem: (idx: number) => void;
  deleteNotApprovedItem: (idx: number) => void;
}

const ApplyNotApproveList = ({
  fold,
  notApproveItems,
  loadNotApprovedItem,
  deleteNotApprovedItem,
}: Props) => {
  return (
    <S.ApplyNotApproveListContainer fold={fold}>
      {notApproveItems && notApproveItems.length === 0 ? (
        <>수정할 외박 정보가 없습니다.</>
      ) : (
        <S.ApplyNotApproveListWrap>
          {dataCheck.undefinedCheck(notApproveItems) ||
          dataCheck.voidCheck(notApproveItems!) ? (
            <S.ApplyNotApproveListVoidWrap>
              <S.ApplyNotApproveListVoidIcon />
            </S.ApplyNotApproveListVoidWrap>
          ) : (
            <>
              {notApproveItems?.map((notApproveItem) => (
                <ApplyNotApproveListItem
                  notApproveItemData={notApproveItem}
                  loadNotApprovedItem={loadNotApprovedItem}
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