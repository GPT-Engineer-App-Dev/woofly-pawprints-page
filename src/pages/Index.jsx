import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dog, Heart, Brain, Trophy } from 'lucide-react';

const dogBreeds = [
  { name: "Labrador Retriever", image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg" },
  { name: "German Shepherd", image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg" },
  { name: "Golden Retriever", image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_Retriever_Dukedestiny01_drvd.jpg" },
  { name: "French Bulldog", image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Franzosische_Bulldogge_2.jpg" },
];

const dogFacts = [
  { icon: <Heart className="h-8 w-8 text-red-500" />, fact: "Dogs have been human companions for over 30,000 years." },
  { icon: <Brain className="h-8 w-8 text-blue-500" />, fact: "The average dog can understand around 165 words and gestures." },
  { icon: <Dog className="h-8 w-8 text-green-500" />, fact: "A dog's sense of smell is 10,000 to 100,000 times stronger than humans." },
];

const quizQuestions = [
  { question: "What is the most popular dog breed in the USA?", answer: "Labrador Retriever" },
  { question: "How many times stronger is a dog's sense of smell compared to humans?", answer: "10,000 to 100,000 times" },
  { question: "How long have dogs been human companions?", answer: "Over 30,000 years" },
];

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerSubmit = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">The Wonderful World of Dogs</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Popular Dog Breeds</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dogBreeds.map((breed) => (
              <Card key={breed.name}>
                <CardHeader>
                  <CardTitle>{breed.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={breed.image} alt={breed.name} className="w-full h-48 object-cover rounded-md" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Fascinating Dog Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dogFacts.map((fact, index) => (
              <Card key={index}>
                <CardContent className="flex items-center p-6">
                  {fact.icon}
                  <p className="ml-4">{fact.fact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Test Your Dog Knowledge</h2>
          <Card>
            <CardContent className="p-6">
              {showScore ? (
                <div className="text-center">
                  <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                  <p className="text-xl font-semibold">You scored {score} out of {quizQuestions.length}</p>
                </div>
              ) : (
                <div>
                  <p className="text-lg mb-4">{quizQuestions[currentQuestion].question}</p>
                  <div className="flex justify-center space-x-4">
                    <Button onClick={() => handleAnswerSubmit(true)}>True</Button>
                    <Button onClick={() => handleAnswerSubmit(false)}>False</Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
