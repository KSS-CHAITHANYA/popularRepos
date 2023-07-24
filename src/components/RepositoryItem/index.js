import './index.css'

const RepositoryItem = props => {
  const {repoItem} = props
  return (
    <li className="repo-item-container">
      <img
        src={repoItem.avatarUrl}
        alt={repoItem.name}
        className="repo-url-image"
      />
      <p>{repoItem.name}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
        alt="stars"
        className="count-image"
      />
      <p>{repoItem.starsCount}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
        alt="forks"
        className="count-image"
      />
      <p>{repoItem.forksCount}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
        alt="open issues"
        className="count-image"
      />
      <p>{repoItem.issuesCount}</p>
    </li>
  )
}

export default RepositoryItem
