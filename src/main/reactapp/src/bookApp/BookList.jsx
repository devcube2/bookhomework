import { Box, Typography, Card, CardContent, Divider, Button } from "@mui/joy"
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import axios from 'axios'

import Review from './Review';

export default function BookList(props) {
    const navigate = useNavigate(); // 네비게이션 함수 생성

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadBookList = async () => {
            try {
                const bookResponse = await axios.get('http://localhost:8080/book');
                setBooks(bookResponse.data); // 책 목록을 state에 저장
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError('목록을 불러오는 데 실패했습니다.');
                setLoading(false);
            }
        }
        loadBookList();
    }, []); // 빈 배열로 한 번만 실행

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (<>
        <Box flex={1} p={3}>
            <Box mt={2} display="flex" gap={2} flexWrap="wrap">
                {books.map((book) => (
                    <Card key={book.번호} variant="outlined" sx={{ width: 400 }}>
                        <CardContent>
                            <Typography level="h5">번호: {book.번호}</Typography>
                            <Typography level="h5">제목: {book.제목}</Typography>
                            <Typography level="body2">저자: 👤 {book.저자}</Typography>
                            <Typography level="h5">소개: {book.소개}</Typography>
                        </CardContent>
                        <Divider></Divider>
                        <Typography level="h5">리뷰</Typography>
                        {/* <Review 번호={book.번호}/> */}
                    </Card>
                ))}
            </Box>
        </Box>
    </>)
}