import {render, screen, fireEvent} from "@testing-library/react";
import AddInput from "../AddInput";


const mockedFunction = jest.fn()


describe("AddInput tests", () => {
   test("should render input", () => {
      render(<AddInput setTodos={() => {
      }} todos={[]}/>)
      const inputEl = screen.getByPlaceholderText(/Add a new task/);
      expect(inputEl).toBeInTheDocument()
   })

   test("your written input should appear in the input field", () => {
      //arrange
      render(<AddInput setTodos={mockedFunction} todos={[]}/>)
      const inputEl = screen.getByPlaceholderText(/Add a new task/);
      //act
      //du argumentai : kokiam el padaryti change, ir koks bus change
      fireEvent.change(inputEl,{
         target : {value : "Do sports on Sunday"}
      })
      //assert
      expect(inputEl.value).toBe("Do sports on Sunday")
   })

   test("it should clear the input fiend when pressed add todo", () => {
      //ar kai mes paspaudziam mygtuka inputas issivalo
      render(<AddInput setTodos={mockedFunction} todos={[]}/>)
      const addBtn = screen.getByText("Add");
      const inputEl = screen.getByPlaceholderText(/Add a new task/);
      fireEvent.change(inputEl, {
         target : {value : "Do sports on Sunday"}
      })
      fireEvent.click(addBtn);
      expect(inputEl.value).toBe("")
   })

})