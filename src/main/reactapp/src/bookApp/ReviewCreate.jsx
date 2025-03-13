import React, { useState } from 'react';
import { Box, Input, Button, Typography, Textarea, Modal } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ReviewCreate(props) {
    const navigate = useNavigate();

    const [review, setReview] = useState({
        책번호: '',
        감상평: '',
        비밀번호: ''
    });
    const [open, setOpen] = useState(false); // 모달 닫힘 상태
    const [message, setMessage] = useState(''); // 성공 또는 실패 메시지

    const handleChange = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`http://localhost:8080/book/review`, review);

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
            <Typography level="h4" sx={{ mb: 2 }}>책리뷰 등록</Typography>

            <Input
                placeholder="책번호"
                name="책번호"
                value={review.책번호}
                onChange={handleChange}
                sx={{ mb: 2 }}
                required
            />
            <Input
                placeholder="감상평"
                name="감상평"
                value={review.감상평}
                onChange={handleChange}
                sx={{ mb: 2 }}
                required
            />
            <Input
                placeholder="비밀번호"
                name="비밀번호"
                type="password"
                value={review.비밀번호}
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
