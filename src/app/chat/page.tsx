"use client";

import { Box, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Chat = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/?callbackUrl=/chat");
    },
  });
  if (session) {
    return (
      <Box>
        <Box>
          <Text>Chat</Text>
          <Text>{session?.user?.name}</Text>
          <Text>This should not be accessible</Text>
        </Box>
      </Box>
    );
  } else {
    return <Text>Redirecting...</Text>;
  }
};

export default Chat;
