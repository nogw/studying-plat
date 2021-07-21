import request from 'supertest'
import { app } from '../server'
import db from '../db'

beforeAll(async () => await db.connect())
afterAll(async () => await db.clear())

describe("User route", () => {
  it("should create user", async () => {
    const res = await request(app)
    .post("/user/register")
    .send({
      name: "nogw",
      email: "nogw@gmail.com",
      password: "nogw2001",
      passwordConfirm: "nogw2001"
    })

    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty("message")
  })

  it("should return error if there is a user with the same email", async () => {
    const res = await request(app)
    .post("/user/register")
    .send({
      name: "nogw1",
      email: "nogw@gmail.com",
      password: "nogw.test"
    })

    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty("error")
  })

  it("should log in user account", async () => {
    const res = await request(app)
    .post("/user/login")
    .send({
      email: "nogw@gmail.com",
      password: "nogw2001"
    })

    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty("message")
  })
})

describe("Challenge route", () => {
  it("should create a new challenge", async () => {
    const res = await request(app)
    .post("/challenge/admin/create")
    .send({
      challenge: "# API with Python",
      points: 50,
      limit: "today"
    })

    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty("message")
  })

  it("should list all challenges", async () => {
    const res = await request(app)
    .get("/challenge/admin/list")
    
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty("message")
  })
})