
type ProgressStepsProps = {
  currentStep: number;
};

export const ProgressSteps = ({ currentStep }: ProgressStepsProps) => {
  const steps = [
    "معلومات الشركة",
    "الاسم التجاري",
    "العنوان",
    "رأس المال",
    "المديرون",
    "المستندات",
    "ملخص الطلب",
    "سداد الرسوم والتقديم"
  ];

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4 text-right">خطوات تقديم الطلب</h2>
      <div className="relative flex justify-center items-center mb-8">
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-10"></div>
        <div className="flex justify-between w-full relative z-10">
          {steps.map((label, index) => {
            const stepNumber = index + 1;
            return (
              <div key={stepNumber} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep === stepNumber
                      ? "bg-[#003979] text-white"
                      : stepNumber < currentStep
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  } mb-2`}
                >
                  {stepNumber}
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
