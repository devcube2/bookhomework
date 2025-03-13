package bookhomework.service;

import bookhomework.model.dto.BookReviewDto;
import bookhomework.model.mapper.BookReviewMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookReviewService {
    @Autowired
    private BookReviewMapper bookReviewMapper;

    public boolean 리뷰등록(BookReviewDto bookReviewDto) {
        System.out.println("BookReviewService.리뷰등록");
        System.out.println("bookReviewDto = " + bookReviewDto);
        return bookReviewMapper.리뷰등록(bookReviewDto);
    }

    public int 리뷰삭제(int 번호, String 비밀번호) {
        System.out.println("BookReviewService.리뷰삭제");
        System.out.println("번호 = " + 번호 + ", 비밀번호 = " + 비밀번호);
        return bookReviewMapper.리뷰삭제(번호, 비밀번호);
    }

    public List<BookReviewDto> 리뷰조회(int 번호) {
        System.out.println("BookReviewService.리뷰조회");
        System.out.println("번호 = " + 번호);
        return bookReviewMapper.리뷰조회(번호);
    }
}
