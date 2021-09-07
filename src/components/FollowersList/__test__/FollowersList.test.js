import {render, screen, fireEvent} from "@testing-library/react";
import FollowersList from "../FollowersList";
import {BrowserRouter} from "react-router-dom";


const MockFList = () => {
   return (
       <BrowserRouter>
          <FollowersList/>
       </BrowserRouter>
   );
};

describe('Async testing', () => {
   it('Renders Folowers on the screen', async () => {
      render(<MockFList/>);
      // screen.debug();
      const contactElArr = await screen.findAllByTestId(/contact-el/);
      expect(contactElArr).not.toHaveLength(0);
      expect(contactElArr).toHaveLength(1);
      // expect(contactElArr).toBeInTheDocument();
   });

   it('Renders One Follower card on the screen', async () => {
      render(<MockFList/>);
      const contactEl = await screen.findByTestId(/contact-el-0/);
      expect(contactEl).toBeInTheDocument();
      screen.debug();
   });
});