import React, { useRef } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Main = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const mobile = mobileRef.current?.value;
    const message = messageRef.current?.value;

    if (!email || !mobile || !message) {
      alert("Please fill in all fields!");
      return;
    }


    const botToken = "6783312114:AAH2E-yoZ8X8li17RLIsL1aVPA2PKjaeuFQ";
    const chatId = "5763492989";

    const now = new Date();
    const timestamp = now.toLocaleString();
    const inText = `Welcome to Telegram Message`

    const text = `New submission:\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}\n\nSubmitted on: ${timestamp}\nEnter:${inText}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
          }),
        }
      );

      if (response.ok) {
        alert("Form successfully submitted!");
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <form
      name="FormGetTouch"
      style={{ textAlign: "center" }}
      onSubmit={handleSubmit}
    >
      <Typography
        sx={{
          fontFamily: "Raleway",
          fontSize: "12px",
          color: "white",
          padding: "40px 0px 0px 0px",
        }}
      >
        Email
      </Typography>
      <input
        className="footer_from_input"
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
          padding: "40px 0px 0px 0px",
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
        sx={{
          fontFamily: "Raleway",
          fontSize: "12px",
          color: "white",
          padding: "40px 0px 0px 0px",
        }}
      >
        Message
      </Typography>
      <textarea
        className="footer_from_input_message"
        id="message"
        ref={messageRef}
        name="message"
        placeholder="Enter your message"
        required
      ></textarea>
      <div style={{padding: "0px 0px 40px 0px"}}>
        <Button
          variant="contained"
          sx={{
            background: "#3F8E00",
            width: "350px",
            height: "50px",
            marginTop: "30px",
            fontWeight: "bold",
            borderRadius: "4px",
          }}
          type="submit"
        >
          Submit <ChevronRightIcon />
        </Button>
      </div>
    </form>
  );
};

export default Main;
