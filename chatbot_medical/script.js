// Sample data for diseases with simplified summaries
const database = [
    { 
        symptoms: "fever, cough, sore throat", 
        disease: "Flu", 
        medication: "Paracetamol, Rest, Hydration", 
        sideEffects: "Nausea, Drowsiness",
        summary: "The flu is a viral infection that affects your respiratory system. It causes fever, cough, sore throat, and body aches."
    },
    { 
        symptoms: "frequent urination, increased thirst, fatigue", 
        disease: "Diabetes", 
        medication: "Insulin, Metformin", 
        sideEffects: "Weight gain, Stomach upset",
        summary: "Diabetes is a condition where the body can't properly process sugar, leading to high blood sugar. Symptoms include frequent urination and increased thirst."
    },
    { 
        symptoms: "headache, dizziness, chest pain", 
        disease: "Hypertension", 
        medication: "ACE inhibitors, Beta-blockers", 
        sideEffects: "Dizziness, Fatigue",
        summary: "Hypertension, or high blood pressure, can cause dizziness, chest pain, and headache. It's important to manage it with medication."
    },
    { 
        symptoms: "sneezing, runny nose, itchy eyes", 
        disease: "Allergic Rhinitis", 
        medication: "Antihistamines, Nasal sprays", 
        sideEffects: "Drowsiness, Dry mouth",
        summary: "Allergic rhinitis is an allergic reaction that affects your nose and eyes. Symptoms include sneezing, itchy eyes, and a runny nose."
    },
    { 
        symptoms: "abdominal pain, diarrhea, bloating", 
        disease: "Irritable Bowel Syndrome", 
        medication: "Antispasmodics, Laxatives", 
        sideEffects: "Nausea, Dizziness",
        summary: "Irritable bowel syndrome (IBS) is a digestive disorder causing symptoms like bloating, diarrhea, and abdominal pain."
    },
    { 
        symptoms: "joint pain, swelling, stiffness", 
        disease: "Rheumatoid Arthritis", 
        medication: "NSAIDs, DMARDs", 
        sideEffects: "Stomach upset, Headache",
        summary: "Rheumatoid arthritis is an autoimmune condition where the body's immune system attacks the joints, causing pain and swelling."
    },
    { 
        symptoms: "shortness of breath, wheezing, chest tightness", 
        disease: "Asthma", 
        medication: "Inhalers, Corticosteroids", 
        sideEffects: "Throat irritation, Dry mouth",
        summary: "Asthma is a respiratory condition that causes difficulty breathing, wheezing, and shortness of breath, especially in response to allergens or exercise."
    },
    { 
        symptoms: "unexplained weight loss, night sweats, fever", 
        disease: "Tuberculosis", 
        medication: "Antibiotics (Rifampin, Isoniazid)", 
        sideEffects: "Liver damage, Nausea",
        summary: "Tuberculosis (TB) is a bacterial infection that mainly affects the lungs. It can cause weight loss, fever, and night sweats."
    },
    { 
        symptoms: "chest pain, shortness of breath, fatigue", 
        disease: "Coronary Artery Disease", 
        medication: "Statins, Aspirin", 
        sideEffects: "Muscle pain, Bleeding risk",
        summary: "Coronary artery disease occurs when the blood vessels supplying the heart become narrowed or blocked, leading to chest pain and shortness of breath."
    },
    { 
        symptoms: "skin rash, fever, joint pain", 
        disease: "Lupus", 
        medication: "NSAIDs, Corticosteroids", 
        sideEffects: "Weight gain, Mood changes",
        summary: "Lupus is an autoimmune disease that causes inflammation in various parts of the body, including the skin, joints, and organs."
    },
    { 
        symptoms: "severe headache, sensitivity to light, nausea", 
        disease: "Migraine", 
        medication: "Triptans, Pain relievers", 
        sideEffects: "Drowsiness, Dry mouth",
        summary: "Migraine is a neurological condition characterized by severe headaches, light sensitivity, and nausea."
    },
    { 
        symptoms: "persistent cough, weight loss, fatigue", 
        disease: "Lung Cancer", 
        medication: "Chemotherapy, Immunotherapy", 
        sideEffects: "Hair loss, Nausea",
        summary: "Lung cancer is a type of cancer that begins in the lungs. Symptoms may include persistent cough, weight loss, and fatigue."
    },
    { 
        symptoms: "unsteady gait, tremors, slow movements", 
        disease: "Parkinson's Disease", 
        medication: "Levodopa, Dopamine agonists", 
        sideEffects: "Nausea, Low blood pressure",
        summary: "Parkinson's disease is a neurodegenerative disorder that affects movement, causing tremors, stiffness, and slow movements."
    },
    { 
        symptoms: "memory loss, confusion, personality changes", 
        disease: "Alzheimer's Disease", 
        medication: "Cholinesterase inhibitors, Memantine", 
        sideEffects: "Nausea, Insomnia",
        summary: "Alzheimer's disease is a form of dementia that leads to memory loss, confusion, and personality changes."
    },
    { 
        symptoms: "fever, rash, joint pain", 
        disease: "Dengue Fever", 
        medication: "Pain relievers, Hydration", 
        sideEffects: "Bleeding risk, Stomach upset",
        summary: "Dengue fever is a viral illness transmitted by mosquitoes, causing high fever, rash, and joint pain."
    },
    { 
        symptoms: "fever, vomiting, yellow skin", 
        disease: "Hepatitis A", 
        medication: "Rest, Supportive care", 
        sideEffects: "Fatigue, Loss of appetite",
        summary: "Hepatitis A is a viral infection that affects the liver, causing fever, vomiting, and yellowing of the skin."
    },
    { 
        symptoms: "high fever, severe headache, rash", 
        disease: "Typhoid", 
        medication: "Antibiotics (Ciprofloxacin, Azithromycin)", 
        sideEffects: "Nausea, Diarrhea",
        summary: "Typhoid fever is a bacterial infection that causes high fever, headache, and rash, usually spread through contaminated food and water."
    },
    { 
        symptoms: "abdominal cramps, diarrhea, fever", 
        disease: "Food Poisoning", 
        medication: "Antibiotics, Rehydration salts", 
        sideEffects: "Nausea, Allergic reactions",
        summary: "Food poisoning is caused by eating contaminated food, leading to symptoms like abdominal cramps, diarrhea, and fever."
    },
    { 
        symptoms: "muscle pain, weakness, fatigue", 
        disease: "Fibromyalgia", 
        medication: "Pain relievers, Antidepressants", 
        sideEffects: "Drowsiness, Dry mouth",
        summary: "Fibromyalgia is a condition that causes widespread muscle pain, weakness, and fatigue."
    },
    { 
        symptoms: "fever, swollen lymph nodes, sore throat", 
        disease: "Mononucleosis", 
        medication: "Rest, Hydration", 
        sideEffects: "Fatigue, Swelling",
        summary: "Mononucleosis is a viral infection that causes fever, sore throat, and swollen lymph nodes, often called 'mono.'"
    },
    { 
        symptoms: "frequent infections, fatigue, bruising", 
        disease: "Leukemia", 
        medication: "Chemotherapy, Bone marrow transplant", 
        sideEffects: "Hair loss, Nausea",
        summary: "Leukemia is a cancer of the blood or bone marrow that causes frequent infections, bruising, and fatigue."
    },
    { 
        symptoms: "dry eyes, dry mouth, joint pain", 
        disease: "Sjogren's Syndrome", 
        medication: "Artificial tears, NSAIDs", 
        sideEffects: "Irritation, Stomach upset",
        summary: "Sjogren's syndrome is an autoimmune disorder that causes dry eyes and mouth, along with joint pain."
    },
    { 
        symptoms: "painful urination, pelvic pain", 
        disease: "Urinary Tract Infection", 
        medication: "Antibiotics", 
        sideEffects: "Nausea, Diarrhea",
        summary: "A urinary tract infection (UTI) is a bacterial infection affecting the urinary system, causing painful urination and pelvic pain."
    },
    { 
        symptoms: "severe pain, swollen abdomen, fever", 
        disease: "Appendicitis", 
        medication: "Surgery (Appendectomy)", 
        sideEffects: "Pain, Infection risk",
        summary: "Appendicitis is an inflammation of the appendix, causing severe abdominal pain, fever, and the need for surgery."
    },
    { 
        symptoms: "hair loss, brittle nails, fatigue", 
        disease: "Hypothyroidism", 
        medication: "Levothyroxine", 
        sideEffects: "Weight gain, Dry skin",
        summary: "Hypothyroidism is a condition where the thyroid gland doesn’t produce enough thyroid hormone, leading to fatigue, hair loss, and weight gain."
    },
    // Add other diseases as required
];


