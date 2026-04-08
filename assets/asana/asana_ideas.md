
INTERNSHIP IDEA PROPOSAL
Designing Trust:
How People Learn to Workwith AI Teammates



Prepared for Asana Design Team
By Maria Dumitrescu
April 2026

A research-driven exploration of how teams build trust with AI agents,and design ideas for making AI Teammates feel less like toolsand more like collaborators.

Why This, Why Now
Asana just made its biggest product bet in years. In March 2026, AI Teammates went generally available: collaborative AI agents that live inside projects, get assigned tasks, receive feedback from multiple people, and build institutional memory over time. The vision is bold and the early numbers are strong. Teams in the beta finished work 2x faster, and 93% of AI Teammates were granted full edit access by their teams.
But the hardest part is just beginning.
73% of organizations report a gap between their AI ambitions and what they have actually shipped to production. Only 11% of agentic AI use cases have reached production. The barrier isn't capability. It's trust.


The early adopters, the teams already in the beta, are bought in. They chose to experiment. The next wave is different. These are the teams who are skeptical, overwhelmed, or unsure what an AI agent even does. Getting them to trust and adopt AI Teammates is not a technology problem. It is a design problem. And it is the design problem that will determine whether AI Teammates becomes Asana's defining feature or a checkbox on a pricing page.
This proposal outlines what I would research, what I would design, and why my experience building AI-powered products gives me a specific lens on this challenge.
The Trust Problem, Unpacked
Trust with AI is not binary. People don't simply decide to trust or not trust an AI agent. They build trust incrementally, through small interactions, and they lose it in a single bad experience. This is well-documented in human-AI interaction research, but it also maps to something I have experienced firsthand.
What Nuuko taught me about AI trust
I built Nuuko, an AI-powered journaling app that surfaces patterns in a user's own writing over time. The AI reads someone's most personal thoughts and reflects insights back to them. That is an extremely high-trust interaction. What I learned:
Trust doesn't come from explaining what the AI can do. It comes from experiencing one small success. When users saw their first Nuuko "Wrapped" summary and thought "oh, that's actually me," they were hooked. No onboarding tutorial created that moment. The AI's output did.
Tone matters as much as accuracy. Nuuko's insights are written in warm, reflective language. When I tested a more clinical, data-driven tone, users felt surveilled rather than supported. The same insight, different words, completely different emotional response.
Stripping back features builds more trust than adding them. Nuuko's first version had too many AI features visible at once. When I reduced the surface to just journaling and one insight per session, engagement went up. People trusted it more because it tried to do less.

These are not abstract principles. They map directly to the challenge Asana faces with AI Teammates. The question is: how do you design the experience so that a team who has never interacted with an AI agent goes from skeptical to trusting in their first few interactions?
What I Would Research
I would structure the first three weeks around three research questions, each targeting a different layer of the trust problem.
Research Question 1
"What does the first 10 minutes with an AI Teammate feel like, and where does trust break?"


Method: Moderated usability sessions (6-8 participants) with people who have never used AI Teammates. I would watch them set up their first agent, assign their first task, and review the first output. Screen and audio recorded.
What I'm looking for: Where do people hesitate? What language in the UI confuses them? When do they feel in control versus out of control? When does the AI feel like a tool versus a teammate? At what point do they decide "this is useful" or "this is not for me"?
Why this matters: Asana's current onboarding for AI Teammates follows a template-selection flow. You pick a prebuilt agent, configure its access, and assign it work. This is functional, but it skips the emotional layer entirely. There's no moment where the team experiences what the AI can do before committing to it. It is like hiring someone based on their resume without ever having a conversation.
The Nuuko parallel: When I tested Nuuko with a research participant (Miri, a Minerva classmate), I learned that journaling prompts needed to feel like invitations, not instructions. "Tell me about your day" felt clinical. "What's one small thing that made you feel something today?" felt human. The same design principle applies to how an AI Teammate introduces itself and asks for context.
Research Question 2
"How do teams develop shared understanding of what an AI Teammate can and can't do?"


Method: Diary study with 3-4 teams actively using AI Teammates, over 2 weeks. Daily check-ins (short form) and two longer interviews (start and end). Focus on how understanding of the AI's capabilities spreads from the person who set it up to the rest of the team.
What I'm looking for: Does the team develop a shared mental model of the AI, or do different people have wildly different expectations? Who becomes the "AI translator" on the team? What happens when the AI does something unexpected? How does the team talk about the AI when it is not "listening"?
Why this matters: This is the multiplayer dimension that makes Asana's approach unique. Most AI tools are single-player. One person talks to a chatbot. But AI Teammates are shared. When one person configures an agent, the rest of the team encounters it without that setup context. If the team doesn't develop a shared understanding, you get inconsistent expectations, frustration, and eventually abandonment.
Research Question 3
"What role does personality, tone, and emotional texture play in whether teams trust and keep using an AI agent?"


