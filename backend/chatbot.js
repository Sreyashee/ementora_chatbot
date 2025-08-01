export function getBotReply(message) {
  const msg = message.toLowerCase(); // 👈 ensures lowercase comparison

  if (msg.includes('hello') || msg.includes('hi')) {
    return "Hello! How can I assist you today?";
  }
  if (msg.includes('services')) {
    return "We offer mentorship, courses, and career guidance!";
  }
  if (msg.includes('price') || msg.includes('cost')) {
    return "Please check our Pricing section or contact support for a detailed quote.";
  }
  if (msg.includes('thank')) {
    return "You're welcome! 😊";
  }
  if(msg.includes('ementora')){
    return "Ementora is the fastest growing Artificial Intelligence (AI) based EdTech organisation, created by IIT Kharagpur alumni. Ementora provides the best quality AI-powered EdTech and Skill Development services in Advanced Technical Courses, Campus to Corporate Global Training Programs, Corporate Skill Development Programs, Global Corporate Outbound Training Programs, and Global Industry Training Programs. Ementora is providing AI-based Industry Immersive Technical and Management Internship Training to top global colleges, universities and institutes students."
  }
  if(msg.includes('contact')){
    return "Email us at ementoraglobal@gmail.com or call us at +91 9830419001. You can also visit our website at https://ementora.com"
  }
  if(msg.includes('how are you')){
    return "I am good. What do you want to know about ementora?"
  }
  if(msg.includes('address') || msg.includes('location')){
    return "Our location is 95, Purbayan, C.S. Road, Kolkata - 700105, India"
  }
  if(msg.includes('yourself')){
    return "I am Ementora's chatbot, here to assist you with any queries regarding our services."
  }
  if(msg.includes('mentor')){
    return "You can browse mentors on our website under the 'Mentorship' section and request sessions directly."
  }
  if(msg.includes('customer support')){
    return "Our support team is available from 9 AM to 6 PM IST, Monday to Saturday."
  }
  return "Sorry, I didn't understand that. Can you please rephrase?";
}
