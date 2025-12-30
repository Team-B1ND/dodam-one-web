import { Dispatch, SetStateAction } from "react";

import dataCheck from "utils/Check/dataCheck";
import ApplyNotApproveListItem from "./ApplyNotApproveListItem";
import * as S from "./style";
import React from "react";
import { useGetMyPassesQuery } from "queries/Pass/pass.query";
import ApplyNotApproveListFallbackLoader from "components/Common/Skeleton/ApplyNotList";

interface Props {
  fold: boolean;
  setFold: Dispatch<SetStateAction<boolean>>;
  
  deleteNotApprovedItem: (idx: number) => void;
}

const ApplyPassApproveList = ({
  deleteNotApprovedItem,
}: Props) => {

   const {data:notApproveItems, isPending: isLoading} = useGetMyPassesQuery()
    if (isLoading) {
      return <ApplyNotApproveListFallbackLoader />;
    }
    
  return (
    <S.ApplyNotApproveListContainer >
      {notApproveItems && notApproveItems.data.length === 0 ? (
        <>수정할 외출 정보가 없습니다.</>
      ) : (
        <S.ApplyNotApproveListWrap>
          {dataCheck.undefinedCheck(notApproveItems) ||
          dataCheck.voidCheck(notApproveItems?.data!) ? (
            <S.ApplyNotApproveListVoidWrap>
              <S.ApplyNotApproveListVoidIcon />
            </S.ApplyNotApproveListVoidWrap>
          ) : (
            <>
              {notApproveItems?.data.map((notApproveItem) => (
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

export default React.memo(ApplyPassApproveList);