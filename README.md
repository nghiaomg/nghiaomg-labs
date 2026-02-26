# 🚀 nghiaomg-labs

Một không gian lưu trữ các dự án kỹ thuật được chọn lọc, thể hiện tư duy thiết kế hệ thống, các quyết định kiến trúc và những sản phẩm đạt chuẩn production.

## 📌 Tổng Quan

**nghiaomg-labs** không đơn thuần là một bản CV.

Đây là một trung tâm dự án nhắm tới các nhà phát triển, trình bày các hệ thống thực tế, các quyết định về kiến trúc phần mềm, những chiến lược tối ưu hóa hiệu suất và chiều sâu kỹ thuật đằng sau mỗi sản phẩm. Kho lưu trữ này là nơi tập hợp các dự án tiêu biểu thuộc nhiều lĩnh vực:

- **Backend Systems:** Kiến trúc backend có khả năng mở rộng.
- **High-performance APIs:** API hiệu suất cao, chịu tải tốt.
- **Desktop Applications:** Trải nghiệm desktop mượt mà, tối ưu tài nguyên.
- **Trading Tools:** Công cụ giao dịch độ trễ thấp, tính toán tức thời.
- **Automation Systems:** Tự động hóa quá trình mạnh mẽ.
- **SaaS Prototypes:** Mô hình phần mềm dạng dịch vụ hoàn chỉnh.

**Mục tiêu cốt lõi:** Thể hiện sự trưởng thành trong tư duy kỹ thuật hệ thống, vượt ra ngoài việc chỉ xây dựng giao diện người dùng (UI) đơn thuần.

## 🧠 Triết Lý Kỹ Thuật

Dự án này tuân thủ 4 nguyên tắc cốt lõi:

1. **System Thinking First:** Tư duy hệ thống là ưu tiên bứt thiết.
2. **Performance Matters:** Hiệu năng là yếu tố sống còn.
3. **Clean Architecture Over Quick Hacks:** Chuẩn mực kiến trúc quan trọng hơn các giải pháp chắp vá nhanh chóng.
4. **Products > Tutorials:** Tạo ra sản phẩm thực tế, không chỉ là những bài hướng dẫn mãnh mún.

## 🏗 Công Nghệ Sử Dụng

### Frontend
- **Framework:** React / Next.js
- **Styling:** TailwindCSS
- **UI Components:** shadcn/ui
- **Data Table:** TanStack Table
- **Animations:** Framer Motion

### Backend (Tùy theo dự án)
- **Node.js** (Express)
- **Golang** (Gin)
- **PHP** (Laravel)
- **Database:** MySQL / MongoDB

### Desktop & DevOps
- **Desktop:** Electron.js
- **Containerization:** Docker
- **Web Server:** Nginx
- **CI/CD:** GitHub Actions

## ✨ Tính Năng Nổi Bật

- 🔎 Cỗ máy phân loại và lọc dự án theo tech stack.
- 📊 Phân tích chi tiết kiến trúc điểm yếu/điểm mạnh của từng dự án.
- 📈 Ghi chú về hiệu năng và theo dõi, phân tích các điểm nghẽn (bottlenecks).
- 📁 Cấu trúc thư mục module hóa một cách gọn gàng, theo tiêu chuẩn production.
- 🌙 Hỗ trợ giao diện Sáng/Tối (Dark/Light mode).
- 🧩 Hệ thống component thiết kế tối giản, tái sử dụng cao.
- 📦 Tích hợp xem trước đoạn mã (Code snippet previews).
- 📖 Tài liệu hóa chi tiết về quá trình ra quyết định kỹ thuật.

## 📂 Cấu Trúc Dự Án
```bash
.
├── app/                # Thư mục chứa App Router của Next.js
├── components/         # Các UI component dùng chung
├── modules/            # Các tính năng được module hóa
├── lib/                # Tiện ích, thư viện & core logic
├── hooks/              # Custom hooks cho các logic tái sử dụng
├── services/           # Lớp kết nối API & Services
├── types/              # Khai báo kiểu định dạng dữ liệu (TypeScript)
└── public/             # Tài nguyên tĩnh
```

