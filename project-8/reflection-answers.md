# Submission reflections (drafts; personalize after testing)

1. https://jaw353.github.io/test-site/project-8/ (verify deployment before submitting).

1B. All three LevelUps are implemented: conversation history, user question shown above the response, and separate user/assistant chat bubbles.

2. The most challenging part was designing a secure connection between the browser and the AI service. Instead of putting the API key in JavaScript, I used a Cloudflare Worker as a server-side intermediary. I also designed the conversation history so the chatbot could respond to follow-up questions without losing context. What surprised me was how important the system prompt is in defining the chatbot’s purpose and keeping the experience relevant.

3. Talking points: I can discuss how HTML, CSS and JavaScript work together, how a server-side proxy protects credentials, and how a system prompt and conversation history personalize recommendations. I would demonstrate a beauty question, a follow-up and an off-topic refusal after deployment.

4. L’Oréal recruiter: This project illustrates how I can combine software development, AI and user-centered design to solve a customer-facing problem. I would explain how I prioritized brand consistency, relevant recommendations and credential protection. I would also discuss future improvements such as a verified product catalog, stronger abuse controls and accessibility testing.
