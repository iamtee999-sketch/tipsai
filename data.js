// ============================================================================
// TipsAI — Cơ sở dữ liệu Đa Trang: Bài viết Blog, Mẹo AI, Phím tắt, Prompt & Tools
// Thiết kế theo chuẩn iTee360 Design System & AI Native UI
// ============================================================================

window.TIPSAI_DATA = {
  stats: {
    totalPosts: 18,
    totalTips: 48,
    totalShortcuts: 85,
    totalTools: 32,
    totalPrompts: 36
  },

  // Danh mục Bài viết / Blog
  postCategories: [
    { id: "all", name: "Tất cả bài viết" },
    { id: "practical-guide", name: "Hướng dẫn thực chiến" },
    { id: "prompt-mastery", name: "Nghệ thuật Prompt" },
    { id: "ai-coding", name: "AI cho Lập trình" },
    { id: "tool-review", name: "Đánh giá AI Tools" },
    { id: "workflow", name: "Tự động hóa & Workflow" }
  ],

  // Danh sách Bài viết / Blog chuyên sâu
  posts: [
    {
      id: "post-1",
      title: "Toàn tập Context Engineering 2026: Vì sao người giỏi dùng AI không còn viết Prompt dài?",
      slug: "toan-tap-context-engineering-2026",
      category: "prompt-mastery",
      categoryLabel: "Nghệ thuật Prompt",
      author: "Minh Quân (iTee360)",
      authorRole: "AI Solutions Architect",
      date: "02/11/2026",
      readTime: "6 phút đọc",
      views: 3420,
      likes: 284,
      featured: true,
      coverImage: "assets/covers/post-1.svg",
      coverStyle: "linear-gradient(135deg, #2E1065 0%, #4C1D95 45%, #0284C7 100%)",
      coverBadge: "BÀI VIẾT TIÊU ĐIỂM",
      excerpt: "Prompt Engineering truyền thống đang nhường chỗ cho Context Engineering. Khám phá cách thiết kế bộ nhớ nền, tài liệu tham chiếu và rào chắn đầu ra để AI hiểu ý bạn chỉ sau 1 câu ngắn.",
      tags: ["Context Engineering", "Claude", "ChatGPT", "Năng suất"],
      content: `
        <h3>1. Sự dịch chuyển từ "Viết câu lệnh" sang "Thiết kế ngữ cảnh"</h3>
        <p>Hai năm trước, hầu hết mọi người đều cố gắng học thuộc những câu thần chú dài hàng trang giấy để dán vào khung chat. Nhưng với các mô hình suy luận thế hệ mới (như Claude, GPT-4o/o3, Gemini 2M context), vấn đề không còn nằm ở việc bạn dùng từ ngữ hoa mỹ ra sao, mà là <strong>AI đang nhìn thấy dữ liệu nền nào trước khi trả lời bạn</strong>.</p>
        
        <blockquote>
          💡 <strong>Nguyên tắc cốt lõi:</strong> Một câu lệnh 2 dòng đi kèm 1 file tài liệu ngữ cảnh chuẩn sẽ luôn thắng một câu lệnh dài 500 chữ nhưng không có dữ liệu thực tế.
        </blockquote>

        <h3>2. Ba trụ cột của một Hệ thống Ngữ cảnh (Context Stack)</h3>
        <ul>
          <li><strong>Lớp 1 — Luật bất biến (System Rules / Project Instructions):</strong> Khai báo bạn là ai, định dạng đầu ra mặc định và danh sách những từ vựng/hành vi bị cấm tuyệt đối.</li>
          <li><strong>Lớp 2 — Tri thức tham chiếu (Knowledge Base):</strong> Các bài viết mẫu, bảng thông số sản phẩm, hoặc quy chuẩn code (<code>AGENTS.md</code>) được gắn cố định vào Project/Notebook.</li>
          <li><strong>Lớp 3 — Tác vụ tức thời (Just-in-time Intent):</strong> Câu yêu cầu ngắn gọn cho công việc hiện tại kèm theo yêu cầu kiểm tra chéo.</li>
        </ul>

        <h3>3. Mẫu cấu trúc thẻ XML giúp tăng 40% độ chính xác</h3>
        <pre><code>&lt;boi_canh_du_an&gt;
Sản phẩm: Ứng dụng quản lý tài chính cá nhân cho GenZ tại Việt Nam.
Giọng văn: Ngắn gọn, trực diện, không dùng từ sáo rỗng.
&lt;/boi_canh_du_an&gt;

&lt;du_lieu_tham_chieu&gt;
[Dán 2 bài viết có tương tác cao nhất của bạn vào đây]
&lt;/du_lieu_tham_chieu&gt;

&lt;nhiem_vu&gt;
Viết 3 kịch bản video ngắn 45 giây giới thiệu tính năng tự động phân loại chi tiêu.
&lt;/nhiem_vu&gt;</code></pre>

        <h3>4. Kết luận & Hành động ngay hôm nay</h3>
        <p>Hãy dành 15 phút tạo một file <code>boi-canh-ca-nhan.md</code> lưu toàn bộ thông tin về công việc, phong cách viết và tiêu chuẩn chất lượng của bạn. Từ lần sau, bạn chỉ cần đính kèm file đó vào đầu cuộc trò chuyện.</p>
      `
    },
    {
      id: "post-2",
      title: "Quy trình kết hợp Cursor + Claude để xây dựng Web App hoàn chỉnh trong 1 buổi chiều",
      slug: "quy-trinh-ket-hop-cursor-va-claude-xay-web-app",
      category: "ai-coding",
      categoryLabel: "AI cho Lập trình",
      author: "Hoàng Nam",
      authorRole: "Full-stack Tech Lead",
      date: "01/11/2026",
      readTime: "8 phút đọc",
      views: 2890,
      likes: 245,
      featured: false,
      coverImage: "assets/covers/post-2.svg",
      coverStyle: "linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0891B2 100%)",
      coverBadge: "AI CODING",
      excerpt: "Sai lầm lớn nhất khi dùng AI viết code là yêu cầu nó 'tạo cả ứng dụng' trong 1 câu lệnh. Đây là quy trình 4 bước chia để trị giúp code sạch, không bug chồng bug.",
      tags: ["Cursor", "AI Coding", "AGENTS.md", "Web Dev"],
      content: `
        <h3>1. Tại sao AI hay làm hỏng code khi dự án lớn dần?</h3>
        <p>Khi codebase vượt quá 5 file, việc gõ những câu lệnh mơ hồ như <em>"Thêm tính năng giỏ hàng và sửa lại giao diện cho đẹp"</em> sẽ khiến AI Agent sửa tràn lan, xóa mất logic cũ và tạo ra hàng loạt lỗi không tương thích.</p>

        <h3>2. Quy trình 4 bước "Chia để trị" (Spec → UI → Logic → Verify)</h3>
        <ul>
          <li><strong>Bước 1 — Chốt Kiến trúc & File <code>AGENTS.md</code>:</strong> Dùng Claude viết bản đặc tả cấu trúc thư mục và quy tắc thiết kế (màu sắc, font chữ, cách chia module) rồi lưu vào gốc dự án.</li>
          <li><strong>Bước 2 — Dựng khung dữ liệu (<code>data.js</code> / Schema):</strong> Luôn tạo dữ liệu mẫu chuẩn xác trước khi viết giao diện để tránh hardcode trong HTML.</li>
          <li><strong>Bước 3 — Dùng <code>Ctrl + I</code> cho tính năng mới, <code>Ctrl + K</code> để tinh chỉnh:</strong> Khi cần sửa 1 hàm nhỏ, chỉ bôi đen đúng hàm đó và bấm <code>Ctrl + K</code>.</li>
          <li><strong>Bước 4 — Kiểm tra cú pháp tự động:</strong> Yêu cầu AI chạy lệnh kiểm tra cú pháp sau mỗi thay đổi lớn.</li>
        </ul>

        <blockquote>
          ⚡ <strong>Mẹo phím tắt:</strong> Trong Cursor, luôn dùng ký hiệu <code>@Files</code> để chỉ định chính xác 2–3 file liên quan thay vì để AI tự mò toàn bộ thư mục.
        </blockquote>
      `
    },
    {
      id: "post-3",
      title: "So sánh thực tế ChatGPT, Claude, Gemini và Perplexity: Dùng cái nào cho việc gì?",
      slug: "so-sanh-chatgpt-claude-gemini-perplexity",
      category: "tool-review",
      categoryLabel: "Đánh giá AI Tools",
      author: "Thu Hà",
      authorRole: "AI Product Researcher",
      date: "30/10/2026",
      readTime: "5 phút đọc",
      views: 4120,
      likes: 319,
      featured: false,
      coverImage: "assets/covers/post-3.svg",
      coverStyle: "linear-gradient(135deg, #1E1B4B 0%, #3B0764 50%, #0D9488 100%)",
      coverBadge: "REVIEW CHUYÊN SÂU",
      excerpt: "Đừng dùng duy nhất 1 công cụ AI cho mọi việc. Bảng phân tích chi tiết thế mạnh thực sự của 4 ông lớn AI trong viết lách, lập trình, đọc PDF dài và tra cứu tin tức.",
      tags: ["So sánh AI", "ChatGPT", "Claude", "Gemini", "Perplexity"],
      content: `
        <h3>1. Bảng phân vai nhanh trong 30 giây</h3>
        <ul>
          <li><strong>Claude (Anthropic):</strong> Vô địch về viết lách tiếng Việt tự nhiên, lập trình giao diện sạch đẹp và dựng nguyên mẫu tương tác qua Artifacts.</li>
          <li><strong>ChatGPT (OpenAI):</strong> Trợ lý đa năng nhất cho công việc hàng ngày, suy luận logic sâu, tạo hình ảnh có chữ chuẩn xác và giao tiếp giọng nói (Voice Mode).</li>
          <li><strong>Google Gemini & NotebookLM:</strong> Ông vua xử lý tài liệu khổng lồ (hàng trăm trang PDF, video dài 1–2 tiếng) với tỷ lệ bịa đặt thông tin thấp nhất.</li>
          <li><strong>Perplexity AI:</strong> Thay thế hoàn toàn việc tìm kiếm thủ công khi cần số liệu mới nhất kèm link trích dẫn nguồn minh bạch.</li>
        </ul>

        <h3>2. Combo kết hợp tiết kiệm 2 giờ mỗi ngày</h3>
        <p>Hãy bắt đầu bằng <strong>Perplexity</strong> để thu thập số liệu & nguồn tin thực tế → Đưa toàn bộ tài liệu vào <strong>NotebookLM</strong> để rút trích luận điểm → Dùng <strong>Claude</strong> để biên tập thành bài viết hoặc báo cáo hoàn chỉnh.</p>
      `
    },
    {
      id: "post-4",
      title: "10 Câu lệnh 'Hậu kiểm' bắt buộc phải dùng để loại bỏ hoàn toàn văn phong sáo rỗng của AI",
      slug: "10-cau-lenh-hau-kiem-loai-bo-van-phong-ai",
      category: "practical-guide",
      categoryLabel: "Hướng dẫn thực chiến",
      author: "Minh Quân (iTee360)",
      authorRole: "AI Solutions Architect",
      date: "28/10/2026",
      readTime: "4 phút đọc",
      views: 2150,
      likes: 198,
      featured: false,
      coverImage: "assets/covers/post-4.svg",
      coverStyle: "linear-gradient(135deg, #111827 0%, #312E81 55%, #0369A1 100%)",
      coverBadge: "THỦ THUẬT VIẾT",
      excerpt: "Làm sao để người đọc không nhận ra bài viết có sự trợ giúp của AI? Hãy áp dụng bộ lọc từ vựng cấm và kỹ thuật biên tập nhịp điệu câu dưới đây.",
      tags: ["Copywriting", "Content AI", "Prompt", "Biên tập"],
      content: `
        <h3>1. Nhận diện những dấu hiệu "mùi AI" đặc trưng</h3>
        <p>Các mô hình ngôn ngữ rất thích mở đầu bằng <em>"Trong kỷ nguyên số ngày nay..."</em>, <em>"Không thể phủ nhận rằng..."</em> hoặc kết bài bằng <em>"Tóm lại, việc áp dụng X là chìa khóa dẫn đến thành công"</em>. Những cụm từ này làm giảm ngay sự tin cậy của người đọc.</p>

        <h3>2. Đoạn Prompt Hậu Kiểm (Dán ngay sau khi AI viết xong)</h3>
        <pre><code>Hãy biên tập lại bài viết trên theo 4 quy tắc khắt khe sau:
1. Xóa bỏ hoàn toàn câu mở đầu sáo rỗng, đi thẳng vào tình huống thực tế ngay câu đầu tiên.
2. Thay thế các tính từ chung chung bằng số liệu hoặc ví dụ cụ thể.
3. Đan xen câu ngắn (dưới 10 từ) và câu trung bình để tạo nhịp điệu tự nhiên.
4. Cấm tuyệt đối các từ: "đột phá", "bùng nổ", "chìa khóa vàng", "không chỉ... mà còn".</code></pre>
      `
    },
    {
      id: "post-5",
      title: "Xây dựng 'Bộ não thứ hai' miễn phí bằng Google NotebookLM cho Sinh viên & Dân văn phòng",
      slug: "xay-dung-bo-nao-thu-hai-bang-google-notebooklm",
      category: "workflow",
      categoryLabel: "Tự động hóa & Workflow",
      author: "Lan Anh",
      authorRole: "Productivity Coach",
      date: "25/10/2026",
      readTime: "5 phút đọc",
      views: 1940,
      likes: 176,
      featured: false,
      coverImage: "assets/covers/post-5.svg",
      coverStyle: "linear-gradient(135deg, #064E3B 0%, #1E1B4B 60%, #4F46E5 100%)",
      coverBadge: "WORKFLOW",
      excerpt: "Hướng dẫn từng bước tổ chức hàng chục file PDF, slide bài giảng, hợp đồng và video YouTube thành một trợ lý cá nhân chỉ trả lời dựa trên tài liệu chuẩn.",
      tags: ["NotebookLM", "Học tập", "Nghiên cứu", "Miễn phí"],
      content: `
        <h3>1. Điểm khác biệt lớn nhất của NotebookLM</h3>
        <p>Khác với chatbot thông thường vốn lấy thông tin từ toàn bộ Internet, NotebookLM đóng khung hoàn toàn trong các tài liệu bạn tải lên. Mọi câu trả lời đều đi kèm nút số nhỏ — bấm vào sẽ nhảy tới đúng đoạn văn gốc trong file PDF của bạn.</p>

        <h3>2. Mẹo tổ chức sổ tay thông minh</h3>
        <ul>
          <li>Mỗi dự án hoặc môn học tạo 1 Notebook riêng (tối đa 50 nguồn tài liệu/sổ tay).</li>
          <li>Sử dụng tính năng <strong>Audio Overview</strong> và chọn chế độ tương tác để đặt câu hỏi bằng giọng nói khi đang di chuyển.</li>
          <li>Lưu các câu trả lời quan trọng thành <strong>Note</strong>, sau đó chọn tất cả Note để yêu cầu AI tổng hợp thành Đề cương ôn tập hoặc Báo cáo tổng kết.</li>
        </ul>
      `
    },
    {
      id: "post-6",
      title: "Toàn tập ChatGPT (GPT-4o / o3): Giới thiệu sức mạnh, Cách dùng thực chiến & Bảng phím tắt cơ bản",
      slug: "toan-tap-chatgpt-gioi-thieu-va-phim-tat-co-ban",
      category: "tool-review",
      categoryLabel: "Đánh giá AI Tools",
      author: "Minh Quân (iTee360)",
      authorRole: "AI Solutions Architect",
      date: "02/11/2026",
      readTime: "7 phút đọc",
      views: 3180,
      likes: 276,
      featured: false,
      coverImage: "assets/covers/post-6.svg",
      coverStyle: "linear-gradient(135deg, #052E16 0%, #065F46 50%, #0284C7 100%)",
      coverBadge: "CẨM NANG CHATGPT",
      excerpt: "Tổng quan hệ sinh thái ChatGPT từ mô hình đa phương thức GPT-4o đến mô hình suy luận sâu o3, kèm trọn bộ phím tắt giúp bạn thao tác nhanh gấp đôi trên Web & Desktop App.",
      tags: ["ChatGPT", "Phím tắt", "GPT-4o", "Hướng dẫn AI"],
      content: `
        <h3>1. Giới thiệu tổng quan về ChatGPT & Khi nào nên dùng?</h3>
        <p><strong>ChatGPT</strong> (phát triển bởi OpenAI) là trợ lý AI đa năng phổ biến nhất hiện nay. Điểm mạnh lớn nhất của ChatGPT nằm ở sự kết hợp liền mạch giữa 4 khả năng trong cùng một giao diện: <strong>Trò chuyện đa phương thức (GPT-4o)</strong>, <strong>Suy luận logic chuyên sâu (dòng mô hình o1/o3)</strong>, <strong>Biên tập trực quan với Canvas</strong> và <strong>Tạo ảnh tích hợp có chữ chính xác</strong>.</p>
        <ul>
          <li><strong>Dùng GPT-4o khi:</strong> Cần viết lách hàng ngày, dịch thuật, phân tích file Excel/CSV, đọc ảnh chụp màn hình hoặc trò chuyện giọng nói thời gian thực (Advanced Voice Mode).</li>
          <li><strong>Dùng mô hình o3 / Reasoning khi:</strong> Giải bài toán phức tạp, thiết kế kiến trúc phần mềm, lập kế hoạch chiến lược nhiều ràng buộc hoặc tìm bug khó.</li>
          <li><strong>Dùng chế độ Canvas khi:</strong> Cần viết bài dài hoặc sửa code mà chỉ muốn bôi đen từng đoạn nhỏ để AI viết lại thay vì sinh lại từ đầu.</li>
        </ul>

        <h3>2. Bảng Phím tắt cơ bản trên ChatGPT (Windows &amp; macOS)</h3>
        <p>Nắm vững 6 tổ hợp phím dưới đây giúp bạn không bao giờ phải rời tay khỏi bàn phím khi làm việc với ChatGPT:</p>
        <ul>
          <li><strong>Mở cửa sổ ChatGPT Companion nổi ở mọi màn hình (Desktop App):</strong> Nhấn <code>Alt + Space</code> (Windows) hoặc <code>⌥ Option + Space</code> (macOS).</li>
          <li><strong>Mở cuộc trò chuyện mới (New Chat):</strong> Nhấn <code>Ctrl + Shift + O</code> (Windows) hoặc <code>⌘ Cmd + Shift + O</code> (macOS).</li>
          <li><strong>Sao chép nhanh khối Code cuối cùng:</strong> Nhấn <code>Ctrl + Shift + ;</code> (Windows) hoặc <code>⌘ Cmd + Shift + ;</code> (macOS).</li>
          <li><strong>Sao chép toàn bộ câu trả lời cuối của AI (chuẩn Markdown):</strong> Nhấn <code>Ctrl + Shift + C</code> (Windows) hoặc <code>⌘ Cmd + Shift + C</code> (macOS).</li>
          <li><strong>Tìm kiếm nhanh trong toàn bộ lịch sử chat:</strong> Nhấn <code>Ctrl + K</code> (Windows) hoặc <code>⌘ Cmd + K</code> (macOS).</li>
          <li><strong>Ẩn/Hiện thanh lịch sử Sidebar bên trái:</strong> Nhấn <code>Ctrl + Shift + S</code> (Windows) hoặc <code>⌘ Cmd + Shift + S</code> (macOS).</li>
        </ul>

        <blockquote>
          💡 <strong>Mẹo vàng:</strong> Mỗi khi chuyển sang một chủ đề công việc mới, hãy bấm ngay <code>Ctrl + Shift + O</code> để mở phiên chat mới, giúp AI không bị nhiễu bởi ngữ cảnh của cuộc trò chuyện cũ.
        </blockquote>

        <h3>3. Mẫu thiết lập Custom Instructions chuẩn cho ChatGPT</h3>
        <pre><code>Về tôi:
- Tôi làm việc trong lĩnh vực Công nghệ / Marketing tại Việt Nam.
- Tôi ưu tiên các giải pháp thực tế, có ví dụ minh họa cụ thể và số liệu rõ ràng.

Cách ChatGPT nên trả lời:
1. Đi thẳng vào câu trả lời ngay dòng đầu tiên, không mở bài sáo rỗng.
2. Trình bày bằng danh sách gạch đầu dòng hoặc bảng so sánh khi có từ 3 ý trở lên.
3. Nếu yêu cầu của tôi chưa đủ thông tin, hãy hỏi lại 3 câu ngắn gọn trước khi thực thi.</code></pre>
      `
    },
    {
      id: "post-7",
      title: "Làm chủ Claude AI từ A–Z: Nghệ thuật viết lách tự nhiên, Artifacts & Hệ thống phím tắt cơ bản",
      slug: "lam-chu-claude-ai-tu-a-z-va-phim-tat-co-ban",
      category: "tool-review",
      categoryLabel: "Đánh giá AI Tools",
      author: "Minh Quân (iTee360)",
      authorRole: "AI Solutions Architect",
      date: "02/11/2026",
      readTime: "7 phút đọc",
      views: 2940,
      likes: 268,
      featured: false,
      coverImage: "assets/covers/post-7.svg",
      coverStyle: "linear-gradient(135deg, #431407 0%, #7C2D12 55%, #6D28D9 100%)",
      coverBadge: "CẨM NANG CLAUDE",
      excerpt: "Vì sao giới viết lách chuyên nghiệp và kỹ sư phần mềm lại mê mẩn Claude của Anthropic? Khám phá tính năng Artifacts, Projects và bảng phím tắt thao tác nhanh.",
      tags: ["Claude", "Anthropic", "Artifacts", "Phím tắt"],
      content: `
        <h3>1. Claude AI là gì &amp; Vì sao được mệnh danh là "Vua viết lách và Code"?</h3>
        <p><strong>Claude</strong> (do Anthropic phát triển) nổi bật với khả năng hiểu sắc thái ngôn ngữ tiếng Việt cực kỳ tự nhiên, không bị cứng nhắc kiểu văn dịch máy. Bên cạnh đó, các mô hình <strong>Claude Sonnet &amp; Opus</strong> hiện là tiêu chuẩn vàng trong việc viết code giao diện sạch đẹp và phân tích tài liệu phức tạp.</p>
        <ul>
          <li><strong>Tính năng Artifacts:</strong> Khi bạn yêu cầu Claude vẽ sơ đồ, thiết kế giao diện web (HTML/React) hoặc tạo biểu đồ tương tác, Claude sẽ mở một khung chạy thử trực tiếp ngay bên phải màn hình.</li>
          <li><strong>Tính năng Projects:</strong> Cho phép bạn nạp sẵn bộ tài liệu thương hiệu, hướng dẫn giọng văn và quy chuẩn code để dùng chung cho hàng chục cuộc hội thoại.</li>
        </ul>

        <h3>2. Bảng Phím tắt &amp; Thao tác cơ bản trên Claude</h3>
        <ul>
          <li><strong>Gọi nhanh cửa sổ Claude Desktop từ bất kỳ ứng dụng nào:</strong> Nhấn <code>Ctrl + Alt + Space</code> (Windows) hoặc <code>⌘ Cmd + ⇧ Shift + Space</code> (macOS).</li>
          <li><strong>Mở cuộc trò chuyện mới / Tìm kiếm nhanh:</strong> Nhấn <code>Ctrl + K</code> (Windows) hoặc <code>⌘ Cmd + K</code> (macOS).</li>
          <li><strong>Xuống dòng tạo cấu trúc thẻ XML trong khung chat:</strong> Nhấn <code>Shift + Enter</code>.</li>
          <li><strong>Chụp màn hình gửi thẳng vào Claude Desktop:</strong> Mở Quick Entry bằng phím tắt rồi bấm biểu tượng chụp vùng chọn để hỏi ngay về đoạn văn/code đang hiển thị.</li>
        </ul>

        <h3>3. Bí quyết dùng thẻ XML để tăng 30% độ chính xác trên Claude</h3>
        <p>Claude được huấn luyện đặc biệt để nhận diện các thẻ đóng/mở kiểu XML. Hãy dùng mẫu dưới đây khi giao việc khó:</p>
        <pre><code>&lt;tai_lieu_goc&gt;
[Dán nội dung báo cáo hoặc bài viết mẫu của bạn vào đây]
&lt;/tai_lieu_goc&gt;

&lt;phong_cach_viet&gt;
Tự nhiên, gãy gọn, ưu tiên động từ mạnh, cấm dùng từ sáo rỗng.
&lt;/phong_cach_viet&gt;

&lt;yeu_cau&gt;
Hãy chuyển hóa tài liệu trên thành 1 bài đăng LinkedIn/Facebook sâu sắc kèm 1 sơ đồ tổng kết trong Artifacts.
&lt;/yeu_cau&gt;</code></pre>
      `
    },
    {
      id: "post-8",
      title: "Cẩm nang Google Gemini & AI Studio: Xử lý ngữ cảnh 2 triệu Token & Tổ hợp phím tắt cần nhớ",
      slug: "cam-nang-google-gemini-va-ai-studio-phim-tat",
      category: "tool-review",
      categoryLabel: "Đánh giá AI Tools",
      author: "Thu Hà",
      authorRole: "AI Product Researcher",
      date: "02/11/2026",
      readTime: "6 phút đọc",
      views: 2610,
      likes: 234,
      featured: false,
      coverImage: "assets/covers/post-8.svg",
      coverStyle: "linear-gradient(135deg, #0C4A6E 0%, #1E3A8A 50%, #7C3AED 100%)",
      coverBadge: "GOOGLE GEMINI",
      excerpt: "Khai thác tối đa cửa sổ ngữ cảnh khổng lồ 1M–2M token của Google Gemini để đọc sách dày, xem video dài 1 tiếng và làm chủ các lệnh gọi nhanh @Workspace.",
      tags: ["Gemini", "Google AI Studio", "Phím tắt", "Workspace"],
      content: `
        <h3>1. Sự khác biệt giữa Google Gemini và Google AI Studio</h3>
        <p>Hệ sinh thái AI của Google cung cấp 2 cổng truy cập chính phục vụ hai nhu cầu khác nhau:</p>
        <ul>
          <li><strong>Google Gemini (gemini.google.com):</strong> Trợ lý cá nhân kết nối trực tiếp với Gmail, Google Drive, Google Docs và YouTube. Cực mạnh khi cần tìm thông tin trong kho dữ liệu cá nhân.</li>
          <li><strong>Google AI Studio (aistudio.google.com):</strong> Môi trường chuyên nghiệp (miễn phí) dành cho người làm sản phẩm và lập trình viên, cho phép nạp tới <strong>1–2 triệu token</strong> (tương đương 1.500 trang sách hoặc video dài hơn 1 giờ) và tùy chỉnh thanh <code>Temperature</code>.</li>
        </ul>

        <h3>2. Các Phím tắt &amp; Lệnh gọi nhanh cơ bản trên Gemini / AI Studio</h3>
        <ul>
          <li><strong>Thực thi câu lệnh (Run Prompt) trong Google AI Studio:</strong> Nhấn <code>Ctrl + Enter</code> (Windows) hoặc <code>⌘ Cmd + Enter</code> (macOS).</li>
          <li><strong>Gọi tiện ích mở rộng bằng phím <code>@</code>:</strong> Trong ô nhập liệu của Gemini, gõ trực tiếp <code>@Google Drive</code>, <code>@Gmail</code>, <code>@Google Docs</code> hoặc <code>@YouTube</code> để ra lệnh cho AI lục tìm đúng nguồn dữ liệu đó.</li>
          <li><strong>Bật kiểm chứng thực tế (Grounding with Google Search):</strong> Trong AI Studio, bật công tắc <em>Grounding</em> ở cột bên phải để AI tự động đối chiếu câu trả lời với kết quả Google Search mới nhất.</li>
        </ul>

        <blockquote>
          ⚡ <strong>Mẹo thực chiến:</strong> Khi dùng Google AI Studio để viết code hoặc trích xuất dữ liệu từ file PDF dài, hãy kéo thanh <strong>Temperature xuống mức 0.1 – 0.2</strong> để câu trả lời đạt độ chính xác và ổn định cao nhất.
        </blockquote>

        <h3>3. Mẫu lệnh phân tích Video dài hoặc Tài liệu lớn trên Gemini</h3>
        <pre><code>@YouTube [Dán link video bài giảng hoặc hội thảo dài 1-2 tiếng]
Hãy thực hiện 3 việc sau:
1. Tóm tắt 5 luận điểm quan trọng nhất kèm mốc thời gian (Timestamp phút:giây) tương ứng.
2. Trích xuất toàn bộ các công cụ, số liệu hoặc tên sách được diễn giả nhắc tới trong video.
3. Chuyển hóa nội dung thành bảng kế hoạch hành động áp dụng được ngay.</code></pre>
      `
    },
    {
      id: "post-9",
      title: "Hướng dẫn Cursor & Antigravity IDE: Quy trình lập trình bằng AI & Phím tắt vàng (Ctrl+K, Ctrl+I, Ctrl+L)",
      slug: "huong-dan-cursor-antigravity-ide-va-phim-tat-vang",
      category: "ai-coding",
      categoryLabel: "AI cho Lập trình",
      author: "Hoàng Nam",
      authorRole: "Full-stack Tech Lead",
      date: "02/11/2026",
      readTime: "8 phút đọc",
      views: 3590,
      likes: 312,
      featured: false,
      coverImage: "assets/covers/post-9.svg",
      coverStyle: "linear-gradient(135deg, #090D16 0%, #1E1B4B 50%, #06B6D4 100%)",
      coverBadge: "AI-FIRST IDE",
      excerpt: "Giải mã cách các lập trình viên hiện đại xây dựng ứng dụng nhanh gấp 5 lần với AI IDE. Phân biệt rõ khi nào dùng Tab, Ctrl+K, Ctrl+L và Agent đa file Ctrl+I.",
      tags: ["Cursor", "Antigravity", "AI Coding", "Phím tắt"],
      content: `
        <h3>1. AI-First IDE (Cursor / Antigravity) thay đổi việc lập trình như thế nào?</h3>
        <p>Thay vì phải copy từng đoạn code từ trình duyệt dán vào trình soạn thảo, các môi trường lập trình tích hợp AI như <strong>Cursor</strong> và <strong>Antigravity IDE</strong> có khả năng đọc hiểu toàn bộ cấu trúc thư mục dự án, tự động sửa nhiều file cùng lúc và chạy lệnh kiểm tra trong Terminal.</p>

        <h3>2. Bảng 6 Phím tắt vàng bắt buộc phải thuộc lòng</h3>
        <ul>
          <li><strong><code>Tab</code> — Chấp nhận gợi ý code thông minh (Autocomplete):</strong> Tự động dự đoán dòng code hoặc vị trí con trỏ tiếp theo bạn sắp sửa.</li>
          <li><strong><code>Ctrl + K</code> (macOS: <code>⌘ Cmd + K</code>) — Sửa code trực tiếp tại dòng (Inline Edit):</strong> Bôi đen một hàm → bấm <code>Ctrl + K</code> → gõ yêu cầu ngắn (VD: <em>"Thêm xử lý lỗi try/catch và tối ưu vòng lặp"</em>).</li>
          <li><strong><code>Ctrl + L</code> (macOS: <code>⌘ Cmd + L</code>) — Đưa đoạn code đang chọn vào khung Chat:</strong> Giúp bạn hỏi đáp sâu về logic của đoạn code đó mà không làm thay đổi file ngay lập tức.</li>
          <li><strong><code>Ctrl + I</code> (macOS: <code>⌘ Cmd + I</code>) — Mở Composer / AI Agent đa file:</strong> Dùng khi cần tạo tính năng mới xuyên suốt cả HTML, CSS, JS hoặc Backend.</li>
          <li><strong><code>Ctrl + Enter</code> (macOS: <code>⌘ Cmd + Enter</code>) — Chấp nhận thay đổi (Accept Diff):</strong> Phê duyệt nhanh phần code mới do AI vừa đề xuất.</li>
          <li><strong>Ký hiệu <code>@</code> trong khung Chat/Agent:</strong> Gõ <code>@Files</code> để chỉ định file cụ thể, <code>@Codebase</code> để quét toàn dự án, hoặc <code>@Docs</code> để tra cứu tài liệu thư viện mới nhất.</li>
        </ul>

        <h3>3. Mẫu file quy tắc <code>AGENTS.md</code> / <code>.cursorrules</code> chuẩn dự án</h3>
        <pre><code># Quy chuẩn Dự án (AGENTS.md)
1. Kiến trúc: Giữ code tách biệt rõ ràng giữa dữ liệu (data), giao diện (styles) và điều khiển (app).
2. Giao diện: Sử dụng biến CSS (CSS Variables), đảm bảo tương thích cả chế độ Sáng/Tối và màn hình di động.
3. Quy tắc sửa code: Bảo toàn các chú thích hiện có, không tự ý cài thêm thư viện ngoài khi chưa được yêu cầu.</code></pre>
      `
    },
    {
      id: "post-10",
      title: "Perplexity AI là gì? Cách biến công cụ tìm kiếm AI thành trợ lý nghiên cứu & Phím tắt tra cứu nhanh",
      slug: "perplexity-ai-la-gi-cach-dung-va-phim-tat-tra-cuu",
      category: "tool-review",
      categoryLabel: "Đánh giá AI Tools",
      author: "Thu Hà",
      authorRole: "AI Product Researcher",
      date: "02/11/2026",
      readTime: "6 phút đọc",
      views: 2480,
      likes: 219,
      featured: false,
      coverImage: "assets/covers/post-10.svg",
      coverStyle: "linear-gradient(135deg, #042F2E 0%, #115E59 55%, #2563EB 100%)",
      coverBadge: "TRA CỨU AI",
      excerpt: "Thay vì mở 20 tab tìm kiếm thủ công, Perplexity AI tự động đọc hàng chục nguồn tin uy tín, tổng hợp câu trả lời và đính kèm link trích dẫn kiểm chứng từng câu.",
      tags: ["Perplexity", "Deep Research", "Nghiên cứu", "Phím tắt"],
      content: `
        <h3>1. Điểm khác biệt cốt lõi của Perplexity AI so với Chatbot thông thường</h3>
        <p><strong>Perplexity AI</strong> là sự giao thoa giữa công cụ tìm kiếm thời gian thực và mô hình ngôn ngữ lớn. Mỗi khi bạn đặt câu hỏi, Perplexity tự động duyệt qua hàng chục trang báo, tài liệu học thuật và diễn đàn mới nhất, sau đó tổng hợp câu trả lời kèm theo các con số trích dẫn <code>[1]</code>, <code>[2]</code> để bạn bấm vào kiểm tra nguồn gốc ngay lập tức.</p>
        <ul>
          <li><strong>Chế độ Focus (Bộ lọc nguồn tin):</strong> Cho phép khóa phạm vi tìm kiếm chỉ trong <em>Academic</em> (bài báo khoa học có bình duyệt), <em>Finance</em> (báo cáo tài chính), <em>Social</em> (thảo luận thực tế từ cộng đồng) hoặc <em>Web</em>.</li>
          <li><strong>Chế độ Deep Research:</strong> Tự động thực hiện hàng chục bước tìm kiếm đệ quy trong 2–3 phút để xuất bản một bản báo cáo nghiên cứu thị trường chuyên sâu dài nhiều trang.</li>
        </ul>

        <h3>2. Bảng Phím tắt cơ bản trên Perplexity AI</h3>
        <ul>
          <li><strong>Mở luồng câu hỏi mới (New Thread) ở bất kỳ đâu:</strong> Nhấn <code>Ctrl + I</code> (Windows) hoặc <code>⌘ Cmd + I</code> (macOS) hoặc <code>Ctrl + K</code>.</li>
          <li><strong>Nhảy nhanh vào ô hỏi tiếp (Follow-up Input):</strong> Nhấn phím <code>/</code> trên bàn phím.</li>
          <li><strong>Sao chép toàn bộ câu trả lời kèm danh sách link nguồn:</strong> Bấm nút Copy ở cuối bài hoặc dùng tổ hợp phím chọn nhanh để dán sang tài liệu báo cáo.</li>
        </ul>

        <h3>3. Mẫu câu lệnh nghiên cứu thị trường chuyên sâu trên Perplexity</h3>
        <pre><code>Hãy tra cứu dữ liệu mới nhất năm 2025-2026 về xu hướng ứng dụng AI trong ngành Bán lẻ &amp; Thương mại điện tử tại Đông Nam Á và Việt Nam.
Yêu cầu:
1. Chỉ sử dụng các báo cáo có số liệu thống kê cụ thể và ghi rõ nguồn trích dẫn + năm phát hành.
2. Lập bảng so sánh 3 ứng dụng mang lại ROI cao nhất thực tế.
3. Chỉ ra 3 rào cản lớn nhất khi doanh nghiệp vừa và nhỏ triển khai.</code></pre>
      `
    },
    {
      id: "post-11",
      title: "Toàn tập Google NotebookLM: Xây dựng kho tri thức chống AI bịa thông tin & Thao tác tắt hiệu quả",
      slug: "toan-tap-google-notebooklm-chong-ai-bia-thong-tin",
      category: "workflow",
      categoryLabel: "Tự động hóa & Workflow",
      author: "Lan Anh",
      authorRole: "Productivity Coach",
      date: "02/11/2026",
      readTime: "6 phút đọc",
      views: 2730,
      likes: 251,
      featured: false,
      coverImage: "assets/covers/post-11.svg",
      coverStyle: "linear-gradient(135deg, #064E3B 0%, #0F766E 50%, #4F46E5 100%)",
      coverBadge: "NOTEBOOKLM",
      excerpt: "Làm sao để AI chỉ trả lời dựa trên đúng giáo trình, hợp đồng và tài liệu nội bộ của bạn với tỷ lệ ảo giác bằng 0? Đây là hướng dẫn chi tiết nhất về Google NotebookLM.",
      tags: ["NotebookLM", "Chống ảo giác", "PDF", "Podcast AI"],
      content: `
        <h3>1. Google NotebookLM là gì &amp; Tại sao hoàn toàn miễn phí nhưng cực mạnh?</h3>
        <p><strong>Google NotebookLM</strong> là trợ lý nghiên cứu cá nhân hoạt động theo nguyên tắc <em>"Giả định thế giới đóng" (Closed-world Grounding)</em>. Khi bạn tải lên các file PDF, Google Docs, Google Slides, đường dẫn trang web hoặc video YouTube (tối đa 50 nguồn trong 1 sổ tay), AI sẽ <strong>chỉ sử dụng thông tin nằm trong các tài liệu đó</strong> để trả lời bạn.</p>

        <h3>2. Các Thao tác tắt &amp; Tính năng tăng tốc trong NotebookLM</h3>
        <ul>
          <li><strong>Bấm vào con số trích dẫn <code>[1]</code>, <code>[2]</code>:</strong> Nhảy trực tiếp tới đúng đoạn văn bản gốc được tô sáng trong file PDF/Docs bên cột trái để đối chiếu tức thì.</li>
          <li><strong>Chọn/Bỏ chọn nguồn tài liệu nhanh (Source Toggle):</strong> Tích chọn chỉ 1–2 file cụ thể ở cột trái khi bạn muốn đặt câu hỏi riêng cho các file đó mà không cần xóa các nguồn khác.</li>
          <li><strong>Chế độ Audio Overview (Interactive Mode):</strong> Biến tài liệu khô khan thành cuộc trò chuyện Podcast giữa 2 host AI; bấm nút <strong>Join</strong> để ngắt lời và đặt câu hỏi trực tiếp bằng giọng nói.</li>
          <li><strong>Gộp nhiều Note thành Báo cáo:</strong> Bấm <em>Save to note</em> ở các câu trả lời hay → Chọn tất cả Note → Yêu cầu tạo <em>Study Guide</em> (Đề cương), <em>Briefing Doc</em> (Tài liệu tóm tắt) hoặc <em>Timeline</em> (Dòng thời gian sự kiện).</li>
        </ul>

        <h3>3. Mẫu Prompt rà soát Hợp đồng / Tài liệu chuyên môn trong NotebookLM</h3>
        <pre><code>Dựa hoàn toàn trên các tài liệu đã chọn trong sổ tay này (không suy diễn thêm từ bên ngoài):
1. Liệt kê toàn bộ các điều khoản có quy định về mức phạt, thời hạn thanh toán và trách nhiệm bồi thường.
2. Trích dẫn nguyên văn câu gốc kèm số mục/trang tương ứng.
3. Chỉ ra các điểm mâu thuẫn (nếu có) giữa tài liệu A và tài liệu B.</code></pre>
      `
    },
    {
      id: "post-12",
      title: "Cẩm nang Midjourney v7 & Flux.1: Giới thiệu công nghệ tạo ảnh AI & Bảng tham số lệnh tắt cơ bản",
      slug: "cam-nang-midjourney-va-flux-bang-tham-so-lenh-tat",
      category: "practical-guide",
      categoryLabel: "Hướng dẫn thực chiến",
      author: "Minh Quân (iTee360)",
      authorRole: "AI Solutions Architect",
      date: "02/11/2026",
      readTime: "7 phút đọc",
      views: 3050,
      likes: 272,
      featured: false,
      coverImage: "assets/covers/post-12.svg",
      coverStyle: "linear-gradient(135deg, #3B0764 0%, #701A75 50%, #E11D48 100%)",
      coverBadge: "THIẾT KẾ ẢNH AI",
      excerpt: "Nắm trọn bộ tham số lệnh tắt (--ar, --sref, --cref, --cw, --no, --s) giúp bạn kiểm soát hoàn toàn bố cục, ánh sáng và giữ nguyên khuôn mặt nhân vật xuyên suốt bộ ảnh.",
      tags: ["Midjourney", "Flux.1", "Tham số tắt", "Tạo ảnh AI"],
      content: `
        <h3>1. Midjourney v7 &amp; Flux.1: Hai tiêu chuẩn vàng của thiết kế hình ảnh AI</h3>
        <p>Nếu như <strong>Midjourney</strong> thống trị về chiều sâu nghệ thuật, chất liệu ánh sáng điện ảnh và kho mã phong cách (SREF) khổng lồ, thì <strong>Flux.1</strong> lại nổi bật nhờ khả năng bám sát câu lệnh phức tạp và hiển thị chữ viết (Typography) sắc nét trên biển hiệu, poster.</p>

        <h3>2. Bảng Tham số Lệnh tắt (Parameters) quan trọng nhất cần nhớ</h3>
        <p>Trong Midjourney, các tham số tắt luôn được đặt ở <strong>cuối câu lệnh</strong>, bắt đầu bằng hai dấu gạch ngang <code>--</code>:</p>
        <ul>
          <li><strong><code>--ar &lt;rộng:cao&gt;</code> (Aspect Ratio — Tỷ lệ khung hình):</strong> Dùng <code>--ar 16:9</code> cho ảnh bìa Blog/YouTube, <code>--ar 9:16</code> cho Reels/TikTok, <code>--ar 4:5</code> cho bài đăng Facebook/Instagram.</li>
          <li><strong><code>--cref &lt;URL_ảnh&gt;</code> (Character Reference — Khóa nhân vật):</strong> Giữ nguyên khuôn mặt nhân vật từ ảnh gốc sang nhiều bối cảnh mới. Kết hợp với <code>--cw 20</code> (chỉ giữ mặt, đổi trang phục) hoặc <code>--cw 100</code> (giữ cả mặt và quần áo).</li>
          <li><strong><code>--sref &lt;URL_ảnh hoặc Mã_số&gt;</code> (Style Reference — Khóa phong cách):</strong> Sao chép toàn bộ tông màu, ánh sáng và chất liệu nghệ thuật từ một bức ảnh mẫu.</li>
          <li><strong><code>--no &lt;từ_khóa&gt;</code> (Negative Prompt — Loại trừ chi tiết thừa):</strong> Ví dụ <code>--no text, watermark, blur, extra fingers</code> để loại bỏ chữ rác và chi tiết bị nhòe.</li>
          <li><strong><code>--s &lt;0-1000&gt;</code> (Stylize — Độ bay bổng):</strong> Mặc định là 100. Đặt <code>--s 50</code> nếu muốn ảnh bám sát từng chữ trong prompt, hoặc <code>--s 350</code> nếu muốn ảnh giàu tính nghệ thuật.</li>
        </ul>

        <h3>3. Công thức Prompt tạo ảnh thương hiệu đồng nhất</h3>
        <pre><code>/imagine Medium shot of a Vietnamese tech entrepreneur working on a laptop in a minimalist sunlit studio, wearing smart casual attire, natural skin texture, shot on 35mm lens, f/1.8, cinematic rim lighting --ar 16:9 --s 200 --no watermark, text, blurry</code></pre>
      `
    },
    {
      id: "post-13",
      title: "Làm chủ ElevenLabs & Suno AI: Hướng dẫn tạo giọng đọc cảm xúc, sáng tác nhạc AI & Thẻ lệnh tắt",
      slug: "lam-chu-elevenlabs-va-suno-ai-giong-doc-va-nhac-ai",
      category: "practical-guide",
      categoryLabel: "Hướng dẫn thực chiến",
      author: "Lan Anh",
      authorRole: "Productivity Coach",
      date: "02/11/2026",
      readTime: "6 phút đọc",
      views: 2390,
      likes: 214,
      featured: false,
      coverImage: "assets/covers/post-13.svg",
      coverStyle: "linear-gradient(135deg, #1E1B4B 0%, #4C1D95 50%, #D97706 100%)",
      coverBadge: "VOICE & MUSIC AI",
      excerpt: "Cách dùng dấu câu và thẻ cấu trúc [Verse], [Chorus], [Instrumental Drop] để điều khiển nhịp nghỉ lấy hơi trong ElevenLabs và đạo diễn bài hát chuyên nghiệp trên Suno AI.",
      tags: ["ElevenLabs", "Suno AI", "Voice AI", "Music AI"],
      content: `
        <h3>1. Bộ đôi ElevenLabs &amp; Suno AI cho nhà sáng tạo nội dung</h3>
        <p><strong>ElevenLabs</strong> là nền tảng chuyển văn bản thành giọng nói (Text-to-Speech) và nhân bản giọng nói (Voice Cloning) tự nhiên nhất hiện nay, hỗ trợ tiếng Việt giàu cảm xúc. Trong khi đó, <strong>Suno AI</strong> cho phép bạn sáng tác một ca khúc hoàn chỉnh (gồm cả phần hòa âm phối khí lẫn giọng hát) hoặc nhạc nền không lời chỉ từ một đoạn văn bản.</p>

        <h3>2. Hệ thống Ký hiệu tắt &amp; Thẻ điều khiển (Meta Tags) cần nhớ</h3>
        <ul>
          <li><strong>Điều khiển nhịp nghỉ lấy hơi trong ElevenLabs:</strong>
            <ul>
              <li>Dùng dấu gạch ngang dài <code>—</code> hoặc dấu ba chấm <code>...</code> để tạo khoảng ngập ngừng tự nhiên giữa câu.</li>
              <li>Dùng thẻ <code>&lt;break time="1.0s" /&gt;</code> khi cần ngắt nghỉ chính xác theo số giây giữa hai đoạn nội dung.</li>
              <li>Chỉnh thanh <strong>Stability ở mức 45% – 55%</strong> để giọng đọc giàu ngữ điệu nhất (đặt quá cao giọng sẽ bị đều đều như robot).</li>
            </ul>
          </li>
          <li><strong>Các thẻ cấu trúc bài hát (Meta Tags) trong Suno AI:</strong>
            <ul>
              <li><code>[Intro]</code> / <code>[Outro]</code>: Đoạn dạo đầu và kết bài.</li>
              <li><code>[Verse 1]</code>, <code>[Pre-Chorus]</code>, <code>[Chorus]</code>: Phân tách rõ đoạn hát kể chuyện và điệp khúc cao trào.</li>
              <li><code>[Instrumental Interlude]</code> hoặc <code>[Guitar Solo]</code>: Yêu cầu nhạc cụ độc tấu không lời.</li>
              <li><code>[Whisper]</code> / <code>[Building Intensity]</code>: Điều khiển sắc thái giọng hát từ thì thầm sang bùng nổ.</li>
            </ul>
          </li>
        </ul>

        <h3>3. Mẫu cấu trúc Prompt sáng tác nhạc trên Suno AI (Custom Mode)</h3>
        <pre><code>Style of Music: Acoustic Pop Ballad, warm piano, gentle strings, emotional female vocal, 92 BPM

Lyrics:
[Intro - Soft Piano]
(Một buổi sáng trong lành...)

[Verse 1]
Ánh nắng nhẹ rơi trên trang giấy mới
Những ý tưởng bắt đầu cất lời...

[Chorus - Uplifting, Full Band]
Cùng bước tới tương lai rộng mở
Biến ước mơ thành từng nhịp thở...

[Outro - Fade Out]</code></pre>
      `
    },
    {
      id: "post-14",
      title: "Gamma App & Napkin AI: Bí quyết biến văn bản thành Slide thuyết trình, Sơ đồ tư duy & Phím tắt",
      slug: "gamma-app-va-napkin-ai-tao-slide-so-do-va-phim-tat",
      category: "workflow",
      categoryLabel: "Tự động hóa & Workflow",
      author: "Hoàng Nam",
      authorRole: "Full-stack Tech Lead",
      date: "02/11/2026",
      readTime: "6 phút đọc",
      views: 2810,
      likes: 246,
      featured: false,
      coverImage: "assets/covers/post-14.svg",
      coverStyle: "linear-gradient(135deg, #172554 0%, #312E81 50%, #0D9488 100%)",
      coverBadge: "SLIDE & SƠ ĐỒ AI",
      excerpt: "Chấm dứt cảnh thức khuya căn chỉnh từng khung chữ trong PowerPoint. Kết hợp Gamma App và Napkin AI kèm bộ phím tắt soạn thảo nhanh để hoàn thành bài thuyết trình trong 3 phút.",
      tags: ["Gamma App", "Napkin AI", "Slide AI", "Phím tắt"],
      content: `
        <h3>1. Khi nào dùng Gamma App, khi nào dùng Napkin AI?</h3>
        <ul>
          <li><strong>Gamma App (gamma.app):</strong> Chuyên biến một dàn ý văn bản hoặc tài liệu Word/PDF thành một bộ <strong>Slide thuyết trình hoàn chỉnh</strong> (có thể xuất ra file PowerPoint <code>.pptx</code> hoặc PDF), tự động chia cột, chọn bảng màu và chèn ảnh minh họa.</li>
          <li><strong>Napkin AI (napkin.ai):</strong> Chuyên biến từng đoạn văn bản giải thích quy trình, so sánh hoặc phân tích thành <strong>Sơ đồ tư duy, Flowchart và Infographic trực quan</strong> để bạn tải về dạng ảnh PNG/SVG chèn vào bài viết hoặc báo cáo.</li>
        </ul>

        <h3>2. Bảng Phím tắt &amp; Lệnh gõ nhanh trên Gamma App &amp; Napkin AI</h3>
        <ul>
          <li><strong>Gõ ký tự <code>/</code> (Slash Command) trong Gamma:</strong> Mở ngay menu chèn nhanh khối bố cục (2 cột, 3 cột, bảng biểu, hộp thông báo, biểu đồ số liệu) mà không cần dùng chuột.</li>
          <li><strong>Gõ 3 dấu gạch ngang <code>---</code> rồi nhấn <code>Enter</code>:</strong> Ngắt sang một trang Slide (Card) mới ngay tại vị trí con trỏ khi đang chuẩn bị nội dung ở chế độ Paste Text.</li>
          <li><strong>Nhấn <code>Ctrl + E</code> (macOS: <code>⌘ Cmd + E</code>) trong Gamma:</strong> Gọi nhanh trợ lý AI để yêu cầu đổi bố cục hoặc viết gọn lại trang Slide đang chọn.</li>
          <li><strong>Bấm biểu tượng Tia chớp xanh (Sparkle ⚡) bên lề trái trong Napkin AI:</strong> Tự động biến đoạn văn đang chọn thành hàng chục kiểu sơ đồ quy trình khác nhau chỉ sau 1 cú nhấp chuột.</li>
        </ul>

        <h3>3. Quy trình chuẩn: Claude (Dàn ý) → Gamma (Slide) → Napkin (Sơ đồ)</h3>
        <pre><code>Hãy viết dàn ý cho bộ Slide thuyết trình gồm 7 trang về chủ đề: [Tên dự án / Báo cáo].
Yêu cầu trình bày:
- Ngăn cách giữa các trang Slide bằng dấu "---" để tôi dán trực tiếp vào Gamma App.
- Mỗi trang chỉ gồm 1 tiêu đề chính và tối đa 3-4 ý ngắn gọn, giàu số liệu, dễ chuyển thành sơ đồ Infographic.</code></pre>
      `
    }
  ],

  // Mẹo nổi bật trong ngày (Bento Hero Highlight)
  tipOfTheDay: {
    id: "totd-2026",
    badge: "MẸO VÀNG HÔM NAY",
    title: "Kỹ thuật 'Reverse Prompting': Để AI tự hỏi bạn trước khi trả lời",
    summary: "Thay vì viết prompt dài 500 chữ mà vẫn sai ý, hãy thêm 1 câu thần chú cuối prompt để buộc AI đặt 3–5 câu hỏi làm rõ ngữ cảnh trước khi thực thi.",
    beforePrompt: "Viết cho tôi kế hoạch marketing cho quán cà phê mới mở.",
    afterPrompt: "Tôi muốn lập kế hoạch marketing 30 ngày cho quán cà phê specialty mới mở. Trước khi viết, hãy đóng vai Giám đốc Marketing và hỏi tôi 5 câu hỏi quan trọng nhất về ngân sách, tệp khách hàng, vị trí và USP để bản kế hoạch sát thực tế 100%.",
    impact: "+340% độ chính xác",
    platform: "Mọi LLM (ChatGPT, Claude, Gemini)",
    timeToRead: "45 giây"
  },

  // Danh mục Mẹo & Thủ thuật AI
  tipCategories: [
    { id: "all", name: "Tất cả mẹo", icon: "sparkles" },
    { id: "prompting", name: "Tối ưu Prompt", icon: "wand" },
    { id: "coding", name: "AI Lập trình", icon: "code" },
    { id: "writing", name: "Viết lách & Content", icon: "pen" },
    { id: "design", name: "Tạo ảnh & Video", icon: "image" },
    { id: "research", name: "Nghiên cứu & Học tập", icon: "book" },
    { id: "workflow", name: "Tự động hóa", icon: "zap" }
  ],

  // Danh sách Mẹo & Thủ thuật AI chi tiết
  tips: [
    {
      id: "tip-1",
      title: "Công thức C.R.A.F.T giúp viết Prompt chuẩn xác ngay lần đầu",
      category: "prompting",
      categoryLabel: "Tối ưu Prompt",
      platform: "ChatGPT / Claude / Gemini",
      difficulty: "Cơ bản",
      readTime: "2 phút",
      upvotes: 428,
      isHot: true,
      summary: "Cấu trúc 5 thành phần (Context - Role - Action - Format - Target) giúp loại bỏ 90% câu trả lời chung chung của AI.",
      problem: "AI trả lời lan man, văn phong sáo rỗng như sách giáo khoa vì thiếu rào chắn ngữ cảnh và định dạng đầu ra.",
      solution: "Áp dụng khung C.R.A.F.T: Nêu rõ bối cảnh (Context), gán vai trò chuyên gia (Role), chỉ định hành động cụ thể (Action), ép khuôn định dạng (Format) và xác định người đọc (Target).",
      beforeExample: "Viết bài đăng Facebook bán tai nghe chống ồn.",
      afterExample: "[Context] Shop phụ kiện công nghệ ra mắt tai nghe ANC pin 40h giá 890k.\n[Role] Copywriter chuyên viết quảng cáo chuyển đổi cao.\n[Action] Viết 3 phiên bản bài post Facebook theo công thức PAS.\n[Format] Bảng so sánh 3 góc tiếp cận + Hook 1 dòng đầu dưới 12 từ, không dùng emoji sáo rỗng.\n[Target] Dân văn phòng & sinh viên hay làm việc ở quán cafe.",
      proTip: "Luôn thêm dòng: 'Không dùng các từ sáo rỗng như: trong kỷ nguyên số, đột phá, không chỉ... mà còn'."
    },
    {
      id: "tip-2",
      title: "Dùng quy tắc .cursorrules / AGENTS.md để AI code đúng chuẩn dự án",
      category: "coding",
      categoryLabel: "AI Lập trình",
      platform: "Cursor / Antigravity / Windsurf",
      difficulty: "Trung cấp",
      readTime: "3 phút",
      upvotes: 392,
      isHot: true,
      summary: "Không cần nhắc lại tech stack, quy ước đặt tên biến hay design system ở mỗi lần chat bằng file cấu hình ngữ cảnh cố định.",
      problem: "Mỗi lần mở phiên chat mới, AI lại tự ý dùng thư viện lạ, viết CSS lộn xộn hoặc quên cấu trúc thư mục.",
      solution: "Tạo file AGENTS.md hoặc .cursorrules ở thư mục gốc dự án. Ghi rõ: Tech stack, quy tắc UI (màu sắc, spacing), quy tắc xử lý lỗi và những điều CẤM AI tự ý làm.",
      beforeExample: "Sửa lại trang dashboard cho đẹp hơn và dùng màu tối.",
      afterExample: "# AGENTS.md trong thư mục gốc:\n- Luôn dùng màu nền #07080C, surface #10131A, primary #7C5CFC\n- Ưu tiên CSS Variables, không hardcode mã màu\n- Giữ nguyên comment hiện có, kiểm tra responsive ở 3 mốc 1280px, 768px, 480px.",
      proTip: "Khi AI mắc lỗi lặp đi lặp lại, hãy thêm ngay 1 dòng 'NEVER do X' vào file AGENTS.md để nó nhớ vĩnh viễn."
    },
    {
      id: "tip-3",
      title: "Chống AI 'bịa thông tin' (Hallucination) bằng kỹ thuật Grounding & Trích dẫn",
      category: "research",
      categoryLabel: "Nghiên cứu & Học tập",
      platform: "NotebookLM / Perplexity / Claude",
      difficulty: "Cơ bản",
      readTime: "2 phút",
      upvotes: 315,
      isHot: false,
      summary: "Khóa phạm vi kiến thức của AI chỉ trong tài liệu bạn cung cấp và bắt buộc trích dẫn số trang/đoạn văn.",
      problem: "AI tự chế số liệu thống kê, tên bài báo khoa học hoặc điều khoản hợp đồng không có thật nhưng viết cực kỳ thuyết phục.",
      solution: "Sử dụng NotebookLM cho tài liệu PDF/Docs cá nhân, hoặc dùng ràng buộc 'Closed-world assumption' (Giả định thế giới đóng) trong prompt.",
      beforeExample: "Tóm tắt các điểm rủi ro trong hợp đồng này giúp tôi.",
      afterExample: "Chỉ sử dụng duy nhất thông tin trong văn bản đính kèm dưới đây. Tuyệt đối KHÔNG suy diễn hoặc lấy kiến thức bên ngoài. Với mỗi rủi ro tìm thấy, hãy trích dẫn nguyên văn câu gốc trong ngoặc kép và ghi rõ [Điều khoản số X]. Nếu thông tin không có trong tài liệu, hãy ghi rõ: 'Tài liệu không đề cập'.",
      proTip: "Bật chế độ Academic hoặc Focus: Writing/Sec trên Perplexity khi cần tra cứu nguồn học thuật có DOI thực."
    },
    {
      id: "tip-4",
      title: "Biến 1 bài báo hoặc video YouTube dài 2 tiếng thành Podcast & Sơ đồ tư duy",
      category: "research",
      categoryLabel: "Nghiên cứu & Học tập",
      platform: "NotebookLM + Napkin AI",
      difficulty: "Cơ bản",
      readTime: "2 phút",
      upvotes: 289,
      isHot: true,
      summary: "Quy trình kết hợp Google NotebookLM và Napkin AI để tiêu hóa lượng kiến thức khổng lồ trong 5 phút.",
      problem: "Có quá nhiều video bài giảng tiếng Anh dài và tài liệu PDF dày đặc chữ không có thời gian đọc hết.",
      solution: "Bước 1: Dán link YouTube + file PDF vào NotebookLM. Bước 2: Dùng tính năng Audio Overview (Interactive Mode) và bấm 'Join' để hỏi trực tiếp 2 host AI. Bước 3: Copy bản tóm tắt sang Napkin AI để tự động vẽ sơ đồ quy trình.",
      beforeExample: "Đọc thủ công 80 trang báo cáo ngành hoặc tua video 2 tiếng.",
      afterExample: "Trong NotebookLM: 'Hãy rút trích 7 luận điểm cốt lõi kèm số liệu chứng minh, trình bày dạng danh sách phân cấp để tôi chuyển thành sơ đồ tư duy.'",
      proTip: "Trong NotebookLM Audio Overview, bạn có thể tùy chỉnh prompt trước khi tạo audio: 'Hãy tập trung tranh luận về tính khả thi thực tế tại thị trường Việt Nam'."
    },
    {
      id: "tip-5",
      title: "Giữ đồng nhất khuôn mặt & phong cách nhân vật trong Midjourney / Flux",
      category: "design",
      categoryLabel: "Tạo ảnh & Video",
      platform: "Midjourney v7 / Flux.1",
      difficulty: "Trung cấp",
      readTime: "3 phút",
      upvotes: 264,
      isHot: false,
      summary: "Cách kết hợp tham số --cref (Character Reference), --sref (Style Reference) và --cw để tạo bộ ảnh xuyên suốt.",
      problem: "Mỗi lần tạo ảnh mới, AI lại vẽ ra một khuôn mặt khác và tông màu ánh sáng lệch hẳn so với ảnh trước.",
      solution: "Tạo 1 ảnh chân dung gốc rõ nét trên nền trung tính. Lấy URL ảnh đó gắn vào `--cref <URL>` để khóa khuôn mặt và `--sref <URL>` để khóa bảng màu & ánh sáng.",
      beforeExample: "/imagine a young asian female tech founder working in cafe, cinematic lighting",
      afterExample: "/imagine a young asian female tech founder presenting on stage, futuristic dark auditorium --cref https://example.com/char.png --cw 80 --sref https://example.com/style.png --sw 150 --ar 16:9",
      proTip: "Đặt `--cw 100` nếu muốn giữ nguyên cả kiểu tóc và trang phục gốc; giảm xuống `--cw 20` nếu chỉ muốn giữ khuôn mặt nhưng thay đổi quần áo mới."
    },
    {
      id: "tip-6",
      title: "Kỹ thuật 'Few-Shot + Anti-Pattern' để nhân bản giọng văn thương hiệu",
      category: "writing",
      categoryLabel: "Viết lách & Content",
      platform: "Claude 3.7 / ChatGPT",
      difficulty: "Trung cấp",
      readTime: "3 phút",
      upvotes: 347,
      isHot: true,
      summary: "Đưa cho AI 3 bài mẫu tốt nhất của bạn kèm danh sách từ vựng 'cấm kỵ' để AI viết tự nhiên như người thật.",
      problem: "Văn AI viết thường có mùi dịch thuật, lạm dụng dấu hai chấm ở tiêu đề và các từ như 'Khám phá ngay', 'Bùng nổ'.",
      solution: "Cung cấp 2–3 đoạn văn mẫu (Few-shot examples) + Bảng phân tích nhịp điệu câu (ngắn/dài đan xen) + Danh sách từ cấm (Anti-patterns).",
      beforeExample: "Hãy viết bài giới thiệu tính năng mới theo giọng văn trẻ trung, chuyên nghiệp.",
      afterExample: "Hãy phân tích 3 bài viết mẫu dưới đây về: (1) Độ dài câu trung bình, (2) Cách mở bài, (3) Từ ngữ đặc trưng.\nSau đó viết bài mới về [Chủ đề] tuân thủ tuyệt đối phong cách trên.\nCẤM DÙNG: 'Trong bối cảnh...', 'Không thể phủ nhận', 'Chìa khóa thành công', dấu chấm than liên tiếp.",
      proTip: "Claude thường xử lý giọng văn tiếng Việt tự nhiên và giàu cảm xúc hơn khi bạn yêu cầu: 'Viết câu ngắn gọn, ưu tiên động từ mạnh, hạn chế tính từ rườm rà'."
    },
    {
      id: "tip-7",
      title: "Debug lỗi phức tạp gấp 5 lần với chiến thuật 'Rubber Duck + Log Slice'",
      category: "coding",
      categoryLabel: "AI Lập trình",
      platform: "Claude / Cursor / ChatGPT",
      difficulty: "Chuyên sâu",
      readTime: "4 phút",
      upvotes: 310,
      isHot: false,
      summary: "Đừng chỉ paste stack trace rồi bảo 'Sửa giúp'. Hãy bắt AI liệt kê 3 giả thuyết nguyên nhân gốc và kiểm chứng từng bước.",
      problem: "Khi gặp bug khó, AI thường đoán mò rồi sửa đè lên code lành, làm phát sinh thêm 3 bug mới (vòng lặp sửa lỗi vô tận).",
      solution: "Yêu cầu AI KHÔNG viết code sửa ngay. Bắt AI: (1) Đọc stack trace & luồng dữ liệu, (2) Đưa ra 3 giả thuyết có xác suất cao nhất, (3) Chỉ ra cần thêm câu lệnh console.log nào để xác nhận trước khi chạm vào code.",
      beforeExample: "Hàm thanh toán của tôi bị lỗi undefined ở dòng 42, sửa lại code đi.",
      afterExample: "Đây là hàm checkout() và log lỗi. ĐỪNG viết code sửa ngay.\n1. Liệt kê 3 giả thuyết vì sao `cart.total` bị undefined khi gọi bất đồng bộ.\n2. Chỉ ra dòng code cụ thể gây race condition.\n3. Đề xuất giải pháp ít thay đổi kiến trúc hiện tại nhất.",
      proTip: "Khi AI đi vào ngõ cụt sau 3 lần thử, hãy mở 1 cuộc trò chuyện mới hoàn toàn và tóm tắt những cách đã thử nhưng thất bại để tránh hiệu ứng 'ngộ độc ngữ cảnh' (Context Poisoning)."
    },
    {
      id: "tip-8",
      title: "Biến bảng dữ liệu thô thành Dashboard tương tác bằng Claude Artifacts / Canvas",
      category: "workflow",
      categoryLabel: "Tự động hóa",
      platform: "Claude Artifacts / ChatGPT Canvas",
      difficulty: "Cơ bản",
      readTime: "2 phút",
      upvotes: 276,
      isHot: false,
      summary: "Tải file CSV/Excel lên và yêu cầu AI dựng ngay mini-app HTML/React có bộ lọc, biểu đồ và nút xuất báo cáo.",
      problem: "Chỉ yêu cầu AI phân tích bằng chữ khiến sếp hoặc khách hàng khó hình dung xu hướng dữ liệu.",
      solution: "Bật chế độ Artifacts (Claude) hoặc Canvas (ChatGPT), đính kèm dữ liệu và yêu cầu tạo Single-file Interactive Dashboard giao diện Dark Mode có thanh lọc theo tháng và KPI cards.",
      beforeExample: "Phân tích bảng doanh số này và cho tôi biết tháng nào bán chạy nhất.",
      afterExample: "Từ dữ liệu CSV này, hãy tạo một Interactive Dashboard (HTML/React) gồm: 4 thẻ KPI tổng quan, biểu đồ so sánh doanh thu theo danh mục, bộ lọc theo quý và bảng Top 5 sản phẩm kèm nhận xét chiến lược.",
      proTip: "Bạn có thể bấm 'Publish' trên Claude Artifacts hoặc lưu file .html về máy để gửi trực tiếp cho đồng nghiệp mở trên trình duyệt không cần cài đặt gì."
    },
    {
      id: "tip-9",
      title: "Mẹo dùng 'Meta-Prompt' để AI tự nâng cấp Prompt sơ sài thành bản chuyên gia",
      category: "prompting",
      categoryLabel: "Tối ưu Prompt",
      platform: "Mọi công cụ AI",
      difficulty: "Cơ bản",
      readTime: "2 phút",
      upvotes: 495,
      isHot: true,
      summary: "Dùng chính AI để viết lại câu lệnh cho AI — kỹ thuật tiết kiệm thời gian nhất cho người bận rộn.",
      problem: "Bạn biết mình muốn kết quả gì nhưng không biết diễn đạt các thuật ngữ chuyên ngành để AI hiểu sâu.",
      solution: "Yêu cầu AI đóng vai 'Senior Prompt Engineer', biến câu mô tả 1 dòng của bạn thành một System Prompt hoàn chỉnh có biến số `[...]` để tái sử dụng.",
      beforeExample: "Giúp tôi kiểm tra CV xin việc vị trí Product Manager.",
      afterExample: "Hãy đóng vai Chuyên gia Prompt Engineering. Tôi muốn tạo một prompt để AI rà soát và tối ưu CV cho vị trí [Vị trí ứng tuyển] theo chuẩn ATS. Hãy viết giúp tôi một System Prompt chi tiết gồm: Vai trò, Tiêu chí chấm điểm (thang 100), Bảng sửa lỗi câu chữ (Trước/Sau) và Danh sách từ khóa còn thiếu.",
      proTip: "Lưu các Meta-Prompt tốt nhất vào phần 'Custom Instructions' hoặc tạo phím tắt gõ nhanh (Text Replacement) trên máy tính với tiền tố `/meta`."
    }
  ],

  // Danh sách Bảng Phím Tắt AI theo từng nền tảng
  shortcutApps: [
    { id: "all", name: "Tất cả ứng dụng", badge: "Hot" },
    { id: "chatgpt", name: "ChatGPT (App & Web)", badge: "Phổ biến" },
    { id: "claude", name: "Claude AI", badge: "Pro" },
    { id: "cursor", name: "Cursor / VS Code AI", badge: "Dev" },
    { id: "gemini", name: "Gemini & AI Studio", badge: "Google" },
    { id: "perplexity", name: "Perplexity & Notion AI", badge: "Research" },
    { id: "midjourney", name: "Midjourney Tham số tắt", badge: "Design" }
  ],

  shortcuts: [
    {
      id: "sc-1",
      app: "chatgpt",
      appName: "ChatGPT",
      action: "Mở thanh ChatGPT Companion nổi ở bất kỳ đâu (Desktop App)",
      winKeys: ["Alt", "Space"],
      macKeys: ["⌥ Option", "Space"],
      category: "Truy cập nhanh",
      tip: "Cho phép chụp màn hình cửa sổ đang mở và hỏi ngay mà không cần chuyển tab."
    },
    {
      id: "sc-2",
      app: "chatgpt",
      appName: "ChatGPT",
      action: "Mở cuộc trò chuyện mới (New Chat)",
      winKeys: ["Ctrl", "Shift", "O"],
      macKeys: ["⌘ Cmd", "⇧ Shift", "O"],
      category: "Điều hướng",
      tip: "Nên mở chat mới mỗi khi đổi chủ đề để tránh loãng ngữ cảnh (Context Pollution)."
    },
    {
      id: "sc-3",
      app: "chatgpt",
      appName: "ChatGPT",
      action: "Sao chép nhanh khối code cuối cùng do AI vừa viết",
      winKeys: ["Ctrl", "Shift", ";"],
      macKeys: ["⌘ Cmd", "⇧ Shift", ";"],
      category: "Thao tác kết quả",
      tip: "Cực kỳ hữu ích cho lập trình viên, không cần cuộn chuột tìm nút Copy code."
    },
    {
      id: "sc-4",
      app: "chatgpt",
      appName: "ChatGPT",
      action: "Sao chép toàn bộ câu trả lời cuối cùng của AI",
      winKeys: ["Ctrl", "Shift", "C"],
      macKeys: ["⌘ Cmd", "⇧ Shift", "C"],
      category: "Thao tác kết quả",
      tip: "Giữ nguyên định dạng Markdown sạch sẽ khi dán sang Notion hoặc Obsidian."
    },
    {
      id: "sc-5",
      app: "chatgpt",
      appName: "ChatGPT",
      action: "Bật/Tắt thanh lịch sử Sidebar bên trái",
      winKeys: ["Ctrl", "Shift", "S"],
      macKeys: ["⌘ Cmd", "⇧ Shift", "S"],
      category: "Giao diện",
      tip: "Tạo không gian làm việc tập trung tối đa khi đang dùng chế độ Canvas."
    },
    {
      id: "sc-6",
      app: "chatgpt",
      appName: "ChatGPT",
      action: "Tìm kiếm nhanh trong toàn bộ lịch sử trò chuyện",
      winKeys: ["Ctrl", "K"],
      macKeys: ["⌘ Cmd", "K"],
      category: "Tìm kiếm",
      tip: "Gõ từ khóa để tìm lại prompt hoặc đoạn code đã từng hỏi từ nhiều tháng trước."
    },
    {
      id: "sc-7",
      app: "cursor",
      appName: "Cursor AI",
      action: "Sửa code trực tiếp tại dòng đang bôi đen (Inline Edit / Generate)",
      winKeys: ["Ctrl", "K"],
      macKeys: ["⌘ Cmd", "K"],
      category: "Coding AI",
      tip: "Bôi đen hàm cần sửa → bấm Ctrl+K → gõ yêu cầu ngắn gọn như 'thêm try/catch và tối ưu hiệu năng'."
    },
    {
      id: "sc-8",
      app: "cursor",
      appName: "Cursor AI",
      action: "Đưa đoạn code đang chọn vào khung AI Chat kèm ngữ cảnh dòng",
      winKeys: ["Ctrl", "L"],
      macKeys: ["⌘ Cmd", "L"],
      category: "Coding AI",
      tip: "Giúp AI biết chính xác bạn đang hỏi về dòng nào trong file nào."
    },
    {
      id: "sc-9",
      app: "cursor",
      appName: "Cursor AI",
      action: "Mở Composer / Agent đa file (Tạo hoặc sửa nhiều file cùng lúc)",
      winKeys: ["Ctrl", "I"],
      macKeys: ["⌘ Cmd", "I"],
      category: "Agent",
      tip: "Dùng `@Codebase` hoặc `@Files` trong Composer để AI tự động đồng bộ thay đổi trên toàn dự án."
    },
    {
      id: "sc-10",
      app: "cursor",
      appName: "Cursor AI",
      action: "Chấp nhận gợi ý code tự động (Accept AI Tab / Diff)",
      winKeys: ["Tab"],
      macKeys: ["Tab"],
      category: "Tốc độ",
      tip: "Dùng Ctrl + Mũi tên Phải (⌘ + →) nếu bạn chỉ muốn nhận từng từ một thay vì cả khối code."
    },
    {
      id: "sc-11",
      app: "cursor",
      appName: "Cursor AI",
      action: "Chấp nhận thay đổi trong Inline Diff / Composer",
      winKeys: ["Ctrl", "Enter"],
      macKeys: ["⌘ Cmd", "Enter"],
      category: "Phê duyệt",
      tip: "Nhấn Ctrl + Backspace (⌘ + Backspace) để từ chối (Reject) thay đổi."
    },
    {
      id: "sc-12",
      app: "claude",
      appName: "Claude AI",
      action: "Gọi nhanh cửa sổ Claude Desktop từ mọi màn hình",
      winKeys: ["Ctrl", "Alt", "Space"],
      macKeys: ["⌘ Cmd", "⇧ Shift", "Space"],
      category: "Truy cập nhanh",
      tip: "Có thể tùy chỉnh lại tổ hợp phím này trong phần Settings của ứng dụng Claude Desktop."
    },
    {
      id: "sc-13",
      app: "claude",
      appName: "Claude AI",
      action: "Mở nhanh cuộc trò chuyện mới trong Claude",
      winKeys: ["Ctrl", "K"],
      macKeys: ["⌘ Cmd", "K"],
      category: "Điều hướng",
      tip: "Kết hợp với Projects để giữ tài liệu nền tảng luôn sẵn sàng."
    },
    {
      id: "sc-14",
      app: "claude",
      appName: "Claude AI",
      action: "Xuống dòng trong ô nhập Prompt mà không gửi tin nhắn",
      winKeys: ["Shift", "Enter"],
      macKeys: ["⇧ Shift", "Enter"],
      category: "Soạn thảo",
      tip: "Dùng thẻ XML như <context>...</context> và <task>...</task> khi xuống dòng để Claude hiểu cấu trúc tốt nhất."
    },
    {
      id: "sc-15",
      app: "gemini",
      appName: "Gemini / AI Studio",
      action: "Chạy Prompt (Run) trong Google AI Studio",
      winKeys: ["Ctrl", "Enter"],
      macKeys: ["⌘ Cmd", "Enter"],
      category: "Thực thi",
      tip: "Trong AI Studio, bạn có thể chỉnh Temperature = 0.2 khi cần code chuẩn xác."
    },
    {
      id: "sc-16",
      app: "gemini",
      appName: "Gemini / AI Studio",
      action: "Gọi các tiện ích mở rộng (@Workspace, @YouTube, @Drive)",
      winKeys: ["@"],
      macKeys: ["@"],
      category: "Tích hợp",
      tip: "Gõ `@Google Drive` hoặc `@YouTube` ngay đầu câu để Gemini tìm trực tiếp trong tài liệu cá nhân."
    },
    {
      id: "sc-17",
      app: "perplexity",
      appName: "Perplexity AI",
      action: "Đặt câu hỏi mới (New Thread) ở bất kỳ trang nào trên Perplexity",
      winKeys: ["Ctrl", "I"],
      macKeys: ["⌘ Cmd", "I"],
      category: "Tra cứu",
      tip: "Dùng phím `/` để chuyển nhanh con trỏ vào thanh hỏi tiếp (Follow-up)."
    },
    {
      id: "sc-18",
      app: "perplexity",
      appName: "Notion AI",
      action: "Kích hoạt trợ lý Notion AI ngay tại dòng đang soạn thảo",
      winKeys: ["Space"],
      macKeys: ["Space"],
      category: "Soạn thảo",
      tip: "Nếu đang bôi đen một đoạn văn bản, nhấn `Ctrl + J` (`⌘ + J`) để gọi menu chỉnh sửa bằng AI."
    },
    {
      id: "sc-19",
      app: "midjourney",
      appName: "Midjourney",
      action: "Đặt tỷ lệ khung hình chuẩn (Widescreen / Story / Vuông)",
      winKeys: ["--ar 16:9", "--ar 9:16"],
      macKeys: ["--ar 16:9", "--ar 9:16"],
      category: "Tham số ảnh",
      tip: "Dùng `--ar 16:9` cho YouTube/Blog thumbnail, `--ar 4:5` cho bài đăng Facebook/Instagram."
    },
    {
      id: "sc-20",
      app: "midjourney",
      appName: "Midjourney",
      action: "Loại bỏ chi tiết không mong muốn khỏi bức ảnh",
      winKeys: ["--no text, watermark, blur"],
      macKeys: ["--no text, watermark, blur"],
      category: "Tham số ảnh",
      tip: "Hiệu quả hơn rất nhiều so với việc viết 'do not include text' trong câu mô tả."
    },
    {
      id: "sc-21",
      app: "midjourney",
      appName: "Midjourney",
      action: "Điều chỉnh mức độ bay bổng nghệ thuật (Stylize) & Độ lạ (Weird)",
      winKeys: ["--s 250", "--c 15"],
      macKeys: ["--s 250", "--c 15"],
      category: "Tham số ảnh",
      tip: "`--s` nhận giá trị 0–1000 (mặc định 100). Đặt `--s 50` nếu cần bám sát prompt, `--s 400` nếu cần ảnh nghệ thuật."
    }
  ],

  // Danh bạ Công cụ AI (AI Tools Directory)
  toolCategories: [
    { id: "all", name: "Tất cả Tools" },
    { id: "llm", name: "Chatbot & LLM" },
    { id: "coding", name: "Lập trình & Web" },
    { id: "image", name: "Tạo ảnh & Thiết kế" },
    { id: "video", name: "Video & Âm thanh" },
    { id: "productivity", name: "Nghiên cứu & Năng suất" }
  ],

  tools: [
    {
      id: "tool-chatgpt",
      name: "ChatGPT (GPT-4o / o3)",
      category: "llm",
      categoryLabel: "Chatbot & LLM",
      pricing: "Freemium",
      rating: 4.9,
      badge: "Đa năng nhất",
      url: "https://chatgpt.com",
      tagline: "Trợ lý AI toàn diện với chế độ suy luận sâu, Canvas, tạo ảnh tự nhiên và Voice Mode thời gian thực.",
      bestFor: "Brainstorm ý tưởng, phân tích dữ liệu đa phương thức, tạo ảnh có chữ chính xác, giao tiếp giọng nói.",
      secretTip: "Dùng tính năng 'Projects' để gom nhóm các file hướng dẫn chung và bật chế độ 'Canvas' khi cần biên tập từng đoạn văn/code.",
      pros: ["Đa phương thức mạnh mẽ", "Tạo ảnh tích hợp cực chuẩn", "App Desktop có phím tắt Alt+Space tiện lợi"],
      cons: ["Văn phong tiếng Việt mặc định đôi khi hơi công thức nếu không tinh chỉnh prompt"]
    },
    {
      id: "tool-claude",
      name: "Claude (Anthropic)",
      category: "llm",
      categoryLabel: "Chatbot & LLM",
      pricing: "Freemium",
      rating: 4.9,
      badge: "Code & Viết số 1",
      url: "https://claude.ai",
      tagline: "Mô hình AI nổi tiếng với khả năng viết văn tự nhiên, tư duy lập trình xuất sắc và tính năng Artifacts.",
      bestFor: "Viết lách chuyên sâu, lập trình kiến trúc phức tạp, dựng UI prototype tức thì với Artifacts.",
      secretTip: "Bọc dữ liệu đầu vào bằng thẻ XML như `<tai_lieu>...</tai_lieu>` và `<yeu_cau>...</yeu_cau>` giúp Claude tăng 30% độ chính xác.",
      pros: ["Giọng văn tiếng Việt rất tự nhiên", "Code sạch, ít bịa hàm", "Artifacts cho phép chạy thử React/HTML trực tiếp"],
      cons: ["Giới hạn lượt tin nhắn ở bản miễn phí và Pro chặt hơn khi hội thoại quá dài"]
    },
    {
      id: "tool-gemini",
      name: "Google Gemini & AI Studio",
      category: "llm",
      categoryLabel: "Chatbot & LLM",
      pricing: "Freemium",
      rating: 4.8,
      badge: "Context 1M–2M",
      url: "https://aistudio.google.com",
      tagline: "Sở hữu cửa sổ ngữ cảnh khổng lồ lên tới 1–2 triệu token, xử lý trực tiếp video dài, âm thanh và cả kho code.",
      bestFor: "Đọc sách dày hàng trăm trang, phân tích video dài 1 tiếng, kết nối hệ sinh thái Google Workspace.",
      secretTip: "Truy cập `aistudio.google.com` để sử dụng miễn phí các mô hình mạnh nhất kèm thanh chỉnh Temperature và Grounding with Google Search.",
      pros: ["Context window cực lớn", "Hiểu trực tiếp file video và audio", "Tích hợp sâu với Docs, Drive, Gmail"],
      cons: ["Giao diện AI Studio thiên về kỹ thuật hơn người dùng phổ thông"]
    },
    {
      id: "tool-cursor",
      name: "Cursor / Antigravity IDE",
      category: "coding",
      categoryLabel: "Lập trình & Web",
      pricing: "Freemium",
      rating: 4.9,
      badge: "AI-First IDE",
      url: "https://cursor.com",
      tagline: "Môi trường lập trình tích hợp AI Agent hiểu toàn bộ codebase, tự động sửa nhiều file và chạy lệnh terminal.",
      bestFor: "Xây dựng ứng dụng full-stack, refactor dự án lớn, tự động tìm và sửa bug xuyên suốt nhiều file.",
      secretTip: "Dùng `@Docs` để nạp tài liệu thư viện mới nhất vào IDE, giúp AI không dùng cú pháp phiên bản cũ.",
      pros: ["Gợi ý Tab dự đoán bước tiếp theo siêu nhạy", "Agent tự chạy test và sửa lỗi", "Tương thích mọi extension VS Code"],
      cons: ["Cần biết chia nhỏ task để tránh Agent sửa quá nhiều file cùng lúc"]
    },
    {
      id: "tool-perplexity",
      name: "Perplexity AI",
      category: "productivity",
      categoryLabel: "Nghiên cứu & Năng suất",
      pricing: "Freemium",
      rating: 4.8,
      badge: "Công cụ tra cứu",
      url: "https://perplexity.ai",
      tagline: "Công cụ tìm kiếm AI thời gian thực luôn đính kèm nguồn trích dẫn minh bạch cho từng câu trả lời.",
      bestFor: "Tra cứu tin tức mới nhất, tổng hợp báo cáo thị trường, tìm bài báo khoa học (Academic mode).",
      secretTip: "Chọn chế độ 'Deep Research' khi cần AI tự thực hiện hàng chục lượt tìm kiếm và viết báo cáo chuyên sâu dài 5–10 trang.",
      pros: ["Luôn có link nguồn kiểm chứng", "Không bị giới hạn kiến thức cũ", "Tạo trang Spaces chia sẻ nghiên cứu đẹp mắt"],
      cons: ["Không mạnh bằng Claude/ChatGPT khi cần sáng tác văn học hư cấu"]
    },
    {
      id: "tool-notebooklm",
      name: "Google NotebookLM",
      category: "productivity",
      categoryLabel: "Nghiên cứu & Năng suất",
      pricing: "Miễn phí",
      rating: 4.9,
      badge: "100% Miễn phí",
      url: "https://notebooklm.google.com",
      tagline: "Trợ lý nghiên cứu chỉ trả lời dựa trên tài liệu bạn tải lên (PDF, Web, YouTube, Docs) và tạo Podcast AI.",
      bestFor: "Ôn thi, nghiên cứu tài liệu nội bộ doanh nghiệp, đọc hiểu hợp đồng & báo cáo tài chính không sợ AI bịa.",
      secretTip: "Gộp 20–50 nguồn tài liệu về cùng 1 chủ đề vào 1 Notebook để tạo 'Bộ não thứ hai' có trích dẫn tận từng dòng.",
      pros: ["Tỷ lệ ảo giác (Hallucination) gần như bằng 0", "Tính năng Audio Overview cực kỳ sống động", "Hoàn toàn miễn phí"],
      cons: ["Chỉ làm việc trên tài liệu đã nạp, không tự lướt web mở rộng nếu không bật Discover"]
    },
    {
      id: "tool-midjourney",
      name: "Midjourney v7 & Flux.1",
      category: "image",
      categoryLabel: "Tạo ảnh & Thiết kế",
      pricing: "Trả phí",
      rating: 4.8,
      badge: "Chất lượng ảnh đỉnh cao",
      url: "https://midjourney.com",
      tagline: "Tiêu chuẩn vàng về thẩm mỹ hình ảnh AI, hỗ trợ chỉnh sửa vùng chọn (Inpainting), đồng nhất nhân vật và phong cách.",
      bestFor: "Thiết kế key visual quảng cáo, concept art, ảnh minh họa thương hiệu chất lượng điện ảnh.",
      secretTip: "Sử dụng giao diện Web Editor của Midjourney để mở rộng khung hình (Pan/Zoom) và sửa từng chi tiết nhỏ mà không làm hỏng bố cục.",
      pros: ["Chất lượng ánh sáng và chi tiết da/vật liệu xuất sắc", "Kho SREF code phong phú"],
      cons: ["Midjourney không có gói miễn phí cố định (có thể dùng Flux.1 miễn phí thay thế)"]
    },
    {
      id: "tool-elevenlabs",
      name: "ElevenLabs & Suno AI",
      category: "video",
      categoryLabel: "Video & Âm thanh",
      pricing: "Freemium",
      rating: 4.8,
      badge: "Voice & Music số 1",
      url: "https://elevenlabs.io",
      tagline: "Nền tảng tạo giọng đọc AI giàu cảm xúc đa ngôn ngữ (bao gồm tiếng Việt) và sáng tác nhạc hoàn chỉnh.",
      bestFor: "Thuyết minh video YouTube/TikTok, lồng tiếng khóa học, tạo nhạc nền bản quyền riêng.",
      secretTip: "Trong ElevenLabs, dùng thẻ cảm xúc hoặc dấu gạch ngang `—` và dấu ba chấm `...` để điều khiển nhịp nghỉ lấy hơi tự nhiên.",
      pros: ["Giọng đọc tự nhiên khó phân biệt với người thật", "Hỗ trợ nhân bản giọng nói (Voice Cloning) nhanh"],
      cons: ["Cần kiểm soát tốc độ đọc khi dùng các thuật ngữ tiếng Anh xen lẫn tiếng Việt"]
    },
    {
      id: "tool-gamma",
      name: "Gamma App & Napkin AI",
      category: "productivity",
      categoryLabel: "Nghiên cứu & Năng suất",
      pricing: "Freemium",
      rating: 4.7,
      badge: "Slide & Infographic",
      url: "https://gamma.app",
      tagline: "Biến văn bản hoặc dàn ý thô thành bài thuyết trình Slide chuyên nghiệp và sơ đồ Infographic chỉ trong 30 giây.",
      bestFor: "Làm slide thuyết trình dự án, pitch deck, biến bài viết chữ dài thành sơ đồ trực quan.",
      secretTip: "Dùng Claude viết dàn ý chi tiết theo từng slide trước, sau đó dán vào chế độ 'Paste in text' của Gamma để có cấu trúc chặt chẽ nhất.",
      pros: ["Tiết kiệm 80% thời gian căn chỉnh bố cục slide", "Xuất được ra PowerPoint (.pptx) và PDF"],
      cons: ["Cần chỉnh lại font chữ nếu dùng một số font tiếng Việt đặc thù"]
    }
  ],

  // Kho Prompt Thực Chiến (Interactive Prompt Templates)
  promptTemplates: [
    {
      id: "prm-1",
      title: "Chuyên gia Phản biện & Tìm lỗ hổng ý tưởng (Devil's Advocate)",
      category: "Chiến lược & Kinh doanh",
      badge: "Tư duy phản biện",
      description: "Ngăn AI 'nịnh' bạn. Buộc AI đóng vai nhà đầu tư khó tính để chỉ ra các điểm mù trước khi bạn tốn tiền triển khai.",
      template: "Tôi đang dự định triển khai ý tưởng: {{Ý tưởng hoặc kế hoạch của bạn}} dành cho đối tượng {{Khách hàng mục tiêu}}.\n\nĐừng khen ngợi ý tưởng này. Hãy đóng vai một Nhà đầu tư mạo hiểm và Chuyên gia quản trị rủi ro cực kỳ khắt khe:\n1. Chỉ ra 5 lỗ hổng lớn nhất có thể khiến kế hoạch này thất bại.\n2. Đặt 5 câu hỏi hóc búa nhất mà khách hàng sẽ chất vấn trước khi xuống tiền.\n3. Đề xuất phương án khắc phục thực tế cho từng lỗ hổng với nguồn lực {{Ngân sách / Quy mô}}.",
      variables: {
        "Ý tưởng hoặc kế hoạch của bạn": "Mở dịch vụ đào tạo ứng dụng AI cho nhân sự văn phòng SME",
        "Khách hàng mục tiêu": "Chủ doanh nghiệp nhỏ từ 10-50 nhân sự",
        "Ngân sách / Quy mô": "Team 2 người, ngân sách thử nghiệm 20 triệu VNĐ"
      }
    },
    {
      id: "prm-2",
      title: "Kiến trúc sư Code Review & Tối ưu Hiệu năng",
      category: "Lập trình & Kỹ thuật",
      badge: "Clean Code",
      description: "Rà soát bảo mật, rò rỉ bộ nhớ, edge-cases và đề xuất code tối ưu kèm giải thích rõ ràng.",
      template: "Hãy đóng vai Principal Software Engineer chuyên về {{Ngôn ngữ / Framework}}.\nHãy review kỹ đoạn code xử lý {{Chức năng của đoạn code}} theo 4 góc độ:\n1. Lỗi tiềm ẩn (Edge cases, Null/Undefined, Race conditions).\n2. Hiệu năng (Độ phức tạp thuật toán, re-render thừa hoặc truy vấn N+1).\n3. Bảo mật (Injection, XSS, lộ dữ liệu nhạy cảm).\n4. Viết lại phiên bản tối ưu tuân thủ nguyên tắc {{Quy chuẩn ưu tiên}} kèm chú thích ngắn gọn lý do thay đổi.",
      variables: {
        "Ngôn ngữ / Framework": "TypeScript & React 19",
        "Chức năng của đoạn code": "Tìm kiếm và lọc danh sách 10.000 sản phẩm theo thời gian thực",
        "Quy chuẩn ưu tiên": "Clean Code, dễ bảo trì, không cài thêm thư viện ngoài"
      }
    },
    {
      id: "prm-3",
      title: "Biên tập viên SEO & Bài viết Chuyển đổi cao (Không mùi AI)",
      category: "Viết lách & Marketing",
      badge: "Content Pro",
      description: "Tạo bài viết chuyên sâu, giàu ví dụ thực tế, tự động loại bỏ các cụm từ sáo rỗng đặc trưng của AI.",
      template: "Hãy đóng vai Biên tập viên nội dung trưởng trong lĩnh vực {{Lĩnh vực chuyên môn}}.\nViết một bài hướng dẫn chi tiết về chủ đề: \"{{Chủ đề bài viết}}\" dành cho {{Độc giả mục tiêu}}.\n\nYêu cầu bắt buộc:\n- Giọng văn: {{Giọng văn mong muốn}}, câu văn gãy gọn, đi thẳng vào giải pháp thực hành.\n- Cấu trúc: Có Hook mở đầu đánh trúng nỗi đau, các bước thực hiện kèm ví dụ cụ thể Trước/Sau, và bảng tóm tắt nhanh.\n- TUYỆT ĐỐI KHÔNG dùng các từ sáo rỗng: \"trong kỷ nguyên số\", \"chìa khóa vàng\", \"bùng nổ\", \"không chỉ... mà còn\".",
      variables: {
        "Lĩnh vực chuyên môn": "Công nghệ & Năng suất làm việc với AI",
        "Chủ đề bài viết": "7 mẹo dùng ChatGPT và Claude tiết kiệm 2 giờ làm việc mỗi ngày",
        "Độc giả mục tiêu": "Người đi làm văn phòng, Marketer và Freelancer",
        "Giọng văn mong muốn": "Thực chiến, gần gũi, giàu tính chuyên môn"
      }
    },
    {
      id: "prm-4",
      title: "Gia sư Feynman — Giải thích mọi khái niệm khó trong 3 cấp độ",
      category: "Học tập & Nghiên cứu",
      badge: "Học siêu tốc",
      description: "Áp dụng kỹ thuật Feynman để hiểu bản chất bất kỳ chủ đề phức tạp nào từ cơ bản đến chuyên gia.",
      template: "Hãy áp dụng Kỹ thuật Feynman để giải thích khái niệm \"{{Khái niệm cần học}}\" trong lĩnh vực {{Ngành / Lĩnh vực}} theo 3 cấp độ:\n\n- Cấp độ 1 (Giải thích cho học sinh 12 tuổi): Dùng ẩn dụ đời thường, tuyệt đối không dùng thuật ngữ hàn lâm.\n- Cấp độ 2 (Ứng dụng thực tế): Khái niệm này giải quyết bài toán thực tế nào? Cho 1 ví dụ minh họa cụ thể.\n- Cấp độ 3 (Góc nhìn chuyên sâu): Những hiểu lầm phổ biến nhất mà người mới hay mắc phải là gì? Sau cùng, hãy đặt cho tôi 2 câu hỏi tình huống để kiểm tra xem tôi đã thực sự hiểu bản chất chưa.",
      variables: {
        "Khái niệm cần học": "RAG (Retrieval-Augmented Generation) và Vector Database",
        "Ngành / Lĩnh vực": "Trí tuệ nhân tạo ứng dụng"
      }
    }
  ],

  // AI Intent Copilot Scenarios
  intentPlaybooks: [
    {
      id: "intent-code",
      keywords: ["code", "lập trình", "bug", "cursor", "web", "app", "debug", "dev"],
      title: "Bộ công cụ & Thủ thuật tăng tốc Lập trình với AI",
      intentType: "AI Coding Workflow",
      summary: "Phát hiện ý định: Tối ưu hóa quy trình viết code, sửa bug và xây dựng ứng dụng với AI.",
      recommendedSteps: [
        "Thiết lập ngay file `AGENTS.md` hoặc `.cursorrules` ở gốc dự án để khóa quy chuẩn code.",
        "Sử dụng `Ctrl + K` để sửa inline từng hàm nhỏ thay vì yêu cầu AI viết lại cả file dài.",
        "Khi gặp bug khó: Yêu cầu AI liệt kê 3 giả thuyết nguyên nhân trước, không cho sửa code mò."
      ],
      recommendedTools: ["Cursor / Antigravity IDE", "Claude (Anthropic)", "Google Gemini & AI Studio"],
      quickShortcut: "Ctrl + I (Mở Agent đa file) | Ctrl + L (Đưa code vào Chat)",
      targetPage: "tips.html"
    },
    {
      id: "intent-content",
      keywords: ["viết", "content", "bài viết", "seo", "marketing", "quảng cáo", "blog", "văn"],
      title: "Quy trình viết Content & Marketing chuẩn tự nhiên (Không mùi AI)",
      intentType: "AI Content & Copywriting",
      summary: "Phát hiện ý định: Tạo nội dung chất lượng cao, giữ đúng giọng văn thương hiệu và tối ưu chuyển đổi.",
      recommendedSteps: [
        "Áp dụng khung C.R.A.F.T (Context, Role, Action, Format, Target) ngay từ câu lệnh đầu tiên.",
        "Nạp 2–3 bài viết mẫu tốt nhất (Few-shot) kèm danh sách các từ sáo rỗng cấm dùng.",
        "Sử dụng chế độ Canvas / Artifacts để bôi đen và tinh chỉnh từng đoạn thay vì tạo lại toàn bài."
      ],
      recommendedTools: ["Claude (Anthropic)", "ChatGPT (GPT-4o / o3)", "Perplexity AI"],
      quickShortcut: "Ctrl + Shift + C (Copy sạch Markdown câu trả lời cuối)",
      targetPage: "blog.html"
    },
    {
      id: "intent-research",
      keywords: ["nghiên cứu", "tài liệu", "pdf", "học", "tóm tắt", "báo cáo", "bịa", "nguồn", "youtube"],
      title: "Hệ thống Nghiên cứu & Tóm tắt tài liệu chính xác 100%",
      intentType: "Deep Research & Learning",
      summary: "Phát hiện ý định: Tra cứu thông tin có nguồn trích dẫn xác thực và tiêu hóa tài liệu dài nhanh chóng.",
      recommendedSteps: [
        "Đưa toàn bộ file PDF, Docs và link YouTube vào Google NotebookLM để khóa phạm vi dữ liệu.",
        "Bắt buộc AI trích dẫn số điều khoản/trang bằng câu lệnh 'Chỉ dựa trên tài liệu đính kèm'.",
        "Dùng Perplexity chế độ Deep Research để quét số liệu thị trường mới nhất có link kiểm chứng."
      ],
      recommendedTools: ["Google NotebookLM", "Perplexity AI", "Google Gemini & AI Studio"],
      quickShortcut: "@YouTube / @Drive trong Gemini | Ctrl + I trong Perplexity",
      targetPage: "tips.html"
    },
    {
      id: "intent-design",
      keywords: ["ảnh", "video", "thiết kế", "banner", "midjourney", "nhạc", "voice", "âm thanh", "slide"],
      title: "Bộ thủ thuật Sáng tạo Hình ảnh, Video & Slide thuyết trình AI",
      intentType: "Multimodal Creative AI",
      summary: "Phát hiện ý định: Tạo hình ảnh đồng nhất nhân vật, làm slide tự động và sản xuất nội dung đa phương tiện.",
      recommendedSteps: [
        "Dùng `--cref` và `--sref` trong Midjourney để giữ nguyên khuôn mặt nhân vật và tông màu thương hiệu.",
        "Luôn chỉ định tỷ lệ khung hình (`--ar 16:9` hoặc `--ar 4:5`) và từ khóa loại trừ (`--no blur, text`).",
        "Kết hợp dàn ý từ Claude + Gamma App / Napkin AI để xuất bản Slide và sơ đồ trong 60 giây."
      ],
      recommendedTools: ["Midjourney v7 & Flux.1", "Gamma App & Napkin AI", "ElevenLabs & Suno AI"],
      quickShortcut: "--ar 16:9 --s 250 --no watermark",
      targetPage: "tools.html"
    }
  ],

  // ==========================================================================
  // BẢNG XẾP HẠNG AI THEO NHU CẦU THỰC TẾ (Dùng AI nào cho việc gì?)
  // ==========================================================================
  aiLeaderboard: [
    {
      task: "✍️ Viết lách tiếng Việt, Content & Copywriting tự nhiên",
      winner: "Claude 3.7 Sonnet",
      winnerReason: "Câu chữ mượt mà, giàu cảm xúc, ít dùng từ sáo rỗng kiểu dịch thuật nhất.",
      runnerUp: "ChatGPT (GPT-4o Canvas)",
      bestFree: "Claude Free + Gemini 2.5 Flash",
      proWorkflow: "Nạp 3 bài mẫu vào Claude Projects + đính kèm bộ lọc 10 từ cấm hậu kiểm."
    },
    {
      task: "💻 Lập trình Web/App, Refactor & Debug đa file",
      winner: "Cursor IDE + Claude Sonnet",
      winnerReason: "Hiểu toàn bộ codebase, sửa trực tiếp nhiều file và tự chạy lệnh kiểm tra lỗi.",
      runnerUp: "ChatGPT o3-mini / Windsurf",
      bestFree: "Google AI Studio (Gemini Coding)",
      proWorkflow: "Khóa quy chuẩn bằng file AGENTS.md ở gốc dự án + dùng Ctrl+K sửa từng hàm nhỏ."
    },
    {
      task: "📚 Đọc PDF dài hàng trăm trang, Hợp đồng & Chống bịa",
      winner: "Google NotebookLM",
      winnerReason: "Tỷ lệ bịa đặt gần như 0%, mọi câu trả lời đều có nút nhảy tới đúng trang PDF gốc.",
      runnerUp: "Gemini 1.5/2.5 Pro (2M Context)",
      bestFree: "NotebookLM (Miễn phí 100%)",
      proWorkflow: "Gom 20–50 tài liệu vào 1 Notebook + bật Audio Overview để nghe tóm tắt dạng Podcast."
    },
    {
      task: "🌐 Tra cứu tin tức thời gian thực & Số liệu có nguồn",
      winner: "Perplexity AI (Deep Research)",
      winnerReason: "Tự động duyệt hàng chục nguồn web uy tín và gắn link trích dẫn minh bạch từng câu.",
      runnerUp: "ChatGPT Search",
      bestFree: "Perplexity Free / Google AI Mode",
      proWorkflow: "Bật Focus: Academic khi cần tìm bài báo khoa học hoặc số liệu nghiên cứu chính thống."
    },
    {
      task: "🎨 Thiết kế Hình ảnh Quảng cáo, Nhân vật & Chữ trên ảnh",
      winner: "Midjourney v7 / Flux.1 Pro",
      winnerReason: "Ánh sáng điện ảnh đỉnh cao, giữ đồng nhất khuôn mặt (--cref) và vẽ chữ chuẩn xác.",
      runnerUp: "ChatGPT ImageGen (GPT-4o)",
      bestFree: "Flux.1 Schnell / Ideogram Free",
      proWorkflow: "Dùng ChatGPT tạo ảnh có chữ tiếng Việt hoặc dùng Midjourney --sref khóa màu thương hiệu."
    },
    {
      task: "📊 Làm Slide thuyết trình & Sơ đồ tư duy từ văn bản",
      winner: "Gamma App + Napkin AI",
      winnerReason: "Biến dàn ý chữ thô thành bộ Slide hoàn chỉnh và sơ đồ Infographic chỉ trong 30 giây.",
      runnerUp: "Canva Magic Design",
      bestFree: "Napkin AI + Gamma (Gói Credit miễn phí)",
      proWorkflow: "Nhờ Claude lên dàn ý chi tiết từng slide trước → Dán vào Gamma chế độ Paste Text."
    }
  ],

  // ==========================================================================
  // BỘ TẠO PROMPT TỰ ĐỘNG BẰNG TÍCH CHỌN (1-Click Visual Prompt Builder)
  // ==========================================================================
  visualPromptBuilder: {
    roles: [
      { id: "role-copywriter", label: "✍️ Giám đốc Sáng tạo & Copywriter", promptText: "Hãy đóng vai Giám đốc Sáng tạo & Copywriter 10 năm kinh nghiệm, chuyên viết nội dung chuyển đổi cao và tự nhiên." },
      { id: "role-architect", label: "💻 Principal Software Architect", promptText: "Hãy đóng vai Principal Software Architect chuyên thiết kế hệ thống Clean Code, bảo mật, hiệu năng cao và dễ bảo trì." },
      { id: "role-growth", label: "📈 Chuyên gia Chiến lược Marketing & Growth", promptText: "Hãy đóng vai Giám đốc Tăng trưởng (CMO / Growth Lead) am hiểu tâm lý khách hàng và tối ưu phễu chuyển đổi thực chiến." },
      { id: "role-analyst", label: "📊 Chuyên gia Phân tích Dữ liệu & Nghiên cứu", promptText: "Hãy đóng vai Chuyên gia Phân tích Dữ liệu & Nghiên cứu thị trường, luôn dựa trên bằng chứng và số liệu định lượng." },
      { id: "role-critic", label: "⚖️ Nhà đầu tư Phản biện (Devil's Advocate)", promptText: "Hãy đóng vai Nhà đầu tư mạo hiểm khắt khe. Đừng khen ngợi xã giao, hãy tập trung mổ xẻ lỗ hổng và rủi ro thực tế." },
      { id: "role-tutor", label: "🎓 Gia sư Phương pháp Feynman", promptText: "Hãy đóng vai Gia sư xuất sắc áp dụng phương pháp Feynman: giải thích mọi khái niệm phức tạp bằng ngôn từ cực kỳ dễ hiểu." }
    ],
    tasks: [
      { id: "task-article", label: "Viết bài chuyên sâu / Bài đăng mạng xã hội", placeholder: "VD: Viết bài chia sẻ 5 cách ứng dụng AI giúp dân văn phòng tiết kiệm 2 giờ mỗi ngày" },
      { id: "task-code", label: "Viết Code / Refactor / Tìm nguyên nhân Bug", placeholder: "VD: Tối ưu hàm tìm kiếm sản phẩm trong JavaScript để không bị giật lag khi gõ nhanh" },
      { id: "task-plan", label: "Lập kế hoạch 30 ngày / Chiến lược triển khai", placeholder: "VD: Lập kế hoạch ra mắt kênh TikTok/Blog chia sẻ thủ thuật công nghệ trong 30 ngày" },
      { id: "task-summarize", label: "Tóm tắt & Rút trích luận điểm từ tài liệu", placeholder: "VD: Rút trích 7 quyết định quan trọng nhất và rủi ro từ biên bản họp / tài liệu đính kèm" },
      { id: "task-audit", label: "Phản biện & Tìm lỗ hổng ý tưởng / CV / Sản phẩm", placeholder: "VD: Rà soát lỗ hổng trong kế hoạch kinh doanh quán cà phê hoặc tối ưu CV ứng tuyển" }
    ],
    formats: [
      { id: "fmt-steps", label: "📋 Hướng dẫn từng bước (Step-by-Step) kèm ví dụ", promptText: "Trình bày theo từng bước hành động cụ thể (Step-by-step), mỗi bước đều đi kèm ví dụ thực tế áp dụng được ngay." },
      { id: "fmt-table", label: "📊 Bảng so sánh trực quan (Markdown Table) + Đề xuất", promptText: "Trình bày dưới dạng Bảng so sánh Markdown rõ ràng giữa các phương án, sau đó chốt lại 1 khuyến nghị tối ưu nhất." },
      { id: "fmt-before-after", label: "🔄 Đối chiếu Trước / Sau (Before vs. After)", promptText: "Luôn đưa ra ví dụ đối chiếu trực tiếp: [❌ Cách làm cũ thường sai] và [✅ Cách làm mới tối ưu]." },
      { id: "fmt-xml", label: "🧱 Cấu trúc phân tầng (Tóm tắt điều hành → Chi tiết → Checklist)", promptText: "Chia bố cục làm 3 phần rõ rệt: (1) Tóm tắt cốt lõi trong 3 dòng, (2) Phân tích chi tiết, (3) Checklist kiểm tra nhanh." }
    ],
    tones: [
      { id: "tone-practical", label: "🎯 Thực chiến, trực diện, không vòng vo", promptText: "Giọng văn thực chiến, gãy gọn, đi thẳng vào giải pháp ngay từ câu đầu tiên, không mở bài dài dòng." },
      { id: "tone-story", label: "🔥 Cuốn hút, giàu cảm xúc & gần gũi", promptText: "Giọng văn tự nhiên như đang trò chuyện với đồng nghiệp, giàu hình ảnh thực tế, câu ngắn và câu vừa đan xen nhịp nhàng." },
      { id: "tone-exec", label: "💼 Chuyên nghiệp, sắc bén (Chuẩn C-Level)", promptText: "Giọng văn chuyên gia sắc bén, khách quan, ưu tiên con số, luận điểm logic và tiêu chí đo lường rõ ràng." }
    ],
    guardrails: [
      { id: "gr-no-cliche", label: "🚫 Cấm tuyệt đối văn phong sáo rỗng ('trong kỷ nguyên số', 'bùng nổ', 'chìa khóa vàng')", checked: true, promptText: "CẤM TUYỆT ĐỐI các cụm từ sáo rỗng mùi AI như: 'Trong kỷ nguyên số ngày nay', 'Không thể phủ nhận', 'Bùng nổ', 'Đột phá', 'Chìa khóa vàng', 'Không chỉ... mà còn'." },
      { id: "gr-ask-first", label: "❓ Hỏi lại 3 câu làm rõ ngữ cảnh nếu thông tin đầu vào chưa đủ (Reverse Prompting)", checked: true, promptText: "Nếu thông tin tôi cung cấp còn điểm nào chưa rõ, hãy liệt kê 3 câu hỏi ngắn gọn để làm rõ ngữ cảnh trước hoặc đặt giả định hợp lý nhất." },
      { id: "gr-no-hallucination", label: "🔒 Chống bịa đặt: Không tự chế số liệu, nếu không chắc chắn phải ghi rõ", checked: true, promptText: "Tuyệt đối KHÔNG tự chế số liệu thống kê, tên tài liệu hay dẫn chứng không có thật. Nếu một thông tin chưa được kiểm chứng, hãy ghi rõ [Cần xác minh thêm]." },
      { id: "gr-self-critique", label: "🔍 Tự kiểm tra chéo (Self-Critique) và nâng cấp câu trả lời trước khi xuất ra", checked: false, promptText: "Ở cuối câu trả lời, hãy tự đóng vai người phản biện để chỉ ra 1 điểm yếu trong chính phương án vừa nêu và cách khắc phục điểm yếu đó." }
    ]
  },

  // ==========================================================================
  // BÌNH LUẬN CỘNG ĐỒNG MẪU & KÊNH KẾT NỐI (Article Discussions & Community Hub)
  // ==========================================================================
  communityChannels: [
    {
      name: "GitHub Discussions",
      badge: "Hỏi đáp & Góp ý bài viết",
      desc: "Nơi thảo luận chuyên sâu, báo lỗi hoặc đề xuất chủ đề mới trực tiếp trên kho mã nguồn mở.",
      url: "https://github.com/iamtee999-sketch/tipsai/issues"
    },
    {
      name: "Cộng đồng TipsAI (iTee360)",
      badge: "Chia sẻ Prompt & Workflow",
      desc: "Cùng hàng nghìn thành viên chia sẻ mẹo dùng ChatGPT, Claude, Cursor và bộ công cụ AI mỗi ngày.",
      url: "https://github.com/iamtee999-sketch/tipsai"
    }
  ],

  defaultComments: {
    "post-1": [
      {
        id: "cmt-101",
        author: "Trần Đức Anh",
        role: "Product Manager",
        date: "02/11/2026",
        avatar: "ĐA",
        content: "Kỹ thuật bọc thẻ XML `<boi_canh_du_an>` và `<du_lieu_tham_chieu>` thực sự thay đổi hoàn toàn cách mình dùng Claude. Giờ chỉ cần 1 file ngữ cảnh cố định là câu trả lời chuẩn ngay lần đầu!",
        likes: 19
      },
      {
        id: "cmt-102",
        author: "Lê Minh Châu",
        role: "Content Strategist",
        date: "02/11/2026",
        avatar: "MC",
        content: "Mình đã thử tạo file `boi-canh-ca-nhan.md` như bài viết hướng dẫn, tiết kiệm được ít nhất 30 phút giải thích lại từ đầu mỗi sáng. Cảm ơn tác giả!",
        likes: 14
      }
    ],
    "post-2": [
      {
        id: "cmt-201",
        author: "Nguyễn Quốc Huy",
        role: "Frontend Developer",
        date: "01/11/2026",
        avatar: "QH",
        content: "Chuẩn luôn! Trước đây mình toàn bảo AI sửa cả trang một lúc nên code cứ lỗi chồng lỗi. Từ ngày dùng `AGENTS.md` + `Ctrl + K` cho từng hàm nhỏ thì code sạch hơn hẳn.",
        likes: 23
      }
    ],
    "post-3": [
      {
        id: "cmt-301",
        author: "Phạm Thanh Thảo",
        role: "Marketing Lead",
        date: "31/10/2026",
        avatar: "TT",
        content: "Combo Perplexity (tìm số liệu) → NotebookLM (đọc PDF) → Claude (viết bài) đúng là chân ái hiện tại. Không còn cảnh ChatGPT tự chế số liệu báo cáo nữa.",
        likes: 31
      }
    ],
    "post-4": [
      {
        id: "cmt-401",
        author: "Vũ Hoàng Long",
        role: "Copywriter",
        date: "29/10/2026",
        avatar: "HL",
        content: "Đoạn prompt hậu kiểm cấm cụm 'trong kỷ nguyên số' và 'không chỉ... mà còn' quá đỉnh. Dán vào cái là bài viết hết sạch mùi robot!",
        likes: 27
      }
    ],
    "post-5": [
      {
        id: "cmt-501",
        author: "Đỗ Khánh Linh",
        role: "Nghiên cứu sinh",
        date: "26/10/2026",
        avatar: "KL",
        content: "Tính năng bấm vào số trích dẫn nhảy thẳng đến đoạn văn gốc trong PDF của NotebookLM cứu mình cả kỳ làm luận văn vừa rồi.",
        likes: 18
      }
    ],
    "post-6": [
      {
        id: "cmt-601",
        author: "Lê Hoàng Bách",
        role: "Backend Engineer",
        date: "02/11/2026",
        avatar: "HB",
        content: "Phím tắt `Ctrl + Shift + ;` để copy nhanh khối code cuối cùng trong ChatGPT tiện thật sự, đỡ phải cuộn chuột lên tìm nút Copy mỗi lần hỏi.",
        likes: 21
      }
    ],
    "post-7": [
      {
        id: "cmt-701",
        author: "Nguyễn Thu Trang",
        role: "Content Lead",
        date: "02/11/2026",
        avatar: "TT",
        content: "Từ ngày dùng Claude Projects kết hợp thẻ XML `<tai_lieu_goc>` như bài hướng dẫn, mình gần như không phải sửa lại câu chữ tiếng Việt nữa.",
        likes: 19
      }
    ],
    "post-8": [
      {
        id: "cmt-801",
        author: "Phạm Minh Đức",
        role: "Business Analyst",
        date: "02/11/2026",
        avatar: "MĐ",
        content: "Mẹo chỉnh Temperature xuống 0.2 trong Google AI Studio khi đọc tài liệu dài giúp kết quả ổn định và chuẩn xác hơn hẳn.",
        likes: 16
      }
    ],
    "post-9": [
      {
        id: "cmt-901",
        author: "Trương Gia Huy",
        role: "Full-stack Developer",
        date: "02/11/2026",
        avatar: "GH",
        content: "Phân biệt rõ lúc nào dùng `Ctrl + K` (sửa 1 hàm nhỏ) và lúc nào dùng `Ctrl + I` (Agent đa file) là bí quyết quan trọng nhất khi dùng Cursor và Antigravity.",
        likes: 29
      }
    ],
    "post-10": [
      {
        id: "cmt-1001",
        author: "Đặng Mai Phương",
        role: "Market Researcher",
        date: "02/11/2026",
        avatar: "MP",
        content: "Chế độ Deep Research + phím `/` hỏi tiếp trên Perplexity giúp mình làm báo cáo tổng quan ngành chỉ mất 15 phút thay vì cả buổi sáng.",
        likes: 17
      }
    ],
    "post-11": [
      {
        id: "cmt-1101",
        author: "Bùi Tuấn Kiệt",
        role: "Chuyên viên Pháp chế",
        date: "02/11/2026",
        avatar: "TK",
        content: "Dùng NotebookLM để rà soát hợp đồng rất yên tâm vì bấm vào số trích dẫn là đối chiếu được ngay với điều khoản gốc trong file PDF.",
        likes: 22
      }
    ],
    "post-12": [
      {
        id: "cmt-1201",
        author: "Võ Thanh Sơn",
        role: "Art Director",
        date: "02/11/2026",
        avatar: "TS",
        content: "Bảng tổng hợp `--cref`, `--cw` và `--sref` rất dễ hiểu. Người mới chỉ cần nhớ bộ tham số này là làm chủ được Midjourney v7.",
        likes: 25
      }
    ],
    "post-13": [
      {
        id: "cmt-1301",
        author: "Hoàng Yến Nhi",
        role: "YouTube Creator",
        date: "02/11/2026",
        avatar: "YN",
        content: "Mẹo thêm dấu gạch ngang `—` và giảm Stability xuống 50% trong ElevenLabs làm giọng đọc tiếng Việt tự nhiên hơn rất nhiều!",
        likes: 18
      }
    ],
    "post-14": [
      {
        id: "cmt-1401",
        author: "Ngô Quang Vinh",
        role: "Project Manager",
        date: "02/11/2026",
        avatar: "QV",
        content: "Ký hiệu `---` để ngắt trang Slide trước khi dán vào Gamma App kết hợp với vẽ sơ đồ bên Napkin AI đúng là bộ đôi cứu tinh mỗi kỳ họp quý.",
        likes: 24
      }
    ]
  }
};
