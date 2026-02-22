import { NextRequest, NextResponse } from "next/server";

const demoData = [
  {
    id: "lesson-001",
    title: "ASL Alphabet Basics",
    category: "ALPHABET",
    difficulty: 1,
    signs: [
      { word: "A", videoUrl: "https://media.example.com/asl/alphabet/a.mp4", description: "Make a fist with thumb resting on the side of the index finger." },
      { word: "B", videoUrl: "https://media.example.com/asl/alphabet/b.mp4", description: "Hold fingers straight up together, thumb tucked across palm." },
      { word: "C", videoUrl: "https://media.example.com/asl/alphabet/c.mp4", description: "Curve fingers and thumb into a C shape, like holding a ball." },
    ],
    quiz: [
      { question: "Which handshape forms the letter A?", options: ["Open palm", "Fist with thumb on side", "Pointed finger", "V shape"], answer: 1 },
      { question: "How many fingers are extended for letter B?", options: ["One", "Two", "Four", "Five"], answer: 2 },
    ],
    completionRate: 0.92,
  },
  {
    id: "lesson-002",
    title: "Essential Greetings",
    category: "GREETINGS",
    difficulty: 2,
    signs: [
      { word: "Hello", videoUrl: "https://media.example.com/asl/greetings/hello.mp4", description: "Touch your forehead with a flat hand and move it outward, like a salute." },
      { word: "Thank you", videoUrl: "https://media.example.com/asl/greetings/thankyou.mp4", description: "Touch your chin with fingertips and move hand forward and down." },
      { word: "Please", videoUrl: "https://media.example.com/asl/greetings/please.mp4", description: "Place flat hand on chest and move in a circular motion." },
      { word: "Sorry", videoUrl: "https://media.example.com/asl/greetings/sorry.mp4", description: "Make a fist and rub it in a circle on your chest." },
    ],
    quiz: [
      { question: "Where do you touch for 'Thank you'?", options: ["Forehead", "Chin", "Chest", "Shoulder"], answer: 1 },
      { question: "What motion is used for 'Please'?", options: ["Tapping", "Circular", "Waving", "Pointing"], answer: 1 },
    ],
    completionRate: 0.87,
  },
  {
    id: "lesson-003",
    title: "Expressing Emotions",
    category: "EMOTIONS",
    difficulty: 3,
    signs: [
      { word: "Happy", videoUrl: "https://media.example.com/asl/emotions/happy.mp4", description: "Brush flat hand upward on chest repeatedly with upward motion." },
      { word: "Sad", videoUrl: "https://media.example.com/asl/emotions/sad.mp4", description: "Draw both hands down in front of face with open fingers, expression drooping." },
      { word: "Angry", videoUrl: "https://media.example.com/asl/emotions/angry.mp4", description: "Claw hand in front of face, pulling outward with tense expression." },
    ],
    quiz: [
      { question: "What direction is the motion for 'Happy'?", options: ["Downward", "Upward", "Side to side", "Forward"], answer: 1 },
      { question: "Which emotion uses a claw hand shape?", options: ["Happy", "Sad", "Angry", "Surprised"], answer: 2 },
    ],
    completionRate: 0.74,
  },
  {
    id: "lesson-004",
    title: "Numbers 1-10",
    category: "NUMBERS",
    difficulty: 1,
    signs: [
      { word: "1-5", videoUrl: "https://media.example.com/asl/numbers/1-5.mp4", description: "Hold up the corresponding number of fingers, palm facing viewer for 1-5." },
      { word: "6", videoUrl: "https://media.example.com/asl/numbers/6.mp4", description: "Touch pinky to thumb, other three fingers extended." },
      { word: "7-9", videoUrl: "https://media.example.com/asl/numbers/7-9.mp4", description: "Touch ring finger (7), middle finger (8), or index finger (9) to thumb." },
      { word: "10", videoUrl: "https://media.example.com/asl/numbers/10.mp4", description: "Thumb up, twist wrist back and forth." },
    ],
    quiz: [
      { question: "How is the number 6 formed?", options: ["Six fingers up", "Pinky touches thumb", "Fist shake", "Two hands"], answer: 1 },
      { question: "What motion is used for 10?", options: ["Clap", "Point up", "Twist wrist", "Wave"], answer: 2 },
    ],
    completionRate: 0.95,
  },
];

export async function GET() {
  return NextResponse.json(demoData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { category, difficulty } = body as {
    category: string;
    difficulty: number;
  };

  const newLesson = {
    id: `lesson-${Date.now()}`,
    title: `${category.charAt(0) + category.slice(1).toLowerCase()} - Level ${difficulty}`,
    category,
    difficulty,
    signs: [
      { word: "Example Sign 1", videoUrl: "https://media.example.com/asl/placeholder1.mp4", description: "Detailed instruction for this sign." },
      { word: "Example Sign 2", videoUrl: "https://media.example.com/asl/placeholder2.mp4", description: "Detailed instruction for this sign." },
    ],
    quiz: [
      { question: "Practice question for this lesson?", options: ["Option A", "Option B", "Option C", "Option D"], answer: 0 },
    ],
    completionRate: 0,
    createdAt: new Date().toISOString(),
  };

  return NextResponse.json(newLesson, { status: 201 });
}
