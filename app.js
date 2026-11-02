// ============================================================================
// TipsAI — Multi-Page Controller, Light/Dark Theme System & Article Reader
// ============================================================================

(function () {
  "use strict";

  const DATA = window.TIPSAI_DATA;

  const state = {
    theme: localStorage.getItem("tipsai_theme") || "light",
    os: localStorage.getItem("tipsai_os") || "win",
    postCategory: "all",
    postSearch: "",
    tipCategory: "all",
    tipDifficulty: "all",
    tipSort: "popular",
    tipSearch: "",
    shortcutApp: "all",
    shortcutSearch: "",
    toolCategory: "all",
    toolPricing: "all",
    toolSearch: "",
    upvotedIds: JSON.parse(localStorage.getItem("tipsai_upvotes") || "[]"),
    bookmarkedIds: JSON.parse(localStorage.getItem("tipsai_bookmarks") || "[]"),
    compareToolIds: [],
    promptValues: {}
  };

  // Áp dụng giao diện Sáng (mặc định) hoặc Tối ngay lập tức
  function applyTheme(theme) {
    state.theme = theme === "dark" ? "dark" : "light";
    if (state.theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("tipsai_theme", state.theme);
    const themeBtn = document.getElementById("themeToggleBtn");
    if (themeBtn) {
      themeBtn.innerHTML = state.theme === "dark" ? "☀️" : "🌙";
      themeBtn.setAttribute(
        "title",
        state.theme === "dark" ? "Chuyển sang giao diện Sáng" : "Chuyển sang giao diện Tối"
      );
    }
    const footerThemeBtn = document.getElementById("footerThemeBtn");
    if (footerThemeBtn) {
      footerThemeBtn.innerHTML =
        state.theme === "dark" ? "☀️ Giao diện Sáng" : "🌙 Giao diện Tối";
    }
  }

  applyTheme(state.theme);

  function parsePostDateScore(dateStr) {
    const parts = String(dateStr || "").split("/");
    if (parts.length !== 3) return 0;
    return Number(parts[2]) * 10000 + Number(parts[1]) * 100 + Number(parts[0]);
  }

  function parsePostIdNum(id) {
    const m = String(id || "").match(/post-(\d+)/);
    return m ? Number(m[1]) : 0;
  }

  function getAllPosts() {
    return [...DATA.posts].sort((a, b) => {
      const dateDiff = parsePostDateScore(b.date) - parsePostDateScore(a.date);
      if (dateDiff !== 0) return dateDiff;
      const numA = parsePostIdNum(a.id);
      const numB = parsePostIdNum(b.id);
      // Ưu tiên các bài viết mới xuất bản (post-6..post-14) hiển thị trước theo thứ tự
      const isNewBatchA = numA >= 6 ? 1 : 0;
      const isNewBatchB = numB >= 6 ? 1 : 0;
      if (isNewBatchA !== isNewBatchB) return isNewBatchB - isNewBatchA;
      return numA - numB;
    });
  }

  function getAllTips() {
    return DATA.tips;
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function showToast(message) {
    let container = document.getElementById("toastContainer");
    if (!container) {
      container = document.createElement("div");
      container.id = "toastContainer";
      container.className = "toast-container";
      document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span style="color: var(--brand-primary);">✦</span><span>${escapeHtml(message)}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(6px)";
      toast.style.transition = "all 200ms ease";
      setTimeout(() => toast.remove(), 220);
    }, 2600);
  }

  async function copyToClipboard(text, label = "Đã sao chép vào bộ nhớ tạm!") {
    try {
      await navigator.clipboard.writeText(text);
      showToast(label);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
      showToast(label);
    }
  }

  function renderKeycaps(keys) {
    return keys
      .map((k) => `<kbd class="keycap">${escapeHtml(k)}</kbd>`)
      .join(`<span class="key-plus">+</span>`);
  }

  // ==========================================================================
  // 1. SHARED NAVBAR (1 DÒNG GỌN GÀNG + NÚT ĐỔI SÁNG/TỐI) & FOOTER
  // ==========================================================================
  function renderSharedLayout() {
    const activePage = document.body.dataset.page || "home";
    const navEl = document.getElementById("siteNavbar");
    const navItems = [
      { id: "home", href: "index.html", label: "🏠 Trang chủ" },
      { id: "blog", href: "blog.html", label: "📰 Bài viết" },
      { id: "tips", href: "tips.html", label: "💡 Mẹo AI" },
      { id: "shortcuts", href: "shortcuts.html", label: "⌨️ Phím tắt" },
      { id: "prompts", href: "prompts.html", label: "⚡ Kho Prompt" },
      { id: "tools", href: "tools.html", label: "🧰 AI Tools" }
    ];

    if (navEl) {
      navEl.innerHTML = `
        <div class="container navbar-inner">
          <a href="index.html" class="brand-logo" aria-label="Trang chủ TipsAI">
            <span class="brand-mark">✦</span>
            <span>TipsAI</span>
            <span class="brand-tag">iTee360</span>
          </a>

          <nav aria-label="Điều hướng chính">
            <ul class="nav-links">
              ${navItems
                .map(
                  (item) => `
                <li>
                  <a href="${item.href}" class="nav-link ${
                    activePage === item.id || (activePage === "post" && item.id === "blog") ? "active" : ""
                  }">
                    ${item.label}
                  </a>
                </li>
              `
                )
                .join("")}
            </ul>
          </nav>

          <div class="nav-actions">
            <button type="button" class="cmd-trigger" id="openCmdPaletteBtn" title="Tìm kiếm toàn trang (Ctrl + K)" aria-label="Tìm kiếm toàn trang">
              <span class="cmd-icon">🔍</span>
              <span class="cmd-label">Tìm nhanh</span>
              <kbd class="keycap cmd-kbd">Ctrl K</kbd>
            </button>

            <button type="button" class="icon-btn" id="openBookmarksBtn" title="Bộ sưu tập đã lưu" aria-label="Bộ sưu tập đã lưu">
              <span>🔖</span>
              <span class="badge-count" id="bookmarkCountBadge">${state.bookmarkedIds.length}</span>
            </button>

            <button
              type="button"
              class="icon-btn"
              id="themeToggleBtn"
              title="${state.theme === "dark" ? "Chuyển sang giao diện Sáng" : "Chuyển sang giao diện Tối"}"
              aria-label="Đổi giao diện Sáng / Tối"
            >
              ${state.theme === "dark" ? "☀️" : "🌙"}
            </button>

            <button type="button" class="icon-btn mobile-menu-btn" id="mobileMenuToggleBtn" aria-label="Mở menu di động" aria-expanded="false">
              ☰
            </button>
          </div>
        </div>

        <div class="mobile-nav-drawer" id="mobileNavDrawer">
          <div class="mobile-nav-grid">
            ${navItems
              .map(
                (item) => `
              <a href="${item.href}" class="nav-link ${
                activePage === item.id || (activePage === "post" && item.id === "blog") ? "active" : ""
              }">
                ${item.label}
              </a>
            `
              )
              .join("")}
          </div>
          <div class="mobile-drawer-footer">
            <button type="button" class="btn btn-secondary btn-sm" id="mobileDrawerSearchBtn" style="flex: 1;">
              🔍 Tìm kiếm toàn trang
            </button>
            <button type="button" class="btn btn-secondary btn-sm" id="mobileDrawerBookmarksBtn">
              🔖 Đã lưu (${state.bookmarkedIds.length})
            </button>
          </div>
        </div>
      `;

      document.getElementById("themeToggleBtn")?.addEventListener("click", () => {
        const nextTheme = state.theme === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
        showToast(
          nextTheme === "dark" ? "🌙 Đã chuyển sang chế độ Tối" : "☀️ Đã chuyển sang chế độ Sáng"
        );
      });

      const menuBtn = document.getElementById("mobileMenuToggleBtn");
      const drawer = document.getElementById("mobileNavDrawer");
      menuBtn?.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = drawer?.classList.toggle("open");
        menuBtn.innerHTML = isOpen ? "✕" : "☰";
        menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });

      document.addEventListener("click", (e) => {
        if (drawer?.classList.contains("open") && !drawer.contains(e.target) && e.target !== menuBtn) {
          drawer.classList.remove("open");
          if (menuBtn) {
            menuBtn.innerHTML = "☰";
            menuBtn.setAttribute("aria-expanded", "false");
          }
        }
      });

      document.getElementById("mobileDrawerSearchBtn")?.addEventListener("click", () => {
        drawer?.classList.remove("open");
        if (menuBtn) menuBtn.innerHTML = "☰";
        openCommandPaletteModal();
      });

      document.getElementById("mobileDrawerBookmarksBtn")?.addEventListener("click", () => {
        drawer?.classList.remove("open");
        if (menuBtn) menuBtn.innerHTML = "☰";
        openBookmarksModal();
      });
    }

    const footerEl = document.getElementById("siteFooter");
    if (footerEl) {
      footerEl.innerHTML = `
        <div class="container">
          <div class="footer-grid">
            <!-- Cột 1: Thương hiệu & Tiện ích nhanh -->
            <div>
              <a href="index.html" class="brand-logo">
                <span class="brand-mark">✦</span>
                <span>TipsAI</span>
                <span class="brand-tag">iTee360</span>
              </a>
              <p class="footer-brand-desc">
                Nền tảng chia sẻ kiến thức AI thực chiến: Bài viết chuyên sâu, Mẹo Prompt Trước/Sau, Bảng phím tắt & Công cụ AI chọn lọc giúp tăng gấp 10 lần hiệu suất.
              </p>
              <div class="footer-status-pill">
                <span class="footer-status-dot"></span>
                <span>Cập nhật liên tục • ${DATA.posts.length} Bài viết • ${DATA.tips.length} Mẹo • ${DATA.shortcuts.length} Phím tắt</span>
              </div>
              <div class="footer-quick-actions">
                <button type="button" class="btn btn-secondary btn-sm" id="footerSearchBtn">
                  🔍 Tìm nhanh <kbd class="keycap" style="margin-left: 4px; height: 22px; font-size: 11px;">Ctrl K</kbd>
                </button>
                <button type="button" class="btn btn-secondary btn-sm" id="footerBookmarksBtn">
                  🔖 Đã lưu (<span id="footerBookmarkCount">${state.bookmarkedIds.length}</span>)
                </button>
              </div>
            </div>

            <!-- Cột 2: Chuyên mục chính -->
            <div>
              <h3 class="footer-col-title">Khám Phá Chuyên Mục</h3>
              <ul class="footer-links-list">
                <li><a href="index.html" class="footer-link-item">🏠 Trang chủ & AI Intent</a></li>
                <li><a href="blog.html" class="footer-link-item">📰 Bài viết & Blog chuyên sâu</a></li>
                <li><a href="tips.html" class="footer-link-item">💡 Mẹo & Thủ thuật Trước/Sau</a></li>
                <li><a href="shortcuts.html" class="footer-link-item">⌨️ Bảng Phím tắt & Tham số AI</a></li>
                <li><a href="prompts.html" class="footer-link-item">⚡ Kho Prompt biến số động</a></li>
                <li><a href="tools.html" class="footer-link-item">🧰 Danh bạ & So sánh AI Tools</a></li>
              </ul>
            </div>

            <!-- Cột 3: Công cụ tương tác & Bài đọc tiêu điểm -->
            <div>
              <h3 class="footer-col-title">Công Cụ & Tiêu Điểm</h3>
              <ul class="footer-links-list">
                <li><a href="prompts.html#visualPromptBuilderSection" class="footer-link-item">🎛 Bộ Tạo Prompt Tự Động</a></li>
                <li><a href="tools.html#aiLeaderboardSection" class="footer-link-item">🏆 Bảng Xếp Hạng AI 2026</a></li>
                <li><a href="shortcuts.html" class="footer-link-item">🎮 Luyện Phản Xạ Phím Tắt</a></li>
                <li><a href="post.html?id=post-1" class="footer-link-item">📘 Toàn tập Context Engineering</a></li>
                <li><a href="post.html?id=post-2" class="footer-link-item">💻 Quy trình Cursor + Claude</a></li>
                <li><a href="post.html?id=post-3" class="footer-link-item">⚖️ So sánh 4 ông lớn AI</a></li>
              </ul>
            </div>

            <!-- Cột 4: Bản tin Mẹo AI & Cộng đồng -->
            <div>
              <h3 class="footer-col-title">Nhận Mẹo AI Mới Hàng Tuần</h3>
              <div class="footer-newsletter-box">
                <p style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.5;">
                  Nhận 3 mẹo tối ưu Prompt & workflow AI thực chiến nhất mỗi sáng thứ Hai (Hoàn toàn miễn phí).
                </p>
                <form class="footer-newsletter-form" id="footerNewsletterForm">
                  <input
                    type="email"
                    id="footerNewsletterEmail"
                    class="footer-newsletter-input"
                    placeholder="Nhập email của bạn..."
                    required
                  />
                  <button type="submit" class="btn btn-primary btn-sm">Đăng ký</button>
                </form>
                <div class="footer-community-badges">
                  <a href="https://github.com/iamtee999-sketch/tipsai" target="_blank" rel="noopener noreferrer" class="badge badge-purple" style="text-decoration: none;">⭐ GitHub Repo</a>
                  <a href="https://github.com/iamtee999-sketch/tipsai/issues" target="_blank" rel="noopener noreferrer" class="badge badge-cyan" style="text-decoration: none;">💬 Góp ý & Thảo luận</a>
                  <a href="sitemap.xml" class="badge badge-green" style="text-decoration: none;">🗺️ Sitemap</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Dòng bản quyền & Nút tiện ích dưới cùng -->
          <div class="footer-bottom">
            <div>
              © 2026 <strong style="color: var(--text-primary);">TipsAI (iTee360)</strong> — Xây dựng vì cộng đồng ứng dụng AI thực chiến tại Việt Nam.
            </div>
            <div class="footer-bottom-actions">
              <button type="button" class="btn btn-ghost btn-sm" id="footerThemeBtn">
                ${state.theme === "dark" ? "☀️ Giao diện Sáng" : "🌙 Giao diện Tối"}
              </button>
              <button type="button" class="btn btn-secondary btn-sm" id="footerBackToTopBtn">
                ↑ Lên đầu trang
              </button>
            </div>
          </div>
        </div>
      `;

      document.getElementById("footerSearchBtn")?.addEventListener("click", openCommandPaletteModal);
      document.getElementById("footerBookmarksBtn")?.addEventListener("click", openBookmarksModal);
      document.getElementById("footerThemeBtn")?.addEventListener("click", () => {
        const nextTheme = state.theme === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
        showToast(
          nextTheme === "dark" ? "🌙 Đã chuyển sang chế độ Tối" : "☀️ Đã chuyển sang chế độ Sáng"
        );
      });
      document.getElementById("footerBackToTopBtn")?.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      document.getElementById("footerNewsletterForm")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailInput = document.getElementById("footerNewsletterEmail");
        const email = emailInput?.value.trim();
        if (!email) return;
        const subs = JSON.parse(localStorage.getItem("tipsai_subscribers") || "[]");
        if (!subs.includes(email)) {
          subs.push(email);
          localStorage.setItem("tipsai_subscribers", JSON.stringify(subs));
        }
        if (emailInput) emailInput.value = "";
        showToast(`🎉 Đã đăng ký nhận bản tin Mẹo AI cho ${email}!`);
      });
    }

    if (!document.getElementById("floatingBackToTopBtn")) {
      const floatBtn = document.createElement("button");
      floatBtn.type = "button";
      floatBtn.id = "floatingBackToTopBtn";
      floatBtn.className = "floating-top-btn";
      floatBtn.setAttribute("aria-label", "Cuộn lên đầu trang");
      floatBtn.setAttribute("title", "Lên đầu trang");
      floatBtn.innerHTML = "↑";
      floatBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      document.body.appendChild(floatBtn);
    }
  }

  function updateBookmarkBadge() {
    const badge = document.getElementById("bookmarkCountBadge");
    if (badge) badge.textContent = String(state.bookmarkedIds.length);
    const footerBadge = document.getElementById("footerBookmarkCount");
    if (footerBadge) footerBadge.textContent = String(state.bookmarkedIds.length);
  }

  // ==========================================================================
  // 2. TRANG CHỦ (index.html)
  // ==========================================================================
  function renderHomePage() {
    const hubGrid = document.getElementById("homeHubPortals");
    if (hubGrid) {
      const allPosts = getAllPosts();
      const allTips = getAllTips();
      const portals = [
        {
          href: "blog.html",
          icon: "📰",
          title: "Bài viết & Blog AI",
          count: `${allPosts.length} bài viết`,
          desc: "Phân tích xu hướng, hướng dẫn từng bước & case study thực tế."
        },
        {
          href: "tips.html",
          icon: "💡",
          title: "Mẹo & Thủ thuật",
          count: `${allTips.length} thủ thuật`,
          desc: "So sánh câu lệnh Trước / Sau giúp áp dụng ngay trong 30 giây."
        },
        {
          href: "shortcuts.html",
          icon: "⌨️",
          title: "Bảng Phím tắt AI",
          count: `${DATA.shortcuts.length} tổ hợp phím`,
          desc: "Phím tắt ChatGPT, Claude, Cursor, Gemini & tham số Midjourney."
        },
        {
          href: "prompts.html",
          icon: "⚡",
          title: "Kho Prompt Động",
          count: `${DATA.promptTemplates.length} mẫu tùy biến`,
          desc: "Điền biến số trực tiếp và sao chép câu lệnh chuẩn chuyên gia."
        },
        {
          href: "tools.html",
          icon: "🧰",
          title: "Danh bạ AI Tools",
          count: `${DATA.tools.length} công cụ`,
          desc: "Đánh giá ưu/nhược điểm, mẹo ẩn và bảng so sánh ngang công cụ."
        }
      ];

      hubGrid.innerHTML = portals
        .map(
          (p) => `
          <a href="${p.href}" class="hub-portal-card">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span class="hub-portal-icon">${p.icon}</span>
              <span class="badge badge-purple">${escapeHtml(p.count)}</span>
            </div>
            <h3 style="font-family: var(--font-display); font-size: 16.5px; font-weight: 700; margin-top: 4px;">
              ${escapeHtml(p.title)}
            </h3>
            <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.45;">
              ${escapeHtml(p.desc)}
            </p>
            <span style="font-size: 12.5px; font-weight: 600; color: var(--brand-primary); margin-top: auto;">
              Khám phá →
            </span>
          </a>
        `
        )
        .join("");
    }

    const homeBlogContainer = document.getElementById("homeFeaturedBlog");
    if (homeBlogContainer) {
      const posts = getAllPosts();
      const featuredPost = posts.find((p) => p.featured) || posts[0];
      const sidePosts = posts.filter((p) => p.id !== featuredPost?.id).slice(0, 3);

      if (featuredPost) {
        homeBlogContainer.innerHTML = `
          <div class="blog-featured-grid">
            <article class="featured-post-card">
              <a href="post.html?id=${encodeURIComponent(featuredPost.id)}" style="text-decoration: none; color: inherit;">
                <div class="post-thumb-wrap">
                  <img
                    src="${escapeHtml(featuredPost.coverImage || "assets/covers/post-1.svg")}"
                    alt="${escapeHtml(featuredPost.title)}"
                    class="post-thumb-img"
                    loading="lazy"
                  />
                  <div class="post-thumb-badges">
                    <span class="badge">★ ${escapeHtml(featuredPost.coverBadge || "TIÊU ĐIỂM")}</span>
                    <span class="badge">${escapeHtml(featuredPost.categoryLabel)}</span>
                  </div>
                </div>
              </a>

              <div class="post-body">
                <div>
                  <div style="font-size: 12.5px; color: var(--text-muted); margin-bottom: 8px;">
                    ✍️ ${escapeHtml(featuredPost.author)} • ${escapeHtml(featuredPost.date)} • ${escapeHtml(featuredPost.readTime)}
                  </div>
                  <a href="post.html?id=${encodeURIComponent(featuredPost.id)}" style="text-decoration: none; color: inherit;">
                    <h3 style="font-family: var(--font-display); font-size: 22px; font-weight: 800; line-height: 1.3; color: var(--text-primary); margin-bottom: 10px;">
                      ${escapeHtml(featuredPost.title)}
                    </h3>
                  </a>
                  <p style="color: var(--text-secondary); font-size: 14.5px; margin-bottom: 18px;">
                    ${escapeHtml(featuredPost.excerpt)}
                  </p>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                  <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                    ${(featuredPost.tags || [])
                      .map((tag) => `<span class="badge badge-purple">#${escapeHtml(tag)}</span>`)
                      .join("")}
                  </div>
                  <a href="post.html?id=${encodeURIComponent(featuredPost.id)}" class="btn btn-primary btn-sm">
                    Đọc bài viết →
                  </a>
                </div>
              </div>
            </article>

            <div class="post-side-stack">
              ${sidePosts
                .map(
                  (post) => `
                <a href="post.html?id=${encodeURIComponent(post.id)}" class="post-compact-item" style="text-decoration: none; color: inherit;">
                  <div class="post-compact-row">
                    <div class="post-compact-thumb">
                      <img
                        src="${escapeHtml(post.coverImage || "assets/covers/post-2.svg")}"
                        alt="${escapeHtml(post.title)}"
                        loading="lazy"
                      />
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 6px;">
                      <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                        <span class="badge badge-purple" style="font-size: 11px;">${escapeHtml(post.categoryLabel)}</span>
                        <span style="font-size: 11.5px; color: var(--text-muted);">${escapeHtml(post.readTime)}</span>
                      </div>
                      <h4 style="font-family: var(--font-display); font-size: 15.5px; font-weight: 700; line-height: 1.35; color: var(--text-primary);">
                        ${escapeHtml(post.title)}
                      </h4>
                      <div style="display: flex; align-items: center; justify-content: space-between; font-size: 12px; color: var(--brand-primary); font-weight: 600;">
                        <span>✍️ ${escapeHtml(post.author)}</span>
                        <span>Đọc bài →</span>
                      </div>
                    </div>
                  </div>
                </a>
              `
                )
                .join("")}
            </div>
          </div>
        `;
      }
    }

    const homeTipsEl = document.getElementById("homeTopTipsGrid");
    if (homeTipsEl) {
      const top3Tips = getAllTips().slice(0, 3);
      homeTipsEl.innerHTML = top3Tips.map((tip) => renderTipCardHTML(tip)).join("");
      bindTipCardEvents(homeTipsEl);
    }

    renderBentoQuickShortcuts();
    const homeToolsEl = document.getElementById("homeQuickToolsList");
    if (homeToolsEl) {
      const top3Tools = DATA.tools.slice(0, 3);
      homeToolsEl.innerHTML = top3Tools
        .map(
          (tool) => `
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 14px; background: var(--surface-2); border: 1px solid var(--border-default); border-radius: 12px;">
            <div>
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 3px;">
                <strong style="color: var(--text-primary); font-size: 14.5px;">${escapeHtml(tool.name)}</strong>
                <span class="badge badge-purple" style="font-size: 11px;">${escapeHtml(tool.badge)}</span>
              </div>
              <p style="font-size: 12.5px; color: var(--text-secondary);">🤫 ${escapeHtml(tool.secretTip)}</p>
            </div>
            <a href="tools.html" class="btn btn-secondary btn-sm">Chi tiết</a>
          </div>
        `
        )
        .join("");
    }
  }

  function renderBentoQuickShortcuts() {
    const container = document.getElementById("bentoQuickShortcuts");
    if (!container) return;
    const topShortcuts = DATA.shortcuts.slice(0, 4);
    container.innerHTML = topShortcuts
      .map((sc) => {
        const keys = state.os === "mac" ? sc.macKeys : sc.winKeys;
        return `
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 11px 14px; background: var(--surface-2); border: 1px solid var(--border-default); border-radius: 10px;">
            <div style="font-size: 13px;">
              <strong style="color: var(--brand-primary);">${escapeHtml(sc.appName)}:</strong>
              <span style="color: var(--text-primary);"> ${escapeHtml(sc.action)}</span>
            </div>
            <div class="keycap-combo">${renderKeycaps(keys)}</div>
          </div>
        `;
      })
      .join("");
  }

  // ==========================================================================
  // 3. TRANG DANH SÁCH BÀI VIẾT BLOG (blog.html)
  // ==========================================================================
  function renderBlogPage() {
    const tabsEl = document.getElementById("blogCategoryTabs");
    if (tabsEl) {
      tabsEl.innerHTML = DATA.postCategories
        .map(
          (cat) => `
          <button
            type="button"
            class="pill-tab ${state.postCategory === cat.id ? "active" : ""}"
            data-post-cat="${escapeHtml(cat.id)}"
          >
            ${escapeHtml(cat.name)}
          </button>
        `
        )
        .join("");

      tabsEl.querySelectorAll("[data-post-cat]").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.postCategory = btn.getAttribute("data-post-cat");
          renderBlogPage();
        });
      });
    }

    const gridEl = document.getElementById("blogPostsGrid");
    if (!gridEl) return;

    const q = state.postSearch.trim().toLowerCase();
    const filtered = getAllPosts().filter((post) => {
      const matchCat = state.postCategory === "all" || post.category === state.postCategory;
      const matchSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.author.toLowerCase().includes(q) ||
        (post.tags || []).some((t) => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      gridEl.innerHTML = `
        <div class="card" style="grid-column: 1 / -1; text-align: center; padding: 48px;">
          <h3 class="card-title">Không tìm thấy bài viết nào khớp với từ khóa</h3>
          <p class="card-summary">Hãy thử chọn danh mục khác hoặc nhập từ khóa tìm kiếm mới.</p>
        </div>
      `;
      return;
    }

    gridEl.innerHTML = filtered
      .map(
        (post) => `
        <article class="featured-post-card">
          <a href="post.html?id=${encodeURIComponent(post.id)}" style="text-decoration: none; color: inherit;">
            <div class="post-thumb-wrap">
              <img
                src="${escapeHtml(post.coverImage || "assets/covers/post-1.svg")}"
                alt="${escapeHtml(post.title)}"
                class="post-thumb-img"
                loading="lazy"
              />
              <div class="post-thumb-badges">
                <span class="badge">${escapeHtml(post.coverBadge || "BÀI VIẾT")}</span>
                <span class="badge">${escapeHtml(post.readTime)}</span>
              </div>
            </div>
          </a>

          <div class="post-body">
            <div>
              <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 6px;">
                ✍️ ${escapeHtml(post.author)} • ${escapeHtml(post.date)}
              </div>
              <a href="post.html?id=${encodeURIComponent(post.id)}" style="text-decoration: none; color: inherit;">
                <h3 class="card-title" style="font-size: 18.5px; margin-bottom: 10px;">
                  ${escapeHtml(post.title)}
                </h3>
              </a>
              <p class="card-summary">${escapeHtml(post.excerpt)}</p>
            </div>

            <div>
              <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 14px;">
                ${(post.tags || [])
                  .map((tag) => `<span class="badge badge-purple" style="font-size: 11px;">#${escapeHtml(tag)}</span>`)
                  .join("")}
              </div>

              <div class="card-footer">
                <span style="font-size: 12.5px; color: var(--text-muted);">👁 ${post.views || 120} lượt đọc</span>
                <a href="post.html?id=${encodeURIComponent(post.id)}" class="btn btn-secondary btn-sm">
                  Đọc bài viết →
                </a>
              </div>
            </div>
          </div>
        </article>
      `
      )
      .join("");
  }

  // ==========================================================================
  // 4. TRANG ĐỌC BÀI VIẾT CHUYÊN BIỆT (post.html)
  // ==========================================================================
  function renderSinglePostPage() {
    const container = document.getElementById("singlePostContainer");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const postId = params.get("id");
    const slug = params.get("slug");
    const allPosts = getAllPosts();

    const post =
      allPosts.find((p) => p.id === postId || (slug && p.slug === slug)) || allPosts[0];

    if (!post) return;

    document.title = `${post.title} — TipsAI Blog`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && post.excerpt) metaDesc.setAttribute("content", post.excerpt);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", `${post.title} — TipsAI Blog`);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && post.excerpt) ogDesc.setAttribute("content", post.excerpt);

    const isLiked = state.upvotedIds.includes(post.id);
    const isSaved = state.bookmarkedIds.includes(post.id);
    const likeCount = (post.likes || 120) + (isLiked ? 1 : 0);

    container.innerHTML = `
      <nav class="breadcrumb-bar" aria-label="Breadcrumb">
        <a href="index.html">🏠 Trang chủ</a>
        <span>/</span>
        <a href="blog.html">📰 Bài viết & Blog</a>
        <span>/</span>
        <span style="color: var(--brand-primary); font-weight: 600;">${escapeHtml(post.categoryLabel)}</span>
      </nav>

      <div class="post-cover-banner single-post-hero" style="background: ${post.coverStyle || "var(--brand-gradient)"}; border-radius: var(--radius-hero); margin-bottom: 28px;">
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <span class="badge">★ ${escapeHtml(post.categoryLabel)}</span>
          <span class="badge">⏱ ${escapeHtml(post.readTime)}</span>
          <span class="badge">👁 ${post.views || 250} lượt đọc</span>
        </div>

        <h1 style="font-family: var(--font-display); font-size: clamp(24px, 3.6vw, 40px); font-weight: 800; color: #FFFFFF; line-height: 1.24; margin-top: 18px; max-width: 960px;">
          ${escapeHtml(post.title)}
        </h1>

        <p style="color: rgba(255,255,255,0.90); font-size: 15.5px; max-width: 820px; margin-top: 12px;">
          ${escapeHtml(post.excerpt)}
        </p>

        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-top: 24px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.16);">
          <div style="font-size: 13.5px; color: #FFFFFF;">
            ✍️ Tác giả: <strong>${escapeHtml(post.author)}</strong> (${escapeHtml(post.authorRole || "Chuyên gia AI")}) • ${escapeHtml(post.date)}
          </div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <button type="button" class="upvote-btn ${isLiked ? "active" : ""}" id="singlePostLikeBtn">
              <span>👏 Hữu ích (${likeCount})</span>
            </button>
            <button type="button" class="bookmark-btn ${isSaved ? "active" : ""}" id="singlePostSaveBtn">
              <span>${isSaved ? "🔖 Đã lưu bài" : "🔖 Lưu bài viết"}</span>
            </button>
            <button type="button" class="btn btn-secondary btn-sm" id="singlePostShareBtn">
              🔗 Sao chép Link
            </button>
          </div>
        </div>
      </div>

      <div class="single-post-layout">
        <article class="card single-post-article-card">
          <div class="post-thumb-wrap" style="border-radius: 14px; margin-bottom: 24px; border: 1px solid var(--border-default);">
            <img
              src="${escapeHtml(post.coverImage || "assets/covers/post-1.svg")}"
              alt="${escapeHtml(post.title)}"
              class="post-thumb-img"
            />
          </div>
          <div class="article-reader-body" id="articleMainContent">
            ${post.content}
          </div>

          <div class="card-footer" style="margin-top: 32px; padding-top: 20px;">
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              ${(post.tags || []).map((t) => `<span class="badge badge-purple">#${escapeHtml(t)}</span>`).join("")}
            </div>
            <a href="blog.html" class="btn btn-secondary btn-sm">← Quay lại danh sách Blog</a>
          </div>
        </article>

        <aside class="toc-sidebar">
          <div class="card">
            <span class="badge badge-cyan" style="width: fit-content;">📑 MỤC LỤC BÀI VIẾT</span>
            <ul class="toc-list" id="articleTocList"></ul>
          </div>

          <div class="card card-ai">
            <span class="badge badge-purple" style="width: fit-content; margin-bottom: 8px;">✨ CÔNG CỤ ĐI KÈM</span>
            <h3 class="card-title" style="font-size: 17px;">Áp dụng ngay vào công việc</h3>
            <p class="card-summary" style="font-size: 13.5px;">
              Kết hợp kiến thức trong bài viết này với Kho Prompt động và Bảng phím tắt AI để đạt tốc độ tối đa.
            </p>
            <div style="display: grid; gap: 8px;">
              <a href="prompts.html" class="btn btn-primary btn-sm">⚡ Mở Kho Prompt Động</a>
              <a href="shortcuts.html" class="btn btn-secondary btn-sm">⌨️ Tra cứu Phím tắt AI</a>
            </div>
          </div>
        </aside>
      </div>
    `;

    const contentEl = document.getElementById("articleMainContent");
    const tocEl = document.getElementById("articleTocList");
    if (contentEl && tocEl) {
      const headings = contentEl.querySelectorAll("h3");
      if (headings.length === 0) {
        tocEl.innerHTML = `<li style="font-size: 13px; color: var(--text-muted);">Bài viết ngắn đọc liền mạch</li>`;
      } else {
        tocEl.innerHTML = Array.from(headings)
          .map((h, i) => {
            const secId = `section-${i + 1}`;
            h.id = secId;
            return `<li><a href="#${secId}" class="toc-link">${escapeHtml(h.textContent)}</a></li>`;
          })
          .join("");
      }

      contentEl.querySelectorAll("pre").forEach((pre) => {
        const wrapper = document.createElement("div");
        wrapper.style.position = "relative";
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);

        const copyBtn = document.createElement("button");
        copyBtn.type = "button";
        copyBtn.className = "btn btn-secondary btn-sm";
        copyBtn.style.position = "absolute";
        copyBtn.style.top = "10px";
        copyBtn.style.right = "10px";
        copyBtn.textContent = "📋 Copy";
        copyBtn.addEventListener("click", () => {
          copyToClipboard(pre.innerText, "Đã sao chép đoạn mã / Prompt trong bài viết!");
        });
        wrapper.appendChild(copyBtn);
      });
    }

    document.getElementById("singlePostLikeBtn")?.addEventListener("click", () => {
      toggleUpvote(post.id);
      renderSinglePostPage();
    });
    document.getElementById("singlePostSaveBtn")?.addEventListener("click", () => {
      toggleBookmark(post.id);
      renderSinglePostPage();
    });
    document.getElementById("singlePostShareBtn")?.addEventListener("click", () => {
      copyToClipboard(window.location.href, "Đã sao chép đường dẫn bài viết!");
    });

    const relatedGrid = document.getElementById("relatedPostsGrid");
    if (relatedGrid) {
      const latestPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 6);
      relatedGrid.innerHTML = latestPosts
        .map(
          (p) => `
          <article class="featured-post-card">
            <a href="post.html?id=${encodeURIComponent(p.id)}" style="text-decoration: none; color: inherit;">
              <div class="post-thumb-wrap">
                <img
                  src="${escapeHtml(p.coverImage || "assets/covers/post-1.svg")}"
                  alt="${escapeHtml(p.title)}"
                  class="post-thumb-img"
                  loading="lazy"
                />
                <div class="post-thumb-badges">
                  <span class="badge">🆕 MỚI NHẤT</span>
                  <span class="badge">${escapeHtml(p.categoryLabel)}</span>
                  <span class="badge">${escapeHtml(p.readTime)}</span>
                </div>
              </div>
            </a>
            <div class="post-body">
              <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 6px;">
                ✍️ ${escapeHtml(p.author)} • ${escapeHtml(p.date)}
              </div>
              <a href="post.html?id=${encodeURIComponent(p.id)}" style="text-decoration: none; color: inherit;">
                <h3 class="card-title" style="font-size: 18px;">${escapeHtml(p.title)}</h3>
              </a>
              <p class="card-summary">${escapeHtml(p.excerpt)}</p>
              <div class="card-footer">
                <span style="font-size: 12px; color: var(--text-muted);">👁 ${p.views || 150} lượt đọc</span>
                <a href="post.html?id=${encodeURIComponent(p.id)}" class="btn btn-secondary btn-sm">Đọc tiếp →</a>
              </div>
            </div>
          </article>
        `
        )
        .join("");
    }

    renderPostComments(post);

    if (!state.readingScrollBound) {
      state.readingScrollBound = true;
      window.addEventListener("scroll", () => {
        const bar = document.getElementById("readingProgressBar");
        if (!bar) return;
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
        bar.style.width = `${pct}%`;
      });
    }
  }

  function renderPostComments(post) {
    const commentsContainer = document.getElementById("postCommentsSection");
    if (!commentsContainer || !post) return;

    const storedAll = JSON.parse(localStorage.getItem("tipsai_comments") || "{}");
    const likedComments = JSON.parse(localStorage.getItem("tipsai_comment_likes") || "[]");
    const defaultList = (DATA.defaultComments && DATA.defaultComments[post.id]) || [];
    const customList = storedAll[post.id] || [];
    const allComments = [...customList, ...defaultList];

    commentsContainer.innerHTML = `
      <div class="comments-shell">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 18px; padding-bottom: 16px; border-bottom: 1px solid var(--border-default);">
          <div>
            <span class="badge badge-purple" style="margin-bottom: 6px;">💬 THẢO LUẬN & HỎI ĐÁP CỘNG ĐỒNG</span>
            <h2 style="font-family: var(--font-display); font-size: 22px; font-weight: 800;">
              Bình luận về bài viết (${allComments.length})
            </h2>
          </div>
          <a
            href="https://github.com/iamtee999-sketch/tipsai/issues"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-secondary btn-sm"
          >
            🌐 Mở thảo luận trên GitHub →
          </a>
        </div>

        <form id="postCommentForm" style="margin-bottom: 24px;">
          <div class="comment-form-grid">
            <input
              type="text"
              id="commentAuthorInput"
              class="input-field"
              placeholder="Tên của bạn (VD: Minh Tuấn)"
              required
            />
            <input
              type="text"
              id="commentRoleInput"
              class="input-field"
              placeholder="Công việc / Vai trò (VD: Marketer, Developer, Sinh viên...)"
            />
          </div>
          <textarea
            id="commentContentInput"
            class="comment-textarea"
            placeholder="Chia sẻ trải nghiệm áp dụng của bạn hoặc đặt câu hỏi về bài viết này..."
            required
          ></textarea>
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
            <span style="font-size: 12.5px; color: var(--text-muted);">
              💡 Mẹo hay hoặc câu hỏi thực tế của bạn sẽ giúp ích cho cả cộng đồng.
            </span>
            <button type="submit" class="btn btn-primary btn-sm">
              ✉️ Gửi bình luận
            </button>
          </div>
        </form>

        <div class="comments-list">
          ${
            allComments.length === 0
              ? `<p style="color: var(--text-secondary); font-size: 14px;">Chưa có bình luận nào. Hãy là người đầu tiên chia sẻ góc nhìn của bạn!</p>`
              : allComments
                  .map((c) => {
                    const isCmtLiked = likedComments.includes(c.id);
                    const cmtLikeCount = (c.likes || 0) + (isCmtLiked ? 1 : 0);
                    return `
                  <div class="comment-item">
                    <div class="comment-avatar">${escapeHtml(c.avatar || c.author.slice(0, 2).toUpperCase())}</div>
                    <div style="flex: 1;">
                      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 6px;">
                        <div>
                          <strong style="color: var(--text-primary); font-size: 14.5px;">${escapeHtml(c.author)}</strong>
                          <span class="badge badge-cyan" style="margin-left: 6px; font-size: 11px;">${escapeHtml(c.role || "Thành viên")}</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 10px;">
                          <span style="font-size: 12px; color: var(--text-muted);">${escapeHtml(c.date)}</span>
                          <button
                            type="button"
                            class="upvote-btn ${isCmtLiked ? "active" : ""}"
                            style="height: 28px; padding: 0 9px; font-size: 12px;"
                            data-like-comment="${escapeHtml(c.id)}"
                          >
                            👍 ${cmtLikeCount}
                          </button>
                        </div>
                      </div>
                      <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.6;">
                        ${escapeHtml(c.content)}
                      </p>
                    </div>
                  </div>
                `;
                  })
                  .join("")
          }
        </div>
      </div>
    `;

    commentsContainer.querySelectorAll("[data-like-comment]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const cId = btn.getAttribute("data-like-comment");
        const list = JSON.parse(localStorage.getItem("tipsai_comment_likes") || "[]");
        const idx = list.indexOf(cId);
        if (idx === -1) {
          list.push(cId);
          showToast("👍 Đã thích bình luận này!");
        } else {
          list.splice(idx, 1);
        }
        localStorage.setItem("tipsai_comment_likes", JSON.stringify(list));
        renderPostComments(post);
      });
    });

    const form = document.getElementById("postCommentForm");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const author = document.getElementById("commentAuthorInput").value.trim();
      const role = document.getElementById("commentRoleInput").value.trim() || "Thành viên TipsAI";
      const content = document.getElementById("commentContentInput").value.trim();
      if (!author || !content) return;

      const words = author.split(/\s+/);
      const avatar =
        words.length >= 2
          ? (words[0][0] + words[words.length - 1][0]).toUpperCase()
          : author.slice(0, 2).toUpperCase();

      const now = new Date();
      const dateStr = `${String(now.getDate()).padStart(2, "0")}/${String(now.getMonth() + 1).padStart(2, "0")}/${now.getFullYear()}`;

      const newComment = {
        id: `cmt-${Date.now()}`,
        author,
        role,
        date: dateStr,
        avatar,
        content,
        likes: 1
      };

      const latestStored = JSON.parse(localStorage.getItem("tipsai_comments") || "{}");
      if (!latestStored[post.id]) latestStored[post.id] = [];
      latestStored[post.id].unshift(newComment);
      localStorage.setItem("tipsai_comments", JSON.stringify(latestStored));

      showToast("🎉 Đã đăng bình luận của bạn thành công!");
      renderPostComments(post);
    });
  }

  // ==========================================================================
  // 5. TRANG MẸO & THỦ THUẬT AI (tips.html)
  // ==========================================================================
  function renderTipCardHTML(tip) {
    const isUpvoted = state.upvotedIds.includes(tip.id);
    const isBookmarked = state.bookmarkedIds.includes(tip.id);
    const upvoteCount = tip.upvotes + (isUpvoted ? 1 : 0);
    const diffBadgeClass =
      tip.difficulty === "Cơ bản"
        ? "badge-green"
        : tip.difficulty === "Trung cấp"
        ? "badge-amber"
        : "badge-purple";

    return `
      <article class="card">
        <div>
          <div class="card-meta-top">
            <span class="badge badge-purple">${escapeHtml(tip.categoryLabel)}</span>
            <span class="badge ${diffBadgeClass}">${escapeHtml(tip.difficulty)} • ${escapeHtml(tip.readTime)}</span>
          </div>

          <h3 class="card-title">${escapeHtml(tip.title)}</h3>
          <p class="card-summary">${escapeHtml(tip.summary)}</p>

          <div class="code-snippet-preview" title="Ví dụ câu lệnh thực tế">${escapeHtml(tip.afterExample)}</div>
        </div>

        <div>
          <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 10px;">
            🛠 Nền tảng: <strong style="color: var(--text-secondary);">${escapeHtml(tip.platform)}</strong>
          </div>

          <div class="card-footer">
            <div class="card-actions-left">
              <button
                type="button"
                class="upvote-btn ${isUpvoted ? "active" : ""}"
                data-upvote="${escapeHtml(tip.id)}"
                title="Hữu ích"
              >
                <span>▲</span>
                <span>${upvoteCount}</span>
              </button>
              <button
                type="button"
                class="bookmark-btn ${isBookmarked ? "active" : ""}"
                data-bookmark="${escapeHtml(tip.id)}"
                title="Lưu vào bộ sưu tập"
              >
                <span>${isBookmarked ? "🔖 Đã lưu" : "🔖 Lưu"}</span>
              </button>
            </div>

            <div style="display: flex; gap: 6px;">
              <button
                type="button"
                class="btn btn-ghost btn-sm"
                data-copy-tip="${escapeHtml(tip.id)}"
              >
                📋 Copy
              </button>
              <button
                type="button"
                class="btn btn-secondary btn-sm"
                data-detail-tip="${escapeHtml(tip.id)}"
              >
                Chi tiết →
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function bindTipCardEvents(container) {
    container.querySelectorAll("[data-upvote]").forEach((btn) => {
      btn.addEventListener("click", () => toggleUpvote(btn.getAttribute("data-upvote")));
    });
    container.querySelectorAll("[data-bookmark]").forEach((btn) => {
      btn.addEventListener("click", () => toggleBookmark(btn.getAttribute("data-bookmark")));
    });
    container.querySelectorAll("[data-copy-tip]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const tip = getAllTips().find((t) => t.id === btn.getAttribute("data-copy-tip"));
        if (tip) copyToClipboard(tip.afterExample, `Đã sao chép mẫu lệnh: "${tip.title}"`);
      });
    });
    container.querySelectorAll("[data-detail-tip]").forEach((btn) => {
      btn.addEventListener("click", () => openTipDetailModal(btn.getAttribute("data-detail-tip")));
    });
  }

  function renderTipCategoryTabs() {
    const container = document.getElementById("tipCategoryTabs");
    if (!container) return;
    container.innerHTML = DATA.tipCategories
      .map(
        (cat) => `
        <button
          type="button"
          class="pill-tab ${state.tipCategory === cat.id ? "active" : ""}"
          data-tip-cat="${escapeHtml(cat.id)}"
        >
          ${escapeHtml(cat.name)}
        </button>
      `
      )
      .join("");

    container.querySelectorAll("[data-tip-cat]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.tipCategory = btn.getAttribute("data-tip-cat");
        renderTipCategoryTabs();
        renderTipsGrid();
      });
    });
  }

  function renderTipsGrid() {
    const grid = document.getElementById("tipsGrid");
    if (!grid) return;

    const search = state.tipSearch.trim().toLowerCase();
    let filtered = getAllTips().filter((tip) => {
      const matchCat = state.tipCategory === "all" || tip.category === state.tipCategory;
      const matchDiff = state.tipDifficulty === "all" || tip.difficulty === state.tipDifficulty;
      const matchSearch =
        !search ||
        tip.title.toLowerCase().includes(search) ||
        tip.summary.toLowerCase().includes(search) ||
        tip.platform.toLowerCase().includes(search) ||
        tip.afterExample.toLowerCase().includes(search);
      return matchCat && matchDiff && matchSearch;
    });

    if (state.tipSort === "popular") {
      filtered.sort((a, b) => b.upvotes - a.upvotes);
    } else if (state.tipSort === "quick") {
      filtered.sort((a, b) => parseInt(a.readTime, 10) - parseInt(b.readTime, 10));
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="card" style="grid-column: 1 / -1; text-align: center; padding: 48px 24px;">
          <h3 class="card-title">Không tìm thấy thủ thuật phù hợp</h3>
          <p class="card-summary">Hãy thử đổi bộ lọc hoặc từ khóa tìm kiếm của bạn.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map((tip) => renderTipCardHTML(tip)).join("");
    bindTipCardEvents(grid);
  }

  function toggleUpvote(id) {
    const idx = state.upvotedIds.indexOf(id);
    if (idx === -1) {
      state.upvotedIds.push(id);
      showToast("Cảm ơn bạn đã bình chọn hữu ích!");
    } else {
      state.upvotedIds.splice(idx, 1);
    }
    localStorage.setItem("tipsai_upvotes", JSON.stringify(state.upvotedIds));
    renderTipsGrid();
    renderHomePage();
  }

  function toggleBookmark(id) {
    const idx = state.bookmarkedIds.indexOf(id);
    if (idx === -1) {
      state.bookmarkedIds.push(id);
      showToast("Đã lưu vào Bộ sưu tập cá nhân!");
    } else {
      state.bookmarkedIds.splice(idx, 1);
      showToast("Đã bỏ lưu khỏi Bộ sưu tập.");
    }
    localStorage.setItem("tipsai_bookmarks", JSON.stringify(state.bookmarkedIds));
    updateBookmarkBadge();
    renderTipsGrid();
    renderHomePage();
  }

  // ==========================================================================
  // 6. BẢNG PHÍM TẮT AI (shortcuts.html)
  // ==========================================================================
  function renderShortcutAppTabs() {
    const container = document.getElementById("shortcutAppTabs");
    if (!container) return;
    container.innerHTML = DATA.shortcutApps
      .map(
        (app) => `
        <button
          type="button"
          class="pill-tab ${state.shortcutApp === app.id ? "active" : ""}"
          data-sc-app="${escapeHtml(app.id)}"
        >
          ${escapeHtml(app.name)}
        </button>
      `
      )
      .join("");

    container.querySelectorAll("[data-sc-app]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.shortcutApp = btn.getAttribute("data-sc-app");
        renderShortcutAppTabs();
        renderShortcutsGrid();
      });
    });
  }

  function renderShortcutsGrid() {
    const grid = document.getElementById("shortcutsGrid");
    if (!grid) return;

    const search = state.shortcutSearch.trim().toLowerCase();
    const filtered = DATA.shortcuts.filter((sc) => {
      const matchApp = state.shortcutApp === "all" || sc.app === state.shortcutApp;
      const keysText = [...sc.winKeys, ...sc.macKeys].join(" ").toLowerCase();
      const matchSearch =
        !search ||
        sc.action.toLowerCase().includes(search) ||
        sc.appName.toLowerCase().includes(search) ||
        sc.tip.toLowerCase().includes(search) ||
        keysText.includes(search);
      return matchApp && matchSearch;
    });

    grid.innerHTML = filtered
      .map((sc) => {
        const keys = state.os === "mac" ? sc.macKeys : sc.winKeys;
        const keysString = keys.join(" + ");
        return `
          <div class="shortcut-card">
            <div class="shortcut-top">
              <div>
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <span class="badge badge-cyan">${escapeHtml(sc.appName)}</span>
                  <span style="font-size: 12px; color: var(--text-muted);">${escapeHtml(sc.category)}</span>
                </div>
                <h3 style="font-size: 15.5px; font-weight: 600; color: var(--text-primary);">
                  ${escapeHtml(sc.action)}
                </h3>
              </div>

              <button
                type="button"
                class="keycap-combo"
                style="background: transparent; border: none; cursor: pointer;"
                data-copy-shortcut="${escapeHtml(keysString)}"
                title="Bấm để sao chép phím tắt"
              >
                ${renderKeycaps(keys)}
              </button>
            </div>

            <div class="shortcut-tip-line">
              💡 <strong>Mẹo:</strong> ${escapeHtml(sc.tip)}
            </div>
          </div>
        `;
      })
      .join("");

    grid.querySelectorAll("[data-copy-shortcut]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-copy-shortcut");
        copyToClipboard(val, `Đã sao chép tổ hợp phím: ${val}`);
      });
    });
  }

  function syncOsButtons() {
    document.querySelectorAll(".os-btn[data-os]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-os") === state.os);
    });
    renderBentoQuickShortcuts();
    renderShortcutsGrid();
  }

  // ==========================================================================
  // 7. KHO PROMPT ĐỘNG (prompts.html) & AI TOOLS (tools.html)
  // ==========================================================================
  function renderVisualPromptBuilder() {
    const container = document.getElementById("visualPromptBuilderSection");
    if (!container || !DATA.visualPromptBuilder) return;

    const builder = DATA.visualPromptBuilder;
    container.innerHTML = `
      <div class="visual-builder-shell">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
          <div>
            <span class="badge badge-cyan" style="margin-bottom: 6px;">🎛 MINI-TOOL • BỘ TẠO PROMPT TỰ ĐỘNG BẰNG TÍCH CHỌN</span>
            <h2 style="font-family: var(--font-display); font-size: 24px; font-weight: 800;">
              Lắp Ráp Master Prompt Trong 10 Giây (Không Cần Gõ Dài)
            </h2>
            <p style="color: var(--text-secondary); font-size: 14px; margin-top: 4px;">
              Chỉ cần chọn Vai trò, Nhiệm vụ, Định dạng đầu ra và đánh dấu các Rào chắn chống ảo giác — hệ thống sẽ tự động xuất bản Prompt chuẩn cấu trúc XML/C.R.A.F.T.
            </p>
          </div>
          <button type="button" class="btn btn-primary" id="copyVisualBuilderBtn">
            📋 Sao chép Master Prompt
          </button>
        </div>

        <div class="builder-controls-grid">
          <div class="builder-field">
            <label class="builder-label" for="vbRoleSelect">1. Chọn Vai trò chuyên gia (Role)</label>
            <select id="vbRoleSelect" class="select-field">
              ${builder.roles
                .map((r) => `<option value="${escapeHtml(r.id)}">${escapeHtml(r.label)}</option>`)
                .join("")}
            </select>
          </div>

          <div class="builder-field">
            <label class="builder-label" for="vbTaskSelect">2. Chọn Loại tác vụ (Task)</label>
            <select id="vbTaskSelect" class="select-field">
              ${builder.tasks
                .map((t) => `<option value="${escapeHtml(t.id)}">${escapeHtml(t.label)}</option>`)
                .join("")}
            </select>
          </div>

          <div class="builder-field full-width">
            <label class="builder-label" for="vbTopicInput">3. Nhập Chủ đề / Yêu cầu cụ thể của bạn</label>
            <input
              type="text"
              id="vbTopicInput"
              class="input-field"
              value="Xây dựng kế hoạch nội dung & ứng dụng AI giúp tăng gấp đôi hiệu suất làm việc"
              placeholder="${escapeHtml(builder.tasks[0]?.placeholder || "Nhập yêu cầu cụ thể...")}"
            />
          </div>

          <div class="builder-field">
            <label class="builder-label" for="vbFormatSelect">4. Định dạng đầu ra (Output Format)</label>
            <select id="vbFormatSelect" class="select-field">
              ${builder.formats
                .map((f) => `<option value="${escapeHtml(f.id)}">${escapeHtml(f.label)}</option>`)
                .join("")}
            </select>
          </div>

          <div class="builder-field">
            <label class="builder-label" for="vbToneSelect">5. Giọng văn & Phong cách (Tone)</label>
            <select id="vbToneSelect" class="select-field">
              ${builder.tones
                .map((t) => `<option value="${escapeHtml(t.id)}">${escapeHtml(t.label)}</option>`)
                .join("")}
            </select>
          </div>

          <div class="builder-field full-width">
            <span class="builder-label">6. Tích chọn Rào chắn chất lượng (Guardrails)</span>
            <div class="guardrails-grid">
              ${builder.guardrails
                .map(
                  (g) => `
                <label class="guardrail-check">
                  <input
                    type="checkbox"
                    class="vb-guardrail-cb"
                    value="${escapeHtml(g.id)}"
                    ${g.checked ? "checked" : ""}
                  />
                  <span>${escapeHtml(g.label)}</span>
                </label>
              `
                )
                .join("")}
            </div>
          </div>
        </div>

        <div style="margin-top: 18px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-size: 12.5px; font-weight: 700; color: var(--brand-primary);">
              ✦ BẢN XEM TRƯỚC MASTER PROMPT (TỰ ĐỘNG CẬP NHẬT):
            </span>
            <span style="font-size: 12px; color: var(--text-muted);">Dán trực tiếp vào ChatGPT, Claude hoặc Gemini</span>
          </div>
          <div class="live-prompt-output" id="vbCompiledOutput" style="margin-bottom: 0;"></div>
        </div>
      </div>
    `;

    function updateVisualPromptOutput() {
      const roleId = document.getElementById("vbRoleSelect")?.value;
      const taskId = document.getElementById("vbTaskSelect")?.value;
      const topicVal = document.getElementById("vbTopicInput")?.value.trim();
      const formatId = document.getElementById("vbFormatSelect")?.value;
      const toneId = document.getElementById("vbToneSelect")?.value;

      const roleObj = builder.roles.find((r) => r.id === roleId) || builder.roles[0];
      const taskObj = builder.tasks.find((t) => t.id === taskId) || builder.tasks[0];
      const formatObj = builder.formats.find((f) => f.id === formatId) || builder.formats[0];
      const toneObj = builder.tones.find((t) => t.id === toneId) || builder.tones[0];

      const checkedGuardrails = Array.from(container.querySelectorAll(".vb-guardrail-cb:checked"))
        .map((cb) => builder.guardrails.find((g) => g.id === cb.value)?.promptText)
        .filter(Boolean);

      const lines = [
        `<vai_tro>\n${roleObj.promptText}\n</vai_tro>`,
        `\n<nhiem_vu_chinh>\nLoại tác vụ: ${taskObj.label}\nChủ đề / Yêu cầu cụ thể: "${topicVal || "[Nhập yêu cầu cụ thể của bạn tại đây]"}"\n</nhiem_vu_chinh>`,
        `\n<dinh_dang_va_giong_van>\n- Định dạng: ${formatObj.promptText}\n- Phong cách: ${toneObj.promptText}\n</dinh_dang_va_giong_van>`
      ];

      if (checkedGuardrails.length > 0) {
        lines.push(
          `\n<rao_chan_bat_buoc>\n${checkedGuardrails.map((item, i) => `${i + 1}. ${item}`).join("\n")}\n</rao_chan_bat_buoc>`
        );
      }

      const outEl = document.getElementById("vbCompiledOutput");
      if (outEl) outEl.textContent = lines.join("\n");
    }

    container.querySelectorAll("select, input").forEach((el) => {
      el.addEventListener("input", updateVisualPromptOutput);
      el.addEventListener("change", () => {
        if (el.id === "vbTaskSelect") {
          const tObj = builder.tasks.find((t) => t.id === el.value);
          const topicInput = document.getElementById("vbTopicInput");
          if (tObj && topicInput) topicInput.placeholder = tObj.placeholder;
        }
        updateVisualPromptOutput();
      });
    });

    document.getElementById("copyVisualBuilderBtn")?.addEventListener("click", () => {
      const outEl = document.getElementById("vbCompiledOutput");
      if (outEl) {
        copyToClipboard(outEl.textContent, "⚡ Đã sao chép Master Prompt từ Bộ Tạo Tự Động!");
      }
    });

    updateVisualPromptOutput();
  }

  function renderAiLeaderboard() {
    const container = document.getElementById("aiLeaderboardSection");
    if (!container || !DATA.aiLeaderboard) return;

    container.innerHTML = `
      <div class="leaderboard-shell">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
          <div>
            <span class="badge badge-purple" style="margin-bottom: 6px;">🏆 BẢNG XẾP HẠNG THỰC CHIẾN 2026</span>
            <h2 style="font-family: var(--font-display); font-size: 24px; font-weight: 800;">
              Dùng AI Nào Cho Việc Gì? (Bảng Phân Vai Nhanh)
            </h2>
            <p style="color: var(--text-secondary); font-size: 14px; margin-top: 4px;">
              Đừng dùng duy nhất 1 công cụ cho mọi việc. Đây là bảng tổng hợp công cụ Số 1 cho từng nhu cầu thực tế được cộng đồng bình chọn.
            </p>
          </div>
          <span class="badge badge-green">✓ Đã kiểm chứng thực tế</span>
        </div>

        <div class="mobile-swipe-hint">↔ Vuốt ngang bảng để xem đầy đủ 5 cột</div>

        <div class="leaderboard-table-wrap">
          <table class="leaderboard-table">
            <thead>
              <tr>
                <th>Nhu cầu công việc</th>
                <th>🥇 Số 1 Khuyên dùng</th>
                <th>🥈 Lựa chọn thay thế</th>
                <th>🆓 Tốt nhất Miễn phí</th>
                <th>💡 Quy trình kết hợp chuyên gia</th>
              </tr>
            </thead>
            <tbody>
              ${DATA.aiLeaderboard
                .map(
                  (row) => `
                <tr>
                  <td>
                    <strong style="color: var(--text-primary); font-size: 14px;">${escapeHtml(row.task)}</strong>
                  </td>
                  <td>
                    <span class="badge badge-purple" style="margin-bottom: 4px;">👑 ${escapeHtml(row.winner)}</span>
                    <div style="font-size: 12.5px; color: var(--text-secondary); margin-top: 4px;">
                      ${escapeHtml(row.winnerReason)}
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-cyan">${escapeHtml(row.runnerUp)}</span>
                  </td>
                  <td>
                    <span class="badge badge-green">${escapeHtml(row.bestFree)}</span>
                  </td>
                  <td style="font-size: 13px; color: var(--text-secondary);">
                    ${escapeHtml(row.proWorkflow)}
                  </td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function renderPromptsGrid() {
    const grid = document.getElementById("promptsGrid");
    if (!grid) return;

    grid.innerHTML = DATA.promptTemplates
      .map((prm) => {
        if (!state.promptValues[prm.id]) {
          state.promptValues[prm.id] = { ...prm.variables };
        }
        const currentVars = state.promptValues[prm.id];
        const compiledText = compilePromptText(prm.template, currentVars);

        const varInputsHtml = Object.keys(prm.variables)
          .map(
            (varKey) => `
            <div class="var-field-group">
              <label class="var-label">[${escapeHtml(varKey)}]</label>
              <input
                type="text"
                class="var-input"
                data-prm-id="${escapeHtml(prm.id)}"
                data-var-key="${escapeHtml(varKey)}"
                value="${escapeHtml(currentVars[varKey] || "")}"
              />
            </div>
          `
          )
          .join("");

        return `
          <article class="card">
            <div>
              <div class="card-meta-top">
                <span class="badge badge-purple">${escapeHtml(prm.category)}</span>
                <span class="badge badge-cyan">⚡ ${escapeHtml(prm.badge)}</span>
              </div>

              <h3 class="card-title">${escapeHtml(prm.title)}</h3>
              <p class="card-summary">${escapeHtml(prm.description)}</p>

              <div class="prompt-variables-box">
                <div style="font-size: 12px; color: var(--text-secondary); font-weight: 600;">
                  🎛 Tùy biến thông số của bạn (Prompt tự động cập nhật):
                </div>
                ${varInputsHtml}
              </div>

              <div class="live-prompt-output" id="output-${escapeHtml(prm.id)}">${escapeHtml(compiledText)}</div>
            </div>

            <div class="card-footer">
              <span style="font-size: 12px; color: var(--text-muted);">Tương thích ChatGPT, Claude, Gemini</span>
              <button
                type="button"
                class="btn btn-primary btn-sm"
                data-copy-prm="${escapeHtml(prm.id)}"
              >
                📋 Sao chép Prompt
              </button>
            </div>
          </article>
        `;
      })
      .join("");

    grid.querySelectorAll(".var-input").forEach((input) => {
      input.addEventListener("input", () => {
        const prmId = input.getAttribute("data-prm-id");
        const varKey = input.getAttribute("data-var-key");
        if (!state.promptValues[prmId]) state.promptValues[prmId] = {};
        state.promptValues[prmId][varKey] = input.value;

        const prmObj = DATA.promptTemplates.find((p) => p.id === prmId);
        const outputEl = document.getElementById(`output-${prmId}`);
        if (prmObj && outputEl) {
          outputEl.textContent = compilePromptText(prmObj.template, state.promptValues[prmId]);
        }
      });
    });

    grid.querySelectorAll("[data-copy-prm]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const prmId = btn.getAttribute("data-copy-prm");
        const prmObj = DATA.promptTemplates.find((p) => p.id === prmId);
        if (prmObj) {
          const text = compilePromptText(prmObj.template, state.promptValues[prmId] || prmObj.variables);
          copyToClipboard(text, `Đã sao chép Prompt "${prmObj.title}"!`);
        }
      });
    });
  }

  function compilePromptText(template, varsObj) {
    let result = template;
    Object.keys(varsObj).forEach((k) => {
      const val = varsObj[k] && varsObj[k].trim() ? varsObj[k] : `[${k}]`;
      result = result.split(`{{${k}}}`).join(val);
    });
    return result;
  }

  function renderToolCategoryTabs() {
    const container = document.getElementById("toolCategoryTabs");
    if (!container) return;
    container.innerHTML = DATA.toolCategories
      .map(
        (cat) => `
        <button
          type="button"
          class="pill-tab ${state.toolCategory === cat.id ? "active" : ""}"
          data-tool-cat="${escapeHtml(cat.id)}"
        >
          ${escapeHtml(cat.name)}
        </button>
      `
      )
      .join("");

    container.querySelectorAll("[data-tool-cat]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.toolCategory = btn.getAttribute("data-tool-cat");
        renderToolCategoryTabs();
        renderToolsGrid();
      });
    });
  }

  function renderToolsGrid() {
    const grid = document.getElementById("toolsGrid");
    if (!grid) return;

    const search = state.toolSearch.trim().toLowerCase();
    const filtered = DATA.tools.filter((tool) => {
      const matchCat = state.toolCategory === "all" || tool.category === state.toolCategory;
      const matchPrice = state.toolPricing === "all" || tool.pricing === state.toolPricing;
      const matchSearch =
        !search ||
        tool.name.toLowerCase().includes(search) ||
        tool.tagline.toLowerCase().includes(search) ||
        tool.bestFor.toLowerCase().includes(search) ||
        tool.secretTip.toLowerCase().includes(search);
      return matchCat && matchPrice && matchSearch;
    });

    grid.innerHTML = filtered
      .map((tool) => {
        const isCompared = state.compareToolIds.includes(tool.id);
        const priceBadgeClass =
          tool.pricing === "Miễn phí"
            ? "badge-green"
            : tool.pricing === "Freemium"
            ? "badge-cyan"
            : "badge-purple";

        return `
          <article class="card">
            <div>
              <div class="card-meta-top">
                <span class="badge badge-purple">${escapeHtml(tool.badge)}</span>
                <span class="badge ${priceBadgeClass}">${escapeHtml(tool.pricing)} • ★ ${tool.rating}</span>
              </div>

              <h3 class="card-title">${escapeHtml(tool.name)}</h3>
              <p class="card-summary">${escapeHtml(tool.tagline)}</p>

              <div style="font-size: 13px; margin-bottom: 12px;">
                <strong style="color: var(--text-primary);">🎯 Phù hợp nhất:</strong>
                <span style="color: var(--text-secondary);"> ${escapeHtml(tool.bestFor)}</span>
              </div>

              <div class="shortcut-tip-line" style="margin-bottom: 14px;">
                🤫 <strong>Mẹo ẩn chuyên gia:</strong> ${escapeHtml(tool.secretTip)}
              </div>

              <div class="tool-pros-cons">
                ${tool.pros.map((p) => `<div class="pro-item">✓ ${escapeHtml(p)}</div>`).join("")}
                ${tool.cons.map((c) => `<div class="con-item">⚠ ${escapeHtml(c)}</div>`).join("")}
              </div>
            </div>

            <div class="card-footer">
              <button
                type="button"
                class="upvote-btn ${isCompared ? "active" : ""}"
                data-compare-tool="${escapeHtml(tool.id)}"
              >
                <span>${isCompared ? "☑ Đã chọn so sánh" : "☐ Chọn so sánh"}</span>
              </button>

              <a
                href="${escapeHtml(tool.url)}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-secondary btn-sm"
              >
                Mở công cụ ↗
              </a>
            </div>
          </article>
        `;
      })
      .join("");

    grid.querySelectorAll("[data-compare-tool]").forEach((btn) => {
      btn.addEventListener("click", () => toggleCompareTool(btn.getAttribute("data-compare-tool")));
    });
  }

  function toggleCompareTool(toolId) {
    const idx = state.compareToolIds.indexOf(toolId);
    if (idx === -1) {
      if (state.compareToolIds.length >= 3) {
        showToast("Chỉ có thể chọn tối đa 3 công cụ để so sánh cùng lúc!");
        return;
      }
      state.compareToolIds.push(toolId);
    } else {
      state.compareToolIds.splice(idx, 1);
    }
    updateCompareFloatingBar();
    renderToolsGrid();
  }

  function updateCompareFloatingBar() {
    const bar = document.getElementById("compareFloatingBar");
    const countText = document.getElementById("compareCountText");
    if (!bar || !countText) return;
    if (state.compareToolIds.length === 0) {
      bar.hidden = true;
    } else {
      bar.hidden = false;
      const names = state.compareToolIds
        .map((id) => DATA.tools.find((t) => t.id === id)?.name)
        .filter(Boolean)
        .join(", ");
      countText.textContent = `${state.compareToolIds.length}/3 (${names})`;
    }
  }

  // ==========================================================================
  // 8. AI INTENT COMPOSER & MODALS DÙNG CHUNG
  // ==========================================================================
  function analyzeUserIntent(queryText) {
    const panel = document.getElementById("intentResponsePanel");
    if (!panel) return;
    const q = (queryText || "").trim().toLowerCase();
    if (!q) {
      panel.hidden = true;
      return;
    }

    let matchedPlaybook = DATA.intentPlaybooks.find((pb) =>
      pb.keywords.some((kw) => q.includes(kw))
    );
    if (!matchedPlaybook) matchedPlaybook = DATA.intentPlaybooks[0];

    panel.hidden = false;
    panel.innerHTML = `
      <div class="intent-response-header">
        <div>
          <span class="intent-state-badge">✦ AI Intent Playbook • ${escapeHtml(matchedPlaybook.intentType)}</span>
          <h3 style="font-family: var(--font-display); font-size: 20px; margin-top: 6px;">
            ${escapeHtml(matchedPlaybook.title)}
          </h3>
        </div>
        <button type="button" class="btn btn-ghost btn-sm" id="closeIntentPanelBtn">✕ Đóng</button>
      </div>

      <p style="color: var(--text-secondary); font-size: 14px;">
        Lộ trình đề xuất cho: <strong style="color: var(--text-primary);">"${escapeHtml(queryText)}"</strong>
      </p>

      <ul class="intent-steps-list">
        ${matchedPlaybook.recommendedSteps
          .map((step) => `<li><span class="step-check">✓</span><span>${escapeHtml(step)}</span></li>`)
          .join("")}
      </ul>

      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; padding-top: 12px; border-top: 1px solid var(--border-default);">
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <span style="font-size: 12px; color: var(--text-muted);">Công cụ khuyên dùng:</span>
          ${matchedPlaybook.recommendedTools
            .map((tool) => `<span class="badge badge-purple">${escapeHtml(tool)}</span>`)
            .join("")}
          <span class="badge badge-cyan">⌨️ ${escapeHtml(matchedPlaybook.quickShortcut)}</span>
        </div>
        <a href="${matchedPlaybook.targetPage || "tips.html"}" class="btn btn-primary btn-sm">
          Mở chuyên trang liên quan →
        </a>
      </div>
    `;

    document.getElementById("closeIntentPanelBtn")?.addEventListener("click", () => {
      panel.hidden = true;
    });
  }

  function openModal(htmlContent) {
    let backdrop = document.getElementById("universalModalBackdrop");
    if (!backdrop) {
      backdrop = document.createElement("div");
      backdrop.id = "universalModalBackdrop";
      backdrop.className = "modal-backdrop";
      backdrop.innerHTML = `<div class="modal-dialog" role="dialog" aria-modal="true" id="universalModalContent"></div>`;
      document.body.appendChild(backdrop);
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) closeModal();
      });
    }
    const dialog = document.getElementById("universalModalContent");
    dialog.innerHTML = htmlContent;
    backdrop.hidden = false;

    dialog.querySelectorAll("[data-close-modal]").forEach((btn) => {
      btn.addEventListener("click", closeModal);
    });
  }

  function closeModal() {
    const backdrop = document.getElementById("universalModalBackdrop");
    if (backdrop) backdrop.hidden = true;
  }

  function openTipDetailModal(tipId) {
    const tip = getAllTips().find((t) => t.id === tipId);
    if (!tip) return;

    openModal(`
      <div class="modal-header">
        <div>
          <div style="display: flex; gap: 8px; margin-bottom: 8px;">
            <span class="badge badge-purple">${escapeHtml(tip.categoryLabel)}</span>
            <span class="badge badge-cyan">${escapeHtml(tip.platform)}</span>
            <span class="badge badge-green">${escapeHtml(tip.difficulty)}</span>
          </div>
          <h2 style="font-family: var(--font-display); font-size: 24px;">${escapeHtml(tip.title)}</h2>
        </div>
        <button type="button" class="btn btn-ghost btn-sm" data-close-modal>✕ Đóng</button>
      </div>

      <div style="display: grid; gap: 16px;">
        <div style="background: var(--surface-2); padding: 14px 16px; border-radius: 12px; border: 1px solid var(--border-default);">
          <strong style="color: var(--color-danger);">⚠ Vấn đề thường gặp:</strong>
          <p style="color: var(--text-secondary); font-size: 14px; margin-top: 4px;">${escapeHtml(tip.problem)}</p>
        </div>

        <div style="background: var(--surface-2); padding: 14px 16px; border-radius: 12px; border: 1px solid var(--border-default);">
          <strong style="color: var(--color-success);">✓ Giải pháp thực chiến:</strong>
          <p style="color: var(--text-secondary); font-size: 14px; margin-top: 4px;">${escapeHtml(tip.solution)}</p>
        </div>

        <div class="compare-grid">
          <div class="compare-box compare-before">
            <span class="compare-label">❌ Trước khi tối ưu</span>
            <div>${escapeHtml(tip.beforeExample)}</div>
          </div>
          <div class="compare-box compare-after">
            <span class="compare-label">✅ Sau khi áp dụng thủ thuật</span>
            <div>${escapeHtml(tip.afterExample)}</div>
          </div>
        </div>

        <div class="shortcut-tip-line">
          🔥 <strong>Bí kíp nâng cao (Pro-Tip):</strong> ${escapeHtml(tip.proTip)}
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 10px; padding-top: 10px;">
          <button type="button" class="btn btn-primary" id="modalCopyTipBtn">
            📋 Sao chép Mẫu Lệnh Chuẩn
          </button>
        </div>
      </div>
    `);

    document.getElementById("modalCopyTipBtn")?.addEventListener("click", () =>
      copyToClipboard(tip.afterExample, "Đã sao chép mẫu lệnh thực chiến!")
    );
  }

  function openCompareToolsModal() {
    const selectedTools = state.compareToolIds
      .map((id) => DATA.tools.find((t) => t.id === id))
      .filter(Boolean);
    if (selectedTools.length === 0) return;

    openModal(`
      <div class="modal-header">
        <div>
          <span class="badge badge-cyan">⚖️ BẢNG ĐỐI CHIẾU CÔNG CỤ AI</span>
          <h2 style="font-family: var(--font-display); font-size: 22px; margin-top: 6px;">
            So sánh trực tiếp (${selectedTools.length} công cụ)
          </h2>
        </div>
        <button type="button" class="btn btn-ghost btn-sm" data-close-modal>✕ Đóng</button>
      </div>

      <div style="overflow-x: auto;">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Tiêu chí</th>
              ${selectedTools.map((t) => `<th>${escapeHtml(t.name)}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Chi phí & Đánh giá</strong></td>
              ${selectedTools
                .map((t) => `<td><span class="badge badge-purple">${escapeHtml(t.pricing)}</span> ★ ${t.rating}</td>`)
                .join("")}
            </tr>
            <tr>
              <td><strong>Phù hợp nhất cho</strong></td>
              ${selectedTools.map((t) => `<td>${escapeHtml(t.bestFor)}</td>`).join("")}
            </tr>
            <tr>
              <td><strong>Mẹo dùng bí mật</strong></td>
              ${selectedTools.map((t) => `<td style="color: var(--brand-primary); font-weight: 500;">${escapeHtml(t.secretTip)}</td>`).join("")}
            </tr>
            <tr>
              <td><strong>Ưu điểm nổi bật</strong></td>
              ${selectedTools
                .map((t) => `<td>${t.pros.map((p) => `<div>✓ ${escapeHtml(p)}</div>`).join("")}</td>`)
                .join("")}
            </tr>
            <tr>
              <td><strong>Điểm cần lưu ý</strong></td>
              ${selectedTools
                .map((t) => `<td>${t.cons.map((c) => `<div>⚠ ${escapeHtml(c)}</div>`).join("")}</td>`)
                .join("")}
            </tr>
          </tbody>
        </table>
      </div>
    `);
  }

  function openCommandPaletteModal() {
    openModal(`
      <div class="modal-header" style="margin-bottom: 12px;">
        <div style="width: 100%;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
            <span class="badge badge-purple">⌘ COMMAND PALETTE • TÌM KIẾM TOÀN WEBSITE</span>
            <button type="button" class="btn btn-ghost btn-sm" data-close-modal>ESC</button>
          </div>
          <input
            type="search"
            id="cmdPaletteInput"
            class="input-field"
            style="width: 100%; height: 46px; font-size: 15px;"
            placeholder="Tìm Bài viết Blog, Mẹo AI, Phím tắt (Ctrl+K, --ar), Công cụ AI..."
            autofocus
          />
        </div>
      </div>

      <div class="cmd-results-list" id="cmdPaletteResults"></div>
    `);

    const input = document.getElementById("cmdPaletteInput");
    const resultsContainer = document.getElementById("cmdPaletteResults");

    function renderCmdResults(query) {
      const q = (query || "").trim().toLowerCase();
      const items = [];

      getAllPosts().forEach((p) => {
        if (!q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)) {
          items.push({
            type: "📰 Bài viết",
            title: p.title,
            sub: p.readTime,
            action: () => {
              window.location.href = `post.html?id=${encodeURIComponent(p.id)}`;
            }
          });
        }
      });

      getAllTips().forEach((t) => {
        if (!q || t.title.toLowerCase().includes(q) || t.summary.toLowerCase().includes(q)) {
          items.push({
            type: "💡 Mẹo AI",
            title: t.title,
            sub: t.platform,
            action: () => openTipDetailModal(t.id)
          });
        }
      });

      DATA.shortcuts.forEach((sc) => {
        const keys = (state.os === "mac" ? sc.macKeys : sc.winKeys).join(" + ");
        if (!q || sc.action.toLowerCase().includes(q) || sc.appName.toLowerCase().includes(q) || keys.toLowerCase().includes(q)) {
          items.push({
            type: `⌨️ ${sc.appName}`,
            title: sc.action,
            sub: keys,
            action: () => {
              copyToClipboard(keys, `Đã sao chép phím tắt: ${keys}`);
              closeModal();
            }
          });
        }
      });

      (DATA.promptTemplates || []).forEach((prm) => {
        if (!q || prm.title.toLowerCase().includes(q) || prm.description.toLowerCase().includes(q) || prm.category.toLowerCase().includes(q)) {
          items.push({
            type: "⚡ Prompt",
            title: prm.title,
            sub: prm.badge,
            action: () => {
              window.location.href = "prompts.html";
            }
          });
        }
      });

      DATA.tools.forEach((tool) => {
        if (!q || tool.name.toLowerCase().includes(q) || tool.tagline.toLowerCase().includes(q)) {
          items.push({
            type: "🧰 AI Tool",
            title: tool.name,
            sub: tool.badge,
            action: () => {
              window.location.href = "tools.html";
            }
          });
        }
      });

      resultsContainer.innerHTML = items
        .slice(0, 12)
        .map(
          (item, idx) => `
          <div class="cmd-result-item" data-cmd-idx="${idx}">
            <div>
              <span class="badge badge-purple" style="margin-right: 8px;">${escapeHtml(item.type)}</span>
              <strong style="color: var(--text-primary); font-size: 14px;">${escapeHtml(item.title)}</strong>
            </div>
            <span style="font-family: var(--font-mono); font-size: 12px; color: var(--brand-primary); font-weight: 600;">
              ${escapeHtml(item.sub)}
            </span>
          </div>
        `
        )
        .join("");

      resultsContainer.querySelectorAll("[data-cmd-idx]").forEach((el) => {
        el.addEventListener("click", () => {
          const i = Number(el.getAttribute("data-cmd-idx"));
          if (items[i]) items[i].action();
        });
      });
    }

    renderCmdResults("");
    if (input) {
      setTimeout(() => input.focus(), 50);
      input.addEventListener("input", () => renderCmdResults(input.value));
    }
  }

  function openShortcutQuizModal() {
    const pool = [...DATA.shortcuts];
    const questionSc = pool[Math.floor(Math.random() * pool.length)];
    const correctKeys = (state.os === "mac" ? questionSc.macKeys : questionSc.winKeys).join(" + ");
    const distractors = pool
      .filter((s) => s.id !== questionSc.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((s) => (state.os === "mac" ? s.macKeys : s.winKeys).join(" + "));
    const options = [correctKeys, ...distractors].sort(() => 0.5 - Math.random());

    openModal(`
      <div class="modal-header">
        <div>
          <span class="badge badge-cyan">🎯 LUYỆN PHẢN XẠ PHÍM TẮT AI (${state.os === "mac" ? "macOS ⌘" : "Windows"})</span>
          <h2 style="font-family: var(--font-display); font-size: 22px; margin-top: 6px;">
            Thử tài nhớ nhanh Phím tắt & Tham số
          </h2>
        </div>
        <button type="button" class="btn btn-ghost btn-sm" data-close-modal>✕ Đóng</button>
      </div>

      <div style="background: var(--surface-2); border: 1px solid var(--border-default); border-radius: 14px; padding: 20px; margin-bottom: 18px;">
        <span class="badge badge-purple" style="margin-bottom: 10px;">Ứng dụng: ${escapeHtml(questionSc.appName)}</span>
        <h3 style="font-size: 18px; color: var(--text-primary);">
          Để "${escapeHtml(questionSc.action)}", bạn nhấn tổ hợp phím nào?
        </h3>
      </div>

      <div class="quiz-options-grid">
        ${options
          .map(
            (opt) => `
          <button
            type="button"
            class="btn btn-secondary"
            style="min-height: 50px; height: auto; padding: 10px 14px; font-family: var(--font-mono); font-size: 13.5px; white-space: normal; text-align: center;"
            data-quiz-opt="${escapeHtml(opt)}"
          >
            ${escapeHtml(opt)}
          </button>
        `
          )
          .join("")}
      </div>

      <div id="quizFeedbackBox" style="margin-top: 16px;" hidden></div>

      <div style="display: flex; justify-content: flex-end; margin-top: 18px;">
        <button type="button" class="btn btn-primary btn-sm" id="nextQuizQuestionBtn">
          Câu hỏi tiếp theo →
        </button>
      </div>
    `);

    const feedbackBox = document.getElementById("quizFeedbackBox");
    document.querySelectorAll("[data-quiz-opt]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const chosen = btn.getAttribute("data-quiz-opt");
        if (!feedbackBox) return;
        feedbackBox.hidden = false;
        if (chosen === correctKeys) {
          btn.style.borderColor = "var(--color-success)";
          feedbackBox.innerHTML = `<div class="compare-box compare-after" style="font-family: var(--font-sans);"><strong>🎉 Chính xác 100%!</strong> ${escapeHtml(questionSc.tip)}</div>`;
        } else {
          btn.style.borderColor = "var(--color-danger)";
          feedbackBox.innerHTML = `<div class="compare-box compare-before" style="font-family: var(--font-sans);"><strong>Chưa chính xác!</strong> Đáp án đúng là <code>${escapeHtml(correctKeys)}</code>. ${escapeHtml(questionSc.tip)}</div>`;
        }
      });
    });

    document.getElementById("nextQuizQuestionBtn")?.addEventListener("click", openShortcutQuizModal);
  }

  function openBookmarksModal() {
    const savedPosts = getAllPosts().filter((p) => state.bookmarkedIds.includes(p.id));
    const savedTips = getAllTips().filter((t) => state.bookmarkedIds.includes(t.id));
    const totalSaved = savedPosts.length + savedTips.length;

    openModal(`
      <div class="modal-header">
        <div>
          <span class="badge badge-cyan">🔖 BỘ SƯU TẬP CÁ NHÂN</span>
          <h2 style="font-family: var(--font-display); font-size: 22px; margin-top: 6px;">
            Nội dung bạn đã lưu (${totalSaved})
          </h2>
        </div>
        <button type="button" class="btn btn-ghost btn-sm" data-close-modal>✕ Đóng</button>
      </div>

      ${
        totalSaved === 0
          ? `<p style="color: var(--text-secondary); padding: 24px 0;">Bạn chưa lưu bài viết hay thủ thuật nào. Hãy bấm nút <strong>🔖 Lưu</strong> trên bài viết hoặc thẻ mẹo để lưu lại tra cứu nhanh.</p>`
          : `<div style="display: grid; gap: 10px;">
              ${savedPosts
                .map(
                  (p) => `
                <div class="cmd-result-item" style="cursor: default;">
                  <a href="post.html?id=${encodeURIComponent(p.id)}" style="text-decoration: none; color: inherit; flex: 1;">
                    <span class="badge badge-cyan" style="margin-right: 8px;">📰 Bài viết</span>
                    <strong>${escapeHtml(p.title)}</strong>
                  </a>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <a href="post.html?id=${encodeURIComponent(p.id)}" class="btn btn-secondary btn-sm">Đọc bài →</a>
                    <button type="button" class="btn btn-ghost btn-sm" data-remove-bm="${escapeHtml(p.id)}" title="Bỏ lưu">✕</button>
                  </div>
                </div>
              `
                )
                .join("")}
              ${savedTips
                .map(
                  (t) => `
                <div class="cmd-result-item" style="cursor: default;">
                  <div data-saved-tip="${escapeHtml(t.id)}" style="cursor: pointer; flex: 1;">
                    <span class="badge badge-purple" style="margin-right: 8px;">💡 ${escapeHtml(t.categoryLabel)}</span>
                    <strong>${escapeHtml(t.title)}</strong>
                  </div>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <button type="button" class="btn btn-secondary btn-sm" data-saved-tip="${escapeHtml(t.id)}">Xem mẹo →</button>
                    <button type="button" class="btn btn-ghost btn-sm" data-remove-bm="${escapeHtml(t.id)}" title="Bỏ lưu">✕</button>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>`
      }
    `);

    document.querySelectorAll("[data-saved-tip]").forEach((el) => {
      el.addEventListener("click", () => openTipDetailModal(el.getAttribute("data-saved-tip")));
    });
    document.querySelectorAll("[data-remove-bm]").forEach((btn) => {
      btn.addEventListener("click", () => {
        toggleBookmark(btn.getAttribute("data-remove-bm"));
        openBookmarksModal();
      });
    });
  }

  // ==========================================================================
  // 9. KHỞI TẠO SỰ KIỆN TOÀN CỤC & TỪNG TRANG
  // ==========================================================================
  function initEvents() {
    const navbar = document.getElementById("siteNavbar");
    const floatTopBtn = document.getElementById("floatingBackToTopBtn");
    window.addEventListener("scroll", () => {
      if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 16);
      if (floatTopBtn) floatTopBtn.classList.toggle("visible", window.scrollY > 240);
    });

    const intentInput = document.getElementById("intentInput");
    const runIntentBtn = document.getElementById("runIntentBtn");
    if (runIntentBtn && intentInput) {
      runIntentBtn.addEventListener("click", () => analyzeUserIntent(intentInput.value));
      intentInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") analyzeUserIntent(intentInput.value);
      });
    }
    document.querySelectorAll(".intent-chip[data-intent]").forEach((chip) => {
      chip.addEventListener("click", () => {
        const text = chip.getAttribute("data-intent");
        if (intentInput) intentInput.value = text;
        analyzeUserIntent(text);
      });
    });

    document.getElementById("randomTipHeroBtn")?.addEventListener("click", () => {
      const all = getAllTips();
      const randomTip = all[Math.floor(Math.random() * all.length)];
      if (randomTip) openTipDetailModal(randomTip.id);
    });

    document.getElementById("blogSearchInput")?.addEventListener("input", (e) => {
      state.postSearch = e.target.value;
      renderBlogPage();
    });

    document.getElementById("tipSearchInput")?.addEventListener("input", (e) => {
      state.tipSearch = e.target.value;
      renderTipsGrid();
    });
    document.getElementById("tipDifficultySelect")?.addEventListener("change", (e) => {
      state.tipDifficulty = e.target.value;
      renderTipsGrid();
    });
    document.getElementById("tipSortSelect")?.addEventListener("change", (e) => {
      state.tipSort = e.target.value;
      renderTipsGrid();
    });

    document.querySelectorAll(".os-btn[data-os]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.os = btn.getAttribute("data-os");
        localStorage.setItem("tipsai_os", state.os);
        syncOsButtons();
        showToast(
          `Đã chuyển phím tắt sang ${state.os === "mac" ? "macOS (⌘)" : "Windows / Linux"}`
        );
      });
    });

    document.getElementById("shortcutSearchInput")?.addEventListener("input", (e) => {
      state.shortcutSearch = e.target.value;
      renderShortcutsGrid();
    });

    document.getElementById("toolPricingSelect")?.addEventListener("change", (e) => {
      state.toolPricing = e.target.value;
      renderToolsGrid();
    });
    document.getElementById("toolSearchInput")?.addEventListener("input", (e) => {
      state.toolSearch = e.target.value;
      renderToolsGrid();
    });

    document.getElementById("openCompareModalBtn")?.addEventListener("click", openCompareToolsModal);
    document.getElementById("clearCompareBtn")?.addEventListener("click", () => {
      state.compareToolIds = [];
      updateCompareFloatingBar();
      renderToolsGrid();
    });

    document.getElementById("openCmdPaletteBtn")?.addEventListener("click", openCommandPaletteModal);
    document.getElementById("openBookmarksBtn")?.addEventListener("click", openBookmarksModal);
    document.getElementById("startShortcutQuizBtn")?.addEventListener("click", openShortcutQuizModal);

    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openCommandPaletteModal();
      } else if (e.key === "Escape") {
        closeModal();
      }
    });
  }

  function bootstrap() {
    renderSharedLayout();
    const page = document.body.dataset.page || "home";

    if (page === "home") {
      renderHomePage();
    } else if (page === "blog") {
      renderBlogPage();
    } else if (page === "post") {
      renderSinglePostPage();
    } else if (page === "tips") {
      renderTipCategoryTabs();
      renderTipsGrid();
    } else if (page === "shortcuts") {
      renderShortcutAppTabs();
      syncOsButtons();
    } else if (page === "prompts") {
      renderVisualPromptBuilder();
      renderPromptsGrid();
    } else if (page === "tools") {
      renderAiLeaderboard();
      renderToolCategoryTabs();
      renderToolsGrid();
    }

    initEvents();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
