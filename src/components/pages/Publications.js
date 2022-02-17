import articles from '../../assets/articles.json';
import conferences from '../../assets/conferences.json';
import styles from './Publications.module.css';

const Publications = () => {
  // Example
  // Ginsberg, J. P., Ayers, E., Burriss, L., & Powell, D. A. (2008). 
  // Discriminative delay Pavlovian eye-blink conditioning in veterans with and without post-traumatic stress disorder. 
  // Journal of Anxiety Disorders, 22(10), 809-823. 
  // https://doi:10.1016/j.janxdis.2007.08.009

  const myName = "Haenelt";  // make bold if last name in author list
  const authorToString = (data) => {
    let authors = data["author"];
    let authorArray = [];
    for (let i = 0; i < authors.length; i++) {
      let authorString = "";
      let authorCurrent = authors[i].split(' ');
      let authorLength = authorCurrent.length;
      authorString += authorCurrent[authorLength - 1] // last name
      authorString += ", ";
      for (let j = 0; j < authorCurrent.length - 1; j++) { // first name
        authorString += authorCurrent[j][0] + ".";
        if (authorCurrent[j].includes("-")) {
          let hyphenPos = authorCurrent[j].indexOf("-");
          authorString += "-";
          authorString += authorCurrent[j][hyphenPos + 1] + ".";
        }
        if (j < authorCurrent.length - 2) {
          authorString += " ";
        }
      }
      if (i < authors.length - 1) {
        authorString += ", ";
      } else {
        authorString += " ";
      }
      authorArray.push(authorString);
    }
    return (
      <>
        {authorArray.map((elem) => (
          <span className={elem.includes(myName) ? styles.myName : null}>{elem}</span>
        ))}
      </>
    );
  };

  const yearToString = (data) => {
    return (
      <>
        <span>({data["year"]}). </span>
      </>
    );
  };

  const titleToString = (data) => {
    return (
      <>
        <span>{data["title"]}. </span>
      </>
    );
  };

  const journalToString = (data) => {
    return (
      <>
        <span><i>{data["journal"]}</i></span>
        {data["volume"] ? <span>, {data["volume"]}</span> : null}
        {data["number"] ? <span>({data["number"]}), </span> : <span>, </span>}
      </>
    );
  };

  const pagesToString = (data) => {
    let pages = data["pages"].split("-");
    return (
      <>
        <span>{pages[0]}&ndash;{pages[1]}. </span>
      </>
    );
  };

  const doiToString = (data) => {
    return (
      <>
        <a href={data["doi"]} target="_blank" rel='noreferrer'>
          {data["doi"]}
        </a>
      </>
    );
  };

  const conferenceToString = (data) => {
    return (
      <>
        <span>{data["conference"]}, </span>
      </>
    );
  };

  const locationToString = (data) => {
    return (
      <>
        {data["city"] ? <span>{data["city"]}</span> : null}
        {data["country"] ? <span>, {data["country"]}.</span> : "."}
      </>
    );
  };

  const articleEntries = (entry) => {
    return Object.keys(entry).map((key, i) => (
      <li key={i}>
        {authorToString(entry[key])}
        {yearToString(entry[key])}
        {titleToString(entry[key])}
        {journalToString(entry[key])}
        {pagesToString(entry[key])}
        {doiToString(entry[key])}
      </li>
    ));
  }

  const talkEntries = (entry) => {
    return Object.keys(entry).map((key, i) => (
      <li key={i}>
        {authorToString(entry[key])}
        {yearToString(entry[key])}
        {titleToString(entry[key])}
        {conferenceToString(entry[key])}
        {locationToString(entry[key])}
      </li>
    ));
  };

  const posterEntries = (entry) => {
    return Object.keys(entry).map((key, i) => (
      <li key={i}>
        {authorToString(entry[key])}
        {yearToString(entry[key])}
        {titleToString(entry[key])}
        {conferenceToString(entry[key])}
        {locationToString(entry[key])}
      </li>
    ));
  };

  return (
    <div className={styles.publicationList}>
      <h1>Publications</h1>
      <h3 className={styles.subsection}>Articles</h3>
      <ul>{articleEntries(articles)}</ul>
      <h3 className={styles.subsection}>Talks and Poster Presentations</h3>
      <ul>{talkEntries(conferences)}</ul>
    </div>
  );
};

export default Publications;