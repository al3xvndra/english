const questions = [
  // Conditionals 1
  { question: "Conditional?", correctAnswer: "yes", category: "Conditionals1", level: "Beginner", set: 1, type: "typed" },
  { question: "Conditional?", correctAnswer: "yes", category: "Conditionals1", level: "Beginner", set: 1, type: "typed" },
  { question: "Conditional?", correctAnswer: "yes", category: "Conditionals1", level: "Beginner", set: 1, type: "typed" },
  { question: "Conditional?", correctAnswer: "yes", category: "Conditionals1", level: "Beginner", set: 1, type: "typed" },

  // Past Simple
  { question: "What is the past simple form of 'go'?", answer1: "goes", answer2: "gone", answer3: "went", correctAnswer: "went", category: "Past Simple", level: "Beginner", set: 1, type: "multiple" },
  { question: "What is the past simple form of 'eat'?", answer1: "eats", answer2: "ate", answer3: "eaten", correctAnswer: "ate", category: "Past Simple", level: "Beginner", set: 1, type: "multiple" },
  { question: "What is the past simple form of 'write'?", answer1: "wrote", answer2: "written", answer3: "writes", correctAnswer: "wrote", category: "Past Simple", level: "Intermediate", set: 2, type: "multiple" },
  { question: "What is the past simple form of 'sing'?", answer1: "sing", answer2: "sang", answer3: "sung", correctAnswer: "sang", category: "Past Simple", level: "Intermediate", set: 2, type: "multiple" },
  { question: "What is the past simple form of 'run'?", answer1: "ran", answer2: "running", answer3: "runs", correctAnswer: "ran", category: "Past Simple", level: "Advanced", set: 3, type: "multiple" },
  { question: "What is the past simple form of 'begin'?", answer1: "began", answer2: "begun", answer3: "beginning", correctAnswer: "began", category: "Past Simple", level: "Advanced", set: 3, type: "multiple" },
  { question: "What is the past simple form of 'choose'?", answer1: "chosen", answer2: "chose", answer3: "chooses", correctAnswer: "chose", category: "Past Simple", level: "Advanced", set: 4, type: "multiple" },
  { question: "What is the past simple form of 'break'?", answer1: "broke", answer2: "broken", answer3: "breaks", correctAnswer: "broke", category: "Past Simple", level: "Advanced", set: 4, type: "multiple" },
  { question: "What is the past simple form of 'drink'?", answer1: "drinks", answer2: "drank", answer3: "drunk", correctAnswer: "drank", category: "Past Simple", level: "Intermediate", set: 5, type: "multiple" },
  { question: "What is the past simple form of 'drive'?", answer1: "drives", answer2: "drove", answer3: "driven", correctAnswer: "drove", category: "Past Simple", level: "Intermediate", set: 5, type: "multiple" },

  // Past Continuous
  { question: "What is the past continuous form of 'run'?", answer1: "was running", answer2: "ran", answer3: "is running", correctAnswer: "was running", category: "Past Continuous", level: "Beginner", set: 1, type: "multiple" },
  { question: "What is the past continuous form of 'eat'?", answer1: "eating", answer2: "was eating", answer3: "ate", correctAnswer: "was eating", category: "Past Continuous", level: "Beginner", set: 1, type: "multiple" },
  { question: "What is the past continuous form of 'sing'?", answer1: "was singing", answer2: "singing", answer3: "sang", correctAnswer: "was singing", category: "Past Continuous", level: "Intermediate", set: 2, type: "multiple" },
  { question: "What is the past continuous form of 'write'?", answer1: "was writing", answer2: "writes", answer3: "written", correctAnswer: "was writing", category: "Past Continuous", level: "Intermediate", set: 2, type: "multiple" },
  { question: "What is the past continuous form of 'go'?", answer1: "going", answer2: "went", answer3: "was going", correctAnswer: "was going", category: "Past Continuous", level: "Advanced", set: 3, type: "multiple" },
  { question: "What is the past continuous form of 'work'?", answer1: "worked", answer2: "was working", answer3: "working", correctAnswer: "was working", category: "Past Continuous", level: "Advanced", set: 3, type: "multiple" },
  { question: "What is the past continuous form of 'drive'?", answer1: "was driving", answer2: "drove", answer3: "driven", correctAnswer: "was driving", category: "Past Continuous", level: "Advanced", set: 4, type: "multiple" },
  { question: "What is the past continuous form of 'study'?", answer1: "was studying", answer2: "studied", answer3: "studying", correctAnswer: "was studying", category: "Past Continuous", level: "Advanced", set: 4, type: "multiple" },
  { question: "What is the past continuous form of 'sleep'?", answer1: "was sleeping", answer2: "slept", answer3: "sleeping", correctAnswer: "was sleeping", category: "Past Continuous", level: "Intermediate", set: 5, type: "multiple" },
  { question: "What is the past continuous form of 'read'?", answer1: "was reading", answer2: "read", answer3: "reads", correctAnswer: "was reading", category: "Past Continuous", level: "Intermediate", set: 5, type: "multiple" },

  // Past Perfect
  { question: "What is the past perfect form of 'go'?", answer1: "had gone", answer2: "went", answer3: "was going", correctAnswer: "had gone", category: "Past Perfect", level: "Beginner", set: 1, type: "multiple" },
  { question: "What is the past perfect form of 'eat'?", answer1: "had eaten", answer2: "ate", answer3: "was eating", correctAnswer: "had eaten", category: "Past Perfect", level: "Beginner", set: 1, type: "multiple" },
  { question: "What is the past perfect form of 'write'?", answer1: "had written", answer2: "wrote", answer3: "was writing", correctAnswer: "had written", category: "Past Perfect", level: "Intermediate", set: 2, type: "multiple" },
  { question: "What is the past perfect form of 'sing'?", answer1: "had sung", answer2: "sang", answer3: "was singing", correctAnswer: "had sung", category: "Past Perfect", level: "Intermediate", set: 2, type: "multiple" },
  { question: "What is the past perfect form of 'run'?", answer1: "had run", answer2: "ran", answer3: "was running", correctAnswer: "had run", category: "Past Perfect", level: "Advanced", set: 3, type: "multiple" },
  { question: "What is the past perfect form of 'begin'?", answer1: "had begun", answer2: "began", answer3: "was beginning", correctAnswer: "had begun", category: "Past Perfect", level: "Advanced", set: 3, type: "multiple" },
  { question: "What is the past perfect form of 'choose'?", answer1: "had chosen", answer2: "chose", answer3: "was choosing", correctAnswer: "had chosen", category: "Past Perfect", level: "Advanced", set: 4, type: "multiple" },
  { question: "What is the past perfect form of 'break'?", answer1: "had broken", answer2: "broke", answer3: "was breaking", correctAnswer: "had broken", category: "Past Perfect", level: "Advanced", set: 4, type: "multiple" },
  { question: "What is the past perfect form of 'drink'?", answer1: "had drunk", answer2: "drank", answer3: "was drinking", correctAnswer: "had drunk", category: "Past Perfect", level: "Intermediate", set: 5, type: "multiple" },
  { question: "What is the past perfect form of 'drive'?", answer1: "had driven", answer2: "drove", answer3: "was driving", correctAnswer: "had driven", category: "Past Perfect", level: "Intermediate", set: 5, type: "multiple" },
  
  // Past Perfect Continuous
  { question: "What is the past perfect continuous form of 'run'?", answer1: "had been running", answer2: "was running", answer3: "ran", correctAnswer: "had been running", category: "Past Perfect Continuous", level: "Beginner", set: 1, type: "multiple" },
  { question: "What is the past perfect continuous form of 'eat'?", answer1: "had been eating", answer2: "was eating", answer3: "ate", correctAnswer: "had been eating", category: "Past Perfect Continuous", level: "Beginner", set: 1, type: "multiple" },
  { question: "What is the past perfect continuous form of 'sing'?", answer1: "had been singing", answer2: "was singing", answer3: "sang", correctAnswer: "had been singing", category: "Past Perfect Continuous", level: "Intermediate", set: 2, type: "multiple" },
  { question: "What is the past perfect continuous form of 'write'?", answer1: "had been writing", answer2: "was writing", answer3: "wrote", correctAnswer: "had been writing", category: "Past Perfect Continuous", level: "Intermediate", set: 2, type: "multiple" },
  { question: "What is the past perfect continuous form of 'go'?", answer1: "had been going", answer2: "was going", answer3: "went", correctAnswer: "had been going", category: "Past Perfect Continuous", level: "Advanced", set: 3, type: "multiple" },
  { question: "What is the past perfect continuous form of 'work'?", answer1: "had been working", answer2: "was working", answer3: "worked", correctAnswer: "had been working", category: "Past Perfect Continuous", level: "Advanced", set: 3, type: "multiple" },
  { question: "What is the past perfect continuous form of 'drive'?", answer1: "had been driving", answer2: "was driving", answer3: "drove", correctAnswer: "had been driving", category: "Past Perfect Continuous", level: "Advanced", set: 4, type: "multiple" },
  { question: "What is the past perfect continuous form of 'study'?", answer1: "had been studying", answer2: "studied", answer3: "was studying", correctAnswer: "had been studying", category: "Past Perfect Continuous", level: "Advanced", set: 4, type: "multiple" },
  { question: "What is the past perfect continuous form of 'sleep'?", answer1: "had been sleeping", answer2: "slept", answer3: "was sleeping", correctAnswer: "had been sleeping", category: "Past Perfect Continuous", level: "Intermediate", set: 5, type: "multiple" },
  { question: "What is the past perfect continuous form of 'read'?", answer1: "had been reading", answer2: "read", answer3: "was reading", correctAnswer: "had been reading", category: "Past Perfect Continuous", level: "Intermediate", set: 5, type: "multiple" },
  ];

