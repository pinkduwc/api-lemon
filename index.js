const express = require("express");
const cors = require("cors");
const posts = require("./data");

const app = express();
app.use(cors());

// Route trả về tất cả bài viết
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// Route trả về thông tin chi tiết của bài viết dựa trên slug
app.get("/api/posts/:slug", (req, res) => {
  const { slug } = req.params;
  const post = posts.find((post) => post.slug === slug);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Bài viết không tồn tại" });
  }
});

app.post("/api/post", (req, res) => {
  console.log(req.body);
  // const { title, tags, content } = req.body;

  // if (!title || !tags || !content) {
  //   return res
  //     .status(400)
  //     .json({ message: "Vui lòng cung cấp đủ thông tin bài viết" });
  // }

  // const slug = title.toLowerCase().replace(/ /g, "-");

  // const existingPost = posts.find((post) => post.slug === slug);
  // if (existingPost) {
  //   return res
  //     .status(409)
  //     .json({ message: "Slug đã tồn tại, vui lòng chọn slug khác" });
  // }

  // const newPost = {
  //   id: posts.length + 1,
  //   title,
  //   slug,
  //   tags,
  //   content,
  //   author,
  //   avatar,
  //   likes: 0,
  //   comments: 0,
  //   created_at: new Date().toISOString(),
  //   updated_at: new Date().toISOString(),
  // };

  // posts.push(newPost);

  // res.status(201).json(newPost);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${PORT}`);
});
