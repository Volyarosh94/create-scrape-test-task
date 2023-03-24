"use client";
import { useState } from "react"
import { Inter } from "next/font/google"
import { Modal } from "./components/Modal"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <main className="flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold underline">Scrape</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  )
}
