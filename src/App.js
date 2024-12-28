import React, { useState } from 'react';
import './App.css';
import techNgram from './techNgram.png';
import newspaper from './speaking-business.png';
import difference from './CloseVsDistant.png';

function App() {
  const [activeTab, setActiveTab] = useState('Distant Reading');

  const renderContent = () => {
    switch (activeTab) {
      case 'Distant Reading':
        return (
          <div className="tab-content">
            <h2>Distant Reading</h2>
            <p>Distant reading is a technique in literary analysis that utilizes 
              computational tools to analyze vast sets of texts, rather than just 
              focusing on works on an individual basis. It enables researchers to 
              chart patterns, trends, and themes across massive databases, and it 
              thereby renders insights at a macro-level scale into literary and 
              cultural phenomena. Distant reading is the analysis of word frequencies, 
              topic distributions, and other forms of quantitative data that offer 
              a broad view of how language and ideas evolve over time and across 
              different genres. This helps to augment traditional close reading by 
              offering a much broader contextual framework for understanding literature and its impact.</p>
             <img src={techNgram} alt="Visualization of Distant Reading Techniques" />
             <p>This image highlights Google Books Ngram Viewer screenshot compares the frequency of three terms—
            "Artificial Intelligence", "Machine Learning", and "Computer Science"—in books 
            from 1800 to 2022. Distant Reading involves analyzing large bodies of text 
            using computational methods rather than close reading of individual works. 
            The Ngram Viewer exemplifies distant reading by offering a quantitative overview 
            of how specific terms appear in books over time. This visualization helps identify 
            historical trends and cultural shifts. For example: The emergence and growth of 
            "Computer Science" highlight its establishment as an academic and professional field.
            The popularity of "Artificial Intelligence" and "Machine Learning" reflects 
            advancements in technology and their increasing impact on society. 
            By analyzing these terms on a macro scale, distant reading enables us to track the evolution 
            of disciplines, the rise of buzzwords, and broader patterns in technological
            discourse. The graph serves as a prime example of distant reading, 
            showcasing how trends in literature reflect shifts in technological focus 
            and priorities over time. Instead of focusing on individual texts, 
            it provides a bird's-eye view of the prominence of key concepts across centuries.</p>
            <p>Here's a link to Google N-Gram if you would like to try for yourself: <a href="https://books.google.com/ngrams/">Google N-Gram</a></p>
          </div>
        );
      case 'Close Reading':
        return (
          <div className="tab-content">
            <h2>Close Reading</h2>
            <p>Close reading is a method of literary analysis that 
              involves a careful, detailed examination of a text to uncover 
              deeper meanings and insights. This approach focuses on the intricacies
               of language, structure, and style, paying attention to elements such as
              word choice, syntax, imagery, symbolism, and tone. Close reading encourages
              readers to engage deeply with the text, considering how these elements contribute 
              to the overall themes and messages. It is often used to interpret and appreciate 
              the nuances of a specific passage or work, fostering a deeper understanding of the author's 
              intent and the text's impact.</p>
              <img src={newspaper} alt="Visualization of Close Reading Techniques" />
              <p>A newspaper can be considered a close reading technique when readers 
                engage deeply with individual articles, analyzing the language, tone, 
                and structure to understand the nuances of the reporting. This approach
                involves scrutinizing the choice of words, the framing of stories, and 
                the presentation of facts to discern the underlying messages and biases. 
                By focusing on specific articles or sections, readers can gain a detailed 
                understanding of the issues being reported and the perspectives being presented.</p>
          </div>
        );
      case "What's the Difference?" :
        return (
            <div className="tab-content">
              <h2>What's the Difference?</h2>
              <p>Close reading and distant reading are two distinct approaches to 
                literary analysis, each offering unique insights into texts. 
                Close reading involves a meticulous examination of a specific text or passage, 
                focusing on details such as word choice, imagery, and syntax to uncover 
                deeper meanings and nuances. It emphasizes the importance of understanding 
                the text's language and structure, often leading to a richer appreciation of
                the author's craft and intent. In contrast, distant reading employs computational 
                tools to analyze large corpora of texts, identifying patterns, trends, and themes
                that might not be visible through traditional reading methods. This approach allows 
                researchers to explore broader literary and cultural trends across time periods or genres, 
                providing a macro-level perspective. While close reading delves into the intricacies of 
                individual works, distant reading offers insights into the collective characteristics of 
                large bodies of literature. Both methods complement each other, with close reading providing 
                depth and detail, and distant reading offering breadth and context. Together, they enhance our 
                understanding of literature by combining detailed analysis with expansive overviews.</p>
                <img src={difference} alt="Difference between Close and Distant Reading from Lecture" />
                <p>This image highlights the key differences between close reading and distant reading. 
                Close reading is a zoomed-in look at a single text, focusing deeply on its internal 
                relationships and meanings, and progressing in a linear fashion. It relies heavily 
                on human attention, experience, and interpretation—something we are naturally adept at. 
                While close reading "zooms in," distant reading zooms out to a wide range of texts often 
                unrelated or in disunity, applying the use of computational tools to light up patterns 
                across large-scale data. The approach here is majorly non-linear, drawing full strengths 
                from computers, which do some work of processing at incredible speeds. Though close reading
                is intimate and immersive, the breadth that distant reading provides creates a macro perspective 
                  exposing knowledge that no individual work can afford.</p>
            </div>
        );
      case 'Case Study Analysis':
        return (
          <div className="tab-content">
            <h2>Case Study Analysis</h2>
            <p>Link to download the Case Study for this analysis: <a href="https://biblio.ugent.be/publication/8724948">Distant and Close Reading in Literature: A Case of Networks in Periodical Studies</a></p>
            <p>This case study explores the complementary nature of distant and close reading in the context of periodical studies. The authors, Julie M. Birkholz and Leah Budke, argue that distant reading—often enabled by computational tools to analyze large datasets—does not replace close reading, but instead enhances it. Using network analysis as an example, they show how scholars can examine relationships between different texts, authors, and publications across time. This broader, more quantitative approach allows researchers to uncover large-scale patterns and trends that would be difficult or impossible to see through close reading alone, which traditionally focuses on the detailed examination of a single text or small set of texts.</p>
            <p>In this hybrid approach, distant and close reading each serve distinct but interconnected purposes. Distant reading, facilitated by computational tools, enables scholars to process and analyze large volumes of texts, identifying patterns, connections, and trends across vast datasets. This method is particularly valuable in periodical studies, where researchers might track the reprinting of texts or the social networks of authors and editors across numerous publications. However, distant reading’s ability to uncover broad patterns can only take researchers so far. Close reading, which delves into the specific language, themes, and structures of individual texts, provides the necessary contextual and interpretative depth. Through close reading, scholars can critically assess the findings of distant reading, exploring why certain trends emerge or how specific relationships function within broader literary networks.</p>
            <p>On the other hand, close reading brings depth and nuance to the distant reading approach. When analyzing complex networks, close reading enables researchers to interpret specific nodes, connections, or outliers within the broader dataset, adding layers of meaning that may not be immediately apparent in the data itself. In this study, the authors emphasize the value of integrating both methods, suggesting that this hybrid approach can lead to more robust research outcomes. By combining the large-scale insights of distant reading with the detailed interpretations of close reading, scholars can achieve a more comprehensive understanding of literary networks and the socio-historical contexts in which they were produced.</p>
          </div>
        );
        case 'Quiz':
          return (
            <div className="tab-content">
              <h2>Try this quiz to test your knowledge!</h2>
              <div className="quiz">
                <div className="question">
                  <p>1. What is the primary focus of close reading?</p>
                  <button onClick={() => alert('Correct!')}>Analyzing the details and language of individual texts</button>
                  <button onClick={() => alert('Try Again!')}>Using computational tools to analyze large collections</button>
                </div>
                <div className="question">
                  <p>2. Which method uses computational tools to analyze large collections of texts?</p>
                  <button onClick={() => alert('Correct!')}>Distant reading</button>
                  <button onClick={() => alert('Try Again!')}>Close reading</button>
                </div>
                <div className="question">
                  <p>3. What type of patterns might be identified using distant reading?</p>
                  <button onClick={() => alert('Correct!')}>Patterns, trends, and themes across large datasets</button>
                  <button onClick={() => alert('Try Again!')}>Grammatical errors in individual sentences</button>
                </div>
                <div className="question">
                  <p>4. In close reading, what elements are often examined to uncover deeper meanings?</p>
                  <button onClick={() => alert('Correct!')}>Word choice, imagery, syntax, and structure</button>
                  <button onClick={() => alert('Try Again!')}>Statistical patterns across genres</button>
                </div>
                <div className="question">
                  <p>5. What does distant reading provide that complements close reading?</p>
                  <button onClick={() => alert('Correct!')}>A macro-level perspective or broader context</button>
                  <button onClick={() => alert('Try Again!')}>A detailed script analysis</button>
                </div>
              </div>
            </div>
          );
        default:
          return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Digital Humanities: Distant vs Close Reading</h1>
        <nav className="tabs">
          {['Distant Reading', 'Close Reading', "What's the Difference?", 'Case Study Analysis', 'Quiz'].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? 'active' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </header>
      <main>{renderContent()}</main>
      <footer>
        <p>Yassin Elsharafi Digital Humanities Project</p>
      </footer>
    </div>
  );
}

export default App;