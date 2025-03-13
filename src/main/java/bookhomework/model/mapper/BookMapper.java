package bookhomework.model.mapper;

import bookhomework.model.dto.BookDto;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface BookMapper {
    @Insert("insert into 책추천(제목, 저자, 소개, 비밀번호) values (#{제목}, #{저자}, #{소개}, #{비밀번호})")
    boolean 책등록(BookDto bookDto);

    @Update("update 책추천 set 제목 = #{제목}, 저자 = #{저자}, 소개 = #{소개} where 번호 = #{번호} and 비밀번호 = #{비밀번호}")
    int 책수정(BookDto bookDto);

    @Delete("delete from 책추천 where 번호 = #{번호} and 비밀번호 = #{비밀번호}")
    int 책삭제(int 번호, String 비밀번호);

    @Select("select * from 책추천")
    List<BookDto> 책전체조회();

//    @Select("select * from 책추천 where 번호 = #{번호}")
//    BookDto 책상세조회(int 번호);
}