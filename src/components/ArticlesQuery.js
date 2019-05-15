import React from "react";
import axios from "axios";

class ArticlesQuery extends React.Component {
  state = {
    topics: [],
    topicSelected: undefined,
    userSearch: undefined
  };

  componentDidMount() {
    const url = `https://nc-news-northcoders.herokuapp.com/api/topics`;
    axios.get(url).then(({ data: { topics } }) => {
      this.setState({ topics });
    });
  }

  storeInput = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  storeInputDropdown = event => {
    let lower = event.target.value.toLowerCase();
    if (event.target.value === "All") {
      lower = undefined;
    }
    this.setState({ [event.target.id]: lower });
  };

  render() {
    const { topics } = this.state;
    const { specifyArticles } = this.props;
    return (
      <div>
        <form
          onSubmit={event => {
            event.preventDefault();
            specifyArticles({
              topic: this.state.topicSelected,
              author: this.state.userSearch
            });
          }}
        >
          <select
            defaultValue="Articles by Topic"
            onChange={this.storeInputDropdown}
            id="topicSelected"
          >
            <option disabled>Articles by Topic</option>
            <option>All</option>
            {topics.map(({ slug }) => {
              let cap = slug[0].toUpperCase() + slug.slice(1);
              return <option key={slug}>{cap}</option>;
            })}
          </select>
          <input
            type="text"
            placeholder="Articles by User"
            onChange={this.storeInput}
            id="userSearch"
          />
          <button type="submit">Search</button>
        </form>
        <div id="sorts">
          Sort by:
          <button
            onClick={() =>
              specifyArticles({
                sort_by: "created_at",
                topic: this.state.topicSelected,
                author: this.state.userSearch
              })
            }
          >
            Date Created
          </button>
          <button
            onClick={() =>
              specifyArticles({
                sort_by: "comment_count",
                topic: this.state.topicSelected,
                author: this.state.userSearch
              })
            }
          >
            Comment Count
          </button>
          <button
            onClick={() =>
              specifyArticles({
                sort_by: "votes",
                topic: this.state.topicSelected,
                author: this.state.userSearch
              })
            }
          >
            Vote Count
          </button>
        </div>
      </div>
    );
  }
}

export default ArticlesQuery;
