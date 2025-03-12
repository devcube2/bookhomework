package bookhomework.controller;

import bookhomework.model.dto.BookReviewDto;
import bookhomework.service.BookReviewService;
import bookhomework.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookreview")
public class BookReviewController {
    @Autowired
    private BookReviewService bookReviewService;

    @PostMapping("")
    public boolean 리뷰등록(@RequestBody BookReviewDto bookReviewDto) {
        System.out.println("BookReviewController.리뷰등록");
        System.out.println("bookReviewDto = " + bookReviewDto);
        return bookReviewService.리뷰등록(bookReviewDto);
    }

    @DeleteMapping("")
    public boolean 리뷰삭제(int 번호, @RequestParam String 비밀번호) {
        System.out.println("BookReviewController.리뷰삭제");
        System.out.println("번호 = " + 번호 + ", 비밀번호 = " + 비밀번호);
        return bookReviewService.리뷰삭제(번호, 비밀번호);
    }

    @GetMapping("")
    public List<BookReviewDto> 리뷰전체조회() {
        System.out.println("BookReviewController.리뷰전체조회");
        return bookReviewService.리뷰전체조회();
    }
}
