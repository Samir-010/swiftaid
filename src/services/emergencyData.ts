
export interface EmergencyStep {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface EmergencyDetail {
  id: number;
  title: string;
  category: "medical" | "mental" | "environmental" | "accidents" | "crime" | "special";
  overview: string;
  doImmediately: string[];
  doNotDo: string[];
  steps: EmergencyStep[];
  whenToSeekHelp: string[];
  sources?: string[];
}

const emergencyDetails: Record<number, EmergencyDetail> = {
  1: {
    id: 1,
    title: "Heart Attack",
    category: "medical",
    overview: "A heart attack occurs when blood flow to a part of the heart becomes blocked, often by a blood clot. Without oxygenated blood, heart muscles begin to die. The more time that passes without treatment, the greater the damage.",
    doImmediately: [
      "Call emergency services (911/999/112) immediately",
      "Have the person sit down, rest, and try to keep calm",
      "Loosen tight clothing around the neck and waist",
      "If the person is not allergic to aspirin and it's readily available, give them one adult aspirin (325 mg) or two to four low-dose aspirin (81 mg each)"
    ],
    doNotDo: [
      "Don't leave the person alone except to call for help",
      "Don't allow the person to drive themselves to the hospital",
      "Don't delay calling for emergency help",
      "Don't give medications other than aspirin unless prescribed"
    ],
    steps: [
      {
        id: 1,
        title: "Recognize the symptoms",
        description: "Common heart attack symptoms include chest pain/pressure/squeezing, pain radiating to the arm/neck/jaw, shortness of breath, cold sweat, nausea, and lightheadedness."
      },
      {
        id: 2,
        title: "Call emergency services",
        description: "Dial your local emergency number (e.g., 911) immediately. Even if you're not sure it's a heart attack, it's better to get help quickly."
      },
      {
        id: 3,
        title: "Help the person take aspirin",
        description: "If the person is not allergic, have them chew one adult aspirin or multiple baby aspirins. Chewing gets the medication into the bloodstream faster."
      },
      {
        id: 4,
        title: "Assist with nitroglycerin",
        description: "If prescribed, help them take their nitroglycerin as directed."
      },
      {
        id: 5,
        title: "Start CPR if needed",
        description: "If the person is unconscious and not breathing normally, begin CPR if you're trained. Push hard and fast in the center of the chest, about 100-120 compressions per minute."
      }
    ],
    whenToSeekHelp: [
      "Seek emergency medical help for ANY suspected heart attack symptoms",
      "Don't wait more than 5 minutes to call emergency services",
      "Even mild chest discomfort can indicate a heart attack",
      "Women, elderly, and diabetic patients may have atypical symptoms"
    ],
    sources: [
      "American Heart Association",
      "Mayo Clinic",
      "National Heart, Lung, and Blood Institute"
    ]
  },
  // Add more emergency details as needed
};

export const getEmergencyDetail = (id: number): EmergencyDetail | undefined => {
  return emergencyDetails[id];
};

export const getAllEmergencyDetails = (): EmergencyDetail[] => {
  return Object.values(emergencyDetails);
};
