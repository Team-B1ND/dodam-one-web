import * as S from "./style";
import Profile from "./Profile";
import { Suspense } from "react";
import MyInfoFallbackLoader from "src/components/Common/Skeleton/MyInfo";
import { DodamDivider, DodamFilledButton,ChevronRight, DodamErrorBoundary } from "@b1nd/dds-web";
import MyWakeupSong from "./MyWakeupSong";

const MyInfo = () =>{
    const redirect = (location:string) => {
        if(location=="myinfo"){
            window.location.href = "http://dodam.b1nd.com/myinfo";
        }else {
            window.location.href = "https://dodam.b1nd.com/wakesong"
        }
        
      };
      
    
    return(
        <S.MyInfoBox>
            <S.MyInfoProfile>
                <DodamErrorBoundary text="에러발생">
                    <Suspense fallback={<MyInfoFallbackLoader/>}>
                        <Profile/>
                    </Suspense>
                </DodamErrorBoundary>
            </S.MyInfoProfile>
            <DodamFilledButton 
                size="Medium" 
                backgroundColorType="Assisitive"
                text="내 정보"
                typography={['Caption1','Bold']}
                onClick={()=>redirect("myinfo")}
                />
            <DodamDivider type="Small"/>
            {/* <S.MyPoint>
                <S.Title onClick={()=>redirect("myinfo")}>
                    상벌점 
                    <ChevronRight size={16} color="labelAssistive"/>
                </S.Title>
                <DodamErrorBoundary text="에러발생" showButton={true}>
                    <Suspense>
                        <Point/>
                    </Suspense>
                </DodamErrorBoundary>
            </S.MyPoint> */}
            {/* <DodamDivider type="Small"/> */}
            <S.MyWakeupSong>
                <S.Title onClick={()=>redirect("wakeup")}>
                    기상송 신청내역 
                    <ChevronRight size={16} color="labelAssistive"/>
                </S.Title>
                <MyWakeupSong/>
            </S.MyWakeupSong>
        </S.MyInfoBox>
    )
}

export default MyInfo;