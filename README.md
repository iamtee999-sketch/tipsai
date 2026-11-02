# ✦ TipsAI — Chuyên Trang Chia Sẻ Bài Viết, Mẹo, Phím Tắt & Công Cụ AI Thực Chiến

**TipsAI** là cổng thông tin chia sẻ kiến thức AI chuyên nghiệp với giao diện **Sáng (Light Mode mặc định)** kết hợp nút chuyển **Tối (Dark Mode `🌙`/`☀️`)** ngay trên thanh điều hướng. Website được tối ưu sẵn để chạy trực tiếp trên **GitHub Pages**, **Vercel** hoặc **Cloudflare Pages**.

---

## 🗂 Kiến trúc Đa Trang (7 Trang Chuyên Biệt)

| File | Chức năng |
| :--- | :--- |
| `index.html` | **Trang chủ**: Hero AI Intent Finder + 5 Cổng chuyên mục + Tiêu điểm Bài viết Blog mới nhất + Tóm tắt gọn 3 Mẹo, 4 Phím tắt & 3 AI Tools. |
| `blog.html` | **Trang Bài viết / Blog**: Danh sách bài viết chuyên sâu về AI, bộ lọc theo chuyên mục và tìm kiếm theo `#tag` / tác giả. |
| `post.html` | **Trang Đọc Bài Viết (`?id=...`)**: Giao diện đọc bài chuyên nghiệp có thanh tiến trình đọc (Reading Progress Bar), **Mục lục tự động (Table of Contents)** bên phải, nút Copy code 1-click trên mọi khung lệnh và Bài viết liên quan. |
| `tips.html` | **Kho Mẹo & Thủ thuật AI**: Bộ lọc theo danh mục, cấp độ khó (*Cơ bản*, *Trung cấp*, *Chuyên sâu*) kèm bảng đối chiếu câu lệnh **Trước / Sau**. |
| `shortcuts.html` | **Bảng Phím tắt & Tham số AI**: Tra cứu phím tắt ChatGPT, Claude, Cursor, Gemini, Perplexity, Notion AI, Midjourney + Chuyển đổi Windows/macOS + Mini-game luyện phản xạ. |
| `prompts.html` | **Kho Prompt Biến Số Động**: Điền trực tiếp các biến số `[...]` ngay trên thẻ để câu lệnh tự động cập nhật theo thời gian thực. |
| `tools.html` | **Danh bạ AI Tools**: Đánh giá ưu/nhược điểm, Mẹo ẩn chuyên gia và chế độ **So sánh ngang tối đa 3 công cụ AI**. |
| `404.html` | Trang báo lỗi 404 đồng bộ giao diện cho GitHub Pages. |

---

## 🚀 Hướng dẫn Đẩy dự án lên GitHub & Bật GitHub Pages

Dự án đã tích hợp sẵn `.nojekyll` và GitHub Actions workflow (`.github/workflows/deploy.yml`).

```bash
cd e:\github\tipsai
git init
git add .
git commit -m "Initial commit: TipsAI Website"
git branch -M main
git remote add origin https://github.com/iamtee999-sketch/tipsai.git
git push -u origin main
```
