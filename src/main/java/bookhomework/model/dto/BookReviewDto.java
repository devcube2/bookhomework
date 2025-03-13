package bookhomework.model.dto;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class BookReviewDto {
    private int 번호;
    private String 책번호;
    private String 감상평;
    private String 비밀번호;
}
