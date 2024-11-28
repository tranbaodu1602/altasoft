import React, { useEffect, useState } from "react";
import "./OTPComponent.css";
import contentImg from "../../assets/Img/FrameOTP.png";

const OTPComponent = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimerActive, setIsTimerActive] = useState(true);

  useEffect(() => {
    let timer;
    if (isTimerActive && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsTimerActive(false);
    }
    return () => clearInterval(timer);
  }, [timeLeft, isTimerActive]);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (/[^0-9]/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleResend = () => {
    setIsTimerActive(true);
    setTimeLeft(30);
    setOtp(["", "", "", ""]);
  };
  return (
    <div className="container-content">
      <div className="box1">
        <div className="box1_1">KHÁM PHÁ PHONG CÁCH</div>
        <div className="box1_2">Thuần Khiết</div>
        <div className="box1_3">CÙNG AQUAFINA A.I</div>
        <div className="box1_4">
          Nhận <strong>thông điệp tỏa sáng</strong> mỗi ngày
        </div>
      </div>
      <div className="box2">
        <img src={contentImg} alt="" />
      </div>
      <div className="box3">
        Tổng quà giá trị hơn <strong>200 triệu đồng</strong>
      </div>
      <div className="otp-box">
        <div className="boxotp1">NHẬP OPT</div>
        <div className="boxotp2">
          Một OTP vừa được gửi vào số <strong>033451552</strong>
        </div>
        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(e, index)}
              className="otp-input"
            />
          ))}
        </div>
        <div className="boxotp3">
          <button>Xác nhận</button>
        </div>
        <div className="timer">
          <span>
            Mã sẽ dửi lại trong vòng <strong>{timeLeft}s</strong>
          </span>
        </div>
        <div className="resend">
          {timeLeft === 0 ? (
            <button onClick={handleResend} className="resend-btn">
              Gửi lại mã
            </button>
          ) : (
            <div className="btn-off">Gửi lại mã</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OTPComponent;
