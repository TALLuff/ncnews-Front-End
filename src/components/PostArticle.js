import React from "react";
import { fetchTopics } from "../api";

class PostArticle extends React.Component {
  state = {
    topics: [],
    articleTitle: "",
    articleTopic: "Select Topic",
    articleBody: ""
  };

  componentDidMount() {
    fetchTopics()
      .then(topics => {
        this.setState({ topics });
      })
      .catch(console.log);
  }

  storeInputTitle = event => {
    this.setState({ articleTitle: event.target.value });
  };

  storeInputBody = event => {
    this.setState({ articleBody: event.target.value });
  };

  storeInputTopic = event => {
    this.setState({ articleTopic: event.target.value.toLowerCase() });
  };

  render() {
    const { userUsername, postNewArticle } = this.props;
    const { articleTitle, articleTopic, articleBody } = this.state;
    return userUsername ? (
      <div>
        <br />
        Post Article:
        <form
          onSubmit={event => {
            event.preventDefault();
            postNewArticle(articleTitle, articleTopic, articleBody);
          }}
        >
          <div id="postArticle">
            <input
              placeholder="Article Title"
              className="restyle restyleEx redLeft"
              onChange={this.storeInputTitle}
              required
            />
            <div>
              <span className="restyleNo redLeft">Select:</span>
              <select
                defaultValue="Articles Topic"
                onChange={this.storeInputTopic}
                id="topicSelected"
                className="restyle"
                required
              >
                <option disabled>Articles Topic</option>
                {this.state.topics.map(({ slug }) => {
                  let cap = slug[0].toUpperCase() + slug.slice(1);
                  return <option key={slug}>{cap}</option>;
                })}
              </select>
            </div>
          </div>
          <div id="postBody">
            <textarea
              placeholder="Article description"
              onChange={this.storeInputBody}
              required
              id="postArticleInput"
              className="restyle redLeft"
              value={this.state.articleBody}
            />
            <button type="submit" className="restyle">
              Submit
            </button>
          </div>
        </form>
      </div>
    ) : (
      <div>Please log in to post an Article.</div>
    );
  }
}

export default PostArticle;
