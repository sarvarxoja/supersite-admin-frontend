import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Dot,
  Plus,
  Trash2,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import Img from "../assets/jam_picture.png";
import { Button, DatePicker, Form, Input } from "antd";
import styled from "styled-components";
import axios from "axios";
import DeleteConfirmationModal from "../components/DeleteModal";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

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
  border: 1px solid #d9d9d9 !important;
  box-shadow: none !important;
  padding: 12px 20px !important;
  font-size: 15px;
  resize: none !important;

  &::placeholder {
    color: #737373;
  }
  &:focus {
    border: 1px solid #d9d9d9 !important;
    box-shadow: none !important;
  }

  .ant-form-item-has-error & {
    border-color: red !important;
  }

  @media (min-width: 768px) {
    padding: 13px 15px;
  }
`;
const StyledTextAreaWithPrefix = ({ prefix, ...props }) => {
  return (
    <div className="textarea-with-prefix">
      <div className="textarea-prefix">{prefix}</div>
      <StyledTextArea {...props} />
    </div>
  );
};

export default function FaqSection() {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [deleteLoad, setDeleteLoad] = useState(false);
  const [dataId, setDataId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const { lang } = useParams();
  const { t } = useTranslation();

  function openAndClose(id) {
    setSelectedData(id);
    setIsOpen(!isOpen);
  }

  const onFinish = async (values) => {
    setLoad(true);

    if (load === true) {
      return;
    }

    try {
      let { data } = await axios.post("/questions/create", {
        question_uz: values.description.uzb,
        question_ru: values.description.ryc,
        question_eng: values.description.eng,
        answer_uz: values.title.uzb,
        answer_ru: values.title.ryc,
        answer_eng: values.title.eng,
      });

      if (data.status === 201) {
        form.resetFields();
        fetchQuestions();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  async function fetchQuestions() {
    try {
      let { data } = await axios.get("/questions/all?page=1&&limit=20");
      setData(data.questions);
    } catch (error) {
      console.log(error);
    }
  }

  function cancelForm() {
    form.resetFields();
  }

  async function handleDelete() {
    setDeleteLoad(true);

    if (deleteLoad === true) {
      return;
    }

    try {
      await axios.delete(`/questions/${selectedData}`);
      openAndClose();
      fetchQuestions();
    } catch (error) {
      console.log(error);
    } finally {
      setDeleteLoad(false);
    }
  }

  return (
    <div className="px-5 bg-white">
      <div className="mt-10">
        <div className="flex flex-col gap-2 mb-5">
          {data.map((item) => (
            <div key={item.id} className="flex items-center gap-5">
              <div className="border border-[#D9D9D9] rounded-[8px] px-[25px] py-[12px] w-full">
                <div
                  onClick={() => setDataId(dataId === item.id ? null : item.id)}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <p className="text-[#222222] text-xl font-medium flex items-center">
                    <Dot />
                    {" " + lang === "en"
                      ? item.question_eng
                      : lang === "ru"
                      ? item.question_ru
                      : item.question_uz}
                  </p>
                  {dataId === item.id ? <ChevronUp /> : <ChevronDown />}
                </div>
                {dataId === item.id && (
                  <p className="pt-4 text-[#737373]">
                    {lang === "en"
                      ? item.answer_eng
                      : lang === "ru"
                      ? item.answer_ru
                      : item.answer_uz}
                  </p>
                )}
              </div>
              <buttom
                onClick={() => openAndClose(item.id)}
                className="cursor-pointer w-[84px] h-[54px] border border-[#D9D9D9] flex items-center justify-center rounded-[8px]"
              >
                <Trash2 color="red" />
              </buttom>
            </div>
          ))}
        </div>
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
            name={["title", "ryc"]}
            rules={[{ required: true, message: "" }]}
            label={<span>{t("question")}</span>}
          >
            <StyledInput
              size="large"
              placeholder="Кому подойдут ваши курсы?"
              prefix={
                <span className="flex items-center justify-center w-[33px] h-[33px] mr-2 bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                  Рус
                </span>
              }
            />
          </Form.Item>

          {/* Uzb */}
          <Form.Item
            className="!mb-0"
            name={["title", "uzb"]}
            rules={[{ required: true, message: "" }]}
          >
            <StyledInput
              size="large"
              placeholder="Kurslaringiz kimlarga mos keladi?"
              prefix={
                <span className="flex items-center justify-center w-[33px] h-[33px] mr-2 bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                  Uzb
                </span>
              }
            />
          </Form.Item>

          {/* Eng */}
          <Form.Item
            className="!mb-0"
            name={["title", "eng"]}
            rules={[{ required: true, message: "" }]}
          >
            <StyledInput
              size="large"
              placeholder="Who are your courses suitable for?"
              prefix={
                <span className="flex items-center justify-center w-[33px] h-[33px] mr-2 bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                  Eng
                </span>
              }
            />
          </Form.Item>

          {/* Ryc */}
          <Form.Item
            name={["description", "ryc"]}
            label={<span>{t("answer")}</span>}
            rules={[{ required: true, message: "" }]}
          >
            <StyledTextAreaWithPrefix
              rows={2}
              placeholder="Наши курсы подойдут новичкам, которые хотят разобраться в основах кибербезопасности, а также специалистам, стремящимся повысить свою квалификацию."
              prefix={
                <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                  Рус
                </span>
              }
            />
          </Form.Item>

          <Form.Item
            name={["description", "uzb"]}
            rules={[{ required: true, message: "" }]}
          >
            <StyledTextAreaWithPrefix
              rows={2}
              placeholder="Bizning kurslarimiz kiberxavfsizlik asoslarini tushunmoqchi bo'lgan yangi boshlanuvchilar, shuningdek, o'z malakalarini oshirishga intilayotgan mutaxassislar uchun javob beradi."
              prefix={
                <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                  Uzb
                </span>
              }
            />
          </Form.Item>
          <Form.Item
            name={["description", "eng"]}
            rules={[{ required: true, message: "" }]}
          >
            <StyledTextAreaWithPrefix
              rows={2}
              placeholder="Our courses are suitable for beginners who want to understand the basics of cybersecurity, as well as professionals who want to improve their skills. to improve their skills."
              prefix={
                <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                  Eng
                </span>
              }
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item className="flex justify-end">
            <button
              className="mr-5 text-lg font-medium py-[10px] px-10 border border-[#D9D9D9] rounded-[8px] cursor-pointer"
              onClick={() => cancelForm()}
            >
              Oтменить
            </button>
            <button
              className="text-lg font-medium py-[10px] px-10 bg-[#3F73BC] rounded-[8px] text-white cursor-pointer"
              htmlType="submit"
            >
              {setLoad === false ? "Loading..." : "Coхранить"}
            </button>
          </Form.Item>
        </Form>
      </div>
      <DeleteConfirmationModal
        isOpen={isOpen}
        handleDelete={handleDelete}
        closeModal={openAndClose}
      />
    </div>
  );
}
