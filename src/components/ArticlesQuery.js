import React from "react";
import { fetchTopics } from "../api";

class ArticlesQuery extends React.Component {
  state = {
    topics: [],
    topicSelected: undefined,
    userSearch: undefined
  };

  componentDidMount() {
    fetchTopics()
      .then(topics => {
        this.setState({ topics });
      })
      .catch(console.log);
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
      <div id="queries">
        <form
          id="queryForm"
          onSubmit={event => {
            event.preventDefault();
            specifyArticles({
              topic: this.state.topicSelected,
              author: this.state.userSearch
            });
          }}
        >
          <select id="sorts" className="restyle redLeft">
            <option disabled>Sort by</option>
            <option
              onClick={() =>
                specifyArticles({
                  sort_by: "created_at",
                  topic: this.state.topicSelected,
                  author: this.state.userSearch
                })
              }
            >
              Date Created
            </option>
            <option
              onClick={() =>
                specifyArticles({
                  sort_by: "comment_count",
                  topic: this.state.topicSelected,
                  author: this.state.userSearch
                })
              }
            >
              Comment Count
            </option>
            <option
              onClick={() =>
                specifyArticles({
                  sort_by: "votes",
                  topic: this.state.topicSelected,
                  author: this.state.userSearch
                })
              }
            >
              Vote Count
            </option>
          </select>
          <select
            defaultValue="Articles by Topic"
            onChange={this.storeInputDropdown}
            id="topicSelected"
            className="restyle"
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
            className="restyle redLeft"
          />
          <button type="submit" className="restyle">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default ArticlesQuery;
