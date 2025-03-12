package bookhomework.model.dto;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class BookDto {
    private int 번호;
    private String 제목;
    private String 저자;
    private String 소개;
}
