const request = require("supertest");
const express = require("express");
const todoRoutes = require('../api/v1/controllers/todoControllers.js');

// Mock the database service
jest.mock("../api/v1/services/todoServices.js", () => ({
  getAllTodos: jest.fn().mockResolvedValue({
    success: true,
    data: [{ id: 1, title: "Test Todo", description: "Test Description" }],
  }),
  addTodo: jest.fn().mockResolvedValue({
    success: true,
    data: { id: 2, title: "New Todo", description: "Test Description" },
  }),
  deleteTodo: jest.fn().mockResolvedValue({
    success: true,
    data: { id: 1 },
  }),
}));

const app = express();
app.use(express.json());
app.use("/api/v1/todos", todoRoutes);

describe("To-Do API Tests", () => {
  it("should fetch all todos", async () => {
    const res = await request(app).get("/api/v1/todos/fetchAll");
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it("should add a new todo", async () => {
    const newTodo = { title: "New Todo", description: "Test Description" };
    const res = await request(app).post("/api/v1/todos/addTodo").send(newTodo);
    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.title).toBe("New Todo");
  });

  it("should delete a todo", async () => {
    const res = await request(app).delete("/api/v1/todos/delete/1");
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });
});
