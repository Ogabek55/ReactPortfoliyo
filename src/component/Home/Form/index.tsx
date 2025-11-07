import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import { Typography, CircularProgress } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Main = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleAddClick = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!");

    setLoading(true);

    if (!emailRef.current || !mobileRef.current || !messageRef.current) {
      alert("Form elementlari yuklanmagan!");
      setLoading(false);
      return;
    }

    const email = emailRef.current.value.trim();
    const mobile = mobileRef.current.value.trim();
    const message = messageRef.current.value.trim();

    console.log("Email:", email, "Mobile:", mobile, "Message:", message);

    if (!email || !mobile || !message) {
      alert("Please fill in all fields!");
      setLoading(false);
      return;
    }

    const botToken = "8065769688:AAG1Fm9x6OcxGDqsUnL6v6fhhPOX_qVNXJY";
    const chatId = "5763492989";

    const now = new Date();
    const timestamp = now.toLocaleString();
    const text = `New submission:\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}\n\nSubmitted on: ${timestamp}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text }),
        }
      );

      console.log("Server response:", response);

      if (response.ok) {
        alert("Form successfully submitted!");

        emailRef.current.value = "";
        mobileRef.current.value = "";
        messageRef.current.value = "";

        emailRef.current.focus();
        emailRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }

    setLoading(false);
  };

  return (
    <form
      ref={formRef}
      name="FormGetTouch"
      style={{ textAlign: "center" }}
      onSubmit={handleAddClick}
    >
      <Typography
        sx={{
          fontFamily: "Raleway",
          fontSize: "12px",
          color: "white",
          paddingTop: "40px",
        }}
      >
        Email
      </Typography>
      <input
        id="footer_from_input"
        ref={emailRef}
        type="email"
        placeholder="Please enter your email"
        required
      />

      <Typography
        sx={{
          fontFamily: "Raleway",
          fontSize: "12px",
          color: "white",
          paddingTop: "40px",
        }}
      >
        Mobile
      </Typography>
      <input
        className="footer_from_input"
        ref={mobileRef}
        type="tel"
        placeholder="+1234567891010"
        required
      />

      <Typography
        sx={{ fontFamily: "Raleway", fontSize: "12px", color: "white" }}
      >
        Message
      </Typography>
      <textarea
        className="footer_from_input_message"
        ref={messageRef}
        name="message"
        placeholder="Enter your message"
        required
      ></textarea>

      <div style={{ paddingBottom: "40px" }}>
        <Button
          variant="contained"
          sx={{
            background: "#3F8E00",
            width: "350px",
            height: "50px",
            marginTop: "30px",
            fontWeight: "bold",
            borderRadius: "4px",
            "@media (max-width: 500px)": {
              width: "300px",
              height: "40px",
            },
          }}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={40} sx={{ color: "white" }} />
          ) : (
            <>
              Submit <ChevronRightIcon />
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default Main;
