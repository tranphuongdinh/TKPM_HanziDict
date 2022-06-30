import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import Template from "/containers/Template";
const About = () => {
  return (
    <Template title="Về chúng tớ | Hanzi Dict">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3 }}>
          Câu chuyện của chúng tớ
        </Typography>
        <Typography variant="p" sx={{ textAlign: "justify" }}>
          {" "}
          Hán tự là một thứ vô cùng đặc sắc, khiến tiếng Trung trở thành một
          ngôn ngữ đặc biệt. Hán tự là một dạng chữ viết tượng hình. Không chỉ
          đơn thuần là từ những hình ảnh quen thuộc trong cuộc sống, biểu diễn
          thành chữ viết, Hán tự còn là lịch sử, là văn hóa, là quan niệm của
          người Trung Quốc thể hiện qua cách ghép các thành phần khác nhau, tạo
          nên một chữ viết có ý nghĩa.
        </Typography>
        <br />
        <Typography variant="p" sx={{ textAlign: "justify" }}>
          Việc học một ngôn ngữ tượng hình vốn dĩ không phải là điều đơn giản.
          Trong quá trình học tiếng Trung, có lẽ phần khó khăn nhất với hầu hết
          các bạn học chính là nhớ từ vựng. Nhớ pinyin là dễ dàng, đánh máy bằng
          pinyin cũng thật dễ dàng, nhưng nhớ được Hán tự, tự tay viết ra được
          Hán tự mới là điều nan giải nhất.
        </Typography>
        <br />
        <Typography variant="p" sx={{ textAlign: "justify" }}>
          Với mong muốn có thể mang đến một công cụ tiện lợi, giúp các bạn đang
          theo học tiếng Trung có thể nhớ được Hán tự theo một cách trực quan
          nhất, dễ hiểu nhất, chúng mình đã mang đến một bộ từ điển "lạ lùng"
          chưa từng có. Từ điển này tập trung vào việc giải thích ý nghĩa của
          từng Hán tự, xem nó được tượng hình như thế nào, được ghép từ các
          thành phần ra sao, dùng hình ảnh để minh họa, từ đó giúp bạn học hình
          dung được hình ảnh tượng trưng, hiểu được ý nghĩa của Hán tự, ghi nhớ
          một cách tự nhiên mà không cần phải "học vẹt".
        </Typography>
        <br />{" "}
        <Typography
          variant="p"
          sx={{ fontStyle: "italic", textAlign: "justify" }}
        >
          {" "}
          "Lúc đầu học tiếng Trung, cảm giác như tìm được chính mình. Bây giờ
          học tiếng Trung, cảm giác như tìm được thế giới mới, tươi đẹp hơn,
          rộng mở hơn, là nơi mình thuộc về."
        </Typography>{" "}
        <br />
        <Typography variant="p" sx={{ textAlign: "justify" }}>
          Chúc bạn học thật tốt!
        </Typography>
      </Box>
    </Template>
  );
};

export default About;
