import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
	return <div className="auth">{children}</div>;
}

export default AuthLayout;
