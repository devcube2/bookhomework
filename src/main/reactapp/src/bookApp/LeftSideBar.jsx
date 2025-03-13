import { Box, Divider, List, ListItem, Typography } from "@mui/joy"
import { Link } from 'react-router-dom';

export default function LeftSideBar(props) {
    return (<>
        <Box width="200px" p={2} sx={{ borderRight: "1px solid #ccc" }}>
            <Typography level="h4" mb={2}>📚 메뉴</Typography>
            <List>
                <ListItem><Link to="/book-create">책추천 등록</Link></ListItem>
                <ListItem><Link to="/">책추천 목록</Link></ListItem>
                <ListItem><Link to="/book-update">책추천 수정</Link></ListItem>
                <ListItem><Link to="/book-delete">책추천 삭제</Link></ListItem>
                <Divider></Divider>
                <ListItem><Link to="/review-create">책리뷰 등록</Link></ListItem>
            </List>
        </Box>
    </>)
}