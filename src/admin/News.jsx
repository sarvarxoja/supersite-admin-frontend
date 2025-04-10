import axios from "axios";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Img from "../assets/jam_picture.png";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { Button, DatePicker, Form, Input } from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import { formatDateToUzbek } from "../utils/DateFormatter";
import DeleteConfirmationModal from "../components/DeleteModal";
import { LanguageWrapper } from "../translation/LanguageWrapper";
import { useTranslation } from "react-i18next";

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
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const { lang } = useParams();
  const { t } = useTranslation();

  const { id } = useParams();

  function openAndClose() {
    setIsOpen(!isOpen);
  }

  async function handleDelete() {
    setDeleting(true);

    if (deleting === true) {
      return;
    }

    try {
      await axios.delete(`/news/${id}`);
      openAndClose();
      fetchNews();
      navigate(`/${lang}/admin/news/`);
    } catch (error) {
      console.log(error);
    } finally {
      setDeleting(false);
    }
  }

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    try {
      let { data } = await axios.get("/news/all?page=1&limit=20");
      setCourses(data.news);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCourse();
  }, [id]);

  async function fetchCourse() {
    try {
      let { data } = await axios.get(`/news/by/${id}`);
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

    setLoad(true);

    if (load === true) {
      return;
    }

    formData.append("news_title_uz", values.title.uzb);
    formData.append("news_title_ru", values.title.rus);
    formData.append("news_title_eng", values.title.eng);
    formData.append("news_about_uz", values.description.eng);
    formData.append("news_about_ru", values.description.rus);
    formData.append("news_about_eng", values.description.uzb);

    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    try {
      let { data } = await axios.post("/news/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (data.status === 201) {
        form.resetFields();
        fetchNews();
        setPreviewImage(null);
        setSelectedImage(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };

  const [updatePreviewImage, setUpdatePreviewImage] = useState(null);
  const [selectedUpdateImage, setSelectedUpdateImage] = useState(null);

  async function handleUpdateImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setSelectedUpdateImage(file);
      setUpdatePreviewImage(URL.createObjectURL(file));
    }
  }

  function cancelForm() {
    form.resetFields();
    setPreviewImage(null);
    setSelectedImage(null);
  }

  async function handleUpdate() {
    setUpdating(true);

    if (updating === true) {
      return;
    }

    try {
      const formData = new FormData();

      for (const key in course) {
        formData.append(key, course[key]);
      }

      if (selectedUpdateImage) {
        formData.append("image", selectedUpdateImage); // "image" backendda .single("image")
      }

      await axios.patch(`/news/${course.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      fetchNews();
      fetchCourse();
    } catch (error) {
      console.log(error);
    } finally {
      setUpdating(false);
    }
  }

  return (
    <div className="p-5 bg-white">
      <Link
        to={`/${lang}/admin/news/create`}
        className="w-[190px] py-[10px] px-10 text-[#3F73BC] flex items-center gap-5 cursor-pointer rounded-[8px] border border-[#CDE2FF]"
      >
        <span>{t("add")}</span>
        <Plus size={15} />
      </Link>
      <div className="mt-10 flex gap-5">
        <div>
          {courses.map((e, index) => {
            return (
              <Link
                key={index}
                to={`/${lang}/admin/news/${e.id}`}
                className="w-[326px] flex justify-end items-start cursor-pointer h-[200px] bg-[#F7F8FD] mb-2 rounded"
              >
                <img
                  src={`http://localhost:2222${e.image}`}
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
                      {t("select_image")}
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
                  <span className="font-medium text-[#13265C]">
                    {t("title")}
                  </span>
                }
                name={["title", "rus"]}
                rules={[{ required: true, message: "" }]}
              >
                <div className="flex items-center gap-[6px]">
                  <StyledInput
                    size="large"
                    // placeholder="Dars nomi"
                    prefix={
                      <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                        Рус
                      </span>
                    }
                  />
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
                    // placeholder="Dars nomi"
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
                    // placeholder="Dars nomi"
                    prefix={
                      <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                        Eng
                      </span>
                    }
                  />
                </div>
              </Form.Item>

              <Form.Item
                className="!mb-0"
                label={
                  <span className="font-medium text-[#13265C]">
                    {t("information")}
                  </span>
                }
                name={["description", "rus"]}
                rules={[{ required: true, message: "" }]}
              >
                <div className="flex items-center gap-[6px]">
                  <StyledTextArea
                    rows={3}
                    placeholder="Рус"
                    prefix={
                      <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                        Рус
                      </span>
                    }
                  />
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
                    placeholder="Uzb"
                    prefix={
                      <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                        Uzb
                      </span>
                    }
                  />
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
                    placeholder="Eng"
                    prefix={
                      <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#EFF3FF] text-[#3F73BC] text-[12px] font-semibold rounded-full">
                        Eng
                      </span>
                    }
                  />
                </div>
              </Form.Item>
              <Form.Item className="flex justify-end">
                <button
                  onClick={() => cancelForm()}
                  className="mr-5 text-lg font-medium py-[10px] px-10 border border-[#D9D9D9] rounded-[8px] cursor-pointer"
                >
                  {t("delete")}
                </button>
                <button
                  className="text-lg font-medium py-[10px] px-10 bg-[#3F73BC] rounded-[8px] text-white cursor-pointer"
                  htmlType="submit"
                >
                  {load === true ? "Loading..." : <span>{t("save")}</span>}
                </button>
              </Form.Item>
            </Form>
          </div>
        ) : (
          <div className="border-l-2 pl-6 w-full border-[#D9D9D9] space-y-5">
            <Form.Item>
              <div className="flex items-center gap-4">
                <label className="cursor-pointer flex items-center gap-2 px-4 py-2 border border-[#D9D9D9] rounded-lg hover:bg-[#f5f5f5] transition-colors duration-200">
                  <span className="text-[#3F73BC] font-medium">
                    {t("select_image")}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleUpdateImageChange}
                    className="hidden"
                    required
                  />
                </label>
                <div className="w-[100px] h-[100px] relative">
                  {updatePreviewImage === null ? (
                    <img
                      src={`http://localhost:2222${course.image}`}
                      alt="Preview"
                      className="w-full h-full object-cover rounded border border-[#D9D9D9]"
                    />
                  ) : (
                    <div className="w-[100px] h-[100px] relative">
                      <img
                        src={updatePreviewImage}
                        alt="Preview"
                        className="w-full h-full object-cover rounded border border-[#D9D9D9]"
                      />
                    </div>
                  )}
                </div>
              </div>
            </Form.Item>
            <div className="mb-6">
              <h1 className="text-lg font-medium mb-2">
                {course.news_title_ru}
              </h1>

              <p className="text-sm text-gray-700 mb-6">
                {course.news_about_ru}
              </p>

              <p className="text-sm text-gray-600 mb-6">
                {formatDateToUzbek(course.createdAt)}
              </p>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  {t("title")} <span className="text-red-500">*</span>
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
                        value={course.news_title_ru}
                        onChange={(e) =>
                          setCourse({
                            ...course,
                            news_title_ru: e.target.value,
                          })
                        }
                        required
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
                        value={course.news_title_uz}
                        onChange={(e) =>
                          setCourse({
                            ...course,
                            news_title_uz: e.target.value,
                          })
                        }
                        required
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
                        value={course.news_title_eng}
                        onChange={(e) =>
                          setCourse({
                            ...course,
                            news_title_eng: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  {t("information")} <span className="text-red-500">*</span>
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
                        value={course.news_about_ru}
                        onChange={(e) =>
                          setCourse({
                            ...course,
                            news_about_ru: e.target.value,
                          })
                        }
                        required
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
                        value={course.news_about_uz}
                        onChange={(e) =>
                          setCourse({
                            ...course,
                            news_about_uz: e.target.value,
                          })
                        }
                        required
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
                        value={course.news_about_eng}
                        onChange={(e) =>
                          setCourse({
                            ...course,
                            news_about_eng: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Form.Item className="flex justify-end">
                <button
                  onClick={() => openAndClose()}
                  className="text-lg font-medium py-[10px] px-10 bg-red-800 rounded-[8px] text-white cursor-pointer mr-4"
                  htmlType="submit"
                >
                  {t("delete")}
                </button>
                <button
                  onClick={handleUpdate}
                  className="text-lg font-medium py-[10px] px-10 bg-blue-600 rounded-[8px] text-white cursor-pointer"
                >
                  {updating === true ? "Loading..." : <span>{t("save")}</span>}
                </button>
              </Form.Item>
            </div>
            <DeleteConfirmationModal
              isOpen={isOpen}
              handleDelete={handleDelete}
              closeModal={openAndClose}
            />
          </div>
        )}
      </div>
    </div>
  );
}
