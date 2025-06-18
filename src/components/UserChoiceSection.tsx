"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ServiceOptions from "./ServiceOptions";

type UserType = "client" | "caregiver" | null;
type ServiceType = "visit" | "family" | null;

const UserChoiceSection = () => {
  const [userType, setUserType] = useState<UserType>(null);
  const [serviceType, setServiceType] = useState<ServiceType>(null);
  const router = useRouter();

  const handleCenterInfo = () => {
    router.push("/about");
  };

  const resetSelections = () => {
    setUserType(null);
    setServiceType(null);
  };

  return (
    <div className="mt-2 space-y-6 transition-all">
      {!userType ? (
        // 초기 사용자 유형 선택
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={handleCenterInfo}
            className="card bg-base-100 shadow-md hover:shadow-xl transition"
          >
            <div className="card-body items-center text-center">
              <div className="text-4xl">📍</div>
              <h3 className="card-title">센터에 대해 알려주세요</h3>
              <p className="text-sm">센터 소개와 위치를 확인하세요</p>
            </div>
          </button>

          <button
            onClick={() => setUserType("client")}
            className="card bg-base-100 shadow-md hover:shadow-xl transition"
          >
            <div className="card-body items-center text-center">
              <div className="text-4xl">👨‍👩‍👧‍👦</div>
              <h3 className="card-title">요양보호사가 필요합니다</h3>
              <p className="text-sm">어르신을 위한 요양 서비스 신청</p>
            </div>
          </button>

          <button
            onClick={() => setUserType("caregiver")}
            className="card bg-base-100 shadow-md hover:shadow-xl transition"
          >
            <div className="card-body items-center text-center">
              <div className="text-4xl">👩‍⚕️</div>
              <h3 className="card-title">요양보호사 입니다</h3>
              <p className="text-sm">요양보호사 지원 및 문의</p>
            </div>
          </button>
        </div>
      ) : (
        // 서비스 유형 선택 또는 서비스 상세 정보 표시
        <>
          <div className="flex items-center justify-center mb-8">
            <button
              onClick={resetSelections}
              className="btn btn-link no-underline text-base-100"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              처음으로 돌아가기
            </button>
            <span className="mx-2 opacity-60">|</span>
            <div className="text-sm rounded-full bg-base-100 px-3 py-1 text-base-content">
              {userType === "client" ? "요양보호사 찾기" : "요양보호사 지원"}
            </div>
          </div>

          <ServiceOptions 
            userType={userType} 
            serviceType={serviceType} 
            setServiceType={setServiceType} 
          />
        </>
      )}
    </div>
  );
};

export default UserChoiceSection;
