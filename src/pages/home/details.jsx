import { Plus } from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    id: 1,
    name: "Какой срок гарантии предоставляется на технику?",
    desc: "Мы предоставляем гарантию на нашу бытовую технику в течение 2 лет с момента покупки. Это позволяет вам быть уверенным в качестве и надежности наших продуктов.",
  },
  {
    id: 2,
    name: "Какой срок гарантии предоставляется на технику?",
    desc: "Мы предоставляем гарантию на нашу бытовую технику в течение 2 лет с момента покупки. Это позволяет вам быть уверенным в качестве и надежности наших продуктов.",
  },
];

export default function Details() {
  const [itemId, setItemId] = useState(null);
  return (
    <div className="py-10 border-t border-[#dedede] px-5 gap-5 md:px-20 flex items-start flex-col md:flex-row justify-between">
      <p className="text-2xl lg:text-5xl font-semibold uppercase animation md:w-1/3">
        Часто задаваемые вопросы
      </p>
      <div className="md:w-[60%] max-w-[700px]">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col border-b">
            <div
              className="flex items-center cursor-pointer py-5 md:py-10"
              onClick={() =>
                item.id === itemId ? setItemId(null) : setItemId(item.id)
              }
            >
              <p className="text-2xl md:text-4xl font-light">{item.name}</p>
              <button className="cursor-pointer">
                <Plus size={32} strokeWidth={1} />
              </button>
            </div>
            <AnimatePresence>
              {itemId === item.id && (
                <motion.p
                  key={item.id} // Har bir element uchun unikal key
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="pb-6 text-2xl text-[#86868b]"
                >
                  {item.desc}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
