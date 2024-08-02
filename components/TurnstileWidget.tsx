"use client";

import React from "react";
import Turnstile from "react-turnstile";

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
}

const TurnstileWidget = ({ onVerify }: TurnstileWidgetProps) => {
  return (
    <Turnstile
      sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITEKEY}
      onVerify={(token) => {
        onVerify(token);
      }}
    />
  );
};

export default TurnstileWidget;
