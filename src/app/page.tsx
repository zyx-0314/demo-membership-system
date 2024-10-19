'use client'

import { Button } from "@/components/ui/button"
import axios from "axios"
import { useState } from "react"

export default function Home() {
  const [data, setData] = useState("")
  const [postStatus, setPostStatus] = useState("Waiting")

  const fetchTest = async () => {
    await axios
      .get(`/api/test`)
      .then((response) => {
        setData(response.data.message)
      })
      .catch(() => {
        setData("No Response")
      })
  }

  const postTest = async () => {
    await axios
      .post(`/api/test`, { f_name: "Test", number: "1" })
      .then((response) => {
        setPostStatus(response.data.message)
      })
      .catch(() => {
        setPostStatus("No Response")
      })
  }

  fetchTest()

  return (
    <main>
      <h1>Get Here: {data}</h1>
      <h1>Post Here: {postStatus}</h1>
      <Button onClick={postTest}>Click</Button>

    </main>
  );
}
