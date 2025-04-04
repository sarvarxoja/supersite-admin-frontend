import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import React from "react";
import Img from "../assets/jam_picture.png";
import { Button, DatePicker, Form, Input } from "antd";
import styled from "styled-components";

const StyledInput = styled(Input)`
  border: 1px solid #e7e7e7 !important;
  box-shadow: none !important;
  border-radius: 10px;
  padding: 4px 10px !important;
  &::placeholder {
    color: #464b59;
  }
  &:active {
    border: 1px solid red;
  }
  &:focus {
    box-shadow: none !important;
  }
  .ant-form-item-has-error & {
    border-color: red !important;
  }
  @media (min-width: 768px) {
    padding: 13px 15px;
  }
`;
const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  max-width: 240px;
  border: 1px solid #e7e7e7 !important;
  box-shadow: none !important;
  border-radius: 10px;
  padding: 10px !important;

  &:active {
    border: 1px solid red;
  }

  &:focus {
    border-color: black !important;
    box-shadow: none !important;
  }

  /* Ant Design xato holatida qizil border qo'shish */
  .ant-form-item-has-error & {
    border-color: red !important;
  }
`;

export default function Course() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Kiritilgan qiymatlar:", values);
  };
  return (
    <div className="p-5 bg-white">
      <button className="cursor-pointer">
        <ArrowLeft color="#737373" size={30} />
      </button>
      <button className="mt-6 py-[10px] px-10 text-[#3F73BC] flex items-center gap-5 cursor-pointer rounded-[8px] border border-[#CDE2FF]">
        <span>Добавить</span>
        <Plus size={15} />
      </button>
      <div className="mt-10 flex gap-10">
        <div>
          <div className="w-[326px] p-5 rounded-[5px] flex justify-end items-start cursor-pointer h-[200px] bg-[#F7F8FD]">
            <img src={Img} alt="" />
          </div>
        </div>
        <div>
          <p className="text-base pb-4 text-[#222222] font-medium">
            ChatGPT: Полный курс по AI, ChatGPT, OpenAI API и DALL-E
          </p>
          <p className="text-[#222222] text-base font-medium pb-4">
            Стоимость курса <span className="text-[#3F73BC]">4990$</span>
          </p>
          <p className="text-[#222222] text-base font-medium pb-4">
            Кибербезопасность
          </p>
          <p className="text-[#222222] text-base font-medium pb-[6px]">
            Преимущества курса
          </p>
          <p className="text-[#737373] font-medium text-sm mb-[4px]">
            ✅  Практическое обучение
          </p>
          <p className="text-[#737373] font-medium text-sm mb-[4px]">
            ✅  Этичный хакеринг
          </p>
          <p className="text-[#737373] font-medium text-sm">
            ✅  Поддержка наставников
          </p>

          <p className="text-base text-[#222222] font-medium pt-[14px] pb-[6px]">
            Цель на который основан курс
          </p>
          <p className="text-[#737373] font-medium text-base pb-7">
            Главная цель курса – обучить участников защите цифровых данных,
            работе с киберугрозами и освоению практических навыков безопасности
            в интернете и IT-системах.
          </p>

          <Form
            form={form}
            name="news"
            onFinish={onFinish}
            layout="vertical"
            autoComplete="off"
            className="flex flex-col gap-5"
          >
            {/* Ryc */}
            <Form.Item
              className="!mb-0"
              label={
                <span className="font-medium text-[#737373] text-base">
                  Заголовок
                </span>
              }
              name={["title", "ryc"]}
              rules={[{ required: true, message: "" }]}
            >
              <div className="flex items-center gap-[6px]">
                <StyledInput
                  size="large"
                  placeholder="Dars nomi"
                  prefix={
                    <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                      Ryc
                    </span>
                  }
                />
                <button
                  type="button"
                  className="w-[53px] cursor-pointer h-[41px] flex items-center justify-center border border-[#D9D9D9] rounded-[8px]"
                >
                  <Trash2 color="red" />
                </button>
              </div>
            </Form.Item>

            {/* Uzb */}
            <Form.Item
              className="!mb-0"
              name={["title", "uzb"]}
              rules={[{ required: true, message: "" }]}
            >
              <div className="flex items-center gap-[6px]">
                <StyledInput
                  size="large"
                  placeholder="Dars nomi"
                  prefix={
                    <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                      Uzb
                    </span>
                  }
                />
                <button
                  type="button"
                  className="w-[53px] cursor-pointer h-[41px] flex items-center justify-center border border-[#D9D9D9] rounded-[8px]"
                >
                  <Trash2 color="red" />
                </button>
              </div>
            </Form.Item>

            {/* Eng */}
            <Form.Item
              className="!mb-0"
              name={["title", "eng"]}
              rules={[{ required: true, message: "" }]}
            >
              <div className="flex items-center gap-[6px]">
                <StyledInput
                  size="large"
                  placeholder="Dars nomi"
                  prefix={
                    <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                      Eng
                    </span>
                  }
                />
                <button
                  type="button"
                  className="w-[53px] cursor-pointer h-[41px] flex items-center justify-center border border-[#D9D9D9] rounded-[8px]"
                >
                  <Trash2 color="red" />
                </button>
              </div>
            </Form.Item>

            <div className="flex items-start gap-5">
              <Form.Item
                className="!mb-0"
                name="price"
                label="Цена"
                rules={[{ required: true, message: "" }]}
              >
                <StyledInput
                  className="!py-[10px]"
                  size="large"
                  placeholder="Цена"
                />
              </Form.Item>
              <Form.Item
                name="lessonDate"
                label={<span className="font-medium text-[#13265C]">Дата</span>}
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
              >
                <StyledDatePicker placeholder="Дата" />
              </Form.Item>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-1/3 p-[13px] border border-[#D9D9D9] rounded-[8px] relative">
                <p className="text-[#222222] text-base font-medium pb-[6px]">
                  Преимущества курса
                </p>
                <p className="text-[#737373] text-base pb-[4px]">
                  ✅  Практическое обучение
                </p>
                <p className="text-[#737373] text-base pb-[4px]">
                  ✅  Этичный хакеринг
                </p>
                <p className="text-[#737373] text-base pb-[4px]">
                  ✅  Поддержка наставников
                </p>
                <p className="pt-[14px] text-[#222222] font-medium pb-[6px]">
                  Цель на который основан курс
                </p>
                <p className="text-[#737373] text-base">
                  Главная цель курса – обучить участников защите цифровых
                  данных, работе с киберугрозами и освоению практических навыков
                  безопасности в интернете и IT-системах.
                </p>
                <span className="absolute top-3 right-4 flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                  Ryc
                </span>
              </div>
              <div className="w-1/3 p-[13px] border border-[#D9D9D9] rounded-[8px] relative">
                <p className="text-[#222222] text-base font-medium pb-[6px]">
                  Преимущества курса
                </p>
                <p className="text-[#737373] text-base pb-[4px]">
                  ✅  Практическое обучение
                </p>
                <p className="text-[#737373] text-base pb-[4px]">
                  ✅  Этичный хакеринг
                </p>
                <p className="text-[#737373] text-base pb-[4px]">
                  ✅  Поддержка наставников
                </p>
                <p className="pt-[14px] text-[#222222] font-medium pb-[6px]">
                  Цель на который основан курс
                </p>
                <p className="text-[#737373] text-base">
                  Главная цель курса – обучить участников защите цифровых
                  данных, работе с киберугрозами и освоению практических навыков
                  безопасности в интернете и IT-системах.
                </p>
                <span className="absolute top-3 right-4 flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                  Uzb
                </span>
              </div>
              <div className="w-1/3 p-[13px] border border-[#D9D9D9] rounded-[8px] relative">
                <p className="text-[#222222] text-base font-medium pb-[6px]">
                  Преимущества курса
                </p>
                <p className="text-[#737373] text-base pb-[4px]">
                  ✅  Практическое обучение
                </p>
                <p className="text-[#737373] text-base pb-[4px]">
                  ✅  Этичный хакеринг
                </p>
                <p className="text-[#737373] text-base pb-[4px]">
                  ✅  Поддержка наставников
                </p>
                <p className="pt-[14px] text-[#222222] font-medium pb-[6px]">
                  Цель на который основан курс
                </p>
                <p className="text-[#737373] text-base">
                  Главная цель курса – обучить участников защите цифровых
                  данных, работе с киберугрозами и освоению практических навыков
                  безопасности в интернете и IT-системах.
                </p>
                <span className="absolute top-3 right-4 flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                  Eng
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <Form.Item className="flex justify-end">
              <button className="mr-5 text-lg font-medium py-[10px] px-10 border border-[#D9D9D9] rounded-[8px] cursor-pointer">
                Oтменить
              </button>
              <button
                className="text-lg font-medium py-[10px] px-10 bg-[#3F73BC] rounded-[8px] text-white cursor-pointer"
                htmlType="submit"
              >
                Coхранить
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
