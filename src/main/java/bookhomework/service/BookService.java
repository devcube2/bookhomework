package bookhomework.service;

import bookhomework.model.dto.BookDto;
import bookhomework.model.mapper.BookMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookMapper bookMapper;

    public boolean 책등록(BookDto bookDto) {
        System.out.println("BookService.책등록");
        System.out.println("bookDto = " + bookDto);
        return bookMapper.책등록(bookDto);
    }

    public boolean 책수정(BookDto bookDto) {
        System.out.println("BookService.책수정");
        System.out.println("bookDto = " + bookDto);
        return bookMapper.책수정(bookDto);
    }

    public boolean 책삭제(int 번호, String 비밀번호) {
        System.out.println("BookService.책삭제");
        System.out.println("번호 = " + 번호 + ", 비밀번호 = " + 비밀번호);
        return bookMapper.책삭제(번호, 비밀번호);
    }

    public List<BookDto> 책전체조회() {
        System.out.println("BookService.책전체조회");
        return bookMapper.책전체조회();
    }

    public BookDto 책상세조회(int 번호) {
        return bookMapper.책상세조회(번호);
    }
}
