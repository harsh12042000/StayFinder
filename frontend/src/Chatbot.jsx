import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import avatar from "./img.png";

const steps = [
  {
    id: "0",
    message: "Welcome to Stay Finder!",
    trigger: "username",
  },
  {
    id: "username",
    message: "Could you please tell me your name?",
    trigger: "getName",
  },
  {
    id: "getName",
    user: true,
    trigger: "mainMenu",
  },
  {
    id: "mainMenu",
    message: "Hi {previousValue}, how may I assist you today?",
    trigger: "options",
  },
  {
    id: "greet",
    message: "Hello, how can we assist you today?",
    trigger: "options",
  },
  {
    id: "options",
    options: [
      { value: "bookHotel", label: "Book a Hotel", trigger: "bookHotel" },
      { value: "aboutus", label: "About Us", trigger: "aboutus" },
      { value: "contactUs", label: "Contact Us", trigger: "contactUs" },
      {
        value: "exploreMore",
        label: "Explore More Options",
        trigger: "exploreMore",
      },
    ],
  },
  {
    id: "bookHotel",
    message:
      "Sure, we can help you with hotel bookings. You can easily book a hotel by clicking on the 'Book Now' button and entering your details.",
    trigger: "options",
  },
  {
    id: "aboutus",
    component: (
      <div>
        Know more about our work and team.
        <br />
        <a href="http://localhost:3000/about">
          Click here 
        </a>
      </div>
    ),
    asMessage: true,
    trigger: "options",
  },
  {
    id: "contactUs",
    component: (
        <span>
          For any issues, please contact our support at{" "}
          <a href="mailto:stayfinder9@gmail.com">stayfinder9@gmail.com</a>.
        </span>
      ),
    trigger: "options",
  },
  {
    id: "exploreMore",
    message: "Great! Here are more options for you:",
    trigger: "exploreMoreOptions",
  },
  {
    id: "exploreMoreOptions",
    options: [
    //   { value: "facilities", label: "Display Facilities", trigger: "facilities" },
      {
        value: "listYourHotel",
        label: "List Your Hotel",
        trigger: "listYourHotel",
      },
      {
        value: "backToOptions",
        label: "Back to Main Options",
        trigger: "options",
      },
    ],
  },
  {
    id: "listYourHotel",
    component: (
      <div>
        Do you own a hotel? List your hotel with us and reach a wider audience.
        Click the link below to get started.
        <br />
        <a href="http://localhost:3000/listyourhotel">
          Click here to list your hotel
        </a>
      </div>
    ),
    asMessage: true,
    trigger: "options",
  },
];

const theme = {
  background: "#e1e9f0",
  headerBgColor: "#8b459e",
  headerFontSize: "20px",
  botBubbleColor: "#8b459e",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#d9b6ff",
  userFontColor: "black",
};

const config = {
  botAvatar: avatar,
  floating: true,
};

function StayFinderChatbot() {
  return (
    <div className="floating-chatbot">
      <ThemeProvider theme={theme}>
        <ChatBot headerTitle="Stay Finder Support" steps={steps} {...config} />
      </ThemeProvider>
    </div>
  );
}

export default StayFinderChatbot;
