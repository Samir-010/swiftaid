
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
  2: {
    id: 2,
    title: "Stroke",
    category: "medical",
    overview: "A stroke occurs when blood flow to the brain is interrupted, causing brain cells to die from lack of oxygen. Quick action can minimize brain damage and potential complications.",
    doImmediately: [
      "Call emergency services (911/999/112) immediately",
      "Note the time when symptoms first appeared",
      "Perform the FAST test: Face drooping, Arm weakness, Speech difficulty, Time to call emergency",
      "Keep the person still and lying down with head slightly elevated"
    ],
    doNotDo: [
      "Don't give them medication, food, or drinks",
      "Don't wait to see if symptoms improve",
      "Don't let them sleep or dismiss their symptoms",
      "Don't drive them yourself; call an ambulance"
    ],
    steps: [
      {
        id: 1,
        title: "Recognize the symptoms (FAST)",
        description: "Face drooping: Ask them to smile. Is one side drooping? Arm weakness: Can they raise both arms? Does one drift downward? Speech difficulty: Is their speech slurred or strange? Time: If any of these signs are present, call emergency services immediately."
      },
      {
        id: 2,
        title: "Call emergency services",
        description: "Immediately dial your local emergency number. Mention that you suspect a stroke to prioritize the response."
      },
      {
        id: 3,
        title: "Note the time",
        description: "Record when symptoms first appeared. This information is critical for treatment decisions."
      },
      {
        id: 4,
        title: "Keep them comfortable",
        description: "Help them lie down with their head slightly elevated and turned to one side in case of vomiting."
      },
      {
        id: 5,
        title: "Monitor and reassure",
        description: "Check breathing and pulse. Stay calm and reassure them while waiting for help."
      }
    ],
    whenToSeekHelp: [
      "ANY sign of stroke requires immediate emergency help",
      "Even if symptoms seem to resolve (TIA or mini-stroke), still seek help",
      "If someone has had a previous stroke, any new symptoms require immediate attention",
      "Risk factors like high blood pressure, diabetes, smoking, and family history increase urgency"
    ],
    sources: [
      "American Stroke Association",
      "National Institute of Neurological Disorders and Stroke",
      "World Stroke Organization"
    ]
  },
  3: {
    id: 3,
    title: "Choking",
    category: "medical",
    overview: "Choking occurs when an object blocks the airway, preventing normal breathing. It can be partial or complete and requires immediate action to prevent brain damage or death.",
    doImmediately: [
      "Determine if they can speak, cough, or breathe",
      "If conscious, perform abdominal thrusts (Heimlich maneuver)",
      "If pregnant or obese, perform chest thrusts instead",
      "Continue until the object is expelled or the person becomes unconscious"
    ],
    doNotDo: [
      "Don't slap their back if they're coughing effectively",
      "Don't perform abdominal thrusts on infants under 1 year",
      "Don't waste time looking for the object you can't see",
      "Don't give them food or water"
    ],
    steps: [
      {
        id: 1,
        title: "Identify if they're choking",
        description: "Ask 'Are you choking?' If they can't speak, cough forcefully, or are making high-pitched noises, they need immediate help."
      },
      {
        id: 2,
        title: "Position yourself",
        description: "Stand behind the person and wrap your arms around their waist."
      },
      {
        id: 3,
        title: "Perform abdominal thrusts",
        description: "Make a fist with one hand, placing the thumb side just above the navel. Grab your fist with your other hand and press inward and upward with quick thrusts."
      },
      {
        id: 4,
        title: "Continue until resolved",
        description: "Repeat thrusts until the object is expelled or the person becomes unconscious."
      },
      {
        id: 5,
        title: "If unconscious, start CPR",
        description: "Lay them on their back, check the mouth for visible objects, then begin CPR starting with chest compressions."
      }
    ],
    whenToSeekHelp: [
      "Call emergency services if the person can't breathe, speak, or cough",
      "Seek medical attention after successful choking rescue, as complications can develop",
      "If you're alone and choking, call emergency services and perform self-thrusts against a firm object",
      "For infants, always seek medical help after a choking incident"
    ],
    sources: [
      "American Red Cross",
      "Mayo Clinic",
      "American Heart Association"
    ]
  },
  4: {
    id: 4,
    title: "Severe Bleeding",
    category: "medical",
    overview: "Severe bleeding can lead to shock and be life-threatening if not controlled quickly. The goal is to stop the bleeding as quickly as possible and prevent infection.",
    doImmediately: [
      "Apply direct pressure with a clean cloth or bandage",
      "If available, use a commercial hemostatic gauze or tourniquet for limb wounds",
      "Elevate the wounded area above the heart if possible",
      "Call emergency services or get to a hospital quickly"
    ],
    doNotDo: [
      "Don't remove large embedded objects – stabilize them in place",
      "Don't apply a tourniquet unless bleeding can't be controlled by direct pressure",
      "Don't clean the wound deeply – focus on stopping bleeding first",
      "Don't remove the first bandage if it soaks through – add more on top"
    ],
    steps: [
      {
        id: 1,
        title: "Ensure safety",
        description: "Make sure both you and the injured person are safe. Use gloves if available to protect against bloodborne diseases."
      },
      {
        id: 2,
        title: "Apply direct pressure",
        description: "Use a clean cloth, bandage, or even clothing. Press firmly on the wound. If blood soaks through, add more material without removing the first layer."
      },
      {
        id: 3,
        title: "Elevate if possible",
        description: "If the wound is on a limb and no fractures are suspected, raise it above the level of the heart to reduce blood flow."
      },
      {
        id: 4,
        title: "Apply pressure to pressure points",
        description: "If direct pressure isn't working, apply pressure to the appropriate pressure point (brachial artery for arm wounds, femoral artery for leg wounds)."
      },
      {
        id: 5,
        title: "Use a tourniquet as last resort",
        description: "For life-threatening limb bleeding that can't be controlled, apply a tourniquet 2-3 inches above the wound (not on a joint). Note the time applied."
      }
    ],
    whenToSeekHelp: [
      "Any bleeding that doesn't stop with direct pressure after 15 minutes",
      "Deep wounds that may need stitches",
      "Wounds from dirty or rusty objects (tetanus risk)",
      "Signs of infection: increasing pain, redness, swelling, warmth, pus, or fever"
    ],
    sources: [
      "American College of Surgeons",
      "Stop the Bleed Campaign",
      "American Red Cross"
    ]
  },
  5: {
    id: 5,
    title: "Broken Bones",
    category: "medical",
    overview: "Broken bones (fractures) need proper immobilization to prevent further damage and reduce pain. Different types of fractures require different approaches.",
    doImmediately: [
      "Stop any bleeding with direct pressure",
      "Immobilize the injury – don't try to realign the bone",
      "Apply ice wrapped in a cloth to reduce swelling",
      "Treat for shock by keeping the person warm and lying down if possible"
    ],
    doNotDo: [
      "Don't move the person unless necessary for safety",
      "Don't move or straighten the broken bone or joint",
      "Don't test the injury by asking them to move it",
      "Don't give food or drink in case surgery is needed"
    ],
    steps: [
      {
        id: 1,
        title: "Check for other injuries",
        description: "Before focusing solely on the fracture, quickly check for other serious injuries like bleeding or head trauma."
      },
      {
        id: 2,
        title: "Immobilize the area",
        description: "Keep the injured area still. For limbs, you can use a makeshift splint (rolled newspaper, piece of wood) and secure it with ties above and below the break."
      },
      {
        id: 3,
        title: "Apply cold",
        description: "Use an ice pack wrapped in cloth and apply for 20 minutes at a time to reduce swelling and numb pain. Don't apply directly to the skin."
      },
      {
        id: 4,
        title: "Elevate if possible",
        description: "If it doesn't cause pain, raise the injured area above heart level to reduce swelling."
      },
      {
        id: 5,
        title: "Control pain",
        description: "If appropriate and no internal injuries are suspected, over-the-counter pain medications can help while waiting for medical attention."
      }
    ],
    whenToSeekHelp: [
      "Any suspected broken bone requires medical attention",
      "Emergency help needed if: bone has pierced the skin, limb appears deformed, area is numb or bluish",
      "Immediate attention for spinal, skull, hip, or pelvis fractures – do not move the person",
      "Significant swelling, inability to bear weight, or joint involvement requires prompt care"
    ],
    sources: [
      "American Academy of Orthopedic Surgeons",
      "Mayo Clinic",
      "Cleveland Clinic"
    ]
  },
  6: {
    id: 6,
    title: "Burns",
    category: "medical",
    overview: "Burns are classified by severity (first, second, or third-degree) and require different treatments. Proper immediate care can significantly improve outcomes and reduce scarring.",
    doImmediately: [
      "Remove from the source of the burn",
      "Cool the burn with cool (not cold) running water for 10-15 minutes",
      "Cover with a clean, non-stick bandage or cloth",
      "Take over-the-counter pain relievers if needed"
    ],
    doNotDo: [
      "Don't use ice, as it can damage tissue further",
      "Don't apply butter, oil, toothpaste, or other home remedies",
      "Don't break blisters",
      "Don't remove clothing stuck to burned areas"
    ],
    steps: [
      {
        id: 1,
        title: "Ensure safety",
        description: "Remove the person from danger. For electrical burns, make sure the power source is off before touching the person."
      },
      {
        id: 2,
        title: "Assess burn severity",
        description: "First-degree: red, painful, dry (like sunburn). Second-degree: blisters, very painful, swollen. Third-degree: white/charred, possibly painless due to nerve damage."
      },
      {
        id: 3,
        title: "Cool the burn",
        description: "Run cool (not cold) water over the area for 10-15 minutes. Don't use ice. For large burns, ensure you're not causing hypothermia."
      },
      {
        id: 4,
        title: "Cover the burn",
        description: "After cooling, cover with a clean, non-stick bandage or cloth. Wrap loosely to avoid pressure on the burned skin."
      },
      {
        id: 5,
        title: "Prevent infection",
        description: "Keep the burn clean. Don't apply ointments to severe burns unless directed by medical professionals."
      }
    ],
    whenToSeekHelp: [
      "Third-degree burns always require emergency care",
      "Second-degree burns larger than 3 inches or on face, hands, feet, genitals, or major joints",
      "Burns from chemicals, electricity, or explosions regardless of size",
      "Signs of infection: increased pain, redness, swelling, oozing, or fever"
    ],
    sources: [
      "American Burn Association",
      "World Health Organization",
      "Mayo Clinic"
    ]
  },
  7: {
    id: 7,
    title: "Seizure",
    category: "medical",
    overview: "Seizures are sudden, uncontrolled electrical disturbances in the brain that can cause changes in behavior, movements, feelings, and consciousness. Most seizures last from 30 seconds to 2 minutes.",
    doImmediately: [
      "Time the seizure - call emergency services if it lasts more than 5 minutes",
      "Clear the area of hazardous objects",
      "Gently roll the person onto their side to prevent choking",
      "Stay with them until they're fully conscious"
    ],
    doNotDo: [
      "Don't hold the person down or try to stop their movements",
      "Don't put anything in their mouth",
      "Don't give them water, pills, or food until fully alert",
      "Don't leave them alone until they're fully recovered"
    ],
    steps: [
      {
        id: 1,
        title: "Stay calm and time it",
        description: "Note when the seizure starts. Most seizures last 1-3 minutes and aren't medical emergencies unless they go longer."
      },
      {
        id: 2,
        title: "Protect from injury",
        description: "Move furniture or other objects away. If possible, place something soft under their head."
      },
      {
        id: 3,
        title: "Position properly",
        description: "Once movements have subsided or if the person is unconscious, gently roll them onto their side (recovery position) to keep airways clear."
      },
      {
        id: 4,
        title: "Stay present",
        description: "Remain with them until they're fully conscious. Speak calmly and reassuringly as they regain awareness."
      },
      {
        id: 5,
        title: "Document details",
        description: "Note how long it lasted, what parts of body were affected, and behavior before, during, and after. This information helps medical professionals."
      }
    ],
    whenToSeekHelp: [
      "First seizure a person has ever experienced",
      "Seizure lasting more than 5 minutes or multiple seizures without regaining consciousness",
      "Slow recovery, difficulty breathing, or injury during the seizure",
      "Seizure occurs in water, during pregnancy, or with diabetes"
    ],
    sources: [
      "Epilepsy Foundation",
      "Centers for Disease Control and Prevention",
      "World Health Organization"
    ]
  },
  8: {
    id: 8,
    title: "Unconsciousness",
    category: "medical",
    overview: "Unconsciousness is when a person is unresponsive and can't be awakened. It can be caused by many conditions including injury, illness, or substance use, and requires immediate attention.",
    doImmediately: [
      "Check for breathing and pulse",
      "Call emergency services immediately",
      "Position them on their side if breathing (recovery position)",
      "Begin CPR if not breathing normally"
    ],
    doNotDo: [
      "Don't leave them alone",
      "Don't give food or fluids",
      "Don't shake them or slap them to wake them",
      "Don't prop them up if injury is suspected"
    ],
    steps: [
      {
        id: 1,
        title: "Check responsiveness",
        description: "Gently shake shoulders and ask loudly if they're OK. If no response, they're unconscious."
      },
      {
        id: 2,
        title: "Open the airway",
        description: "Tilt their head back slightly and lift the chin (unless neck injury is suspected)."
      },
      {
        id: 3,
        title: "Check breathing",
        description: "Look, listen, and feel for breathing for no more than 10 seconds. If breathing, place in recovery position."
      },
      {
        id: 4,
        title: "Call emergency services",
        description: "If alone, call emergency services before starting CPR unless it's a child and sudden cardiac arrest is suspected."
      },
      {
        id: 5,
        title: "Start CPR if needed",
        description: "If not breathing or only gasping, begin CPR with chest compressions. Push hard and fast in center of chest, about 100-120 compressions per minute."
      }
    ],
    whenToSeekHelp: [
      "Always seek emergency help for unconsciousness",
      "Even if the person regains consciousness, they still need medical evaluation",
      "Fainting with no obvious cause requires medical attention",
      "Any head injury causing loss of consciousness needs immediate evaluation"
    ],
    sources: [
      "American Heart Association",
      "Mayo Clinic",
      "National Institutes of Health"
    ]
  },
  9: {
    id: 9,
    title: "Panic Attack",
    category: "mental",
    overview: "A panic attack is a sudden episode of intense fear that triggers severe physical reactions when there's no real danger. Symptoms can be so severe that some people think they're having a heart attack.",
    doImmediately: [
      "Stay with the person and remain calm",
      "Speak in short, simple sentences in a reassuring tone",
      "Ask them to focus on breathing slowly - in for 4, hold for 1, out for 4",
      "Remove them from overwhelming stimuli if possible"
    ],
    doNotDo: [
      "Don't minimize their fear or say 'just calm down'",
      "Don't make assumptions about what they need",
      "Don't crowd them or make sudden movements",
      "Don't get frustrated or show alarm at their symptoms"
    ],
    steps: [
      {
        id: 1,
        title: "Recognize the symptoms",
        description: "Symptoms include rapid heartbeat, shortness of breath, chest pain, trembling, sweating, nausea, dizziness, fear of dying or losing control, and numbness or tingling."
      },
      {
        id: 2,
        title: "Create safety",
        description: "If possible, lead them to a quiet, less stimulating environment. Ask if they'd prefer space or company."
      },
      {
        id: 3,
        title: "Guide their breathing",
        description: "Encourage slow, deep breathing. Breathe with them to demonstrate: inhale for 4 counts, hold for 1, exhale for 4 counts."
      },
      {
        id: 4,
        title: "Use grounding techniques",
        description: "Help them focus on the present using the 5-4-3-2-1 technique: name 5 things they can see, 4 they can touch, 3 they can hear, 2 they can smell, and 1 they can taste."
      },
      {
        id: 5,
        title: "Provide reassurance",
        description: "Remind them that panic attacks are temporary, not dangerous, and will pass. Avoid saying 'don't worry' or dismissing their experience."
      }
    ],
    whenToSeekHelp: [
      "Recurring panic attacks that interfere with daily life",
      "Development of fear or anxiety about having another attack",
      "Changes in behavior to avoid situations that might trigger an attack",
      "If chest pain continues after other symptoms subside (to rule out heart issues)"
    ],
    sources: [
      "Anxiety and Depression Association of America",
      "National Institute of Mental Health",
      "American Psychological Association"
    ]
  },
  10: {
    id: 10,
    title: "Suicidal Crisis",
    category: "mental",
    overview: "A suicidal crisis is when someone is actively considering ending their life. This is always an emergency situation requiring immediate intervention to ensure safety.",
    doImmediately: [
      "Take all threats or attempts seriously",
      "Stay with the person - do not leave them alone",
      "Call a crisis helpline or emergency services",
      "Remove means of self-harm if it's safe to do so"
    ],
    doNotDo: [
      "Don't promise to keep their thoughts secret",
      "Don't act shocked or lecture about the value of life",
      "Don't minimize their problems or offer simple solutions",
      "Don't debate whether suicide is right or wrong"
    ],
    steps: [
      {
        id: 1,
        title: "Assess immediate danger",
        description: "Ask directly: 'Are you thinking about suicide?' and 'Do you have a plan?' More detailed plans indicate higher risk."
      },
      {
        id: 2,
        title: "Listen actively",
        description: "Let them express their feelings without judgment. Acknowledge their pain: 'It sounds like you're going through a lot.'"
      },
      {
        id: 3,
        title: "Get professional help",
        description: "Call a crisis line like 988 (in US) or local emergency services. Say: 'I want to help you find someone who can help.'"
      },
      {
        id: 4,
        title: "Create a safety plan",
        description: "Work with them to identify warning signs, coping strategies, people they can contact, and ways to make their environment safer."
      },
      {
        id: 5,
        title: "Follow up",
        description: "Check in regularly after the immediate crisis. Recovery is a process that takes time and ongoing support."
      }
    ],
    whenToSeekHelp: [
      "ANY mention of suicide or wanting to die requires immediate help",
      "Concerning behaviors like giving away possessions, saying goodbye, or sudden calm after depression",
      "If the person has a history of suicide attempts or mental health issues",
      "If they have access to lethal means and have a specific plan"
    ],
    sources: [
      "National Suicide Prevention Lifeline",
      "American Foundation for Suicide Prevention",
      "World Health Organization"
    ]
  },
  11: {
    id: 11,
    title: "Severe Anxiety",
    category: "mental",
    overview: "Severe anxiety can be overwhelming and debilitating, causing intense psychological and physical symptoms that interfere with daily functioning and may lead to panic attacks or avoidant behaviors.",
    doImmediately: [
      "Create a calm, quiet environment",
      "Use a gentle, steady voice and simple language",
      "Encourage slow, deep breathing",
      "Validate their feelings without judgment"
    ],
    doNotDo: [
      "Don't tell them to 'calm down' or 'snap out of it'",
      "Don't make them feel embarrassed about their anxiety",
      "Don't force them into feared situations during an episode",
      "Don't leave them alone if they're in severe distress"
    ],
    steps: [
      {
        id: 1,
        title: "Recognize symptoms",
        description: "Physical: racing heart, shortness of breath, trembling, sweating, nausea. Mental: excessive worry, racing thoughts, feeling of impending doom, irritability, inability to concentrate."
      },
      {
        id: 2,
        title: "Create safety",
        description: "Move to a quiet place with fewer stimuli. Ask what they need: space, companionship, or help with a specific task."
      },
      {
        id: 3,
        title: "Practice grounding",
        description: "Guide them through grounding exercises like the 5-4-3-2-1 technique or have them name objects around them of a certain color."
      },
      {
        id: 4,
        title: "Use physical relaxation",
        description: "Prompt progressive muscle relaxation (tensing then releasing muscle groups), or gentle stretching if appropriate."
      },
      {
        id: 5,
        title: "Offer practical help",
        description: "Ask if they need help breaking down overwhelming tasks into smaller steps, or if they need assistance managing immediate responsibilities."
      }
    ],
    whenToSeekHelp: [
      "Anxiety interfering with daily activities or relationships",
      "Physical symptoms that mimic serious medical conditions",
      "Anxiety accompanied by depression or thoughts of self-harm",
      "Use of alcohol or drugs to manage anxiety symptoms"
    ],
    sources: [
      "National Institute of Mental Health",
      "Anxiety and Depression Association of America",
      "American Psychological Association"
    ]
  },
  12: {
    id: 12,
    title: "Earthquake",
    category: "environmental",
    overview: "Earthquakes occur without warning and can cause significant destruction. Knowing how to respond quickly can prevent injuries and save lives during and after the shaking.",
    doImmediately: [
      "Drop, Cover, and Hold On - get under sturdy furniture",
      "Stay indoors until the shaking stops completely",
      "If outdoors, move to an open area away from buildings",
      "If in a vehicle, pull over away from buildings and bridges"
    ],
    doNotDo: [
      "Don't run outside during shaking",
      "Don't stand in a doorway (modern doorways aren't safer)",
      "Don't use elevators",
      "Don't light matches or turn on electrical switches if you smell gas"
    ],
    steps: [
      {
        id: 1,
        title: "Drop, Cover, Hold On",
        description: "Quickly drop to hands and knees to prevent falls. Cover your head and neck with one arm, and crawl under sturdy furniture. Hold on to your shelter until shaking stops."
      },
      {
        id: 2,
        title: "Stay where you are",
        description: "If indoors, stay inside. If outside, stay outside. Most injuries occur when people try to move during shaking."
      },
      {
        id: 3,
        title: "After shaking stops",
        description: "Check yourself and others for injuries. Look for small fires and shut off gas if you smell or hear leaking gas."
      },
      {
        id: 4,
        title: "Evacuate if necessary",
        description: "Leave the building if it's damaged or if there's a fire. Use stairs, not elevators, and watch for fallen debris."
      },
      {
        id: 5,
        title: "Be prepared for aftershocks",
        description: "Smaller earthquakes can follow the main shock, sometimes for days or weeks. Follow the same safety procedures."
      }
    ],
    whenToSeekHelp: [
      "Injuries requiring medical attention",
      "Trapped individuals needing rescue",
      "Gas leaks or electrical hazards",
      "Structural damage to buildings that might pose collapse risk"
    ],
    sources: [
      "United States Geological Survey (USGS)",
      "Federal Emergency Management Agency (FEMA)",
      "Red Cross Earthquake Safety"
    ]
  },
  13: {
    id: 13,
    title: "Flood",
    category: "environmental",
    overview: "Floods can develop slowly or suddenly, and range from mild to catastrophic. Understanding proper responses can protect you from dangerous floodwaters, which can be deeper and flow faster than they appear.",
    doImmediately: [
      "Move to higher ground immediately",
      "Evacuate if told to do so",
      "Disconnect utilities if safe to do so",
      "Avoid walking or driving through floodwaters"
    ],
    doNotDo: [
      "Don't ignore evacuation orders",
      "Don't walk or drive through floodwater - 6 inches can knock you down",
      "Don't touch electrical equipment if wet or standing in water",
      "Don't return to flooded areas until authorities indicate it's safe"
    ],
    steps: [
      {
        id: 1,
        title: "Stay informed",
        description: "Monitor weather alerts, emergency broadcasts, and official instructions. Know the difference between flood watches (possible) and warnings (happening or imminent)."
      },
      {
        id: 2,
        title: "Prepare to evacuate",
        description: "Gather emergency supplies, important documents, medications, and pets. Fill clean containers with water in case water services are disrupted."
      },
      {
        id: 3,
        title: "Secure your home",
        description: "If time permits, move essential items to upper floors, turn off utilities at main switches if instructed, and disconnect electrical appliances (don't touch if wet)."
      },
      {
        id: 4,
        title: "Evacuate safely",
        description: "Leave early to avoid being trapped. Follow recommended evacuation routes. Don't drive around barricades."
      },
      {
        id: 5,
        title: "If trapped by floodwater",
        description: "Move to the highest level of the building. Only go to the roof if necessary. Signal for help with bright cloth or flashlight."
      }
    ],
    whenToSeekHelp: [
      "Medical emergencies or injuries",
      "If trapped by rising water",
      "Dangerous structural damage to buildings",
      "Exposure to contaminated floodwater causing illness"
    ],
    sources: [
      "Federal Emergency Management Agency (FEMA)",
      "National Weather Service",
      "Red Cross Flood Safety"
    ]
  },
  14: {
    id: 14,
    title: "Hurricane/Typhoon",
    category: "environmental",
    overview: "Hurricanes and typhoons are powerful tropical cyclones that bring intense winds, heavy rainfall, storm surges, and flooding. Advance preparation and proper response can save lives during these dangerous storms.",
    doImmediately: [
      "Follow evacuation orders without delay",
      "If not evacuating, shelter in the strongest part of the house",
      "Stay away from windows and exterior doors",
      "Listen to a battery-powered radio for updates"
    ],
    doNotDo: [
      "Don't ignore evacuation orders",
      "Don't go outside during the storm, even during the 'eye' (calm center)",
      "Don't use candles for lighting (fire risk)",
      "Don't walk or drive through floodwaters after the storm"
    ],
    steps: [
      {
        id: 1,
        title: "Prepare early",
        description: "When a storm is forecast, secure outdoor items, board windows, fill vehicles with gas, and gather emergency supplies including water, non-perishable food, medications, and battery-powered devices."
      },
      {
        id: 2,
        title: "Know your evacuation plan",
        description: "Identify evacuation routes and shelter locations. Plan for pets. If ordered to evacuate, do so immediately."
      },
      {
        id: 3,
        title: "If sheltering in place",
        description: "Move to a small, interior room, closet, or hallway on the lowest level. Stay away from windows, skylights, and glass doors. Keep your emergency supplies with you."
      },
      {
        id: 4,
        title: "During the storm",
        description: "Remain indoors throughout the entire storm. The storm may calm as the eye passes over, but violent conditions will return from the opposite direction. Listen for updates."
      },
      {
        id: 5,
        title: "After the storm",
        description: "Wait for official word that it's safe before going outside. Watch for downed power lines, damaged gas lines, floodwaters, and debris. Document damage for insurance claims."
      }
    ],
    whenToSeekHelp: [
      "Medical emergencies",
      "If trapped by floodwaters or debris",
      "Gas leaks (smell or hissing sound)",
      "Structural damage to your shelter"
    ],
    sources: [
      "National Hurricane Center",
      "Federal Emergency Management Agency (FEMA)",
      "Red Cross Hurricane Safety"
    ]
  },
  15: {
    id: 15,
    title: "Tornado",
    category: "environmental",
    overview: "Tornadoes are violently rotating columns of air that can cause catastrophic damage in minutes. They can occur with little warning, making immediate proper response essential to survival.",
    doImmediately: [
      "Seek shelter in the lowest level of a building, away from windows",
      "If no basement, use an interior room like a bathroom or closet",
      "Cover yourself with blankets or mattresses if available",
      "If outdoors with no shelter, lie flat in a low ditch and cover your head"
    ],
    doNotDo: [
      "Don't stay in mobile homes or vehicles",
      "Don't try to outrun a tornado in your vehicle",
      "Don't open windows (doesn't equalize pressure, wastes time)",
      "Don't go outside to watch the tornado"
    ],
    steps: [
      {
        id: 1,
        title: "Know the warning signs",
        description: "Watch for dark, often greenish skies, large hail, a loud roar (like a freight train), and a large, dark, low-lying cloud, especially if rotating."
      },
      {
        id: 2,
        title: "React to warnings immediately",
        description: "Know the difference between a tornado watch (conditions favorable) and warning (tornado spotted or indicated by radar). Take action the moment you hear a warning."
      },
      {
        id: 3,
        title: "Find the safest location",
        description: "Go to the lowest level, most interior part of a sturdy building. Put as many walls as possible between you and the outside. Stay away from windows."
      },
      {
        id: 4,
        title: "Protection position",
        description: "Crouch low to the ground, face down, and cover your head with your hands. Cover yourself with a mattress or heavy blankets if possible."
      },
      {
        id: 5,
        title: "After the tornado",
        description: "Wait until the danger has passed completely. Watch for fallen power lines, gas leaks, and structural damage. Help injured people if it's safe to do so."
      }
    ],
    whenToSeekHelp: [
      "Injuries requiring medical attention",
      "People trapped in damaged structures",
      "Gas leaks (smell or hissing sound)",
      "Downed power lines or electrical hazards"
    ],
    sources: [
      "National Weather Service",
      "Federal Emergency Management Agency (FEMA)",
      "American Red Cross"
    ]
  },
  16: {
    id: 16,
    title: "Wildfire",
    category: "environmental",
    overview: "Wildfires can spread rapidly, particularly in dry conditions and high winds. Early evacuation and proper preparation are critical to preventing injury or death.",
    doImmediately: [
      "Evacuate immediately if authorities order it",
      "If trapped, call 911 and share your location",
      "Close all doors and windows but leave them unlocked",
      "Turn on lights to make your house visible through smoke"
    ],
    doNotDo: [
      "Don't return to your home until authorities say it's safe",
      "Don't waste time gathering possessions if evacuation is ordered",
      "Don't stay behind to protect your property",
      "Don't breathe smoke - use masks or damp cloths if available"
    ],
    steps: [
      {
        id: 1,
        title: "Stay informed",
        description: "Monitor emergency alerts, weather updates, and evacuation orders through multiple channels (radio, TV, social media, emergency notification systems)."
      },
      {
        id: 2,
        title: "Prepare to evacuate",
        description: "Gather emergency supplies, important documents, medications, and pet supplies. Back your car into the garage facing outward with the keys in the ignition."
      },
      {
        id: 3,
        title: "Create defensible space",
        description: "If time permits and it's safe, remove flammable items from outside your home (patio furniture, wood piles, etc.). Turn off gas at the meter and propane tanks."
      },
      {
        id: 4,
        title: "Evacuate safely",
        description: "Leave as soon as evacuation is recommended. Choose a route away from fire hazards. Drive with headlights on and be alert for emergency vehicles."
      },
      {
        id: 5,
        title: "If trapped",
        description: "Stay in a room with no exterior walls if possible. Stay away from outside walls. Close doors but leave them unlocked. Fill sinks and tubs with cold water."
      }
    ],
    whenToSeekHelp: [
      "Burns, smoke inhalation, or other injuries",
      "If trapped by fire with no escape route",
      "After returning home, if you smell gas or see structural damage",
      "Mental health support for trauma after experiencing a wildfire"
    ],
    sources: [
      "Cal Fire",
      "U.S. Forest Service",
      "Federal Emergency Management Agency (FEMA)"
    ]
  },
  17: {
    id: 17,
    title: "Car Accident",
    category: "accidents",
    overview: "Car accidents can range from minor fender-benders to severe collisions. Taking the right steps immediately after an accident can prevent additional injuries, protect victims, and ensure proper legal and insurance procedures.",
    doImmediately: [
      "Check for injuries and call emergency services if needed",
      "Move to a safe location if possible",
      "Turn on hazard lights and set up warning triangles if available",
      "Exchange information with other drivers involved"
    ],
    doNotDo: [
      "Don't leave the scene of an accident",
      "Don't move severely injured people unless in immediate danger",
      "Don't admit fault or liability",
      "Don't forget to document the scene with photos"
    ],
    steps: [
      {
        id: 1,
        title: "Ensure safety first",
        description: "Turn off vehicles to prevent fire. If it's safe and you're able, move vehicles out of traffic. Otherwise, turn on hazard lights and set up warning devices to prevent additional accidents."
      },
      {
        id: 2,
        title: "Check for injuries",
        description: "Check yourself and others for injuries. Call 911 immediately for any serious injuries. Even if injuries seem minor, medical evaluation is often necessary."
      },
      {
        id: 3,
        title: "Contact authorities",
        description: "Call police to report the accident, even for minor crashes. In some jurisdictions, this is required by law. Wait for officers to arrive and file an official report."
      },
      {
        id: 4,
        title: "Document everything",
        description: "Exchange information with all drivers (names, contact info, license plates, insurance details). Take photos of all vehicles, the accident scene, road conditions, and any injuries."
      },
      {
        id: 5,
        title: "Notify insurance",
        description: "Contact your insurance company as soon as possible, regardless of fault. Provide honest, accurate information about what happened."
      }
    ],
    whenToSeekHelp: [
      "Any injuries, even those that seem minor initially",
      "Signs of shock, concussion, or internal injuries that may develop hours after the accident",
      "If a vehicle needs to be towed or is unsafe to drive",
      "Legal advice if the accident involves serious injuries, fatalities, or disputed fault"
    ],
    sources: [
      "National Highway Traffic Safety Administration",
      "Insurance Information Institute",
      "American Automobile Association (AAA)"
    ]
  },
  18: {
    id: 18,
    title: "Drowning",
    category: "accidents",
    overview: "Drowning can happen quickly and quietly. Recognizing the signs and responding quickly can make the difference between life and death. Many drowning victims cannot call or wave for help.",
    doImmediately: [
      "Call for help and emergency services immediately",
      "If safe to do so, reach out to the person with an object or throw a floating device",
      "If you must enter water, bring something that floats with you",
      "Once rescued, check breathing and begin CPR if necessary"
    ],
    doNotDo: [
      "Don't put yourself at risk if you're not a trained rescuer",
      "Don't assume someone is playing if they're quiet and their head is tilted back",
      "Don't stop CPR until medical help arrives",
      "Don't give up - even submerged victims can sometimes be resuscitated"
    ],
    steps: [
      {
        id: 1,
        title: "Recognize drowning",
        description: "Look for: head low in water, mouth at water level, head tilted back, glassy or closed eyes, hair over forehead/eyes, gasping, not using legs, trying to swim but making no progress, trying to roll over on back."
      },
      {
        id: 2,
        title: "Act quickly",
        description: "Alert a lifeguard if one is present. If not, call emergency services. Remember 'Reach, Throw, Row, Go': try to help from shore before entering water."
      },
      {
        id: 3,
        title: "Perform a safe rescue",
        description: "Extend a pole, stick, towel or throw something that floats. If you must enter the water, bring something buoyant for both of you and approach from behind."
      },
      {
        id: 4,
        title: "Check responsiveness",
        description: "Once on solid ground, check if the person is responsive. If unresponsive, check for breathing."
      },
      {
        id: 5,
        title: "Begin CPR if needed",
        description: "If not breathing normally, begin CPR immediately. For adults: 30 chest compressions followed by 2 rescue breaths. Continue until help arrives."
      }
    ],
    whenToSeekHelp: [
      "ANY near-drowning incident requires medical attention, even if the person seems fine",
      "Watch for 'secondary drowning' symptoms: persistent coughing, chest pain, difficulty breathing, extreme fatigue",
      "Seek immediate help if the person was unconscious at any point",
      "Monitor for 24-48 hours after incident for delayed symptoms"
    ],
    sources: [
      "American Red Cross",
      "Centers for Disease Control and Prevention",
      "American Heart Association"
    ]
  },
  19: {
    id: 19,
    title: "Fall from Height",
    category: "accidents",
    overview: "Falls from heights can cause serious injuries, including fractures, head trauma, and internal injuries. Proper immediate response can prevent complications and improve outcomes.",
    doImmediately: [
      "Call emergency services immediately",
      "Keep the person still - don't move them unless in immediate danger",
      "Check for consciousness and breathing",
      "Control any external bleeding with direct pressure"
    ],
    doNotDo: [
      "Don't move the person unless absolutely necessary",
      "Don't remove a helmet if one is being worn",
      "Don't give food or water",
      "Don't try to 'reset' or straighten injured limbs"
    ],
    steps: [
      {
        id: 1,
        title: "Assess the situation",
        description: "Check for dangers to yourself and the fallen person. Note how far they fell and what they may have struck during the fall or landing."
      },
      {
        id: 2,
        title: "Call for help",
        description: "Call emergency services immediately. Report the height of the fall and any obvious injuries. Stay on the line for instructions."
      },
      {
        id: 3,
        title: "Check ABCs",
        description: "Airway: Make sure it's clear. Breathing: Look, listen, and feel for breath. Circulation: Check pulse. Only move the person if necessary for CPR."
      },
      {
        id: 4,
        title: "Prevent shock",
        description: "Keep the person warm with blankets or coats. Elevate legs slightly if no spinal injury is suspected and there are no leg injuries."
      },
      {
        id: 5,
        title: "Monitor continuously",
        description: "Watch for changes in breathing, consciousness, or signs of shock (pale skin, rapid breathing, weakness). Note any fluid from ears or nose which may indicate head injury."
      }
    ],
    whenToSeekHelp: [
      "ANY fall from more than standing height requires medical evaluation",
      "Any signs of head or spine injury: confusion, unequal pupils, loss of consciousness",
      "Obvious deformities suggesting fractures",
      "Difficulty breathing or chest pain which may indicate rib fractures or internal injuries"
    ],
    sources: [
      "American College of Surgeons",
      "National Institute for Occupational Safety and Health",
      "Mayo Clinic"
    ]
  },
  20: {
    id: 20,
    title: "Electric Shock",
    category: "accidents",
    overview: "Electric shock can cause injuries ranging from minor to life-threatening. The severity depends on voltage, current path, duration of contact, and individual health factors.",
    doImmediately: [
      "First ensure it's safe to approach - look for downed lines or water",
      "Shut off power source if possible without endangering yourself",
      "Call emergency services immediately",
      "Check for breathing and pulse - start CPR if necessary"
    ],
    doNotDo: [
      "Don't touch the person if they're still in contact with the electricity source",
      "Don't use metal or wet objects to separate the person from the source",
      "Don't move the person unless in immediate danger",
      "Don't forget that the person might have fall injuries from the shock"
    ],
    steps: [
      {
        id: 1,
        title: "Ensure safety",
        description: "Before approaching, check that the area is safe. Turn off power at the circuit breaker, fuse box, or unplug the device. Never touch the person if they're still in contact with the power source."
      },
      {
        id: 2,
        title: "Separate from source if needed",
        description: "If power can't be turned off, use a dry, non-conductive object like a wooden broom or plastic chair to separate the person from the source. Stand on dry insulating material if possible."
      },
      {
        id: 3,
        title: "Call emergency services",
        description: "Call 911 or local emergency number immediately, even if the person seems fine. Electrical injuries can be internal and not immediately visible."
      },
      {
        id: 4,
        title: "Check vital signs",
        description: "Check for breathing and pulse. Begin CPR immediately if either is absent. Electric shock can cause cardiac arrest."
      },
      {
        id: 5,
        title: "Treat visible injuries",
        description: "Look for entry and exit wounds (often on hands, feet, head). Cover burns with a clean, dry cloth. Don't apply creams or ointments. Check for other injuries from falling."
      }
    ],
    whenToSeekHelp: [
      "ALL electric shocks should be medically evaluated, even if they seem minor",
      "Loss of consciousness, even briefly",
      "Burns, especially those with entry and exit points",
      "Any electrical shock from high voltage, lightning, or lasting more than a fraction of a second"
    ],
    sources: [
      "American Heart Association",
      "Electrical Safety Foundation International",
      "Mayo Clinic"
    ]
  },
  21: {
    id: 21,
    title: "Poisoning",
    category: "accidents",
    overview: "Poisoning can occur from ingested substances, inhaled toxins, or absorbed chemicals. Quick, appropriate response is crucial, and treatment varies widely depending on the type of poison.",
    doImmediately: [
      "Call poison control center or emergency services immediately",
      "Try to identify the poison and how much was taken",
      "Follow professional advice - don't give anything without being instructed",
      "If unconscious, check breathing and pulse - start CPR if necessary"
    ],
    doNotDo: [
      "Don't wait for symptoms to appear",
      "Don't make the person vomit unless specifically instructed",
      "Don't give salt water, ipecac, or other home remedies",
      "Don't try to neutralize the poison with other chemicals"
    ],
    steps: [
      {
        id: 1,
        title: "Remove from danger",
        description: "For inhaled poisons, get the person to fresh air. For skin contact, remove contaminated clothing and rinse skin. For eye contact, flush with lukewarm water for 15-20 minutes."
      },
      {
        id: 2,
        title: "Call for expert help",
        description: "Call poison control (1-800-222-1222 in US) or emergency services. Have the poison container or label ready if available. Report the person's age, weight, health conditions, and any symptoms."
      },
      {
        id: 3,
        title: "Follow instructions precisely",
        description: "Poison control may direct you to induce vomiting, give activated charcoal, or take other actions. Follow their guidance exactly - treatment varies by poison type."
      },
      {
        id: 4,
        title: "Monitor vital signs",
        description: "Check breathing, pulse, and level of consciousness. Be prepared to perform CPR if breathing stops. Note any changes in symptoms to report to medical personnel."
      },
      {
        id: 5,
        title: "Collect information",
        description: "Save containers, labels, or samples of the poison if possible. Note when exposure occurred and estimated amount. Take photos if relevant and safe to do so."
      }
    ],
    whenToSeekHelp: [
      "Always seek help for any suspected poisoning",
      "Immediate medical attention for unconsciousness, difficulty breathing, seizures, or extreme pain",
      "Even if symptoms improve after initial treatment, complete medical evaluation is essential",
      "Carbon monoxide exposure always requires medical attention, even if symptoms seem mild"
    ],
    sources: [
      "Poison Control Centers",
      "Centers for Disease Control and Prevention",
      "World Health Organization"
    ]
  },
  22: {
    id: 22,
    title: "Robbery",
    category: "crime",
    overview: "Robbery involves the taking of property by force or threat. The primary focus during a robbery should always be personal safety, not protecting property.",
    doImmediately: [
      "Stay calm and comply with demands for property",
      "Avoid sudden movements that could be misinterpreted",
      "Take mental notes of the robber's appearance if safe to do so",
      "Call the police as soon as it's safe"
    ],
    doNotDo: [
      "Don't resist or fight back",
      "Don't chase after the robber",
      "Don't make sudden movements or reach into pockets/bags without explanation",
      "Don't discuss your observations with others before talking to police"
    ],
    steps: [
      {
        id: 1,
        title: "During the robbery",
        description: "Remain calm. Do whatever is necessary to stay safe. Your life is more valuable than your possessions. Keep your movements slow and deliberate. Tell the robber before any movements: 'I'm going to reach in my pocket for my wallet.'"
      },
      {
        id: 2,
        title: "Observe carefully",
        description: "Without staring directly, try to note the robber's appearance, clothing, height, weight, age, distinctive features like tattoos or scars, weapons, vehicle, and direction of escape. Mental notes now will help police later."
      },
      {
        id: 3,
        title: "After the robber leaves",
        description: "Call 911 immediately when safe. Lock doors if applicable. Do not touch anything the robber may have touched. Ask witnesses to stay until police arrive."
      },
      {
        id: 4,
        title: "When police arrive",
        description: "Provide a detailed description of what happened and what was taken. Share your observations about the robber. Complete any necessary reports."
      },
      {
        id: 5,
        title: "Self-care afterward",
        description: "Robbery can be traumatic. Talk to friends, family, or professionals about your feelings. Watch for signs of post-traumatic stress like anxiety, trouble sleeping, or flashbacks."
      }
    ],
    whenToSeekHelp: [
      "Call police immediately after a robbery",
      "Seek medical attention for any injuries, even minor ones",
      "Consider counseling or therapy if experiencing trauma symptoms",
      "Contact victim services for additional support and resources"
    ],
    sources: [
      "National Crime Prevention Council",
      "Federal Bureau of Investigation",
      "American Psychological Association"
    ]
  },
  23: {
    id: 23,
    title: "Active Shooter",
    category: "crime",
    overview: "Active shooter situations are unpredictable and evolve quickly. Knowing what to do can save lives. The primary goal is to protect your life and help others if possible.",
    doImmediately: [
      "RUN - Escape if possible, leaving belongings behind",
      "HIDE - If you can't escape, find a secure hiding place",
      "FIGHT - As a last resort, attempt to disrupt or incapacitate the shooter",
      "When safe, call 911 - provide location, shooter description, weapons, victims"
    ],
    doNotDo: [
      "Don't freeze or hesitate - take immediate action",
      "Don't pull fire alarms - this can direct people into harm's way",
      "Don't expose yourself to hallways or open areas unnecessarily",
      "Don't assume someone else has called emergency services"
    ],
    steps: [
      {
        id: 1,
        title: "RUN",
        description: "If there's an accessible escape path, attempt to evacuate. Leave your belongings. Help others escape if possible, but don't let them slow your escape. Prevent others from entering the area. Keep your hands visible when law enforcement arrives."
      },
      {
        id: 2,
        title: "HIDE",
        description: "If evacuation isn't possible, find a hiding place out of the shooter's view. Lock doors, blockade with heavy furniture. Silence phones and electronic devices. Turn off lights and remain quiet."
      },
      {
        id: 3,
        title: "FIGHT",
        description: "As a last resort, and only when your life is in imminent danger, attempt to disrupt or incapacitate the shooter. Act with physical aggression. Improvise weapons. Commit to your actions."
      },
      {
        id: 4,
        title: "When law enforcement arrives",
        description: "Remain calm and follow instructions. Put down any items in your hands. Raise hands and spread fingers. Avoid quick movements, pointing, screaming or yelling."
      },
      {
        id: 5,
        title: "Provide information",
        description: "When safe, call 911. Give location of the shooter(s), number of shooters, physical description, types of weapons, number of potential victims."
      }
    ],
    whenToSeekHelp: [
      "Medical attention for physical injuries",
      "Counseling or therapy for psychological trauma, which is common after such events",
      "Contact victim services for additional support resources",
      "Join support groups for survivors of similar traumatic events"
    ],
    sources: [
      "U.S. Department of Homeland Security",
      "Federal Bureau of Investigation",
      "ALERRT (Advanced Law Enforcement Rapid Response Training)"
    ]
  },
  24: {
    id: 24,
    title: "Assault",
    category: "crime",
    overview: "Assault is an intentional act that creates fear of imminent harmful contact. This can include physical attacks or credible threats of physical harm. Knowing how to respond can reduce harm and help with recovery.",
    doImmediately: [
      "Get to a safe location away from the assailant",
      "Call emergency services (911) as soon as possible",
      "If injured, seek medical attention immediately",
      "Document everything you remember about the incident and your injuries"
    ],
    doNotDo: [
      "Don't confront or pursue the assailant after the incident",
      "Don't disturb evidence if a sexual assault has occurred",
      "Don't refuse medical attention even if injuries seem minor",
      "Don't shower, bathe, or change clothes before medical examination if sexually assaulted"
    ],
    steps: [
      {
        id: 1,
        title: "Prioritize safety",
        description: "If currently being assaulted, focus on protecting your head and face. Try to escape to safety if possible. Use your voice - yell 'Fire!' rather than 'Help!' to attract more attention. Once away, go to a public place or trusted location."
      },
      {
        id: 2,
        title: "Contact authorities",
        description: "Call 911 as soon as it's safe. Report your location and describe your injuries. Provide a description of the assailant and direction they went if they fled."
      },
      {
        id: 3,
        title: "Seek medical care",
        description: "Go to an emergency room or urgent care for treatment, even for seemingly minor injuries. Hidden injuries can be serious. For sexual assault, specialized care is available at many hospitals."
      },
      {
        id: 4,
        title: "Document everything",
        description: "Write down details while fresh in your memory: attacker's appearance, what happened, time, location. Take photos of visible injuries. Keep any torn clothing or other evidence."
      },
      {
        id: 5,
        title: "Consider reporting",
        description: "Report the assault to police. This is your choice and you can bring a support person. Many places have victim advocates who can help navigate the process."
      }
    ],
    whenToSeekHelp: [
      "Medical attention for any injuries, including hidden ones that may not be immediately apparent",
      "Psychological support from counselors specialized in trauma",
      "Legal advice about options for protection orders and pressing charges",
      "Contact victim services for additional resources and support"
    ],
    sources: [
      "Rape, Abuse & Incest National Network (RAINN)",
      "National Coalition Against Domestic Violence",
      "Office for Victims of Crime"
    ]
  },
  25: {
    id: 25,
    title: "Child Birth",
    category: "special",
    overview: "While most births happen in medical settings, unexpected emergency deliveries can occur. Knowing basic delivery steps can help ensure safety for both mother and baby in these situations.",
    doImmediately: [
      "Call emergency services (911) immediately",
      "Help the mother into a comfortable position",
      "Wash hands thoroughly if possible",
      "Create a clean area with clean towels or clothing"
    ],
    doNotDo: [
      "Don't try to delay or prevent the birth if it's progressing rapidly",
      "Don't pull on the baby or umbilical cord",
      "Don't cut the umbilical cord in an emergency setting",
      "Don't try to deliver the placenta by pulling on the cord"
    ],
    steps: [
      {
        id: 1,
        title: "Prepare the area",
        description: "Create the cleanest environment possible. Gather clean towels, sheets, or clothing. Have the mother lie down with knees bent and legs spread apart. Place clean material under her buttocks if possible."
      },
      {
        id: 2,
        title: "During delivery",
        description: "As the baby's head appears, support it gently - don't pull. If the amniotic sac hasn't broken, carefully tear it away from the baby's face. Check if the umbilical cord is wrapped around the neck and gently loop it over the head if so."
      },
      {
        id: 3,
        title: "After the head delivers",
        description: "Support the head as the body rotates to deliver the shoulders. The body usually follows quickly after shoulders. Hold the baby firmly - they will be slippery. Hold slightly downward to help drain fluid from airways."
      },
      {
        id: 4,
        title: "Care for the newborn",
        description: "Wipe fluids from the baby's mouth and nose. Gently rub the back to stimulate crying and breathing. Wrap the baby in clean, warm material. Place on mother's chest for skin-to-skin contact if possible."
      },
      {
        id: 5,
        title: "Await medical help",
        description: "Don't cut the umbilical cord. Keep the baby at the same level as the mother until professionals arrive. The placenta will deliver naturally - don't pull on the cord. Save the placenta for medical evaluation."
      }
    ],
    whenToSeekHelp: [
      "ALWAYS seek medical care after emergency delivery, even if everything seems fine",
      "Emergency situations: excessive bleeding, placenta doesn't deliver within 20 minutes, baby isn't breathing",
      "Baby has bluish skin tone that doesn't improve after rubbing and warming",
      "Mother develops fever, chills, or severe pain after delivery"
    ],
    sources: [
      "American College of Obstetricians and Gynecologists",
      "World Health Organization",
      "American Academy of Pediatrics"
    ]
  },
  26: {
    id: 26,
    title: "Animal Attack",
    category: "special",
    overview: "Animal attacks can range from minor to life-threatening. Different animals require different response strategies, but safety principles remain similar across most situations.",
    doImmediately: [
      "Remove yourself from danger without running if possible",
      "If attacked, protect your head, neck, and vital organs",
      "Once safe, check for injuries and call for help",
      "Clean wounds thoroughly if you can't get immediate medical help"
    ],
    doNotDo: [
      "Don't run from predators like dogs, bears, or big cats unless absolutely necessary",
      "Don't turn your back on the animal",
      "Don't make direct eye contact with aggressive animals",
      "Don't approach injured animals - they may attack defensively"
    ],
    steps: [
      {
        id: 1,
        title: "Avoid confrontation",
        description: "For most animals: Back away slowly without turning your back. Avoid eye contact. Make yourself look larger (raise arms) for predators, smaller (curl up) for aggressive herbivores. Speak calmly and firmly."
      },
      {
        id: 2,
        title: "If attacked by a dog",
        description: "Try 'Stop, drop, and roll' - stop moving, drop to the ground with knees to chest, and protect your neck and face with arms. If possible, put an object between you and the dog."
      },
      {
        id: 3,
        title: "If attacked by a bear",
        description: "For black bears: Fight back, aiming for nose and eyes. For grizzly bears: Play dead by lying flat on stomach, legs spread, hands clasped behind neck. Stay still until bear leaves."
      },
      {
        id: 4,
        title: "After an attack",
        description: "Once safe, assess injuries. Control bleeding with direct pressure. Call emergency services. Be prepared to describe the animal for medical and animal control purposes."
      },
      {
        id: 5,
        title: "Treat wounds",
        description: "If medical help is distant, thoroughly clean wounds with soap and water for at least 5 minutes. Apply antibiotic ointment if available. Cover with clean bandage. Monitor for infection."
      }
    ],
    whenToSeekHelp: [
      "ANY animal bite that breaks the skin - risk of infection and rabies",
      "Deep punctures, crushing injuries, or significant bleeding",
      "Bites to the face, hands, feet, or genitals",
      "Animal appeared sick, unusual, or was unprovoked in its attack (rabies concern)"
    ],
    sources: [
      "Centers for Disease Control and Prevention",
      "National Park Service",
      "American Veterinary Medical Association"
    ]
  }
};

export const getEmergencyDetail = (id: number): EmergencyDetail | undefined => {
  return emergencyDetails[id];
};

export const getAllEmergencyDetails = (): EmergencyDetail[] => {
  return Object.values(emergencyDetails);
};

