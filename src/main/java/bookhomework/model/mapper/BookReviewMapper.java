package bookhomework.model.mapper;

import bookhomework.model.dto.BookReviewDto;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface BookReviewMapper {
    @Insert("insert into 책리뷰(감상평, 책번호, 비밀번호) values (#{감상평}, #{책번호}, #{비밀번호})")
    boolean 리뷰등록(BookReviewDto bookReviewDto);

    @Delete("delete from 책리뷰 where 번호 = #{번호} and 비밀번호 = #{비밀번호}")
    int 리뷰삭제(int 번호, String 비밀번호);

    @Select("select 책리뷰.번호, 책리뷰.감상평 from 책추천 join 책리뷰 on #{번호} = 책리뷰.책번호")
    List<BookReviewDto> 리뷰조회(int 번호);
}
