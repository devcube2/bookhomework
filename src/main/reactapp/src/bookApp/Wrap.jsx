import LeftSideBar from "./LeftSideBar";
import RightContent from "./RightContent"

import { Box } from "@mui/joy";

export default function Wrap(props) {
    return (<>
        <Box display="flex" height="100vh">
            <LeftSideBar />
            <RightContent />
        </Box>
    </>)
}