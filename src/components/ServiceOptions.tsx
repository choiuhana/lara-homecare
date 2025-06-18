"use client";

import { useState } from "react";
import Link from "next/link";
import ContactModal from "./ContactModal";

interface ServiceOptionsProps {
	userType: "client" | "caregiver";
	serviceType: "visit" | "family" | null;
	setServiceType: (type: "visit" | "family") => void;
}

const ServiceOptions = ({ userType, serviceType, setServiceType }: ServiceOptionsProps) => {
	const [showContact, setShowContact] = useState(false);

	const info = () => {
		if (userType === "client" && serviceType === "visit") {
			return {
				title: "방문 요양",
				desc: "전문 요양보호사가 가정을 방문하여 돌봄 서비스를 제공합니다.",
				price: "월 1,350,800원부터 (본인부담금 15%)",
			};
		}
		if (userType === "client" && serviceType === "family") {
			return {
				title: "가족 요양",
				desc: "가족이 직접 요양 서비스를 제공할 수 있도록 교육과 지원을 해드립니다.",
				price: "월 1,350,800원부터 (본인부담금 15%)",
			};
		}
		if (userType === "caregiver" && serviceType === "visit") {
			return {
				title: "방문 요양 업무",
				desc: "어르신 댁을 방문하여 돌봄 서비스를 제공하는 일자리입니다.",
				price: "급여: 시간당 12,000원부터",
			};
		}
		if (userType === "caregiver" && serviceType === "family") {
			return {
				title: "가족 요양 지원",
				desc: "가족 요양 프로그램에 참여하여 서비스를 제공합니다.",
				price: "급여: 시간당 12,000원부터",
			};
		}
		return null;
	};

	const contextMsg = `대상: ${userType}, 서비스: ${serviceType}`;

        if (!serviceType) {
                return (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <button
                                        onClick={() => setServiceType("visit")}
                                        className="card bg-base-100 shadow-md hover:shadow-xl transition"
                                >
                                        <div className="card-body items-center text-center">
                                                <div className="text-4xl">🏠</div>
                                                <h3 className="card-title">방문 요양을 원해요</h3>
                                                <p className="text-sm">집으로 방문하는 돌봄 서비스</p>
                                        </div>
                                </button>
                                <button
                                        onClick={() => setServiceType("family")}
                                        className="card bg-base-100 shadow-md hover:shadow-xl transition"
                                >
                                        <div className="card-body items-center text-center">
                                                <div className="text-4xl">👪</div>
                                                <h3 className="card-title">가족 요양을 원해요</h3>
                                                <p className="text-sm">가족이 돌봄을 제공하는 서비스</p>
                                        </div>
                                </button>
                        </div>
                );
        }

	const detail = info();

	return (
		<div className="space-y-6 text-center">
			<h3 className="text-2xl font-semibold">{detail?.title}</h3>
			<p>{detail?.desc}</p>
			<p className="font-medium">{detail?.price}</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                        href="/find"
                                        className="btn btn-primary flex-1"
                                >
                                        센터를 방문할게요
                                </Link>
                                <button
                                        onClick={() => setShowContact(true)}
                                        className="btn flex-1"
                                >
                                        문의하고 싶어요
                                </button>
                        </div>
			<ContactModal showContact={showContact} setShowContact={setShowContact} context={contextMsg} />
		</div>
	);
};

export default ServiceOptions;
