import { FormEvent, useState, KeyboardEvent } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Timeline.css";

export function Timeline() {
    const [newTweet, setNewTweet] = useState('');
    const [tweets, setTweets] = useState([
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt animi voluptatem sit dolore, ex, numquam at maiores provident repudiandae iste nam laborum exercitationem accusamus facere? Ratione totam similique omnis id.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt animi voluptatem sit dolore, ex, numquam at maiores provident repudiandae iste nam laborum exercitationem accusamus facere? Ratione totam similique omnis id.'
    ]);

    function createNewTweet(event: FormEvent) {
      event.preventDefault();
      setTweets([newTweet, ...tweets]);
      setNewTweet('');
    }

    function handleHotKeySubmit(event: KeyboardEvent){
      if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
        setTweets([newTweet, ...tweets]);
        setNewTweet('');
      }
    }

    return (
        <main className="timeline">
          <Header title="Home" />

          <form onSubmit={createNewTweet} className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/fabinho070.png" alt="Fabinho Freitas" />
              <textarea
                id="tweet"
                value={newTweet}
                placeholder="What´s happening?"
                onKeyDown={handleHotKeySubmit}
                onChange={(event) => {
                  setNewTweet(event.target.value);
                }}
              >
              </textarea>
            </label>
            <button type="submit">Tweet</button>
          </form>

          <Separator />

          {
            tweets.map(tweet => {
              return <Tweet key={tweet} content={tweet} />
            })
          }
        </main>
    )
}