// Function to get a response based on user input
function getResponse(userInput) {
    const normalizedInput = userInput.toLowerCase();

    // Find all diseases that match the symptoms
    const matchedDiseases = database.filter(item => 
        item.symptoms.toLowerCase().includes(normalizedInput)
    );

    if (matchedDiseases.length === 0) {
        return "No matching disease found. Please consult a doctor.";
    }

    // If one disease matches
    if (matchedDiseases.length === 1) {
        const disease = matchedDiseases[0];
        return `
            Disease: ${disease.disease}
            Summary: ${disease.summary}
            Medication: ${disease.medication}
            Side Effects: ${disease.sideEffects}
        `;
    }

    // If multiple diseases match, show details of all diseases
    let response = "";
    matchedDiseases.forEach(disease => {
        response += `
            Disease: ${disease.disease}
            Summary: ${disease.summary}
            Medication: ${disease.medication}
            Side Effects: ${disease.sideEffects}
            \n\n`;
    });

    // Advise consultation after showing details of all diseases
    response += "Your symptoms match multiple diseases. It's important to consult with a healthcare provider for a proper diagnosis.";

    return response;
}

// Function to simulate a "typing..." effect
function showTypingIndicator() {
    const chatHistory = document.getElementById("chat-history");
    const typingIndicator = document.createElement("div");
    typingIndicator.className = "message bot typing";
    typingIndicator.innerText = "Typing...";
    chatHistory.appendChild(typingIndicator);
    chatHistory.scrollTop = chatHistory.scrollHeight;

    return typingIndicator; // Return reference to remove it later
}

