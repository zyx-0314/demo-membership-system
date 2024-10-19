'use client'

import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [get, setGet] = useState("")
  const [set, setSet] = useState("")
  const [input, setInput] = useState("")
  const [loaded, setLoaded] = useState(false)

  const handleGet = async () => {

    await axios
      .get("/api/student")
      .then((response) => {
        console.log("Working: ", response)
        setGet(response.data.message)
      })
      .catch((error) => {
        console.log("Error: ", error)
      })
  }

  if (!loaded) {
    handleGet()
    setLoaded(true)
  }

  const handlePost = async (values: any) => {

    await axios
      .post("/api/student", {
        message: input,
        ewan: "ewan lalo"
      })
      .then((response) => {
        console.log("Working: ", response)
        setSet(response.data.message)
      })
      .catch((error) => {
        console.log("Error: ", error)
      })

  }


  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <h1>Response Get: {get}</h1>
        <h1>Response Set: {set}</h1>
        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} className="bg-white" />
        <Button onClick={handlePost} className="w-fit">
          Submit
        </Button>
      </div>
    </>
  );
}
