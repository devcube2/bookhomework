package bookhomework.controller;

import bookhomework.model.dto.BookDto;
import bookhomework.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/book")
public class BookController {
    @Autowired
    private BookService bookService;

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("")
    boolean 책등록(@RequestBody BookDto bookDto) {
        System.out.println("BookController.책등록");
        System.out.println("bookDto = " + bookDto);
        return bookService.책등록(bookDto);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PutMapping("")
    int 책수정(@RequestBody BookDto bookDto) {
        System.out.println("BookController.책수정");
        System.out.println("bookDto = " + bookDto);
        return bookService.책수정(bookDto);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping("")
    int 책삭제(int 번호, @RequestParam String 비밀번호) {
        System.out.println("BookController.책삭제");
        System.out.println("번호 = " + 번호 + ", 비밀번호 = " + 비밀번호);
        return bookService.책삭제(번호, 비밀번호);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("")
    List<BookDto> 책전체조회() {
        System.out.println("BookController.책전체조회");
        return bookService.책전체조회();
    }

//    @CrossOrigin(origins = "http://localhost:5173")
//    @GetMapping("/view")
//    BookDto 책상세조회(int 번호) {
//        System.out.println("BookController.책상세조회");
//        System.out.println("번호 = " + 번호);
//        return bookService.책상세조회(번호);
//    }
}