// Function to send a message
function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return;

    // Display user message
    const chatHistory = document.getElementById("chat-history");
    const userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.innerText = userInput;
    chatHistory.appendChild(userMessage);

    // Simulate bot typing
    const typingIndicator = showTypingIndicator();

    setTimeout(() => {
        // Remove typing indicator
        typingIndicator.remove();

        // Display bot response
        const botMessage = document.createElement("div");
        botMessage.className = "message bot";
        botMessage.innerText = getResponse(userInput);
        chatHistory.appendChild(botMessage);

        // Randomly show a health tip
        if (Math.random() < 0.7) { // 70% chance to show a tip
            const tipMessage = document.createElement("div");
            tipMessage.className = "message bot";
            tipMessage.innerText = `Health Tip: ${healthTips[Math.floor(Math.random() * healthTips.length)]}`;
            chatHistory.appendChild(tipMessage);
        }

        chatHistory.scrollTop = chatHistory.scrollHeight; // Auto-scroll
    }, 1000); // Simulate delay
}

// Initial greeting and helpful prompts
function initializeChat() {
    const chatHistory = document.getElementById("chat-history");

    // Greeting message
    const greetingMessage = document.createElement("div");
    greetingMessage.className = "message bot";
    greetingMessage.innerText = "Hello! I am your medical assistant chatbot. How can I assist you today?";
    chatHistory.appendChild(greetingMessage);

    // Helpful prompts
    const promptMessage = document.createElement("div");
    promptMessage.className = "message bot";
    promptMessage.innerText = "You can ask me about symptoms, diseases, or medications.";
    chatHistory.appendChild(promptMessage);
}

// Event listener for the Send button
document.getElementById("send-button").addEventListener("click", sendMessage);

// Event listener for Enter key
document.getElementById("user-input").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Get modal elements
const aboutModal = document.getElementById("aboutModal");
const termsModal = document.getElementById("termsModal");
const contactModal = document.getElementById("contactModal");

// Get button elements
const aboutBtn = document.getElementById("aboutBtn");
const termsBtn = document.getElementById("termsBtn");
const contactBtn = document.getElementById("contactBtn");

// Get close elements
const closeAbout = document.getElementById("closeAbout");
const closeTerms = document.getElementById("closeTerms");
const closeContact = document.getElementById("closeContact");

// Add event listeners to open modals
aboutBtn.addEventListener("click", () => (aboutModal.style.display = "block"));
termsBtn.addEventListener("click", () => (termsModal.style.display = "block"));
contactBtn.addEventListener("click", () => (contactModal.style.display = "block"));

// Add event listeners to close modals
closeAbout.addEventListener("click", () => (aboutModal.style.display = "none"));
closeTerms.addEventListener("click", () => (termsModal.style.display = "none"));
closeContact.addEventListener("click", () => (contactModal.style.display = "none"));

// Close modal when clicking outside the modal-content
window.addEventListener("click", (event) => {
    if (event.target === aboutModal) aboutModal.style.display = "none";
    if (event.target === termsModal) termsModal.style.display = "none";
    if (event.target === contactModal) contactModal.style.display = "none";
});
