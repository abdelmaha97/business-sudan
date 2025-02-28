
import { ReactNode } from "react";

type Step = 'accountType' | 'personalInfo' | 'identityVerification' | 'password' | 'complete';

interface RegistrationStepsProps {
  currentStep: Step;
}

export const RegistrationSteps = ({ currentStep }: RegistrationStepsProps) => {
  const steps: Array<{ key: Step, label: string }> = [
    { key: 'accountType', label: "نوع الحساب" },
    { key: 'personalInfo', label: "البيانات الشخصية" },
    { key: 'identityVerification', label: "التحقق من الهوية" },
    { key: 'password', label: "كلمة المرور" },
    { key: 'complete', label: "انتهاء التسجيل" }
  ];

  const getStatus = (stepKey: Step): 'current' | 'done' | 'upcoming' => {
    const currentIndex = steps.findIndex(s => s.key === currentStep);
    const stepIndex = steps.findIndex(s => s.key === stepKey);

    if (stepKey === currentStep) return 'current';
    if (stepIndex < currentIndex) return 'done';
    return 'upcoming';
  };

  return (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center space-x-4 space-x-reverse">
        {steps.map((step, index) => {
          const status = getStatus(step.key);
          const number = index + 1;
          
          return (
            <div key={step.key} className="flex items-center">
              {index > 0 && (
                <div 
                  className={`h-0.5 w-16 mx-2 ${
                    status === 'upcoming' ? 'bg-gray-200' : 'bg-primary'
                  }`}
                />
              )}
              <div className="flex flex-col items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                    status === 'current' ? 'bg-primary text-white' :
                    status === 'done' ? 'bg-primary/20 text-primary' :
                    'bg-gray-200 text-gray-400'
                  }`}
                >
                  {number}
                </div>
                <span className="text-sm mt-1 text-gray-600">{step.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
