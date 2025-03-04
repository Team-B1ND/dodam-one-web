import { AppliedPass } from "src/types/Pass/pass.type";
import { AppliedLeave } from "src/types/Leave/leave.type";
import * as S from "./style";
import dateTransform from "src/utils/Transform/dateTransform";
import React from "react";
import { Trash } from "@b1nd/dds-web";

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
  const { startAt, id, reason } = notApproveItemData;

  return (
    <S.ApplyNotApproveListItemContainer onClick={() => loadNotApprovedItem(id)}>
      <div style={{display:"flex",flexDirection:"column"}}>
      <S.ApplyNotApproveListItemText>
        {dateTransform.hyphen(startAt)}
      </S.ApplyNotApproveListItemText>
     
        <S.ApplyNotApproveListContnent>
          <span>
          {reason}
          </span>
        </S.ApplyNotApproveListContnent>
        </div>
        <S.ApplyNotApproveListItemDeleteButton
        onClick={() => deleteNotApprovedItem(id)}
      >
        <S.ApplyNotApproveListItemDeleteIcon>
          <Trash color="labelAssistive"/>
        </S.ApplyNotApproveListItemDeleteIcon>
      </S.ApplyNotApproveListItemDeleteButton>
    </S.ApplyNotApproveListItemContainer>
  );
};

export default React.memo(ApplyNotApproveListItem);
