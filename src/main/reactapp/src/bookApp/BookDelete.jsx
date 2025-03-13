import { useState } from "react";
import { Box, Button, Input, Modal, Typography } from "@mui/joy";
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import axios from 'axios';

export default function BookDelete(props) {
    const navigate = useNavigate(); // 네비게이션 함수 생성

    const [bookId, setBookId] = useState(''); // 책 번호를 상태로 저장
    const [bookPassword, setBookPassword] = useState(''); // 책 비밀번호를 상태로 저장
    const [open, setOpen] = useState(false); // 모달 닫힘 상태
    const [message, setMessage] = useState(''); // 성공 또는 실패 메시지

    // 책 번호 입력 변경
    const handleBookIdChange = (e) => {
        setBookId(e.target.value);
    };

    // 책 비밀번호 입력 변경
    const handleBookPasswordChange = (e) => {
        setBookPassword(e.target.value);
    };

    // 책 삭제 요청
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080/book?번호=${bookId}&비밀번호=${bookPassword}`);

            if (response.data === 1) {
                setMessage('책이 성공적으로 삭제되었습니다.');
            } else {
                setMessage('삭제 실패했습니다. 책 번호 or 비밀번호를 다시 확인해 주세요.');
            }
        } catch (error) {
            setMessage('삭제 요청 중 오류가 발생했습니다.');
        }

        // 모달 열기
        setOpen(true);
    };

    // 모달 닫기
    const handleClose = () => {
        navigate('/'); // 책추천 목록으로 이동
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 3, border: '1px solid #ccc', borderRadius: '8px' }}>
            <Typography level="h4" sx={{ mb: 2 }}>책추천 삭제</Typography>

            <Input
                placeholder="번호"
                name="번호"
                value={bookId}
                onChange={handleBookIdChange}
                sx={{ mb: 2 }}
                required
            />
            <Input
                placeholder="비밀번호"
                name="비밀번호"
                type="password"
                value={bookPassword}
                onChange={handleBookPasswordChange}
                sx={{ mb: 2 }}
                required
            />
            <Button onClick={handleDelete} sx={{ width: '100%' }}>삭제</Button>

            {/* 삭제 결과 모달 */}
            <Modal open={open} onClose={handleClose}>
                <Box sx={{ padding: 4, backgroundColor: 'white', borderRadius: '8px', maxWidth: '400px', margin: 'auto' }}>
                    <Typography level="h6">삭제 결과</Typography>
                    <Typography sx={{ marginTop: 2 }}>{message}</Typography>
                    <Button variant="outlined" color="primary" onClick={handleClose} sx={{ marginTop: 2 }}>
                        닫기
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
}