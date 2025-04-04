// Card Database - Organized by categories
const cardDatabase = {
    "Thoughts": [
        {
            id: "framing_effect",
            title: "The Framing Effect",
            subtitle: "Context Matters",
            image: "assets/framing_effect.png",
            explanation: "How information is presented changes our decisions.",
            example: "\"10% fat\" sounds worse than \"90% fat-free.\"",
            suggestion: "Reframe problems from multiple perspectives."
        },
        {
            id: "availability_heuristic",
            title: "The Availability Heuristic",
            subtitle: "Mental Shortcuts",
            image: "assets/availability_heuristic.png",
            explanation: "We overvalue information that comes to mind easily.",
            example: "Fearing shark attacks more than car accidents.",
            suggestion: "Check statistics, not just what's memorable."
        },
        {
            id: "zeigarnik_effect",
            title: "The Zeigarnik Effect",
            subtitle: "Unfinished Business",
            image: "assets/zeigarnik_effect.png",
            explanation: "Unfinished tasks stick in our minds.",
            example: "Remembering incomplete work better than completed tasks.",
            suggestion: "Use task lists to free your mind from mental loops."
        },
        {
            id: "hindsight_bias",
            title: "Hindsight Bias",
            subtitle: "The 'I Knew It' Effect",
            image: "assets/hindsight_bias.png",
            explanation: "After events, we believe we predicted them.",
            example: "\"I knew that team would win\" (after they've won).",
            suggestion: "Keep a decision journal to track your actual predictions."
        },
        {
            id: "confirmation_bias",
            title: "Confirmation Bias",
            subtitle: "Information Filtering",
            image: "assets/confirmation_bias.png",
            explanation: "Seeking information that confirms our beliefs.",
            example: "Only reading news that matches your political views.",
            suggestion: "Actively seek opposing viewpoints to challenge beliefs."
        },
        {
            id: "recency_bias",
            title: "Recency Bias",
            subtitle: "Memory Impact",
            image: "assets/recency_bias.png",
            explanation: "Recent events influence decisions more than past ones.",
            example: "Judging a stock based on its latest performance.",
            suggestion: "Consider long-term patterns, not just recent events."
        },
        {
            id: "overconfidence_bias",
            title: "Overconfidence Bias",
            subtitle: "Self-Assessment",
            image: "assets/overconfidence.png",
            explanation: "Overestimating our abilities and knowledge.",
            example: "Thinking you can learn a language in a week.",
            suggestion: "Seek feedback and acknowledge limitations."
        }
    ],
    "People": [
        {
            id: "halo_effect",
            title: "The Halo Effect",
            subtitle: "First Impressions",
            image: "assets/halo_effect.png",
            explanation: "One positive trait creates a positive overall impression.",
            example: "Assuming someone smart is also kind and trustworthy.",
            suggestion: "Evaluate each trait separately, not as a package."
        },
        {
            id: "dunning_kruger",
            title: "The Dunning-Kruger Effect",
            subtitle: "Knowledge & Confidence",
            image: "assets/dunning_kruger.png",
            explanation: "Beginners overestimate skills; experts underestimate.",
            example: "A new chess player thinks they're a prodigy; a grandmaster sees how much they don't know.",
            suggestion: "Embrace being a beginner and value expert uncertainty."
        },
        {
            id: "pygmalion_effect",
            title: "The Pygmalion Effect",
            subtitle: "Expectation Impact",
            image: "assets/pygmalion_effect.png",
            explanation: "People rise or fall to meet expectations.",
            example: "A teacher's belief in a student boosts their performance.",
            suggestion: "Set high expectations for yourself and others."
        },
        {
            id: "endowment_effect",
            title: "The Endowment Effect",
            subtitle: "Ownership Bias",
            image: "assets/endowment_effect.png",
            explanation: "We value things more just because we own them.",
            example: "Feeling your old phone is worth more than market price.",
            suggestion: "Ask: \"Would I buy this item at this price if I didn't own it?\""
        },
        {
            id: "ostrich_effect",
            title: "The Ostrich Effect",
            subtitle: "Avoiding Bad News",
            image: "assets/ostrich_effect.png",
            explanation: "Ignoring bad news feels easier than facing it.",
            example: "Avoiding checking your bank account after overspending.",
            suggestion: "Face problems early—ignoring them only makes things worse."
        },
        {
            id: "social_proof",
            title: "Social Proof",
            subtitle: "Group Influence",
            image: "assets/social_proof.png",
            explanation: "Looking to others to guide our decisions.",
            example: "Choosing a restaurant because it's crowded.",
            suggestion: "Make decisions based on facts, not popularity."
        },
        {
            id: "authority_bias",
            title: "Authority Bias",
            subtitle: "Expert Influence",
            image: "assets/authority_bias.png",
            explanation: "Trusting authority figures without question.",
            example: "Following a doctor's advice without research.",
            suggestion: "Question authority and verify information."
        },
        {
            id: "reciprocity",
            title: "Reciprocity",
            subtitle: "Give & Take",
            image: "assets/reciprocity.png",
            explanation: "Feeling obliged to return favors.",
            example: "Buying from a salesperson who gave you a gift.",
            suggestion: "Recognize when you're being influenced by gifts."
        }
    ],
    "Action": [
        {
            id: "parkinsons_law",
            title: "Parkinson's Law",
            subtitle: "Time Management",
            image: "assets/parkinsons_law.png",
            explanation: "Work expands to fill the time available.",
            example: "If given a week for an assignment, you'll take a week—even if you could finish in a day.",
            suggestion: "Set tighter deadlines to boost productivity."
        },
        {
            id: "pomodoro",
            title: "The Pomodoro Technique",
            subtitle: "Focus & Breaks",
            image: "assets/pomodoro.png",
            explanation: "Short work sessions with breaks improve focus.",
            example: "Study for 25 minutes, then take a 5-minute break.",
            suggestion: "Use a timer to work in bursts and avoid burnout."
        },
        {
            id: "implementation_intentions",
            title: "Implementation Intentions",
            subtitle: "Goal Setting",
            image: "assets/implementation_intentions.png",
            explanation: "Planning specific actions for goals.",
            example: "\"When I get home, I will exercise for 30 minutes.\"",
            suggestion: "Use \"when-then\" planning for better follow-through."
        },
        {
            id: "habit_stacking",
            title: "Habit Stacking",
            subtitle: "Behavior Change",
            image: "assets/habit_stacking.png",
            explanation: "Building new habits on existing ones.",
            example: "Doing push-ups after brushing teeth.",
            suggestion: "Link new habits to established routines."
        },
        {
            id: "keystone_habits",
            title: "Keystone Habits",
            subtitle: "Positive Change",
            image: "assets/keystone_habits.png",
            explanation: "Small habits that trigger positive changes.",
            example: "Making your bed leads to better organization.",
            suggestion: "Identify and focus on habits that create positive ripples."
        }
    ],
    "Choices": [
        {
            id: "loss_aversion",
            title: "Loss Aversion",
            subtitle: "Pain of Losing",
            image: "assets/loss_aversion.png",
            explanation: "Losses hurt more than equivalent gains feel good.",
            example: "The pain of losing $100 outweighs the joy of finding $100.",
            suggestion: "Focus on potential gains to overcome fear of loss."
        },
        {
            id: "choice_paralysis",
            title: "Choice Paralysis",
            subtitle: "Decision Making",
            image: "assets/choice_paralysis.png",
            explanation: "Too many options can freeze decision-making.",
            example: "Staring at a restaurant menu with 100+ items.",
            suggestion: "Limit options to 3-5 choices to make decisions easier."
        },
        {
            id: "sunk_cost",
            title: "Sunk Cost Fallacy",
            subtitle: "Investment Decisions",
            image: "assets/sunk_cost.png",
            explanation: "Continuing something just because you've invested in it.",
            example: "Watching a bad movie just because you paid for it.",
            suggestion: "Focus on future benefits, not past investments."
        },
        {
            id: "anchoring",
            title: "Anchoring Bias",
            subtitle: "Price Perception",
            image: "assets/anchoring.png",
            explanation: "First information influences later decisions.",
            example: "Seeing a $1000 price tag makes $500 seem cheap.",
            suggestion: "Research independently before making decisions."
        }
    ]
}; 