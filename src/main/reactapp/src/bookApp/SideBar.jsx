import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

const booksData = {
  "소설": [
    { title: "해리 포터", author: "J.K. 롤링" },
    { title: "노인과 바다", author: "어니스트 헤밍웨이" },
  ],
  "자기계발": [
    { title: "성공하는 사람들의 7가지 습관", author: "스티븐 코비" },
    { title: "부의 추월차선", author: "엠제이 드마코" },
  ],
  "과학": [
    { title: "시간의 역사", author: "스티븐 호킹" },
    { title: "이기적 유전자", author: "리처드 도킨스" },
  ],
};

export default function BookList() {
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  return (
    <Box display="flex" height="100vh">
      {/* 📌 왼쪽 사이드바 */}
      <Box width="200px" p={2} sx={{ borderRight: "1px solid #ccc" }}>
        <Typography level="h4" mb={2}>📚 카테고리</Typography>
        <List>
          {Object.keys(booksData).map((category) => (
            <ListItem
              button
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </ListItem>
          ))}
        </List>
      </Box>

      {/* 📌 오른쪽 책 목록 출력 */}
      <Box flex={1} p={3}>
        <Typography level="h3">
          {selectedCategory ? `📖 ${selectedCategory} 책 목록` : "책을 선택하세요"}
        </Typography>

        {selectedCategory && (
          <Box mt={2} display="flex" gap={2} flexWrap="wrap">
            {booksData[selectedCategory].map((book, index) => (
              <Card key={index} variant="outlined" sx={{ width: 200 }}>
                <CardContent>
                  <Typography level="h5">{book.title}</Typography>
                  <Typography level="body2">👤 {book.author}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
