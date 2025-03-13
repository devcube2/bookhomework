import { Box, Typography, Card, CardContent } from "@mui/joy"
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function BookList(props) {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/book')
            .then(response => {
                setBooks(response.data); // 책 목록을 state에 저장
                setLoading(false);
            })
            .catch(error => {
                setError('책 목록을 불러오는 데 실패했습니다.');
                setLoading(false);
            });
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
                    // <li key={book.번호}>
                    //     <strong>{book.title}</strong> - {book.author}
                    // </li>
                    <Card key={book.번호} variant="outlined" sx={{ width: 200 }}>
                        <CardContent>
                            <Typography level="h5">제목: {book.제목}</Typography>
                            <Typography level="body2">저자: 👤 {book.저자}</Typography>
                            <Typography level="h5">소개: {book.소개}</Typography>                            
                        </CardContent>
                    </Card>
                ))}
                {/* <Card variant="outlined" sx={{ width: 200 }}>
                    <CardContent>
                        <Typography level="h5">{'테스트 책제목'}</Typography>
                        <Typography level="body2">👤 {'테스트 책저자'}</Typography>
                    </CardContent>
                </Card> */}
            </Box>
        </Box>
    </>)
}