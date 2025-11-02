## Playwright là gì?

- **Playwright** là một framework dùng để tự động hóa kiểm thử (test automation) cho web.
- **Ưu điểm:**
  - **Cross-browser:**
    - Hỗ trợ nhiều trình duyệt: Chrome, Edge, Firefox, Safari,...
    - Hỗ trợ nhiều phiên bản trình duyệt khác nhau.
  - **Cross-platform:**
    - Code một lần, chạy được trên Windows, Linux, MacOS.
  - **Tính năng nổi bật:**
    - Auto waiting, auto-retry assertion giúp giảm hiện tượng test "lúc pass, lúc fail" (flaky).
  - **Báo cáo (report):**
    - Hiển thị đầy đủ pass/fail theo từng trình duyệt.
    - Có thể xem chi tiết từng bước: gọi API nào, response là gì, ứng với dòng code nào.
  - **Code gen:**
    - Cho phép thao tác sinh tự động ra code test theo hành động của người dùng trên trình duyệt.

---

## NVM - Node Version Manager

- **NVM** là công cụ giúp quản lý nhiều phiên bản NodeJS trên cùng một máy.
- **NodeJS** là môi trường chạy code JavaScript ngoài trình duyệt, thường dùng để phát triển backend và tools.
- **Cài đặt NodeJS:**
  - Cách 1: Cài trực tiếp NodeJS vào máy
  - Cách 2 (_nên dùng_): Cài qua NVM để dễ chuyển đổi giữa nhiều phiên bản NodeJS (phù hợp khi làm nhiều dự án với yêu cầu Node khác nhau).

---

## Git & GitHub

### Cấu hình Git (các lệnh mặc định)

- Đặt tên người dùng (username):
  ```bash
  git config --global user.name "<tên>"
  ```
- Đặt email (địa chỉ email):
  ```bash
  git config --global user.email "<email>"
  ```
- Đặt nhánh mặc định:
  ```bash
  git config --global init.defaultBranch main
  ```
  > _Nếu muốn config riêng cho từng repo, bỏ `--global` trong lệnh._

---

### Kết nối với GitHub (thông qua SSH Key)

- **Mục đích:** Liên kết quá trình xác thực giữa máy tính cá nhân (private key `id_rsa`) với GitHub online (public key `id_rsa.pub`) bằng SSH.
- **SSH Key là gì?**
  - Một cặp khóa dùng cho xác thực bảo mật:
    - `id_rsa`: Khóa bí mật, giữ ở máy cá nhân (không chia sẻ).
    - `id_rsa.pub`: Khóa công khai (có thể gửi cho bên thứ ba như GitHub).
  - Lưu tại thư mục `~/.ssh` (`~` là thư mục home của user).
- **Tạo SSH Key:**
  ```bash
  ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
  ```
  - Có thể dùng mặc định vị trí lưu, không cần đặt mật khẩu để tiện sử dụng.
  - Nếu key đã tồn tại thì không tạo lại (tránh ghi đè làm hỏng liên kết với repo cũ).
- **Lấy nội dung public key để thêm vào GitHub:**
  ```bash
  cat ~/.ssh/id_rsa.pub
  ```
  - Copy nội dung này và dán vào mục thiết lập SSH Key trên GitHub.
