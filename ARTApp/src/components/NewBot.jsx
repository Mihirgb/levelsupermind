import React, { useState } from "react";
import { Input } from "@/components/ui/input"; // ShadCN Input
import { Button } from "@/components/ui/button"; // ShadCN Button
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // For loader icon

const NewBot = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return; // Prevent empty messages

    setLoading(true); // Start loader
    setResponse(""); // Clear previous response

    try {
      const res = await fetch("https://my-flask-backend-eta.vercel.app/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });

      const data =  await res.json();
      setResponse(data.response); // Update response with server message
      console.log(data)
    } catch (error) {
      console.error("Error communicating with the server:", error);
      setResponse("Error: Unable to connect to the server.");
    } finally {
      setLoading(false); // Stop loader
    }

    setInput(""); // Clear the input field
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4 bg-black min-h-screen text-white w-full max-w-5xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-400">Add Your Input Here</h1>
      <p className="text-gray-400">Type your message below and receive a response instantly!</p>

      {/* Chat Input */}
      <div className="flex w-full max-w-lg items-center space-x-4">
        <Input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-4 rounded-lg bg-gray-800 text-white text-lg placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        <Button
          onClick={handleSendMessage}
          disabled={loading}
          className="px-6 py-3 text-lg bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none rounded-lg transition duration-300 flex items-center space-x-2"
        >
          {loading ? (
            <>
              <AiOutlineLoading3Quarters className="animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            "Send"
          )}
        </Button>
      </div>

      {/* Server Response */}
      {loading && (
        <div
          className="mt-4 w-full max-w-lg p-4 text-center text-gray-300"
          aria-busy="true"
        >
          Processing your request...
        </div>
      )}
      {response && (
        <div className="mt-4 w-full max-w-lg p-4 rounded-lg bg-gray-800 text-gray-100 shadow-lg">
          <p>
            <strong>Server Response:</strong> {response}
          </p>
        </div>
      )}
    </div>
  );
};

export default NewBot;
