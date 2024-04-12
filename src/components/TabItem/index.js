import './index.css'

const TabItem = props => {
  const {tabDetails, updateTheActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickActiveId = () => {
    updateTheActiveTabId(tabId)
  }
  const isActiveResult = isActive ? 'button-new' : ''

  return (
    <li className="list-item">
      <button className={`button ${isActiveResult}`} onClick={onClickActiveId}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