**Kiến trúc tuân theo nguyên tắc:**
- Cấu trúc module theo tính năng cụ thể (Feature-based).
- Tách biệt rạch ròi giữa giao diện người dùng và business logic.
- Khả năng tái sử dụng triệt để ở service layer.
- Quản lý kiểu dữ liệu tĩnh nghiêm ngặt (Strong typing).

## 📊 Một Số Dự Án Tiêu Biểu

### 1️⃣ Sonna Desktop
Môi trường phát triển cục bộ (local development) hiện đại được xây dựng và thiết kế qua Electron + React.
- **Tập trung:** Tương thích với Windows, quản lý quy trình siêu nhẹ nhàng, kiến trúc plugin có thể mở rộng toàn diện.

### 2️⃣ Trading System Toolkit
Bộ công cụ tùy chỉnh hỗ trợ lướt sóng (scalping) và quản trị rủi ro trên thị trường thực.
- **Tập trung:** Mô phỏng mô hình rủi ro rắc rối, tối ưu hóa tốc độ thực thi lệnh và hiệu quả xử lý dữ liệu dồn dập.

### 3️⃣ Automation & Chrome Extension Tools
Các công cụ tự động hóa thao tác trình duyệt và theo dõi, bảo vệ các yêu cầu HTTP.
- **Tập trung:** Bắt các request tức thời, phân tích và mổ xẻ header cũng như ghi nhận báo cáo hiệu năng.

## ⚙️ Cài Đặt Khởi Chạy

```bash
# 1. Clone repository về thiết bị
git clone https://github.com/nghiaomg/nghiaomg-labs.git

# 2. Di chuyển vào thư mục dự án
cd nghiaomg-labs

# 3. Yêu cầu tải gói phụ thuộc (Sử dụng pnpm)
pnpm install

# 4. Khởi chạy trên môi trường phát triển
pnpm dev
```

## 🚦 Tối Ưu Hiệu Năng

- Tích cực sử dụng **Dynamic imports** để giảm tải dung lượng khi truy cập ban đầu.
- Tối ưu hóa việc chia tách gói xử lý (bundle splitting).
- Chế độ hiển thị tĩnh phía máy chủ (SSR) nhằm vượt qua các bài kiểm tra SEO khắt khe.
- Trạng thái global được tối giản hóa triệt để.
- **Mục tiêu điểm số đánh giá Lighthouse:** 95+

## 🧪 Tiêu Chuẩn Viết Mã (Code Standards)

- Tuân thủ nghiêm ngặt **ESLint + Prettier**.
- Cam kết mã nguồn theo nguyên tắc **Conventional commits**.
- **Atomic commits:** Mỗi commit chứa đựng và giải quyết một và chỉ một mục tiêu/vấn đề.
- Luồng công việc tuân theo tiêu chuẩn **Feature branch**.
- Thông điệp commit buộc phải giải thích rõ ràng **"Tại sao"**, không chỉ đơn giản là "Làm gì".

## 📈 Lộ Trình Phát Triển (Roadmap)

- [ ] Bảng điều khiển phân tích số liệu dự án
- [ ] Dòng thời gian trực quan hóa các commit lịch sử
- [ ] Nơi trưng bày API public để sử dụng và thử nghiệm
- [ ] Đi kèm sơ đồ kiến trúc động phân bố luồng dữ liệu cho từng dự án
- [ ] Bài phân tích chuyên mục (Case study) về các mô hình thiết kế hệ thống chuyên sâu

---

👨‍💻 **Về Tác Giả**

Được phát triển bởi **Nghia**.
Là một Kỹ sư thiên hướng Backend với niềm đam mê vô tận trong việc xây dựng các hệ thống được mở rộng đa quy mô và liên tục theo đuổi nghệ thuật tối ưu hóa hiệu năng đỉnh cao.

> _“Clean systems scale. Hacks collapse.”_ (Hệ thống sach, gọn thì linh hoạt mở rộng. Chắp vá tạm bợ chắc chắn sụp đổ.)
