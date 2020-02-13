import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import axios from 'axios';

test("Find the header", async () => {
    // render our React app into an in-memory DOM so we can test against it
    const wrapper = rtl.render(<App />);
    const title = await wrapper.findByAltText(/logo/i);
  
    expect(title).toBeVisible().toHaveAttribute("src");
  });