Method: Comparative prototype test. Same AI Teammate, same task, three different communication styles: (A) neutral and tool-like, (B) warm and conversational, (C) confident and opinionated. 5 participants per variant. Measure perceived trustworthiness, willingness to delegate, and emotional response.
What I'm looking for: Do people want their AI Teammate to have personality, or does personality feel uncanny? Does a warmer tone increase trust, or does it feel manipulative? Does it matter if the AI acknowledges uncertainty ("I'm not 100% sure about this, but...") versus projecting confidence?
Why this matters: Asana's AI Teammates currently have functional names like "Campaign Brief Writer" and "Sprint Coach." But personality is more than a name. It's how the agent communicates in comments, how it frames its work, how it handles feedback. This is an area where Asana can differentiate from every other AI agent platform, because Asana's agents are multiplayer and visible to the whole team. Their communication style shapes team culture.
The Nuuko parallel: In Nuuko, I discovered that the AI's tone was the single biggest factor in whether users felt "supported" versus "watched." The same pattern recognition, wrapped in different language, created completely different emotional responses. This is transferable to enterprise AI.

What I Would Design
Based on the research themes above, here are four design concepts I would explore in weeks 4-6. These are starting points, not final solutions. The research would sharpen and redirect them.
Idea 1: The "First Task" Guided Experience
The problem: Right now, setting up an AI Teammate feels like filling out a form. You pick a template, configure permissions, and assign work. There is no moment where the team collectively experiences what the AI can do before committing.
The idea: Design a guided "first task" experience where the AI Teammate walks the team through a low-stakes, reversible task together. Think of it as a ride-along before you hand over the keys. The team picks a real (but small) task from their existing project. The AI shows its thinking step by step. The team can see each checkpoint, give feedback, and watch the AI incorporate it. At the end, the team has a concrete reference point for what this agent does and how it works.
Design principle from Nuuko: People don't trust AI by reading documentation. They trust it by experiencing one small success. Nuuko's onboarding doesn't explain pattern recognition. It lets you journal for a few days and then shows you your first insight. The "aha" moment does the convincing.
Idea 2: Layered Transparency (Sentences Before Data)
The problem: Asana's AI Teammates already have checkpoints where the AI shows its work. But the design question remains: how much reasoning should be visible, and when? Too much detail is noisy. Too little is a black box. Neither builds trust.
The idea: A layered transparency model inspired by clearly., my data visualization tool for non-analysts. In clearly., I led with sentences ("Your revenue grew 12% this quarter") before showing charts. The same principle applies here:
Layer 1: Summary
One sentence: what the AI did and why. Always visible. "I drafted the campaign brief based on your strategy doc and last quarter's results."
Layer 2: Reasoning
Expandable: the sources it referenced, the decisions it made, what it was uncertain about. "I pulled from 3 docs. I wasn't sure about the Q2 target so I used last quarter's."
Layer 3: Full Trace
On demand: complete audit trail. Every action taken, every source read, every decision point. For admins and compliance teams.


Design principle from clearly.: Non-technical users don't distrust data, they distrust their own ability to interpret it. The same applies to AI reasoning. Leading with a human-readable summary ("sentences before charts") closes the confidence gap without dumbing anything down.
Idea 3: Configurable Communication Style
The problem: AI Teammates currently have a role definition but no personality configuration. A startup design team and an enterprise compliance team communicate in fundamentally different ways. A one-size-fits-all AI voice will feel wrong to most teams.
The idea: Let teams configure not just what an AI Teammate does, but how it communicates. This could be a simple spectrum during setup:
Concise vs. Detailed
Formal vs. Casual
Proactive vs. On-demand
"Brief updated." vs. "I updated the campaign brief with three changes based on the strategy doc. Here's what shifted..."
"The brief is ready for review." vs. "Hey team, brief's done! Take a look when you get a sec."
Waits for tasks vs. flags risks and suggests actions before being asked.


