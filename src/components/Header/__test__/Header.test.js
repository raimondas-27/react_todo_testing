import {render, screen} from '@testing-library/react';

import Header from "../Header";

describe("Header tests", () => {
   test('should render text passed as props', () => {
      render(<Header title={"my Header"}/>);
      const headerElement = screen.getByText(/my Header/i);
      expect(headerElement).toBeInTheDocument();
   });

   test("header should be a heading with text", () => {
      //Arrange
      render(<Header title={"my Header"}/>);
      //Act - nera
      //Assert
      const headingElement = screen.getByRole("heading", {
         name: "my Header"
      });
      expect(headingElement).toBeInTheDocument();
   })

//pagal nematoma title
// test('should have a title "second"', () => {
//    render(<Header title={"my Header"}/>);
//    const otherHeading = screen.getByTitle("second")
//    expect(otherHeading).toBeInTheDocument();
// })

//pagal tam skirta test id --nerekomenduojama overusinti

   test("should render main title with id", () => {
      render(<Header title={"my Header"}/>);
      const mainHeading = screen.getByTestId("main-title")
      expect(mainHeading).toBeInTheDocument();
   })
})





