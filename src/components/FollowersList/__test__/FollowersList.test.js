import {render, screen, fireEvent} from "@testing-library/react";
import FollowersList from "../FollowersList";
import {BrowserRouter} from "react-router-dom";


const MockFollowersList = () => {
   return <BrowserRouter>
      <FollowersList/>
   </BrowserRouter>
}

describe("Async testing FollowersList tests", () => {
   test("followersList test renders follower on the screen",async () => {
      render(<MockFollowersList/>)
      const contactEl = await screen.findAllByTestId("contact-el")
      expect(contactEl).not.toHaveLength(0);
   })
})