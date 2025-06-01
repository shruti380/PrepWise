


## ⚙️ Tech Stack

* **Next.js**
* **Firebase**
* **Tailwind CSS**
* **Vapi AI**
* **shadcn/ui**
* **Google Gemini**
* **Zod**

## 🔋 Key Features

👉 **User Authentication**
Secure email/password sign-up and sign-in using Firebase Authentication.

👉 **Create AI-Powered Interviews**
Easily generate job interviews through a voice assistant powered by Vapi and Google Gemini.

👉 **Instant AI Feedback**
Participate in voice-based mock interviews and get real-time feedback based on your conversation.

👉 **Modern UI/UX**
Intuitive and responsive interface with a focus on clean design and user experience.

👉 **Interview Interface**
Conduct AI interviews with real-time feedback and detailed transcripts.

👉 **Dashboard**
View, manage, and track all your interview sessions through a centralized dashboard.

👉 **Responsive Design**
Fully optimized for use across all screen sizes and devices.

👉 **Clean Code Architecture**
Emphasis on scalability, reusability, and well-structured code practices.

---

## 🤸 Quick Start Guide

### Prerequisites

Ensure the following are installed:

* Git
* Node.js
* npm

### Clone the Repository

```bash
git clone https://github.com/shruti380/PrepWise.git
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env.local` file in the root directory and add the following:

```
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

Replace the values with your actual credentials from Firebase and Vapi.

### Start the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the project in action.

---

## 🕸️ Code Highlights

* `globals.css`
* `lib/utils.ts`
* Interview Question Generator: `/app/api/vapi/generate/route.tsx`
* AI Feedback Logic: `lib/actions/general.action.ts`
* Feedback Display: `app/(root)/interview/[id]/feedback/page.tsx`


---

