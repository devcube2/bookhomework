package bookhomework.model.mapper;

import bookhomework.model.dto.BookReviewDto;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface BookReviewMapper {
    @Insert("insert into 책리뷰(감상평, 책번호, 비밀번호) values (#{감상평}, #{책번호}, #{비밀번호})")
    boolean 리뷰등록(BookReviewDto bookReviewDto);

    @Delete("delete from 책리뷰 where 번호 = #{번호} and 비밀번호 = #{비밀번호}")
    boolean 리뷰삭제(int 번호, String 비밀번호);

    @Select("select * from 책리뷰")
    List<BookReviewDto> 리뷰전체조회();
}
