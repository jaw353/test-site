# Project 9 reflections — personalize after testing

1. https://jaw353.github.io/test-site/project-9/

1B. Real-time product search and category filtering; Arabic RTL layout. Live web search with cited sources is implemented in the shared Worker but requires an OpenAI API key with credits and deployment.

2. I learned that clear prompts need to provide both instructions and the relevant product data. A general beauty prompt could suggest products the customer never selected, so the updated design explicitly provides the selected names, brands, categories and descriptions and asks for a routine using those products. It also directs the AI to remember prior preferences, avoid inventing facts and politely redirect unrelated questions. Separating the instructions from the customer data makes the response more focused.

3. One roadblock was that a published GitHub Pages website could load correctly while the AI requests still failed because the backend was not connected. The approach was to separate the frontend from the Cloudflare Worker, inspect the request endpoint and verify that the response format matched what the chat interface expected. This helped me understand that a successful page deployment does not automatically mean the API integration works. I would verify the final integration by generating a routine and asking a follow-up.

4. LinkedIn draft: I’m working on an AI-powered L’Oréal Routine Builder that combines real product data, interactive product selection, persistent preferences and a conversational beauty assistant. This project strengthened my skills in JavaScript, API integration, responsive design, prompt engineering and secure server-side architecture. I also added real-time search and right-to-left language support to make the experience more accessible. Explore the project: https://jaw353.github.io/test-site/project-9/ #SoftwareEngineering #AI #WebDevelopment
