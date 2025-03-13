package bookhomework.controller;

import bookhomework.model.dto.BookReviewDto;
import bookhomework.service.BookReviewService;
import bookhomework.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/book/review")
public class BookReviewController {
    @Autowired
    private BookReviewService bookReviewService;

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("")
    public boolean 리뷰등록(@RequestBody BookReviewDto bookReviewDto) {
        System.out.println("BookReviewController.리뷰등록");
        System.out.println("bookReviewDto = " + bookReviewDto);
        return bookReviewService.리뷰등록(bookReviewDto);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping("")
    public int 리뷰삭제(int 번호, @RequestParam String 비밀번호) {
        System.out.println("BookReviewController.리뷰삭제");
        System.out.println("번호 = " + 번호 + ", 비밀번호 = " + 비밀번호);
        return bookReviewService.리뷰삭제(번호, 비밀번호);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("")
    public List<BookReviewDto> 리뷰조회(int 번호) {
        System.out.println("BookReviewController.리뷰조회");
        System.out.println("번호 = " + 번호);
        return bookReviewService.리뷰조회(번호);
    }
}
