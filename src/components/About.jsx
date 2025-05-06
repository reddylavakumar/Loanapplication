import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  const instruction = [
    {
      id: 1,
      text: "Push the entire project to a public GitHub repository.",
    },
    {
      id: 2,
      text: "Commit regularly with clear messages after completing each feature.",
    },
    {
      id: 3,
      text: "Use the provided EMI formula to perform calculations.",
    },
    {
      id: 4,
      text: "Use Context API for global state management (e.g. theme, currency).",
    },
    {
      id: 5,
      text: "Create custom React hooks for reusable logic (e.g. EMI calculation, fetching exchange rates).",
    },
    {
      id: 6,
      text: "Integrate the ExchangeRate API for live currency conversion.",
    },
    {
      id: 7,
      text: "Ensure the app is fully responsive on all screen sizes.",
    },
    {
      id: 8,
      text: "Implement both light and dark modes using Material UI's theming system.",
    },
    {
      id: 9,
      text: "Add a 404 Not Found page for unmatched routes.",
    },
    {
      id: 10,
      text: "Handle runtime errors gracefully by showing an Error Page.",
    },
    {
      id: 11,
      text: "Deploy the project on any platform (e.g. Vercel, Netlify, GitHub Pages).",
    },
    {
      id: 12,
      text: "Add the live deployment link in the About section of your GitHub repository.",
    },
  ];

  const features = [
    {
      id: 13,
      text: "Loan EMI calculation using standard financial formulas.",
    },
    {
      id: 14,
      text: "Dynamic amortization schedule table with monthly breakdown.",
    },
    {
      id: 15,
      text: "Real-time currency conversion of EMI using a live exchange rate API.",
    },
    {
      id: 16,
      text: "Paginated exchange rate table for 160+ currencies.",
    },
    {
      id: 17,
      text: "Dark/Light mode toggle for a customizable experience.",
    },
    {
      id: 18,
      text: "Collapsible header navigation on mobile screens.",
    },
    {
      id: 19,
      text: "Fully responsive UI built with Material UI.",
    },
  ];

  const technologies = [
    {
      id: 20,
      text: "React (Hooks, Routing, Context API).",
    },
    {
      id: 21,
      text: "Material UI for styling and responsive components.",
    },
    {
      id: 22,
      text: "Axios for API calls.",
    },
    {
      id: 23,
      text: "Exchange Rate API for real-time currency conversion.",
    },
  ];

  const purpose = [
    {
      id: 24,
      text: "React fundamentals (state, props, hooks).",
    },
    {
      id: 25,
      text: "Component structure and code reusability.",
    },
    {
      id: 26,
      text: "Third-party API integration and live data rendering.",
    },
    {
      id: 27,
      text: "Working with tables, lists, and pagination.",
    },
    {
      id: 28,
      text: "Theme customization (dark/light mode toggle).",
    },
    {
      id: 29,
      text: "Error handling and graceful UI fallbacks.",
    },
    {
      id: 30,
      text: "Responsive design and collapsible mobile header navigation (in mobile view).",
    },
  ];

  return (
    <div>
      <div>
        <h1>About This App</h1>
        <p>
          This Loan Calculator App is a modern, single-page web application
          built using React JS and Material Ul. It allows users to calculate
          loan EMIS (Equated Monthly Installments), view a detailed amortization
          schedule, and see real-time currency conversions of their EMI using
          live exchange rates.
        </p>
      </div>
      <div>
        <h2>Instructions for Candidates</h2>
        <div>
          <p>
            Please follow these instructions to complete and submit your
            project:
          </p>
          <ul>
            {instruction?.map((item) => {
              return (
                <>
                  <li key={item?.id}>{item?.text}</li>
                </>
              );
            })}
          </ul>
          <p>
            Your final GitHub repository should include a live demo link, and
            your code should be readable, modular, and well-structured.
          </p>
        </div>
      </div>
      <div>
        <h2>Features</h2>
        <div>
          <ul>
            {features?.map((item) => {
              return (
                <>
                  <li key={item?.id}>{item?.text}</li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <h2>Technologies Used</h2>
        <div>
          <ul>
            {technologies?.map((item) => {
              return (
                <>
                  <li key={item?.id}>{item?.text}</li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <h2>EMI Formula Used</h2>
        <p>
          The EMI (Equated Monthly Installment) is calculated using the standard
          formula:
        </p>
        <p>Where: </p>
        <ul>
          <li>P = Principal loan amount</li>
          <li>R = Monthly interest rate (annual rate / 12 / 100)</li>
          <li> N = Loan duration in months</li>
        </ul>
      </div>
      <div>
        <h2>Currency Conversion API</h2>
        <p>
          This app integrates with the free tier of the{" "}
          <Link>ExchangeRate-API</Link>
          to fetch live exchange rates.
        </p>
        <p>
          API Endpoint Example: https://v6.exchangerate-api.com/v6/YOUR API KEY/
          latest/USD
        </p>
        <p>
          You must register and obtain a free API key to use this endpoint.
          Then, replace YOUR API KEY in the app code with your actual key.
        </p>
      </div>
      <div>
        <h2>Purpose of This App</h2>
        <p>
          This project is designed to assess a candidate's React development
          skills, including:
        </p>
        <div>
          <ul>
            {purpose?.map((item) => {
              return (
                <>
                  <li key={item?.id}>{item?.text}</li>
                </>
              );
            })}
          </ul>
        </div>
        <p>
          For any currency conversion feature to work, make sure the API key is
          valid and the network allows external API calls.
        </p>
      </div>
    </div>
  );
};
