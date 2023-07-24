import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    popularRepos: [],
    isLoading: false,
    languageFilter: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.getPopularRepos()
  }

  getLanguageFilters = id => {
    this.setState({languageFilter: id}, this.getPopularRepos)
    console.log(id)
  }

  onSubmitSuccess = updatedData => {
    this.setState({popularRepos: updatedData, isLoading: false})
  }

  getPopularRepos = async () => {
    this.setState({isLoading: true})
    const {languageFilter} = this.state
    console.log(languageFilter)
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${languageFilter}`
    console.log(apiUrl)
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    console.log(response)

    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.popular_repos.map(eachItem => ({
        avatarUrl: eachItem.avatar_url,
        forksCount: eachItem.forks_count,
        id: eachItem.id,
        issuesCount: eachItem.issues_count,
        name: eachItem.name,
        starsCount: eachItem.stars_count,
      }))
      this.onSubmitSuccess(updatedData)
    }
  }

  render() {
    const {isLoading, popularRepos} = this.state
    console.log(popularRepos)
    return (
      <div className="repo-container">
        <h1 className="popular-heading">Popular</h1>
        <ul className="language-list-container">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              languageFiltersData={eachItem}
              key={eachItem.id}
              getLanguageFilters={this.getLanguageFilters}
            />
          ))}
        </ul>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="repo-unordered-list">
            {popularRepos.map(eachItem => (
              <RepositoryItem repoItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
