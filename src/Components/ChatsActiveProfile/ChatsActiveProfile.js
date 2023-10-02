import React from 'react'
import { Text, Stack, Image } from '@chakra-ui/react'
import { CgProfile } from "react-icons/cg";
import { imageURL } from '../../utilities/config';
export default function ChatsActiveProfile({ userList, getUser }) {
  return (
    userList && userList?.map((d) => {
      return (
        <Stack onClick={() => {
          getUser(d);
        }} cursor={"pointer"} spacing={"2"} key={d.id} direction="row" alignItems={"center"} p={"8px 0px"} borderRight={"1px solid #ddd"} borderBottom={"1px solid #ddd"}>
          {
            d.profilePic ? <Image width={{ base: "18%", sm: "23%", md: '18%', lg: '', '2xl': '' }} src={imageURL + d?.profilePic}></Image>
              : <CgProfile />

          }
          <Text fontSize={{ base: "18px", sm: "12px", md: '18px', lg: '', '2xl': '' }} color={"#000"} fontWeight={"600"}>
            {d?.full_name}
          </Text>
        </Stack>
      )
    })
  )
}


