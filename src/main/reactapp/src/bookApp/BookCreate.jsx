import React, { useState } from 'react';
import { Box, Input, Button, Typography, Textarea, Modal } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function BookCreate(props) {
    const navigate = useNavigate();

    const [book, setBook] = useState({
        제목: '',
        저자: '',
        소개: '',
        비밀번호: '',
    });
    const [open, setOpen] = useState(false); // 모달 닫힘 상태
    const [message, setMessage] = useState(''); // 성공 또는 실패 메시지

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`http://localhost:8080/book`, book);

            if (response.data === true) {
                setMessage('성공적으로 등록되었습니다.');
            } else {
                setMessage('등록 실패했습니다.');
            }
        } catch (error) {
            setMessage('등록 요청 중 오류가 발생했습니다.');
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
            <Typography level="h4" sx={{ mb: 2 }}>책추천 등록</Typography>

            <Input
                placeholder="제목"
                name="제목"
                value={book.제목}
                onChange={handleChange}
                sx={{ mb: 2 }}
                required
            />
            <Input
                placeholder="저자"
                name="저자"
                value={book.저자}
                onChange={handleChange}
                sx={{ mb: 2 }}
                required
            />
            <Textarea
                placeholder="소개"
                name="소개"
                value={book.소개}
                onChange={handleChange}
                sx={{ mb: 2 }}
                minRows={3}
                required
            />
            <Input
                placeholder="비밀번호"
                name="비밀번호"
                type="password"
                value={book.비밀번호}
                onChange={handleChange}
                sx={{ mb: 2 }}
                required
            />
            <Button onClick={handleSubmit} sx={{ width: '100%' }}>등록</Button>

            {/* 등록 결과 모달 */}
            <Modal open={open} onClose={handleClose}>
                <Box sx={{ padding: 4, backgroundColor: 'white', borderRadius: '8px', maxWidth: '400px', margin: 'auto' }}>
                    <Typography level="h6">등록 결과</Typography>
                    <Typography sx={{ marginTop: 2 }}>{message}</Typography>
                    <Button variant="outlined" color="primary" onClick={handleClose} sx={{ marginTop: 2 }}>
                        닫기
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
};
