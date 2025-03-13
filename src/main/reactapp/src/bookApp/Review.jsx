// Review.js
import React from 'react';
import { CardContent, Typography, Button } from '@mui/joy';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import axios from 'axios'

const Review = ({ 번호 }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const loadReviewList = async () => {
            try {
                const bookResponse = await axios.get(`http://localhost:8080/book/review?번호=${번호}`);
                setReviews(bookResponse.data); // 리뷰 목록을 state에 저장
            } catch (error) {
                console.log(error);
                alert('리뷰 목록을 불러오는 데 실패했습니다.');
            }
        }
        loadReviewList();
    }, []); // 빈 배열로 한 번만 실행

    // const handleDelete = async (번호) => {
    //     try {
    //         const password = prompt('비밀번호를 입력하세요.');
    //         const response = await axios.delete(`http://localhost:8080/book/review?번호=${번호}&비밀번호=${password}`);

    //         setReviews(response.data); // 리뷰 목록을 state에 저장

    //         if (response.data === 1) {
    //             alert('리뷰가 성공적으로 삭제되었습니다.');
    //         } else {
    //             alert('리뷰 삭제 실패했습니다. 비밀번호를 다시 확인해 주세요.');
    //         }
    //     } catch (error) {
    //         alert('리뷰 삭제 요청 중 오류가 발생했습니다.');
    //     } finally {
    //         navigate('/', { state: { key: Math.random() } }); // 강제 리렌더링
    //     }
    // };

    return (
        <>
            {reviews.map((review) => (
                <Typography level="h5">감상평: {review.감상평}</Typography>
            ))}
        </>
    );
};

export default Review;
