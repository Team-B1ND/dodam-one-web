import { Dispatch, SetStateAction } from "react";

import dataCheck from "src/utils/Check/dataCheck";
import ApplyNotApproveListItem from "./ApplyNotApproveListItem";
import * as S from "./style";
import React from "react";
import { useGetMyPassesQuery } from "src/queries/Pass/pass.query";
import ApplyNotApproveListFallbackLoader from "src/components/Common/Skeleton/ApplyNotList";

interface Props {
  fold: boolean;
  setFold: Dispatch<SetStateAction<boolean>>;
  
  deleteNotApprovedItem: (idx: number) => void;
}

const ApplyPassApproveList = ({
  deleteNotApprovedItem,
}: Props) => {

   const {data:notApproveItems, isLoading} = useGetMyPassesQuery({
      staleTime: 1000 * 30,
      cacheTime: 1000 * 60,
      retry:1,
    })
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