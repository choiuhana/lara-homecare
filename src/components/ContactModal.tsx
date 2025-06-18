"use client";

import { useState, useEffect } from "react";

interface ContactModalProps {
  showContact: boolean;
  setShowContact: (show: boolean) => void;
  context?: string;
}

const ContactModal = ({ showContact, setShowContact, context = "" }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (showContact) {
      setFormData(prev => ({ ...prev, message: context }));
      setTimeout(() => setAnimateIn(true), 10);
    } else {
      setAnimateIn(false);
    }
  }, [showContact, context]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기서 폼 데이터 처리 로직을 구현할 수 있습니다
    console.log("제출된 데이터:", formData);

    // 폼 초기화 및 모달 닫기
    setFormData({ name: "", phone: "", email: "", message: "" });
    setShowContact(false);
  };

  const closeModal = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setShowContact(false);
    }, 300);
  };

  if (!showContact) return null;

  return (
    <div className="modal modal-open" onClick={closeModal}>
      <div className="modal-box w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <h3 className="font-bold text-lg mb-4">문의하기</h3>
        <div className="mb-6">
          <p className="text-gray-600 mb-8 text-lg">라라재가요양센터에 궁금한 점이 있으신가요? 아래 양식을 작성하시면 빠른 시일 내에 답변 드리겠습니다.</p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">이름</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="홍길동"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">연락처</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="010-0000-0000"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">이메일</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">문의내용</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered w-full h-40"
                placeholder="문의하실 내용을 자세히 적어주세요."
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6">
              <button
                type="button"
                className="btn"
                onClick={closeModal}
              >
                닫기
              </button>
              <button
                type="submit"
                className="btn btn-primary"
              >
                문의하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
