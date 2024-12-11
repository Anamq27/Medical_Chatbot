// Sample data for diseases and symptoms
const database = [
    { symptoms: "fever, cough, sore throat", disease: "Flu", medication: "Paracetamol, Rest, Hydration", sideEffects: "Nausea, Drowsiness" },
    { symptoms: "frequent urination, increased thirst, fatigue", disease: "Diabetes", medication: "Insulin, Metformin", sideEffects: "Weight gain, Stomach upset" },
    { symptoms: "headache, dizziness, chest pain", disease: "Hypertension", medication: "ACE inhibitors, Beta-blockers", sideEffects: "Dizziness, Fatigue" },
    { symptoms: "sneezing, runny nose, itchy eyes", disease: "Allergic Rhinitis", medication: "Antihistamines, Nasal sprays", sideEffects: "Drowsiness, Dry mouth" },
    { symptoms: "abdominal pain, diarrhea, bloating", disease: "Irritable Bowel Syndrome", medication: "Antispasmodics, Laxatives", sideEffects: "Nausea, Dizziness" },
    { symptoms: "joint pain, swelling, stiffness", disease: "Rheumatoid Arthritis", medication: "NSAIDs, DMARDs", sideEffects: "Stomach upset, Headache" },
    { symptoms: "shortness of breath, wheezing, chest tightness", disease: "Asthma", medication: "Inhalers, Corticosteroids", sideEffects: "Throat irritation, Dry mouth" },
    { symptoms: "unexplained weight loss, night sweats, fever", disease: "Tuberculosis", medication: "Antibiotics (Rifampin, Isoniazid)", sideEffects: "Liver damage, Nausea" },
    { symptoms: "chest pain, shortness of breath, fatigue", disease: "Coronary Artery Disease", medication: "Statins, Aspirin", sideEffects: "Muscle pain, Bleeding risk" },
    { symptoms: "skin rash, fever, joint pain", disease: "Lupus", medication: "NSAIDs, Corticosteroids", sideEffects: "Weight gain, Mood changes" },
    { symptoms: "severe headache, sensitivity to light, nausea", disease: "Migraine", medication: "Triptans, Pain relievers", sideEffects: "Drowsiness, Dry mouth" },
    { symptoms: "persistent cough, weight loss, fatigue", disease: "Lung Cancer", medication: "Chemotherapy, Immunotherapy", sideEffects: "Hair loss, Nausea" },
    { symptoms: "unsteady gait, tremors, slow movements", disease: "Parkinson's Disease", medication: "Levodopa, Dopamine agonists", sideEffects: "Nausea, Low blood pressure" },
    { symptoms: "memory loss, confusion, personality changes", disease: "Alzheimer's Disease", medication: "Cholinesterase inhibitors, Memantine", sideEffects: "Nausea, Insomnia" },
    { symptoms: "fever, rash, joint pain", disease: "Dengue Fever", medication: "Pain relievers, Hydration", sideEffects: "Bleeding risk, Stomach upset" },
    { symptoms: "fever, vomiting, yellow skin", disease: "Hepatitis A", medication: "Rest, Supportive care", sideEffects: "Fatigue, Loss of appetite" },
    { symptoms: "high fever, severe headache, rash", disease: "Typhoid", medication: "Antibiotics (Ciprofloxacin, Azithromycin)", sideEffects: "Nausea, Diarrhea" },
    { symptoms: "abdominal cramps, diarrhea, fever", disease: "Food Poisoning", medication: "Antibiotics, Rehydration salts", sideEffects: "Nausea, Allergic reactions" },
    { symptoms: "muscle pain, weakness, fatigue", disease: "Fibromyalgia", medication: "Pain relievers, Antidepressants", sideEffects: "Drowsiness, Dry mouth" },
    { symptoms: "fever, swollen lymph nodes, sore throat", disease: "Mononucleosis", medication: "Rest, Hydration", sideEffects: "Fatigue, Swelling" },
    { symptoms: "frequent infections, fatigue, bruising", disease: "Leukemia", medication: "Chemotherapy, Bone marrow transplant", sideEffects: "Hair loss, Nausea" },
    { symptoms: "dry eyes, dry mouth, joint pain", disease: "Sjogren's Syndrome", medication: "Artificial tears, NSAIDs", sideEffects: "Irritation, Stomach upset" },
    { symptoms: "painful urination, pelvic pain", disease: "Urinary Tract Infection", medication: "Antibiotics", sideEffects: "Nausea, Diarrhea" },
    { symptoms: "severe pain, swollen abdomen, fever", disease: "Appendicitis", medication: "Surgery (Appendectomy)", sideEffects: "Pain, Infection risk" },
    { symptoms: "hair loss, brittle nails, fatigue", disease: "Hypothyroidism", medication: "Levothyroxine", sideEffects: "Headache, Sweating" },
    { symptoms: "fever, chills, sweating", disease: "Malaria", medication: "Antimalarial drugs", sideEffects: "Nausea, Dizziness" },
    { symptoms: "bloody stools, abdominal cramps, fatigue", disease: "Ulcerative Colitis", medication: "Aminosalicylates, Corticosteroids", sideEffects: "Weight gain, Mood changes" },
    { symptoms: "irritability, difficulty concentrating, fatigue", disease: "Anemia", medication: "Iron supplements, Vitamin B12", sideEffects: "Constipation, Dark stools" },
    { symptoms: "itching, redness, watery eyes", disease: "Conjunctivitis", medication: "Antibiotic eye drops, Antihistamines", sideEffects: "Stinging, Blurred vision" },
    // Added more entries...
    { symptoms: "weakness, cold intolerance, weight gain", disease: "Hypothyroidism", medication: "Levothyroxine", sideEffects: "Sweating, Hair loss" },
    { symptoms: "muscle cramps, fatigue, palpitations", disease: "Hypokalemia", medication: "Potassium supplements", sideEffects: "Stomach upset, Hyperkalemia" },
    { symptoms: "fever, stiff neck, confusion", disease: "Meningitis", medication: "Antibiotics, Steroids", sideEffects: "Nausea, Headache" },
    { symptoms: "nausea, vomiting, yellow skin", disease: "Jaundice", medication: "Supportive care", sideEffects: "Fatigue, Loss of appetite" },
    { symptoms: "persistent coughing, fatigue, blood in sputum", disease: "Bronchitis", medication: "Cough suppressants, Antibiotics", sideEffects: "Drowsiness, Dizziness" },
    { symptoms: "blurry vision, eye pain, light sensitivity", disease: "Glaucoma", medication: "Eye drops, Surgery", sideEffects: "Burning sensation, Redness" }
];

// Random health tips
const healthTips = [
    "Drink plenty of water to stay hydrated.",
    "Maintain a balanced diet with fruits and vegetables.",
    "Exercise regularly to keep your body fit and healthy.",
    "Get enough sleep—7-8 hours a night is ideal.",
    "Wash your hands frequently to prevent infections."
];

// Function to get a response based on user input
function getResponse(userInput) {
    const normalizedInput = userInput.toLowerCase();

    // Search for matching disease or symptoms
    const result = database.find(item =>
        item.disease.toLowerCase() === normalizedInput || 
        item.symptoms.includes(normalizedInput)
    );

    // Return matching response or fallback message
    return result
        ? `Possible Disease: ${result.disease}\nMedication: ${result.medication}\nSide Effects: ${result.sideEffects}`
        : "No matching disease found. Please consult a doctor.";
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
        if (Math.random() < 0.3) { // 30% chance to show a tip
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

// Initialize chat on page load
document.addEventListener("DOMContentLoaded", initializeChat);