Over time, the AI Teammate could learn from team interactions and adapt, similar to how Nuuko's prompts adapt to a user's journaling style. But starting with explicit configuration gives teams agency and makes the AI feel like something they shaped, not something imposed on them.
Idea 4: Mobile-First AI Collaboration
The problem: AI Teammates are currently a desktop-heavy experience. But people check Asana on their phones constantly: during commutes, between meetings, in quick moments. What does interacting with an AI agent look like on a 6-inch screen?
The idea: Design lightweight mobile surfaces for AI collaboration:
AI digest: A daily summary card showing what your AI Teammates did while you were away. Not a list of actions, but a human-readable narrative: "While you were out, Sprint Coach flagged 2 blocked tasks and Campaign Brief Writer finished the Q3 brief. Both need your review."
Swipeable review: Quick approve/request-changes gestures for AI output, similar to how you triage email on mobile. See the summary, swipe right to approve, swipe left to comment.
Distinct notifications: AI-generated updates should look visually different from human updates. Not less important, just distinguishable. So you can instantly tell "this is from a person" versus "this is from an agent" without reading the content.

Why this matters for the Warsaw team: The Warsaw design hub owns the Mobile group. This is a direct contribution to that team's roadmap, and an area where AI Teammates can grow beyond power users on desktops to every team member, everywhere.

Competitive Context
A quick landscape of how other platforms handle AI agent trust and transparency, to show where Asana can differentiate:
Platform
Approach
Gap
Microsoft Copilot
Embedded in Office apps, single-player, prompt-driven
No multiplayer context. Team can't see what the AI did for someone else.
Slack AI
Summarizes channels and threads on demand
Reactive only. No proactive collaboration or task ownership.
Notion AI
Document-level assistant for writing and editing
No workflow context. Doesn't know about deadlines, dependencies, or team structure.
Monday AI
Automations with AI-generated content
Rule-based. No agent memory or learning from feedback.


Asana's advantage is clear: the Work Graph gives AI Teammates context that no other platform can match. But context without trust design is just data. The opportunity is to combine Asana's structural advantage with emotionally intelligent interaction design that makes people actually want to work alongside AI.

Proposed Timeline
A 9-week plan structured in three phases. Each phase has clear outputs that build on the previous.

WEEKS
PHASE
ACTIVITIES & OUTPUTS
1-3
Research Sprint
6-8 moderated usability sessions (first-time AI Teammate users)
Diary study setup with 3-4 active teams
Competitive audit: AI agent UX across Copilot, Slack AI, Notion, Monday
Heuristic evaluation of current AI Teammate flows
Internal stakeholder interviews (AI Teammates PM, eng, research)
Output: Research synthesis deck with key findings and opportunity map
4-6
Concept & Prototype
2-3 design concepts based on research findings
Lo-fi prototypes in Figma
Usability testing with 5-8 participants
Iteration based on testing feedback
Output: Tested prototypes with user feedback documentation
7-9
Refine & Deliver
High-fidelity designs with interaction specs
Design system integration (Asana's component library)
Final presentation to Design + PM team
Handoff documentation for engineering
Output: Presentation, design specs, research report, next-steps roadmap


Why Me
I am not going to list skills. Instead, here are three things about how I think that are relevant to this work.
I have designed AI trust before.
Nuuko asks people to share their most personal thoughts with an AI and then reflects patterns back to them. That only works if the AI feels safe, warm, and honest. I have spent months iterating on how AI communicates with people, tested it with real users, and learned that the difference between "this is helpful" and "this is creepy" often comes down to three words in a sentence. That sensitivity to language and emotional texture is directly relevant to designing how AI Teammates communicate inside Asana.
I have made complex systems feel human.
clearly., my data visualization tool, was built on a principle I call "sentences before charts." The insight is that non-technical users don't distrust data. They distrust their ability to interpret it. So I led with plain-language insights and let users drill into charts when they were ready. That same progressive disclosure pattern applies to AI transparency: lead with meaning, let people drill into reasoning when they choose to.
I can talk to engineers.
I have a computer science background. I understand how language models work, what confidence thresholds mean, how context windows affect output quality. This means I can have real conversations with engineers about trade-offs, not just hand over mockups. For a project like AI Teammates, where the design and the model behavior are deeply intertwined, that technical literacy matters.

I am excited about this work because it sits at the intersection of everything I care about: AI that helps people, design that builds trust, and products that feel human even when they are powered by machines. Asana's multiplayer approach to AI agents is the most interesting thing happening in this space, and I want to help design how teams actually experience it.




Maria Dumitrescu
CS & Design — Minerva University  ·  Currently in Tokyo  ·  mariadumitrescuoffice@gmail.com
