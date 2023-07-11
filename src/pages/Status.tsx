import { FormEvent, useState, KeyboardEvent } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Status.css";
import { PaperPlaneRight } from "phosphor-react";

export function Status() {
  const [newAnswer, setNewAnswer] = useState('');
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido',
    'Parabéns pelo progresso!!!'
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();
    setAnswers([newAnswer, ...answers]);
    setNewAnswer('');
  }

  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer('');
    }
  }

    return(
        <main className="status">
          <Header title="Tweet" />

          <Tweet content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos fugit inventore neque deleniti veritatis nesciunt, asperiores nam quasi libero vero in aliquid voluptatibus? Veniam accusantium ducimus saepe voluptatem iusto nihil?" />

          <Separator />

          <form onSubmit={createNewAnswer}  className="answer-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/fabinho070.png" alt="Fabinho Freitas" />
              <textarea
                id="tweet"
                placeholder="Tweet your answer"
                value={newAnswer}
                onKeyDown={handleHotKeySubmit}
                onChange={(event) => {
                  setNewAnswer(event.target.value)
                }}
              >
              </textarea>
            </label>
            <button type="submit">
              <PaperPlaneRight />
              <span>Answer</span>
            </button>
          </form>
          {
            answers.map(answers => {
              return <Tweet key={answers} content={answers} />
            })
          }
        </main>
    )
}