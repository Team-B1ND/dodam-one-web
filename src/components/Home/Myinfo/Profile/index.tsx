import { useGetMyMemberQuery } from "src/queries/Member/member.query";
import { ProfileBox, ProfileImg, ProfileText } from "./style";
import dataTransform from "src/utils/Transform/dataTransform";
import { Avatar } from "@b1nd/dds-web";

const Profile = () =>{
        const { data: serverMyMemberData } = useGetMyMemberQuery({
          suspense: true,
          cacheTime: 1000 * 60 * 60,
          staleTime: 1000 * 60 * 5,
        });
    
    return(
        <ProfileBox>
          { serverMyMemberData?.data.profileImage ? 
           <ProfileImg src={serverMyMemberData?.data.profileImage!}/>
          : <Avatar size="extraLarge"/>
          }
           <ProfileText>
            <span>{serverMyMemberData?.data.name}</span>
            <span> {dataTransform.schoolInfoTransform(
            serverMyMemberData?.data?.student?.grade || 0,
            serverMyMemberData?.data?.student?.room || 0,
            serverMyMemberData?.data?.student?.number || 0
          )}</span>
            </ProfileText>
        </ProfileBox>
    )
}

export default Profile;