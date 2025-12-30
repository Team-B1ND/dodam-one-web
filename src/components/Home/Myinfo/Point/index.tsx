import { DodamTag } from "@b1nd/dds-web";
import { useRecoilState } from "recoil";
import { pointViewTypeAtom } from "store/Point/pointStore";
import { useGetMyPointQuery } from "queries/Point/point.query";
import { PointType } from "repositories/Point/point.param";
import * as S from "./style";


const Point = () => {
    const [isDormitoryPointView, setIsDormitoryPointView] =
    useRecoilState(pointViewTypeAtom);

    const { data, isPending: isLoading } = useGetMyPointQuery(
        { type: isDormitoryPointView as PointType }
      );

    const pointData = data?.data ?? { bonus: 0, minus: 0 };

    const onChangeView = () => {
        setIsDormitoryPointView((prev) =>
          prev === "DORMITORY" ? "SCHOOL" : "DORMITORY"
        );
      };

    return(
        <>
        <S.PointBox>
            {isLoading ? "로딩중..." : (
                 <>
                 <S.PointTextBox type="상점">
                    <span>상점</span>
                    <span>{pointData?.bonus}점</span>
                </S.PointTextBox>
                <S.PointTextBox type="벌점">
                    <span>벌점</span>
                    <span>{pointData?.minus}점</span>
                </S.PointTextBox>
                </>
            )}
           
        </S.PointBox>
        <S.MyPointType>
            <DodamTag 
            text="기숙사" 
            color={isDormitoryPointView=="DORMITORY" ? "blue" : "default"}
            customStyle={{cursor:"pointer"}}
            onClick={onChangeView}
            />
            <DodamTag 
            text="힉교" 
            color={isDormitoryPointView=="SCHOOL" ? "blue" : "default"}
            customStyle={{cursor:"pointer"}}
            onClick={onChangeView}
            />
        </S.MyPointType>
        </>
    )
}


export default Point;