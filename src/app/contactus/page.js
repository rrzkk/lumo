"use client";
import React from "react"; // Import useState

import BackgroundThree from "../components/backGroundThree";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles"; // Import useTheme hook
import { useForm } from "@formspree/react";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);
  const theme = useTheme(); // Get the current theme

  // const [state, handleSubmit] = useForm("xoqzpbkl");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div
        style={{
          position: "absolute",
          height: "300vh",
          width: "100vw",
          zIndex: "0",
        }}
      >
        <BackgroundThree />
      </div>
      <div className="contact-us" style={{ zIndex: "500" }}>
        <div className="contact-us-inner flex flex-col sm:flex-row">
          <div className="basis-1/4 flex justify-center flex-row items-center">
            <div style={{ zIndex: 800 }}>
              <PhoneAndroidIcon
                onClick={(event) => (window.location.href = "tel:+61450981877")}
                style={{ margin: "10px" }}
                fontSize="large"
              ></PhoneAndroidIcon>

              <EmailIcon
                onClick={(event) =>
                  (window.location.href = "mailto:lumosonedenison@gmail.com")
                }
                style={{ margin: "10px" }}
                fontSize="large"
              ></EmailIcon>
              <InstagramIcon
                onClick={(event) =>
                  (window.location.href =
                    "https://www.instagram.com/lumos1denison/")
                }
                style={{ margin: "10px" }}
                fontSize="large"
              ></InstagramIcon>
            </div>
          </div>
          <div className="basis-3/4 flex">
            <form
              action="https://formspree.io/f/myyqadyo"
              method="POST"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <a
                style={{
                  zIndex: 800,
                  fontSize: "20px",
                  lineHeight: "1.6",
                  textAlign: "justify",
                  fontWeight: "bolder",
                }}
              >
                Contact
              </a>
              <TextField
                required
                id="outlined-required"
                name="fullName"
                label="Full Name"
                onChange={(event) => {
                  const value = event.target.value;
                  setFullName(value);
                  setIsNameValid(
                    value.trim().length >= 2 && value.trim().length <= 100
                  );
                }}
                error={!isNameValid}
                helperText={
                  !isNameValid
                    ? "Name length be between 2 and 100 charactors"
                    : ""
                }
                className="contactInput dark:invert"
                sx={(theme) => ({
                  "& .MuiInputLabel-root": {
                    color: "black", // Set label text color to black
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    // Set default border color and thickness
                    borderColor: "black !important", // Override default styles
                    borderWidth: 2, // Adjust the default border thickness here
                    ...(theme.palette.mode === "dark" && {
                      // Change border color and thickness in dark mode
                      borderColor: "white !important", // This will be visible when 'dark:invert' is applied
                      borderWidth: 3, // Increase thickness in dark mode
                    }),
                  },
                })}
              />
              <TextField
                required
                id="outlined-required"
                name="email"
                label="Email"
                onChange={(event) => {
                  const value = event.target.value;
                  setEmail(value);
                  setIsEmailValid(emailRegex.test(value));
                }}
                error={!isEmailValid}
                helperText={!isEmailValid ? "Invalid email format" : ""}
                className="contactInput dark:invert"
                sx={(theme) => ({
                  "& .MuiInputLabel-root": {
                    color: "black", // Set label text color to black
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    // Set default border color and thickness
                    borderColor: "black !important", // Override default styles
                    borderWidth: 2, // Adjust the default border thickness here
                    ...(theme.palette.mode === "dark" && {
                      // Change border color and thickness in dark mode
                      borderColor: "white !important", // This will be visible when 'dark:invert' is applied
                      borderWidth: 3, // Increase thickness in dark mode
                    }),
                  },
                })}
              />
              <TextField
                required
                id="outlined-multiline-static"
                name="message"
                label="Message"
                multiline
                rows={4}
                onChange={(event) => {
                  const value = event.target.value;
                  setMessage(value);
                  setIsMessageValid(
                    value.trim().split(" ").length >= 2 &&
                      value.trim().split(" ").length <= 50
                  );
                }}
                error={!isMessageValid}
                helperText={
                  !isMessageValid
                    ? "Message must be between 2 and 100 words"
                    : ""
                }
                className="contactInput dark:invert"
                sx={(theme) => ({
                  "& .MuiInputLabel-root": {
                    color: "black", // Set label text color to black
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    // Set default border color and thickness
                    borderColor: "black !important", // Override default styles
                    borderWidth: 2, // Adjust the default border thickness here
                    ...(theme.palette.mode === "dark" && {
                      // Change border color and thickness in dark mode
                      borderColor: "white !important", // This will be visible when 'dark:invert' is applied
                      borderWidth: 3, // Increase thickness in dark mode
                    }),
                  },
                })}
              />
              <Button
                variant="contained"
                color="primary"
                style={{ background: "black", marginTop: "8vh" }}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
