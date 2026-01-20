"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

type PlanType = "Basic" | "Premium" | "Premium+";
type BillingCycle = "annual" | "monthly";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("annual");
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("Premium");

  const plans = [
    {
      name: "Basic Plan",
      monthlyPrice: 1500,
      annualPrice: 15000,
      videoDeliverables: 100,
      features: [
        "Basic Video Editing",
        "Simple motion graphics",
        "Animated Texts",
        "Social Media Cuts",
        "100 short-form videos",
        "1 Iman Gadzi Style Edits",
        "(Reels, TikToks, Shorts)",
      ],
    },
    {
      name: "Premium Plan",
      monthlyPrice: 2500,
      annualPrice: 25000,
      videoDeliverables: 200,
      popular: true,
      features: [
        "Everything in Basic, and",
        "Advanced Video Editing / AI Videos",
        "Branded Content/Motion Graphics",
        "50 AI Advert Videos",
        "15 Explainer Videos",
        "5 Iman Gadzi Style Edits",
        "125 Short-form Videos",
      ],
    },
    {
      name: "Premium+ Plan",
      monthlyPrice: 5000,
      annualPrice: 50000,
      videoDeliverables: 400,
      features: [
        "Everything in Premium, and",
        "High-End Commercial Work",
        "Strategic Video Content",
        "Priority Services",
        "5 Explainer Videos",
        "15 Iman Gadzi Style Edits",
        "200 Short-form Videos",
      ],
    },
  ];

  const getPrice = (plan: (typeof plans)[0]) =>
    billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice;

  const currentPlan = plans.find((p) => p.name.startsWith(selectedPlan));

  return (
    <section className="w-full bg-[#0a0510] pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#4C1D95] p-1 rounded-full flex items-center shadow-lg border border-purple-500/30">
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-8 py-2 rounded-full text-lg font-bold transition-all duration-300 ${
                billingCycle === "annual"
                  ? "bg-white text-[#4C1D95] shadow-sm"
                  : "text-white hover:text-purple-200"
              }`}
            >
              Annual
            </button>
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-8 py-2 rounded-full text-lg font-bold transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-white text-[#4C1D95] shadow-sm"
                  : "text-white hover:text-purple-200"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const isSelected = plan.name.startsWith(selectedPlan);
            const price = getPrice(plan);

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                onClick={() =>
                  setSelectedPlan(plan.name.split(" ")[0] as PlanType)
                }
                className={`
                  relative p-8 rounded-3xl cursor-pointer transition-colors duration-300
                  ${
                    isSelected
                      ? "bg-[#4C1D95] border-2 border-[#FED65E] shadow-[0_0_40px_rgba(76,29,149,0.6)]"
                      : "bg-[#4C1D95] border border-purple-500/30 hover:border-[#FED65E] hover:shadow-xl"
                  }
                `}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-[#FED65E] relative z-10">
                    {plan.name}
                  </h3>
                  {/* Selection Circle */}
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isSelected
                        ? "border-[#FED65E] bg-yellow-400 text-[#FED65E]"
                        : "border-[#FED65E]"
                    }`}
                  >
                    {isSelected && <Check size={14} strokeWidth={4} />}
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-5xl font-black text-[#FED65E] tracking-tight">
                    ${price.toLocaleString()}
                  </span>
                  <span className="text-xl text-[#FED65E] font-medium">
                    /{billingCycle === "annual" ? "year" : "month"}
                  </span>
                </div>
                <p className="text-sm text-purple-200 font-medium mb-8">
                  $
                  {(billingCycle === "annual"
                    ? price
                    : price * 12
                  ).toLocaleString()}{" "}
                  billed annually
                </p>

                <div className="space-y-4 mb-20 relative">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-300 mt-0.5" />
                      <span className="text-gray-200 text-sm leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Stats */}
                <div className="absolute bottom-8 left-8">
                  <div className="flex items-center gap-3">
                    <span className="text-5xl font-black text-white">
                      {plan.videoDeliverables}
                    </span>
                    <div className="flex flex-col leading-none">
                      <span className="text-sm font-bold text-white">
                        Video
                      </span>
                      <span className="text-sm font-bold text-white">
                        Deliverables
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Summary Bar - Static Flow */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full bg-[#FED65E] py-8 px-8 mt-20 relative z-10"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Info Row - Grid for alignment */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center w-full text-[#4C1D95] gap-4 md:gap-0">
            {/* Left: Plan Name */}
            <h4 className="text-2xl font-bold text-left">
              {currentPlan?.name.split(" ")[0]}
            </h4>

            {/* Center: Price */}
            <div className="text-4xl md:text-6xl font-black text-center">
              ${currentPlan && getPrice(currentPlan).toLocaleString()}{" "}
              <span className="text-xl md:text-2xl font-bold">
                /{billingCycle === "annual" ? "year" : "month"}
              </span>
            </div>

            {/* Right: Billed Info */}
            <div className="text-sm font-bold uppercase tracking-wide text-right">
              Billed {billingCycle === "annual" ? "Annually" : "Monthly"}
            </div>
          </div>

          {/* Button Row */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#4C1D95] hover:bg-[#3b1675] text-white py-5 rounded-lg font-bold text-xl transition-colors shadow-lg"
          >
            Subscribe & Pay
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;
