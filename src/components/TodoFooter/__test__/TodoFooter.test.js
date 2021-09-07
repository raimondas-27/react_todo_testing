import {render, screen} from "@testing-library/react";
import TodoFooter from "../TodoFooter";

import React from "react";
import {BrowserRouter} from "react-router-dom";


const MockedComponent = ({numberOfIncompleteTasks}) => {
   return (
       <BrowserRouter>
          <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
       </BrowserRouter>
   )
}


describe('Footer tests', () => {
  it('Should render correct amount of tasks', () => {
    //Arrange
    render(<MockedComponent numberOfIncompleteTasks={5} />);

    // Assert
    const paragEl = screen.getByText(/5 tasks left/i);
    expect(paragEl).toBeInTheDocument();
    expect(paragEl).toBeVisible();
  });

  it('Should render correct single item ending', () => {
    //Arrange
    render(<MockedComponent numberOfIncompleteTasks={1} />);

    // Assert
    const paragEl = screen.getByText(/1 task left/i);
    expect(paragEl).toBeInTheDocument();
  });

  it('Should render correct html el p', () => {
    //Arrange
    render(<MockedComponent numberOfIncompleteTasks={1} />);

    // Assert
    const paragEl = screen.getByText(/1 task left/i);
    expect(paragEl).toContainHTML('p');
  });
})