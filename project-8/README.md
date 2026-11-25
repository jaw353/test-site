# Project 8 — L’Oréal Chatbot

Frontend: https://jaw353.github.io/test-site/project-8/

1. Create a Worker at https://dash.cloudflare.com/ and replace its code with RESOURCE_cloudflare-worker.js.
2. In Settings > Variables and Secrets, add OPENAI_API_KEY as a Secret. Set ALLOWED_ORIGIN to https://jaw353.github.io. Deploy. Configure Cloudflare rate limiting and OpenAI project spending controls before public use; CORS alone is not authentication.
3. Copy the HTTPS Worker URL into ENDPOINT in script.js, then commit to the published branch. Never commit a key. 
4. Test a skincare question, a follow-up mentioning a prior preference, an unrelated question, reset, and mobile layout. Confirm network requests go to Worker only. Test Pages URL in an incognito browser.
5. The frontend displays connection errors honestly until configured.

Logo from the assigned classroom starter. Educational project, not an official service.
