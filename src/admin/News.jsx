import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import React from "react";
import Img from "../assets/jam_picture.png";
import { Button, DatePicker, Form, Input } from "antd";
import styled from "styled-components";

const { TextArea } = Input;

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
    border-color: black !important;
    box-shadow: none !important;
  }

  /* Ant Design xato holatida qizil border qo'shish */
  .ant-form-item-has-error & {
    border-color: red !important;
  }

  @media (min-width: 768px) {
    padding: 13px 15px;
  }
`;
const StyledTextArea = styled(TextArea)`
  border: 1px solid #e7e7e7 !important;
  box-shadow: none !important;
  border-radius: 10px;
  padding: 12px 20px !important;
  font-size: 15px;
  resize: none !important;

  &::placeholder {
    color: #737373;
  }

  &:active {
    border: 1px solid red;
  }

  &:focus {
    box-shadow: none !important;
  }

  /* Ant Design xato holatida qizil border qo'shish */
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

export default function News() {
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
          <p className="text-sm text-[#222222] pb-5 font-medium">
            Система управления информационной безопасностью ISO/IEC 27001 —
            учебные курсы
          </p>
          <p className="text-[12px] text-[#737373] pb-4">
            Узнайте, как повысить свою квалификацию в области ISO/IEC 27001,
            международного стандарта для систем управления информационной
            безопасностью (ISMS). Независимо от того, начинаете ли вы свой путь
            или продвигаетесь по карьерной лестнице, наши учебные курсы и
            сертификации по ISO/IEC 27001 дадут вам практические....
          </p>
          <p className="text-sm text-[#222222] font-medium pb-8">
            2-апрель, 2025-год
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
                <span className="font-medium text-[#13265C]">Заголовок</span>
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

            <Form.Item
              className="!mb-0"
              label={
                <span className="font-medium text-[#13265C]">Информация</span>
              }
              name={["description", "ryc"]}
              rules={[{ required: true, message: "" }]}
            >
              <div className="flex items-center gap-[6px]">
                <StyledTextArea
                  rows={3}
                  placeholder="Узнайте, как повысить свою квалификацию в области ISO/IEC 27001, международного стандарта для систем управления информационной безопасностью (ISMS). Независимо от того, начинаете ли вы свой путь или продвигаетесь по карьерной лестнице, наши учебные курсы и сертификации ..."
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

            {/* Eng */}
            <Form.Item
              className="!mb-0"
              name={["description", "eng"]}
              rules={[{ required: true, message: "" }]}
            >
              <div className="flex items-center gap-[6px]">
                <StyledTextArea
                  rows={3}
                  placeholder="Learn how to develop your skills in ISO/IEC 27001, the international standard for information security management systems (ISMS). Whether you are just starting out or advancing your career, our ISO/IEC 27001 training courses and certifications will give you the..."
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
