import { AppliedPass } from "types/Pass/pass.type";
import { AppliedLeave } from "types/Leave/leave.type";
import * as S from "./style";
import dateTransform from "utils/Transform/dateTransform";
import React from "react";
import { Trash } from "@b1nd/dds-web";

interface Props {
  notApproveItemData: AppliedPass | AppliedLeave;
  deleteNotApprovedItem: (idx: number) => void;
}

const ApplyNotApproveListItem = ({
  notApproveItemData,
  deleteNotApprovedItem,
}: Props) => {
  const { startAt, id, reason } = notApproveItemData;

  return (
    <S.ApplyNotApproveListItemContainer >
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
