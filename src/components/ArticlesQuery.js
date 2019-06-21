import React from "react";
import { fetchTopics } from "../api";

class ArticlesQuery extends React.Component {
  state = {
    topics: [],
    sort: "date_created",
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

  storeInputSort = event => {
    this.setState({ sort: event.target.id });
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
              sort_by: this.state.sort,
              topic: this.state.topicSelected,
              author: this.state.userSearch
            });
          }}
        >
          <div>
            <span className="restyleNo">Order:</span>
            <select id="sorts" className="restyle">
              <option disabled>Sort by</option>
              <option id="created_at" onClick={this.storeInputSort}>
                Date Created
              </option>
              <option id="comment_count" onClick={this.storeInputSort}>
                Comment Count
              </option>
              <option id="votes" onClick={this.storeInputSort}>
                Vote Count
              </option>
            </select>
          </div>
          <div>
            <span className="restyleNo redLeft">Filter:</span>
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
          </div>
          <div>
            <span className="restyleNo redLeft">Search:</span>
            <input
              type="text"
              placeholder="Articles by User"
              onChange={this.storeInput}
              id="userSearch"
              className="restyle"
            />
            <button type="submit" className="restyle refineSearch">
              Refine Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ArticlesQuery;
