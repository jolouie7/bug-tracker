import SidebarWithHeader from "@/components/sidebarWithHeader/SidebarWithHeader";
import Bar from "../../components/bar/Bar";
import { Box, Center, Flex } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <>
      <SidebarWithHeader>
        <h1>Hello, SidebarWithHeader!</h1>
        <Flex flexWrap="wrap" flexGrow={1}>
          {/* Four equal squares */}
          <Box w={["100%", "50%"]} p={4}>
            <Bar />
          </Box>
          <Box w={["100%", "50%"]} p={4}>
            <Bar />
          </Box>
          <Box w={["100%", "50%"]} p={4}>
            <Bar />
          </Box>
          <Box w={["100%", "50%"]} p={4}>
            <Bar />
          </Box>
        </Flex>
      </SidebarWithHeader>
    </>
  );
}
