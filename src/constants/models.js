import Immutable from 'immutable';

export const UiState = Immutable.fromJs({
  spinnerVisible: false,
})

// 我們使用 userId 來暫存使用者 ID，data 存放 Ajax 取回的資料
export const GithubState = Immutable.fromJs({
  userId: '',
  data: {},
})
