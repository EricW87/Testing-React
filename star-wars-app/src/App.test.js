import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { fireEvent } from "@testing-library/react";

test("Find the header", async () => {
    // render our React app into an in-memory DOM so we can test against it
    const wrapper = rtl.render(<App />);
    const header = await wrapper.findByAltText(/logo/i);
  
    expect(header).toHaveAttribute("src", "https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png");
    expect(header).toBeVisible();
  });


 test("Check Buttons", async() => {
    const wrapper = rtl.render(<App />);
    const luke =  await wrapper.findByText(/luke/i);
    //expect(luke).toBeTruthy();

    const next = await wrapper.findByText(/next/i);
    
    fireEvent.click(next);
    
    const anakin =  await wrapper.findByText(/anakin/i);
    expect(anakin).toBeTruthy();
    
  });
