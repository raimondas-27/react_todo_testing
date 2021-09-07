import {render, screen, fireEvent} from "@testing-library/react";
import Todo from "../Todo";
import {BrowserRouter} from "react-router-dom";

const MockTodo = () => {
   return <BrowserRouter>
      <Todo>
         <MockTodo/>
      </Todo>
   </BrowserRouter>
}

function addTodo(todoArr) {
   const inputEl = screen.getByPlaceholderText(/Add a new task/);
   const addBtn = screen.getByText("Add")
   todoArr.forEach((todo) => {
      fireEvent.change(inputEl, {target: {value: todo}});
      // paspaudziam mygtuka
      fireEvent.click(addBtn);
   });
}


const mockedFunction = jest.fn()

describe("Todo tests", () => {
   test("it should add single todo task to todoList", () => {
      render(<MockTodo setTodos={mockedFunction} todos={[]}/>)
      const inputEl = screen.getByPlaceholderText(/Add a new task/);
      fireEvent.change(inputEl, {
         target: {value: "Do sports on Sunday"}
      })
      const addBtn = screen.getByText("Add")
      fireEvent.click(addBtn);
      const todoEl = screen.getByText("Do sports on Sunday");
      expect(todoEl).toBeInTheDocument();
      expect(todoEl).toHaveClass("todo-item");
   })

   test("it should add multiple todos tasks to todoList", () => {
      render(<MockTodo setTodos={mockedFunction} todos={[]}/>)
      const inputEl = screen.getByPlaceholderText(/Add a new task/);
      fireEvent.change(inputEl, {
         target: {value: "Do sports on Sunday"}
      })
      const addBtn = screen.getByText("Add")
      fireEvent.click(addBtn);
      fireEvent.change(inputEl, {
         target: {value: "Play piano"}
      })
      fireEvent.click(addBtn);
      fireEvent.change(inputEl, {
         target: {value: "Go see friends"}
      })
      fireEvent.click(addBtn);
      // const firstTodoEl = screen.getByText("Do sports on Sunday");
      // const secondTodoEl = screen.getByText("Play piano");
      // const thirdTodoEl = screen.getByText("Go see friends");
      // expect(firstTodoEl).toBeInTheDocument();
      // expect(secondTodoEl).toBeInTheDocument();
      // expect(thirdTodoEl).toBeInTheDocument();
      const todoAddedArr = screen.getAllByTestId("main-todos")
      expect(todoAddedArr).toHaveLength(3);
   })

   test("it should add multiple todos task with cycle", () => {
      render(<MockTodo/>);
      addTodo(["Do sports on Sunday", "Play piano", "Go see friends"])
      const todoAddedArr = screen.getAllByTestId('main-todos');
      // expektinam rasti ivesta reiksme todo liste
      // Assert
      expect(todoAddedArr).toHaveLength(3);
   })

   test("task should not have completed class when added to list", () => {
      // irasom reiksme
      //mygtuko paspaudimo
      //pridejomo i sarasa
      // pasiziurim i klase
      render(<MockTodo/>);
      addTodo(['Do sports on Sunday']);
      const todoAddedEl = screen.getByText('Do sports on Sunday');
      // expektinam rasti ivesta reiksme todo liste
      // Assert
      expect(todoAddedEl).not.toHaveClass('todo-item-active');
   })

   test("task should be gray when clicked(add a class)", () => {
      // irasom reiksme
      //mygtuko paspaudimo
      //pridejomo i sarasa
      // pasiziurim i klase
      render(<MockTodo/>);
      addTodo(['Do sports on Sunday']);
      const todoAddedEl = screen.getByText('Do sports on Sunday');
      // expektinam rasti ivesta reiksme todo liste
      // Assert
      fireEvent.click(todoAddedEl);
      expect(todoAddedEl).toHaveClass('todo-item-active');
   })
})