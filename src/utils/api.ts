import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL, 
})

api.defaults.headers.common["authorization"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWY4OTQ4YjRhNjMxMWI1NDIwODVjMyIsIm5hbWUiOiJub2d3IiwicGVybWlzc2lvbiI6ImFkbWluIiwiaWF0IjoxNjMzNjUxMzY4LCJleHAiOjE2MzM3Mzc3Njh9.72lbTXUmvV0OuccsfwEpgEF1UiX30SQxzfy1R39He3o"