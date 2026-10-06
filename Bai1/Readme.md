Bài 1: Khôi phục commit đã mất bằng Git Reflog


Bài 1: Khôi phục commit đã mất bằng Git Reflog
Mục tiêu
Hiểu được cách Git lưu trữ lịch sử hoạt động cục bộ thông qua Reflog.
Sử dụng thành thạo lệnh git reflog để truy vết các tham chiếu commit cũ.
Khôi phục thành công một commit đã bị xóa mất khỏi nhánh làm việc sau khi thực thi lệnh reset hard.
Yêu cầu
Bối cảnh: Học viên vô tình chạy lệnh git reset --hard HEAD~1 trên repository cục bộ, khiến cho commit quan trọng nhất chứa mã nguồn vừa chỉnh sửa bị biến mất và không hiển thị trên git log.
Ràng buộc: Không được viết lại code thủ công, bắt buộc phải dùng cơ chế Reflog của Git để kéo lại commit trạng thái cũ.
Kiểm tra
Lệnh kiểm tra:
Xem log lịch sử commit hiện tại:
git log --oneline

Xem nhật ký tham chiếu Reflog:
git reflog

Kết quả mong đợi:
Lịch sử git log khôi phục lại đúng commit có tiêu đề và nội dung ban đầu (trước khi bị reset).
Hướng dẫn nộp bài
Đường dẫn trên GitHub: homework/session_05/ex1/
Cơ chế nộp: Học viên nộp tệp báo cáo README.md mô tả từng bước thực hiện từ khi phát hiện mất commit, chạy lệnh tra cứu reflog đến khi khôi phục thành công bằng lệnh checkout hoặc reset.
Gợi ý/Bệ đỡ
Khởi tạo một dự án thử nghiệm, tạo file feature.txt có nội dung Day la tinh nang quan trong.
Commit thay đổi: git add . và git commit -m "Them tinh nang quan trong".
Giả lập lỗi bằng cách lùi commit và xóa sạch working directory:
git reset --hard HEAD~1

Kiểm tra git log để xác nhận commit đã biến mất.
Tra cứu reflog để tìm mã hash của commit vừa bị xóa:
git reflog

Kết quả hiển thị dạng:

e3a5b2c HEAD@{1}: commit: Them tinh nang quan trong

Khôi phục lại commit đó về nhánh hiện tại:
git reset --hard e3a5b2c

(Thay e3a5b2c bằng mã hash thật tìm được trong reflog của bạn).