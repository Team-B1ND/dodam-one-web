import { AppliedPass } from "src/types/Pass/pass.type";
import { AppliedLeave } from "src/types/Leave/leave.type";
import * as S from "./style";
import dateTransform from "src/utils/Transform/dateTransform";
// import { CgTrash } from "react-icons/cg";
import React from "react";

interface Props {
  notApproveItemData: AppliedPass | AppliedLeave;
  loadNotApprovedItem: (idx: number) => void;
  deleteNotApprovedItem: (idx: number) => void;
}

const ApplyNotApproveListItem = ({
  notApproveItemData,
  loadNotApprovedItem,
  deleteNotApprovedItem,
}: Props) => {
  const { startAt, id } = notApproveItemData;

  return (
    <S.ApplyNotApproveListItemContainer onClick={() => loadNotApprovedItem(id)}>
      <S.ApplyNotApproveListItemText>
        {dateTransform.fullDate(startAt)}
      </S.ApplyNotApproveListItemText>
      <S.ApplyNotApproveListItemDeleteButton
        onClick={() => deleteNotApprovedItem(id)}
      >
        <S.ApplyNotApproveListItemDeleteIcon>
          {/* <CgTrash /> */}
        </S.ApplyNotApproveListItemDeleteIcon>
      </S.ApplyNotApproveListItemDeleteButton>
    </S.ApplyNotApproveListItemContainer>
  );
};

export default React.memo(ApplyNotApproveListItem);
