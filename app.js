// app.js
const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api-error");
const contactsRouter = require("./app/routes/contact.route");

const app = express();

app.use(cors());
app.use(express.json());

// Routes của bạn
app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

app.use("/api/contacts", contactsRouter);

// 404 - Không khớp route nào
app.use((req, res, next) => {
  next(new ApiError(404, "Resource not found"));
});

// Middleware xử lý lỗi TẬP TRUNG (đặt CUỐI CÙNG)
app.use((err, req, res, next) => {
  // Nếu có middleware khác đã gửi headers, chuyển tiếp
  if (res.headersSent) {
    return next(err);
  }
  const status = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

module.exports = app;
