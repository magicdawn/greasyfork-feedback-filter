import { addConfigGmCommand, initFeedback } from './modules/feedback'

enum PageType {
  FeedbackList,
  FeedbackDetail,
}

function getPageType() {
  const path = location.pathname

  // https://greasyfork.org/zh-CN/scripts/443530-bilibili-app-recommend/feedback
  if (/^\/[\w]+(-[\w]+)?\/scripts\/\d+-\S*?\/feedback$/i.test(path)) {
    return PageType.FeedbackList
  }
}

function main() {
  addConfigGmCommand()

  switch (getPageType()) {
    case PageType.FeedbackList:
      initFeedback()
      break
  }
}

main()
