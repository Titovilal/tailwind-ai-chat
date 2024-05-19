// hooks/useChat.js
import { useEffect, useRef, useState } from "react";
import { submitQuestionTest } from "@/lib/data-code";

export const useChat = () => {
  const [messagePairs, setMessagePairs] = useState<QA[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setUserName("User");
    setMessagePairs([]);
  }, []);

  // ... el resto de tu código ...

  useEffect(() => {
    // Mover la barra de desplazamiento hacia abajo cuando aparezcan nuevos mensajes
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messagePairs]); // Escuchar los cambios en messagePairs

  // ... el resto de tu código ...

  const createQuestion = (question: string) => {
    let newQA: QA = {
      id: "NEW",
      question: {
        question: question,
      },
      created_at: new Date(),
    };
    setMessagePairs((prevMessagePairs) => [...prevMessagePairs, newQA]);
  };

  const createAnswer = (qa: QA) => {
    setMessagePairs((prevMessagePairs) => {
      return prevMessagePairs.map((item) => {
        if (item.id === "NEW") {
          return {
            ...item,
            id: qa.id,
            answer: qa.answer,
          };
        } else {
          return item;
        }
      });
    });
  };

  const handleSubmit = async (question: string) => {
    if (question === "") return;
    createQuestion(question);
    setLoading(true);
    let data = await submitQuestionTest("5", question, "este es el codigo");
    console.log(data);
    if (data != null) {
      setLoading(false);
      createAnswer(data);
    }
  };

  return {
    scrollAreaRef,
    messagePairs,
    userName,
    loading,
    handleSubmit,
    setMessagePairs,
  };
};
