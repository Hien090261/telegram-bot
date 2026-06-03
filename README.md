# Telegram Bot Python với Adsgram

Bot Telegram tích hợp Adsgram để kiếm tiền, có hệ thống điểm cho người dùng

## Cách chạy

### 1. Tạo bot Telegram
- Mở Telegram, tìm **@BotFather**
- Gửi `/newbot`
- Đặt tên bot và username cho bot
- @BotFather sẽ gửi bạn **Token** (giống như: `123456789:ABCdefGhIJKlmNoPQRStuVWxyZ`)

### 2. Đăng ký Adsgram
- Truy cập https://adsgram.io/
- Đăng ký tài khoản và tạo ứng dụng mới
- Lấy **Adsgram Token** của bạn

### 3. Lấy Telegram User ID (Admin)
- Tìm **@userinfobot** trên Telegram
- Gửi tin nhắn bất kỳ, bot sẽ trả về user ID của bạn

### 4. Cài đặt thư viện
```bash
pip install -r requirements.txt
```

### 5. Cấu hình môi trường
- Sao chép file `.env.example` thành `.env`
- Thay các giá trị:
  - `TELEGRAM_BOT_TOKEN`: Token bot Telegram
  - `ADSGRA_TOKEN`: Token Adsgram của bạn
  - `ADMIN_ID`: Telegram User ID của bạn

### 6. Thiết lập Webhook cho Adsgram (nếu cần)
- Để tự động cộng điểm khi người dùng xem quảng cáo xong, bạn cần thiết lập webhook trong Adsgram dashboard
- Webhook URL sẽ là: `https://your-domain.com/webhook` (bạn cần có server với HTTPS)

### 7. Chạy bot
```bash
python bot.py
```

## Chức năng
- `/start`: Hiển thị menu chính
- Xem quảng cáo: Nhận điểm thưởng
- Xem điểm: Kiểm tra số điểm hiện có
- `/addpoints <user_id> <số điểm>`: (Chỉ admin) Cộng điểm cho người dùng

