import axios from "axios";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Img from "../assets/jam_picture.png";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { Button, DatePicker, Form, Input } from "antd";
import { Link, useParams } from "react-router-dom";
import { formatDateToUzbek } from "../utils/DateFormatter";

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

export default function Course() {
  const [form] = Form.useForm();
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState(null);
  const [catalogs, setCatalogs] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    try {
      let { data } = await axios.get("/courses/all?page=1&limit=20");
      console.log(data);
      setCourses(data.courses);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCatalogs();
  }, []);

  async function fetchCatalogs() {
    try {
      let { data } = await axios.get("/courses/get/catalog");
      setCatalogs(data.catalog);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCourse();
  }, [id]);

  async function fetchCourse() {
    try {
      let { data } = await axios.get(`/courses/by/${id}`);
      console.log(data.data);
      setCourse(data.data);
    } catch (error) {
      setCourse(null);
      console.log(error);
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const onFinish = async (values) => {
    const formData = new FormData();

    formData.append("catalog", values.catalog);

    formData.append("course_title_uz", values.title.uzb);
    formData.append("course_title_ru", values.title.rus);
    formData.append("course_title_eng", values.title.eng);

    formData.append("benefits_uz", values.benefit.uzb);
    formData.append("benefits_ru", values.benefit.rus);
    formData.append("benefits_eng", values.benefit.eng);

    formData.append(
      "course_objective_ru",
      values.description.rus
    );
    formData.append(
      "course_objective_uz",
      values.description.uzb
    );
    formData.append(
      "course_objective_eng",
      values.description.eng
    );

    formData.append("course_price", values.price.eng);

    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    try {
      let { data } = await axios.post("/courses/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (data.status === 201) {
        form.resetFields();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 bg-white">
      {/* <button className="cursor-pointer">
        <ArrowLeft color="#737373" size={30} />
      </button> */}
      <Link
        to={"/admin/courses/create"}
        className="w-[190px] py-[10px] px-10 text-[#3F73BC] flex items-center gap-5 cursor-pointer rounded-[8px] border border-[#CDE2FF]"
      >
        <span>Добавить</span>
        <Plus size={15} />
      </Link>
      <div className="mt-10 flex gap-5">
        <div>
          {courses.map((e, index) => {
            return (
              <Link
                key={index}
                to={`/admin/courses/${e.id}`}
                className="w-[326px] flex justify-end items-start cursor-pointer h-[200px] bg-[#F7F8FD] mb-2 rounded"
              >
                <img
                  src={`https://www.isouzbekistan.uz/api${e.image}`}
                  alt=""
                  className="h-full bg-cover rounded"
                />
              </Link>
            );
          })}
        </div>
        {!id ? (
          ""
        ) : course === null ? (
          <div className="border-l-3 pl-4 w-full border-[#D9D9D9]">
            <Form
              form={form}
              name="news"
              onFinish={onFinish}
              layout="vertical"
              autoComplete="off"
              className="flex flex-col gap-5"
            >
              <Form.Item>
                <div className="flex items-center gap-4">
                  <label className="cursor-pointer flex items-center gap-2 px-4 py-2 border border-[#D9D9D9] rounded-lg hover:bg-[#f5f5f5] transition-colors duration-200">
                    <span className="text-[#3F73BC] font-medium">
                      Rasm tanlash
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      required
                    />
                  </label>

                  {previewImage && (
                    <div className="w-[100px] h-[100px] relative">
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="w-full h-full object-cover rounded border border-[#D9D9D9]"
                      />
                    </div>
                  )}
                </div>
              </Form.Item>

              {/* Ryc */}
              <Form.Item
                className="!mb-0"
                label={
                  <span className="font-medium text-[#13265C]">Заголовок</span>
                }
                name={["title", "rus"]}
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
                  {/* <button
                  type="button"
                  className="w-[53px] cursor-pointer h-[41px] flex items-center justify-center border border-[#D9D9D9] rounded-[8px]"
                >
                  <Trash2 color="red" />
                </button> */}
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
                  {/* <button
                  type="button"
                  className="w-[53px] cursor-pointer h-[41px] flex items-center justify-center border border-[#D9D9D9] rounded-[8px]"
                >
                  <Trash2 color="red" />
                </button> */}
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
                  {/* <button
                  type="button"
                  className="w-[53px] cursor-pointer h-[41px] flex items-center justify-center border border-[#D9D9D9] rounded-[8px]"
                >
                  <Trash2 color="red" />
                </button> */}
                </div>
              </Form.Item>

              <div className="flex items-center gap-4">
                {/* Valyuta tanlash */}
                <Form.Item
                  className="!mb-0 flex-1"
                  name="catalog"
                  rules={[{ required: true, message: "" }]}
                >
                  <div>
                    <input
                      list="currency-options"
                      name="catalog"
                      className="w-full h-[35px] border border-[#D9D9D9] rounded-[8px] px-3 text-[#13265C] bg-white focus:outline-none focus:ring-2 focus:ring-[#3F73BC]"
                      placeholder="курс"
                      required
                    />
                    <datalist id="currency-options">
                      <option value="" disabled hidden>
                        Выберите курс
                      </option>
                      {catalogs.map((e, i) => (
                        <option
                          key={i}
                          value={e}
                          className="bg-black text-white"
                        >
                          {e}
                        </option>
                      ))}
                    </datalist>
                  </div>
                </Form.Item>

                <Form.Item
                  className="!mb-0 w-[150px] "
                  name={["price", "eng"]}
                  rules={[{ required: true, message: "" }]}
                >
                  <StyledInput
                    size="large"
                    type="number"
                    placeholder="Kurs narxi"
                  />
                </Form.Item>
              </div>

              <Form.Item
                className="!mb-0"
                label={
                  <span className="font-medium text-[#13265C]">Информация</span>
                }
                name={["description", "rus"]}
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
                  {/* <button
                  type="button"
                  className="w-[53px] cursor-pointer h-[41px] flex items-center justify-center border border-[#D9D9D9] rounded-[8px]"
                >
                  <Trash2 color="red" />
                </button> */}
                </div>
              </Form.Item>

              {/* Uzb */}
              <Form.Item
                className="!mb-0"
                name={["description", "uzb"]}
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
                  {/* <button
                  type="button"
                  className="w-[53px] cursor-pointer h-[41px] flex items-center justify-center border border-[#D9D9D9] rounded-[8px]"
                >
                  <Trash2 color="red" />
                </button> */}
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
                  {/* <button
                  type="button"
                  className="w-[53px] cursor-pointer h-[41px] flex items-center justify-center border border-[#D9D9D9] rounded-[8px]"
                >
                  <Trash2 color="red" />
                </button> */}
                </div>
              </Form.Item>

              <Form.Item
                className="!mb-0"
                label={
                  <span className="font-medium text-[#13265C]">
                    Цель на который основан курс
                  </span>
                }
                name={["benefit", "eng"]}
                rules={[{ required: true, message: "" }]}
              >
                <div className="flex items-center gap-[6px]">
                  <StyledTextArea
                    rows={3}
                    placeholder="Узнайте, как повысить свою квалификацию в области ISO/IEC 27001, международного стандарта для систем управления информационной безопасностью (ISMS). Независимо от того, начинаете ли вы свой путь или продвигаетесь по карьерной лестнице, наши учебные курсы и сертификации ..."
                    prefix={
                      <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                        Eng
                      </span>
                    }
                  />
                  {/* <button
                  type="button"
                  className="w-[53px] cursor-pointer h-[41px] flex items-center justify-center border border-[#D9D9D9] rounded-[8px]"
                >
                  <Trash2 color="red" />
                </button> */}
                </div>
              </Form.Item>
              <Form.Item
                className="!mb-0"
                name={["benefit", "rus"]}
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
                  {/* <button
                  type="button"
                  className="w-[53px] cursor-pointer h-[41px] flex items-center justify-center border border-[#D9D9D9] rounded-[8px]"
                >
                  <Trash2 color="red" />
                </button> */}
                </div>
              </Form.Item>
              <Form.Item
                className="!mb-0"
                name={["benefit", "uzb"]}
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
                </div>
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
        ) : (
          <div className="border-l-2 pl-6 w-full border-[#D9D9D9] space-y-5">
            <div className="mb-6">
              <h1 className="text-lg font-medium mb-2">
                {course.course_title_uz}
              </h1>

              <p className="text-sm text-gray-700 mb-6">
                {course.course_objective_uz}
              </p>
              <p className="text-sm text-gray-600 mb-6">
                {formatDateToUzbek(course.createdAt)}
              </p>
              <h2 className="text-lg font-medium mb-2">{course.catalog}</h2>
              <h1 className="text-lg font-medium mb-5">
                Стоимость курса{" "}
                <span className="text-blue-600">{course.course_price}$</span>
              </h1>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Заголовок <span className="text-red-500">*</span>
                </label>

                <div className="mb-2">
                  <div className="w-full border border-gray-300 rounded-md mb-2">
                    <div className="flex items-center">
                      <div className="px-2 py-2 border-r border-gray-300 bg-gray-50 w-12 flex justify-center">
                        <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                          Рус
                        </span>
                      </div>
                      <input
                        type="text"
                        className="w-full px-3 py-2 text-sm"
                        value={course.course_title_ru}
                      />
                    </div>
                  </div>

                  <div className="w-full border border-gray-300 rounded-md mb-2">
                    <div className="flex items-center">
                      <div className="px-2 py-2 border-r border-gray-300 bg-gray-50 w-12 flex justify-center">
                        <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                          Uzb
                        </span>
                      </div>
                      <input
                        type="text"
                        className="w-full px-3 py-2 text-sm"
                        value={course.course_title_uz}
                      />
                    </div>
                  </div>

                  <div className="w-full border border-gray-300 rounded-md">
                    <div className="flex items-center">
                      <div className="px-2 py-2 border-r border-gray-300 bg-gray-50 w-12 flex justify-center">
                        <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                          Eng
                        </span>
                      </div>
                      <input
                        type="text"
                        className="w-full px-3 py-2 text-sm"
                        value={course.course_title_eng}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Цель на который основан курс{" "}
                  <span className="text-red-500">*</span>
                </label>

                <div className="mb-2">
                  <div className="w-full border border-gray-300 rounded-md mb-2">
                    <div className="flex">
                      <div className="px-2 py-6 border-r border-gray-300 bg-gray-50 w-12 flex justify-center">
                        <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                          Рус
                        </span>
                      </div>
                      <textarea
                        className="w-full px-3 py-2 text-sm"
                        rows="3"
                        value={course.course_objective_ru}
                      />
                    </div>
                  </div>

                  <div className="w-full border border-gray-300 rounded-md mb-2">
                    <div className="flex">
                      <div className="px-2 py-6 border-r border-gray-300 bg-gray-50 w-12 flex justify-center">
                        <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                          Uzb
                        </span>
                      </div>
                      <textarea
                        className="w-full px-3 py-2 text-sm"
                        rows="2"
                        value={course.course_objective_uz}
                      />
                    </div>
                  </div>

                  <div className="w-full border border-gray-300 rounded-md">
                    <div className="flex">
                      <div className="px-2 py-6 border-r border-gray-300 bg-gray-50 w-12 flex justify-center">
                        <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                          Eng
                        </span>
                      </div>
                      <textarea
                        className="w-full px-3 py-2 text-sm"
                        rows="3"
                        value={course.course_title_eng}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Преимущества курса
                </label>

                <div className="mb-2">
                  <div className="w-full border border-gray-300 rounded-md mb-2">
                    <div className="flex">
                      <div className="px-2 py-6 border-r border-gray-300 bg-gray-50 w-12 flex justify-center">
                        <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                          Рус
                        </span>
                      </div>
                      <textarea
                        className="w-full px-3 py-2 text-sm"
                        rows="3"
                        value={course.benefits_ru}
                      />
                    </div>
                  </div>

                  <div className="w-full border border-gray-300 rounded-md mb-2">
                    <div className="flex">
                      <div className="px-2 py-6 border-r border-gray-300 bg-gray-50 w-12 flex justify-center">
                        <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                          Uzb
                        </span>
                      </div>
                      <textarea
                        className="w-full px-3 py-2 text-sm"
                        rows="2"
                        value={course.benefits_uz}
                      />
                    </div>
                  </div>

                  <div className="w-full border border-gray-300 rounded-md">
                    <div className="flex">
                      <div className="px-2 py-6 border-r border-gray-300 bg-gray-50 w-12 flex justify-center">
                        <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                          Eng
                        </span>
                      </div>
                      <textarea
                        className="w-full px-3 py-2 text-sm"
                        rows="3"
                        value={course.benefits_eng}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
