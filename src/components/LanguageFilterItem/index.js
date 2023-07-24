import './index.css'

const LanguageFilterItem = props => {
  const {languageFiltersData, getLanguageFilters} = props

  const selectLanguage = () => {
    getLanguageFilters(languageFiltersData.id)
  }

  return (
    <li className="language-list">
      <button type="button" className="button" onClick={selectLanguage}>
        {languageFiltersData.language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
